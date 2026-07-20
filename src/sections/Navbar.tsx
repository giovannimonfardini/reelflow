import { useEffect, useState } from 'react'
import { Clapperboard, Menu, X } from 'lucide-react'
import GoogleSignInButton from '@/components/auth/GoogleSignInButton'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router'

const links = [
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Demonstração', href: '#demo' },
  { label: 'Para quem é', href: '#para-quem' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${scrolled || open ? 'border-zinc-200/80 bg-white/90 backdrop-blur-xl' : 'border-transparent bg-white/70 backdrop-blur-md'}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2.5" aria-label="ReelFlow — início">
          <span className="grid size-8 place-items-center rounded-lg bg-violet-600 text-white shadow-sm shadow-violet-600/20">
            <Clapperboard className="size-4" aria-hidden="true" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">ReelFlow</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-zinc-600 md:flex" aria-label="Navegação principal">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-zinc-950">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 md:flex">
          <GoogleSignInButton className="h-10 rounded-xl border border-zinc-300 bg-white px-5 font-semibold text-zinc-950 shadow-sm hover:bg-zinc-50" />
          <Button className="h-10 rounded-xl bg-violet-600 px-5 font-semibold shadow-sm shadow-violet-600/20 hover:bg-violet-700" asChild>
            <Link to="/login">Começar agora</Link>
          </Button>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-lg text-zinc-800 transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 md:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-zinc-100 bg-white px-5 pb-6 pt-3 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col" aria-label="Navegação mobile">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="border-b border-zinc-100 py-4 text-base font-semibold text-zinc-800">
                {link.label}
              </a>
            ))}
            <GoogleSignInButton className="mt-5 h-12 rounded-xl border border-zinc-300 bg-white text-base font-semibold text-zinc-950 shadow-sm hover:bg-zinc-50" onAction={() => setOpen(false)} />
            <Button className="mt-3 h-12 rounded-xl bg-violet-600 text-base font-semibold hover:bg-violet-700" asChild>
              <Link to="/login" onClick={() => setOpen(false)}>Começar agora</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
