import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Zap, Youtube, Instagram, Music2 } from 'lucide-react'

const avatars = [
  { ini: 'MC', bg: 'bg-amber-500' },
  { ini: 'JS', bg: 'bg-emerald-500' },
  { ini: 'AL', bg: 'bg-blue-500' },
  { ini: 'PB', bg: 'bg-rose-500' },
  { ini: '+', bg: 'bg-violet-500' },
]

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-[560px] w-[900px] rounded-full bg-violet-400/15 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-6 pb-10 pt-20 text-center">
        <motion.div {...fade(0)} className="mb-7 inline-flex items-center gap-3 rounded-full border border-border bg-white/70 py-1.5 pl-2 pr-4 shadow-sm backdrop-blur">
          <div className="flex -space-x-2.5">
            {avatars.map((a, i) => (
              <Avatar key={i} className="size-7 border-2 border-white">
                <AvatarFallback className={`${a.bg} text-[10px] font-bold text-white`}>{a.ini}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <p className="text-[13px] text-zinc-500">Usado por <b className="font-semibold text-zinc-900">1,3 mi+</b> criadores</p>
        </motion.div>

        <motion.h1 {...fade(0.1)} className="mx-auto text-balance text-5xl font-black leading-[1.05] tracking-tighter sm:text-6xl lg:text-7xl">
          Crie vídeos virais <span className="text-gradient">sem mostrar o rosto</span> no piloto automático
        </motion.h1>

        <motion.p {...fade(0.2)} className="mx-auto mt-6 max-w-xl text-lg text-zinc-500">
          A única IA que gera e publica vídeos para você automaticamente — até enquanto você dorme.
        </motion.p>

        <motion.div {...fade(0.3)} className="mt-7 flex items-center justify-center gap-3 text-sm text-zinc-500">
          Perfeito para
          <span className="flex items-center gap-2 text-zinc-700">
            <Youtube className="size-5" /><Instagram className="size-5" /><Music2 className="size-5" />
          </span>
        </motion.div>

        <motion.div {...fade(0.4)} className="mt-8">
          <Button size="lg" className="h-14 gap-2 rounded-xl bg-violet-600 px-9 text-base font-semibold shadow-xl shadow-violet-600/35 transition-transform hover:scale-[1.03] hover:bg-violet-700">
            <Zap className="size-5 fill-current" /> Crie seu primeiro vídeo
          </Button>
          <p className="mt-3.5 text-[13px] text-zinc-400">Receba seu vídeo gerado em menos de 5 minutos.</p>
        </motion.div>
      </div>
    </section>
  )
}
