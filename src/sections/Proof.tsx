import Reveal from '@/components/Reveal'
import CountUp from '@/components/CountUp'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Play, BadgeCheck, Moon } from 'lucide-react'

const videos = [
  { emoji: '🌃', grad: 'from-indigo-950 to-violet-700', views: '1,4M', pinned: true },
  { emoji: '👻', grad: 'from-red-950 to-orange-600', views: '223K', pinned: true },
  { emoji: '🕯️', grad: 'from-emerald-950 to-emerald-600', views: '3.997', pinned: false },
]

export default function Proof() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center">
      <Reveal>
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-[2.75rem]">Resultados reais, views de verdade</h2>
        <p className="mt-3 text-zinc-500">Canais reais alcançando milhões de visualizações com nossa IA.</p>
      </Reveal>

      <Reveal delay={0.15}>
        <Card className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-3xl border shadow-2xl shadow-black/10">
          <div className="grid grid-cols-3 gap-0.5 bg-zinc-950">
            {videos.map((v, i) => (
              <div key={i} className={`relative grid aspect-[9/13] place-items-center bg-gradient-to-br ${v.grad} text-5xl`}>
                {v.pinned && <Badge className="absolute left-2.5 top-2.5 rounded-md bg-rose-500 px-2 py-0.5 text-[10px] font-bold hover:bg-rose-500">Fixado</Badge>}
                {v.emoji}
                <span className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 text-sm font-bold text-white drop-shadow">
                  <Play className="size-3.5 fill-current" /> {v.views}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 px-5 py-4 text-left">
            <span className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-zinc-800 to-zinc-600 text-lg text-white"><Moon className="size-5" /></span>
            <div>
              <p className="flex items-center gap-1 text-sm font-bold">historiassombrias <BadgeCheck className="size-4 text-violet-500" /></p>
              <p className="text-xs text-zinc-500">@historiassombrias</p>
            </div>
          </div>
        </Card>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-16 flex flex-wrap justify-center gap-x-20 gap-y-8">
          <div>
            <p className="text-4xl font-extrabold tracking-tight text-violet-600 sm:text-5xl"><CountUp target={779370} /></p>
            <p className="mt-1 text-sm text-zinc-500">canais automatizados</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold tracking-tight text-violet-600 sm:text-5xl"><CountUp target={1924456} /></p>
            <p className="mt-1 text-sm text-zinc-500">vídeos publicados</p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
