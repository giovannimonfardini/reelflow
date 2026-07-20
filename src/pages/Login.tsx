import { useState, type FormEvent } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router'
import { Clapperboard, Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/auth/AuthContext'

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
    </svg>
  )
}

function getErrorMessage(error: unknown) {
  const code = typeof error === 'object' && error && 'code' in error ? String(error.code) : ''
  if (code === 'auth/popup-closed-by-user') return 'A janela de login foi fechada antes da conclusão.'
  if (code === 'auth/cancelled-popup-request') return 'Já existe uma tentativa de login em andamento.'
  if (code === 'auth/unauthorized-domain') return 'Este domínio ainda não foi autorizado no Firebase Authentication.'
  if (code === 'auth/network-request-failed') return 'Não foi possível acessar o serviço. Verifique sua conexão.'
  if (code === 'auth/email-already-in-use') return 'Este e-mail já possui uma conta. Entre usando sua senha.'
  if (code === 'auth/invalid-credential') return 'E-mail ou senha incorretos.'
  if (code === 'auth/invalid-email') return 'Digite um endereço de e-mail válido.'
  if (code === 'auth/weak-password') return 'A senha precisa ter pelo menos 6 caracteres.'
  if (code === 'auth/too-many-requests') return 'Muitas tentativas. Aguarde alguns minutos e tente novamente.'
  if (error instanceof Error && error.message === 'firebase-not-configured') return 'O Firebase ainda não foi configurado neste ambiente.'
  if (error instanceof Error) return error.message
  return 'Não foi possível concluir. Tente novamente.'
}

