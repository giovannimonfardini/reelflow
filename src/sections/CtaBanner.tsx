import Reveal from '@/components/Reveal'
import { Sparkles } from 'lucide-react'
import GoogleSignInButton from '@/components/auth/GoogleSignInButton'

export default function CtaBanner() {
  return (
    <section className="px-5 pb-20 pt-4 sm:px-6 sm:pb-24">
      <Reveal>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-zinc-950 px-6 py-14 text-center text-white sm:px-10 sm:py-16">
          <div aria-hidden="true" className="absolute -right-24 -top-36 size-80 rounded-full bg-violet-600/30 blur-3xl" />
          <Sparkles className="relative mx-auto size-6 text-violet-300" />
          <h2 className="font-display relative mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">Seu próximo canal pode começar com um processo muito mais simples</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">Veja o fluxo completo, escolha um formato e entenda como a produção pode caber na sua rotina.</p>
          <GoogleSignInButton label="Começar com Google" className="relative mt-8 h-12 rounded-xl bg-white px-7 font-bold text-zinc-950 hover:bg-zinc-100" />
        </div>
      </Reveal>
    </section>
  )
}
