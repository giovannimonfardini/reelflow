import { useState } from 'react'
import Reveal from '@/components/Reveal'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Check, ChevronRight, CirclePlay, Instagram, Music2, Sparkles, Youtube } from 'lucide-react'

const stages = [
  { label: 'Tema', title: 'Defina a direção', description: 'Escolha a ideia, o nicho e o formato da série.' },
  { label: 'Estilo', title: 'Dê identidade ao vídeo', description: 'Ajuste a linguagem visual, a voz e o ritmo.' },
  { label: 'Publicação', title: 'Prepare os canais', description: 'Revise o resultado e organize a distribuição.' },
]

export default function Demo() {
  const [active, setActive] = useState(0)
  const current = stages[active]

  return (
    <section id="demo" className="scroll-mt-20 px-5 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-kicker">Veja em ação</p>
          <h2 className="section-title">Da primeira ideia a uma série pronta para publicar</h2>
          <p className="section-copy">Explore uma prévia interativa do fluxo e veja como as decisões ficam organizadas em uma única experiência.</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-950 shadow-2xl shadow-zinc-950/15">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 text-white/60">
              <div className="flex gap-1.5" aria-hidden="true"><i className="size-2.5 rounded-full bg-rose-400" /><i className="size-2.5 rounded-full bg-amber-400" /><i className="size-2.5 rounded-full bg-emerald-400" /></div>
              <p className="text-xs font-medium">Prévia interativa · Viralizou Studio</p>
              <CirclePlay className="size-4" aria-hidden="true" />
            </div>

            <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
              <div className="border-b border-white/10 p-6 text-white sm:p-8 lg:border-b-0 lg:border-r">
                <Badge className="bg-violet-500/20 text-violet-200 hover:bg-violet-500/20">Etapa {active + 1} de 3</Badge>
                <h3 className="mt-5 font-display text-2xl font-bold sm:text-3xl">{current.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60 sm:text-base">{current.description}</p>
                <div className="mt-8 space-y-2" role="tablist" aria-label="Etapas da demonstração">
                  {stages.map((stage, index) => (
                    <button key={stage.label} type="button" role="tab" aria-selected={active === index} onClick={() => setActive(index)} className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold transition-colors ${active === index ? 'bg-white text-zinc-950' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}>
                      <span className="flex items-center gap-3"><span className={`grid size-6 place-items-center rounded-full text-xs ${active === index ? 'bg-violet-600 text-white' : 'bg-white/10'}`}>{active > index ? <Check className="size-3.5" /> : index + 1}</span>{stage.label}</span>
                      <ChevronRight className="size-4" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-zinc-100 p-4 sm:p-8">
                <div className="mx-auto grid max-w-2xl gap-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-lg sm:grid-cols-[1fr_190px] sm:p-6">
                  <div>
                    <div className="flex items-center justify-between"><p className="text-xs font-bold uppercase tracking-wider text-zinc-400">Nova série</p><Badge variant="secondary">Rascunho</Badge></div>
                    <label className="mt-5 block text-xs font-semibold text-zinc-600">Tema principal</label>
                    <div className="mt-2 rounded-xl border border-violet-200 bg-violet-50/50 px-4 py-3 text-sm font-semibold text-zinc-800">Mistérios que a história não explicou</div>
                    <label className="mt-4 block text-xs font-semibold text-zinc-600">Direção visual</label>
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      {['/assets/niches/terror.webp', '/assets/niches/historia.webp', '/assets/niches/mitologia.webp'].map((image, index) => (
                        <button type="button" key={image} onClick={() => setActive(1)} className={`relative aspect-square overflow-hidden rounded-lg border-2 ${index === active % 3 ? 'border-violet-600' : 'border-transparent'}`} aria-label={`Selecionar estilo ${index + 1}`}><img src={image} alt="" width="480" height="854" loading="lazy" decoding="async" className="h-full w-full object-cover" /></button>
                      ))}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-semibold"><Sparkles className="size-3.5 text-violet-600" /> Narração IA</span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-semibold"><Music2 className="size-3.5 text-violet-600" /> Trilha ambiente</span>
                    </div>
                  </div>
                  <div className="relative mx-auto aspect-[9/15] w-36 overflow-hidden rounded-xl bg-zinc-900 shadow-md sm:w-full">
                    <img src="/assets/niches/terror.webp" alt="Prévia de vídeo vertical sobre mistérios" width="480" height="854" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                    <span className="absolute left-3 top-3 rounded-full bg-black/35 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur">Prévia</span>
                    <p className="absolute inset-x-3 bottom-12 text-center text-sm font-black leading-tight text-white drop-shadow">O corredor que desapareceu dos mapas</p>
                    <div className="absolute inset-x-3 bottom-3 flex justify-center gap-2 text-white"><Youtube className="size-3.5" /><Instagram className="size-3.5" /><Music2 className="size-3.5" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-7 flex justify-center">
            <Button variant="outline" className="rounded-xl" asChild><a href="#como-funciona">Explorar o passo a passo</a></Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
