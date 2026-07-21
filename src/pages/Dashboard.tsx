import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { LogOut, Plus, Sparkles, Video } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/auth/AuthContext'

export default function Dashboard() {
  const { user, logout } = useAuth()
  const [signingOut, setSigningOut] = useState(false)
  const navigate = useNavigate()

  const handleLogout = async () => {
    setSigningOut(true)
    try {
      await logout()
      navigate('/', { replace: true })
    } finally {
      setSigningOut(false)
    }
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-6">
          <Link to="/" className="flex items-center" aria-label="Viralizou — início"><img src="/assets/logos/logoviralizou.png" alt="Viralizou" className="h-14 w-auto object-contain sm:h-16" /></Link>
          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block"><p className="text-sm font-semibold text-zinc-900">{user?.displayName || 'Criador'}</p><p className="text-xs text-zinc-500">{user?.email}</p></div>
            {user?.photoURL ? <img src={user.photoURL} alt="" referrerPolicy="no-referrer" className="size-9 rounded-full border border-zinc-200" /> : <span className="grid size-9 place-items-center rounded-full bg-violet-100 text-sm font-bold text-violet-700">{user?.displayName?.slice(0, 1) || 'R'}</span>}
            <Button variant="ghost" size="icon" onClick={handleLogout} disabled={signingOut} aria-label="Sair da conta"><LogOut className="size-4" /></Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-14">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div><p className="section-kicker">Área autenticada</p><h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Olá, {user?.displayName?.split(' ')[0] || 'criador'}.</h1><p className="mt-3 text-zinc-500">Sua sessão Google está ativa e protegendo esta rota.</p></div>
          <Button className="h-11 rounded-xl bg-violet-600 hover:bg-violet-700"><Plus className="size-4" /> Criar série</Button>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"><span className="grid size-10 place-items-center rounded-xl bg-violet-50 text-violet-700"><Video className="size-5" /></span><h2 className="mt-5 font-display text-lg font-bold">Suas séries</h2><p className="mt-2 text-sm leading-relaxed text-zinc-500">Crie sua primeira série para começar a organizar a produção.</p></article>
          <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"><span className="grid size-10 place-items-center rounded-xl bg-amber-50 text-amber-700"><Sparkles className="size-5" /></span><h2 className="mt-5 font-display text-lg font-bold">Próxima etapa</h2><p className="mt-2 text-sm leading-relaxed text-zinc-500">Conecte este painel aos dados e recursos reais do produto.</p></article>
          <article className="overflow-hidden rounded-2xl bg-zinc-950 p-6 text-white"><p className="text-xs font-bold uppercase tracking-wider text-violet-300">Sessão segura</p><p className="mt-4 text-sm leading-relaxed text-white/60">O acesso a esta página depende do estado autenticado fornecido pelo Firebase.</p></article>
        </div>
      </main>
    </div>
  )
}
