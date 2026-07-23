import Reveal from '@/components/Reveal'
import { Badge } from '@/components/ui/badge'
import { Play, PenLine, Rocket, Check, Music, TrendingUp } from 'lucide-react'

function Browser({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-2 shadow-xl shadow-zinc-950/[0.07]">
      <div className="overflow-hidden rounded-[1.15rem] border border-zinc-100 bg-white">
        <div className="flex gap-1.5 border-b bg-zinc-100 px-4 py-2.5">
          <i className="size-2.5 rounded-full bg-red-400" /><i className="size-2.5 rounded-full bg-amber-400" /><i className="size-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="bg-zinc-50 p-4 sm:min-h-56 sm:p-5">{children}</div>
      </div>
    </div>
  )
}

const steps = [
  {
    tag: 'Passo 1', icon: Play, title: 'Crie uma Série',
    text: 'Escolha seu nicho e os formatos de vídeo. Nossa IA cuida de todo o resto.',
    checks: ['Nichos ilimitados suportados', 'Vários formatos de vídeo disponíveis'],
    visual: (
      <>
        {[{ n: 'Histórias de terror', s: 'Ativa', b: 'Pausar' }, { n: 'Mitologia grega', s: 'Ativa', b: 'Pausar' }, { n: 'Curiosidades históricas', s: 'Rascunho', b: 'Retomar' }].map((r, i) => (
          <div key={i} className="mb-2 flex items-center justify-between rounded-xl border bg-white px-3 py-2.5 text-[12px] sm:mb-2.5 sm:px-4 sm:py-3 sm:text-[13px]">
            <span className="font-semibold">{r.n}</span>
            <Badge variant="secondary" className="bg-violet-100 text-[10px] font-bold text-violet-700 hover:bg-violet-100">{r.s}</Badge>
            <span className="rounded-lg bg-violet-600 px-3 py-1.5 text-[11px] font-semibold text-white">{r.b}</span>
          </div>
        ))}
        <div className="rounded-xl border border-dashed border-violet-300 bg-white px-4 py-3 text-center text-[13px] font-semibold text-violet-600">+ Criar Série</div>
      </>
    ),
  },
  {
    tag: 'Passo 2', icon: PenLine, title: 'Personalize',
    text: 'Escolha estilos de arte e adicione sua música favorita.',
    checks: ['Vários estilos de arte para escolher', 'Envie música própria ou cole um link de som do TikTok'],
    visual: (
      <>
        <p className="mb-2 text-[13px] font-bold">Estilo de arte</p>
        <div className="mb-4 flex gap-2.5 sm:mb-5">
          <i className="size-10 rounded-xl bg-gradient-to-br from-pink-400 to-violet-500 ring-2 ring-violet-600 ring-offset-2 sm:size-11" />
          <i className="size-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 sm:size-11" />
          <i className="size-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 sm:size-11" />
          <i className="size-10 rounded-xl bg-gradient-to-br from-slate-500 to-slate-900 sm:size-11" />
        </div>
        <p className="mb-2 text-[13px] font-bold">Música de fundo</p>
        <div className="mb-3 flex items-center justify-between rounded-xl border bg-white px-4 py-3 text-[13px]">
          <span className="flex items-center gap-2 font-medium"><Music className="size-4 text-violet-600" /> som-viral-tiktok.mp3</span>
          <Badge variant="secondary" className="bg-violet-100 text-[10px] font-bold text-violet-700 hover:bg-violet-100">Adicionado</Badge>
        </div>
        <div className="text-right"><span className="rounded-lg bg-violet-600 px-4 py-2 text-[12px] font-semibold text-white">Continuar</span></div>
      </>
    ),
  },
  {
    tag: 'Passo 3', icon: Rocket, title: 'Veja suas redes crescerem',
    text: 'Conecte suas contas e deixe a publicação com a gente.',
    checks: ['Publicação automática enquanto você dorme', 'Compatível com: Instagram, TikTok e YouTube'],
    visual: (
      <>
        <div className="mb-2 flex items-center justify-between rounded-xl border bg-white px-4 py-3 text-[13px]">
          <span className="flex items-center gap-2 font-semibold"><TrendingUp className="size-4 text-violet-600" /> Crescimento do canal (30 dias)</span>
          <Badge variant="secondary" className="bg-emerald-100 text-[10px] font-bold text-emerald-700 hover:bg-emerald-100">+412%</Badge>
        </div>
        <div className="flex h-28 items-end gap-2 rounded-xl border bg-white px-4 pb-0 pt-4 sm:h-40">
          {[20, 32, 28, 45, 58, 74, 95].map((h, i) => (
            <div key={i} className="flex-1 rounded-t-md bg-gradient-to-b from-fuchsia-400 to-violet-600" style={{ height: `${h}%` }} />
          ))}
        </div>
      </>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-zinc-50/70 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-kicker">Como funciona</p>
          <h2 className="section-title">Três etapas para transformar uma ideia em série</h2>
          <p className="section-copy">Cada decisão aparece no momento certo, sem exigir experiência com edição.</p>
        </Reveal>
        <div className="mt-14 space-y-16 sm:mt-16 sm:space-y-24">
          {steps.map((s, i) => (
            <Reveal key={i}>
              <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-20">
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}><Browser>{s.visual}</Browser></div>
                <div>
                  <Badge variant="secondary" className="mb-4 rounded-full bg-violet-100 px-3.5 py-1 text-xs font-bold text-violet-700 hover:bg-violet-100">{s.tag}</Badge>
                  <h3 className="font-display flex items-center gap-2.5 text-2xl font-bold tracking-tight sm:text-3xl">
                    <s.icon className="size-6 text-violet-600" /> {s.title}
                  </h3>
                  <p className="mt-3 text-zinc-500">{s.text}</p>
                  <ul className="mt-5 space-y-2.5">
                    {s.checks.map((c, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-[15px] font-medium">
                        <Check className="size-4 text-violet-600" strokeWidth={3} /> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
