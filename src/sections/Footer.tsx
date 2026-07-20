import { Separator } from '@/components/ui/separator'
import { Clapperboard, Heart } from 'lucide-react'

const links = [
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Demonstração', href: '#demo' },
  { label: 'Para quem é', href: '#para-quem' },
  { label: 'FAQ', href: '#faq' },
]

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50/50">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-14">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
          <div>
            <a href="#inicio" className="flex items-center gap-2.5" aria-label="ReelFlow — início">
              <span className="grid size-8 place-items-center rounded-lg bg-violet-600 text-white"><Clapperboard className="size-4" /></span>
              <span className="font-display text-lg font-bold tracking-tight">ReelFlow</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-500">Um fluxo mais simples para criar e organizar vídeos verticais sem precisar aparecer.</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-zinc-600" aria-label="Links do rodapé">
            {links.map((link) => <a key={link.href} href={link.href} className="transition-colors hover:text-violet-700">{link.label}</a>)}
          </nav>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
          <span>© 2026 ReelFlow. Todos os direitos reservados.</span>
          <span className="flex items-center gap-1.5">Feito com <Heart className="size-3.5 fill-rose-500 text-rose-500" /> para criadores</span>
        </div>
      </div>
    </footer>
  )
}
