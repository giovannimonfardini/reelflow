import Reveal from '@/components/Reveal'
import { Card, CardContent } from '@/components/ui/card'
import { Check, X } from 'lucide-react'

const items = [
  {
    good: false,
    title: 'Contratar editores de vídeo',
    text: 'Caro — de R$ 250 a R$ 1.000 por vídeo, exigindo gestão e coordenação constante com freelancers.',
  },
  {
    good: false,
    title: 'Criar vídeos sozinho',
    text: 'Processo demorado de roteirizar, gravar, editar e publicar em várias plataformas todos os dias.',
  },
  {
    good: true,
    title: 'ReelFlow',
    text: 'Crie e publique reels sem rosto de alta qualidade no piloto automático no TikTok, Instagram e YouTube.',
  },
]

export default function Comparison() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="text-center">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-[2.75rem]">Por que os criadores escolhem a gente</h2>
        <p className="mt-3 text-zinc-500">Compare com os métodos tradicionais de criação de conteúdo</p>
      </Reveal>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <Card className={`relative h-full rounded-2xl transition-shadow ${it.good ? 'border-violet-500 bg-gradient-to-b from-violet-50 to-white shadow-xl shadow-violet-500/15' : 'hover:shadow-md'}`}>
              <span className={`absolute right-5 top-5 grid size-6 place-items-center rounded-full ${it.good ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-500'}`}>
                {it.good ? <Check className="size-3.5" strokeWidth={3} /> : <X className="size-3.5" strokeWidth={3} />}
              </span>
              <CardContent className="p-7">
                <h3 className={`pr-8 text-base font-bold ${it.good ? 'text-violet-600' : ''}`}>{it.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-500">{it.text}</p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
