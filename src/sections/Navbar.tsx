import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Clapperboard } from 'lucide-react'

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-border shadow-[0_1px_12px_rgba(0,0,0,0.05)]' : 'bg-transparent border-transparent'}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white shadow-md shadow-violet-500/30">
            <Clapperboard className="size-4" />
          </span>
          <span className="text-lg font-extrabold tracking-tight">ReelFlow</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex">
          <a href="#como-funciona" className="transition-colors hover:text-violet-600">Como funciona</a>
          <a href="#depoimentos" className="transition-colors hover:text-violet-600">Depoimentos</a>
          <a href="#faq" className="transition-colors hover:text-violet-600">FAQ</a>
          <a href="#" className="transition-colors hover:text-violet-600">Blog</a>
        </nav>
        <div className="flex items-center gap-2.5">
          <Button variant="outline" className="hidden gap-2 rounded-lg sm:inline-flex">
            <GoogleIcon /> Entrar com Google
          </Button>
          <Button className="rounded-lg bg-violet-600 shadow-lg shadow-violet-600/30 hover:bg-violet-700">
            Começar agora
          </Button>
        </div>
      </div>
    </header>
  )
}
