import Reveal from '@/components/Reveal'
import { Card, CardContent } from '@/components/ui/card'
import { Check, X } from 'lucide-react'

const items = [
  {
    good: false,
    title: 'Contratar editores de vídeo',
    text: 'Pode exigir orçamento recorrente, alinhamentos frequentes e coordenação constante entre diferentes profissionais.',
  },
  {
    good: false,
    title: 'Criar vídeos sozinho',
    text: 'Processo demorado de roteirizar, gravar, editar e publicar em várias plataformas todos os dias.',
  },
  {
    good: true,
    title: 'ReelFlow',
    text: 'Organize roteiro, visual, narração e preparação para publicação dentro de uma experiência contínua.',
  },
]

export default function Comparison() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="section-kicker">Compare os caminhos</p>
        <h2 className="section-title">Uma forma mais direta de manter a produção ativa</h2>
        <p className="section-copy">Centralize o trabalho que normalmente fica espalhado entre pessoas, arquivos e ferramentas.</p>
      </Reveal>
      <div className="scrollbar-hide -mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
        {items.map((it, i) => (
          <Reveal key={i} delay={i * 0.1} className="min-w-[82%] snap-center md:min-w-0">
            <Card className={`relative h-full rounded-2xl transition-shadow ${it.good ? 'border-violet-300 bg-violet-50/60 shadow-lg shadow-violet-500/10' : 'border-zinc-200 hover:shadow-md'}`}>
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
