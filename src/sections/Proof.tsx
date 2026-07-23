import Reveal from '@/components/Reveal'
import { Badge } from '@/components/ui/badge'
import { CalendarDays, Check, Clapperboard, MoreHorizontal, Play, Send, WandSparkles } from 'lucide-react'

const queue = [
  { title: 'O mito que mudou uma guerra', niche: 'Mitologia', status: 'Pronto', image: '/assets/niches/mitologia.webp' },
  { title: 'O corredor que ninguém atravessa', niche: 'Mistérios', status: 'Gerando', image: '/assets/niches/terror.webp' },
  { title: 'A invenção perdida no tempo', niche: 'História', status: 'Agendado', image: '/assets/niches/historia.webp' },
]

export default function Proof() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="section-kicker">Uma operação mais leve</p>
        <h2 className="section-title">Menos ferramentas. Mais consistência.</h2>
        <p className="section-copy">Organize ideias, acompanhe a produção e prepare cada publicação sem perder o contexto entre uma etapa e outra.</p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-12 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-xl shadow-zinc-950/[0.06]">
          <div className="flex items-center justify-between border-b border-zinc-100 px-5 py-4 sm:px-6">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-lg bg-violet-100 text-violet-700"><Clapperboard className="size-4" /></span>
              <div><p className="text-sm font-bold">Fila de produção</p><p className="text-xs text-zinc-500">Visão de demonstração</p></div>
            </div>
            <MoreHorizontal className="size-5 text-zinc-400" aria-hidden="true" />
          </div>

          <div className="grid lg:grid-cols-[1.5fr_0.75fr]">
            <div className="divide-y divide-zinc-100 p-3 sm:p-5">
              {queue.map((item, index) => (
                <div key={item.title} className="grid grid-cols-[52px_1fr_auto] items-center gap-3 rounded-xl px-2 py-3 transition-colors hover:bg-zinc-50 sm:grid-cols-[64px_1fr_auto] sm:gap-4 sm:px-3">
                  <div className="relative aspect-[9/12] overflow-hidden rounded-lg bg-zinc-900">
                    <img src={item.image} alt="" width="480" height="854" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                    <span className="absolute inset-0 grid place-items-center bg-black/10"><Play className="size-4 fill-white text-white" /></span>
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-zinc-900 sm:text-base">{item.title}</p>
                    <p className="mt-1 text-xs text-zinc-500">{item.niche} · Episódio {index + 1}</p>
                  </div>
                  <Badge variant="secondary" className={item.status === 'Pronto' ? 'bg-emerald-50 text-emerald-700' : item.status === 'Gerando' ? 'bg-violet-50 text-violet-700' : 'bg-amber-50 text-amber-700'}>{item.status}</Badge>
                </div>
              ))}
            </div>

            <aside className="hidden border-t border-zinc-100 bg-zinc-50/70 p-6 lg:block lg:border-l lg:border-t-0">
              <p className="text-sm font-bold">Próxima publicação</p>
              <div className="mt-4 rounded-2xl border border-zinc-200 bg-white p-4">
                <div className="flex items-center gap-2 text-sm font-semibold"><CalendarDays className="size-4 text-violet-600" /> Hoje, 19:30</div>
                <div className="mt-4 space-y-3 text-sm text-zinc-600">
                  <p className="flex items-center gap-2"><Check className="size-4 text-emerald-600" /> Roteiro revisado</p>
                  <p className="flex items-center gap-2"><WandSparkles className="size-4 text-violet-600" /> Visual preparado</p>
                  <p className="flex items-center gap-2"><Send className="size-4 text-sky-600" /> Canais selecionados</p>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-zinc-500">Exemplo visual do fluxo de produção. Conecte esta área aos dados reais do produto quando o painel estiver disponível.</p>
            </aside>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