export default function Login() {
  const { user, loading, configured, signInWithGoogle, signInWithEmail, signUpWithEmail } = useAuth()
  const [mode, setMode] = useState<'signup' | 'signin'>('signup')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const destination = typeof location.state === 'object' && location.state && 'from' in location.state
    ? String(location.state.from)
    : '/app'

  if (!loading && user) return <Navigate to={destination} replace />

  const runAuthentication = async (action: () => Promise<void>) => {
    setError('')
    setSubmitting(true)
    try {
      await action()
      navigate(destination, { replace: true })
    } catch (authError) {
      setError(getErrorMessage(authError))
    } finally {
      setSubmitting(false)
    }
  }

  const handleGoogleLogin = () => runAuthentication(signInWithGoogle)

  const handleEmailSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (password.length < 6) {
      setError('A senha precisa ter pelo menos 6 caracteres.')
      return
    }
    if (mode === 'signup' && password !== confirmPassword) {
      setError('As senhas não coincidem.')
      return
    }
    void runAuthentication(() => mode === 'signup' ? signUpWithEmail(email, password) : signInWithEmail(email, password))
  }

  const toggleMode = () => {
    setMode((current) => current === 'signup' ? 'signin' : 'signup')
    setError('')
    setPassword('')
    setConfirmPassword('')
  }

  const isSignup = mode === 'signup'

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-5 py-12 sm:px-8">
      <div aria-hidden="true" className="pointer-events-none absolute -left-44 top-20 size-[420px] rounded-full bg-violet-100/60 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-44 bottom-0 size-[480px] rounded-full bg-zinc-100 blur-3xl" />

      <div className="relative w-full max-w-[475px]">
        <Link to="/" className="mx-auto mb-5 flex w-fit items-center gap-2.5 text-zinc-900" aria-label="ReelFlow — voltar ao início">
          <span className="grid size-9 place-items-center rounded-xl bg-violet-600 text-white shadow-sm shadow-violet-600/20"><Clapperboard className="size-4" /></span>
          <span className="font-display text-lg font-bold">ReelFlow</span>
        </Link>

        <section className="rounded-[18px] border border-zinc-200 bg-white p-6 shadow-xl shadow-zinc-950/[0.08] sm:p-8">
          <h1 className="font-display text-3xl font-bold tracking-tight text-zinc-950 sm:text-[32px]">{isSignup ? 'Crie sua conta' : 'Entre na sua conta'}</h1>
          <p className="mt-2 text-base text-zinc-500">{isSignup ? 'Preencha seus dados para criar sua conta' : 'Informe seus dados para continuar'}</p>

          {!configured && (
            <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-900" role="alert">
              Configure as variáveis do Firebase em <code className="font-semibold">.env.local</code> para ativar o acesso.
            </div>
          )}

          {error && <p className="mt-5 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700" role="alert">{error}</p>}

          <Button type="button" variant="outline" className="mt-7 h-12 w-full rounded-xl border-zinc-300 text-base font-semibold shadow-sm" disabled={!configured || loading || submitting} onClick={handleGoogleLogin}>
            <GoogleIcon /> {submitting ? 'Conectando…' : 'Continuar com Google'}
          </Button>

          <div className="my-7 flex items-center gap-3 text-xs font-medium uppercase text-zinc-400">
            <span className="h-px flex-1 bg-zinc-200" /><span>ou</span><span className="h-px flex-1 bg-zinc-200" />
          </div>

          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <label className="sr-only" htmlFor="auth-email">E-mail</label>
            <input id="auth-email" type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="E-mail" className="h-12 w-full rounded-xl border border-zinc-300 bg-white px-4 text-base outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100" />

            <div className="relative">
              <label className="sr-only" htmlFor="auth-password">Senha</label>
              <input id="auth-password" type={showPassword ? 'text' : 'password'} autoComplete={isSignup ? 'new-password' : 'current-password'} required minLength={6} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Senha" className="h-12 w-full rounded-xl border border-zinc-300 bg-white px-4 pr-12 text-base outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100" />
              <button type="button" onClick={() => setShowPassword((value) => !value)} className="absolute inset-y-0 right-0 grid w-12 place-items-center text-zinc-400 hover:text-zinc-700" aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}>{showPassword ? <EyeOff className="size-4.5" /> : <Eye className="size-4.5" />}</button>
            </div>

            {isSignup && (
              <div className="relative">
                <label className="sr-only" htmlFor="auth-confirm-password">Confirmar senha</label>
                <input id="auth-confirm-password" type={showConfirmPassword ? 'text' : 'password'} autoComplete="new-password" required minLength={6} value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} placeholder="Confirmar senha" className="h-12 w-full rounded-xl border border-zinc-300 bg-white px-4 pr-12 text-base outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100" />
                <button type="button" onClick={() => setShowConfirmPassword((value) => !value)} className="absolute inset-y-0 right-0 grid w-12 place-items-center text-zinc-400 hover:text-zinc-700" aria-label={showConfirmPassword ? 'Ocultar confirmação de senha' : 'Mostrar confirmação de senha'}>{showConfirmPassword ? <EyeOff className="size-4.5" /> : <Eye className="size-4.5" />}</button>
              </div>
            )}

            {isSignup && <p className="px-2 text-center text-xs leading-relaxed text-zinc-500">Ao criar uma conta, você concorda com nossos <span className="underline underline-offset-2">Termos de Serviço</span> e <span className="underline underline-offset-2">Política de Privacidade</span>.</p>}

            <Button type="submit" className="h-12 w-full rounded-xl bg-violet-500 text-base font-semibold shadow-sm hover:bg-violet-600" disabled={!configured || loading || submitting}>
              {submitting ? 'Aguarde…' : isSignup ? 'Criar conta' : 'Entrar'}
            </Button>
          </form>

          <button type="button" onClick={toggleMode} className="mx-auto mt-7 block text-sm text-zinc-500 underline underline-offset-4 transition-colors hover:text-zinc-900">
            {isSignup ? 'Já tem uma conta? Entrar' : 'Ainda não tem conta? Criar agora'}
          </button>
        </section>
      </div>
    </main>
  )
}
