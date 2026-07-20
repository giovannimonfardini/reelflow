import Reveal from '@/components/Reveal'
import { Building2, CircleUserRound, Layers3, Megaphone, Check } from 'lucide-react'

const profiles = [
  {
    icon: CircleUserRound,
    title: 'Criador solo',
    text: 'Para quem quer publicar com frequência sem transformar todos os dias em uma sessão de edição.',
    items: ['Fluxo guiado', 'Produção recorrente'],
  },
  {
    icon: Megaphone,
    title: 'Especialista de nicho',
    text: 'Para transformar conhecimento em séries curtas, reconhecíveis e fáceis de acompanhar.',
    items: ['Formatos reutilizáveis', 'Identidade consistente'],
  },
  {
    icon: Building2,
    title: 'Agência enxuta',
    text: 'Para organizar diferentes canais e reduzir o trabalho operacional entre ideia e entrega.',
    items: ['Visão centralizada', 'Mais previsibilidade'],
  },
  {
    icon: Layers3,
    title: 'Portfólio de canais',
    text: 'Para testar narrativas e temas sem repetir manualmente o mesmo processo em cada perfil.',
    items: ['Múltiplas séries', 'Escala com controle'],
  },
]

export default function Testimonials() {
  return (
    <section id="para-quem" className="border-y border-zinc-100 bg-zinc-50/70 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-kicker">Para diferentes rotinas</p>
          <h2 className="section-title">Comece simples. Cresça sem perder o controle.</h2>
          <p className="section-copy">O mesmo fluxo pode apoiar quem está publicando o primeiro vídeo ou coordenando várias linhas editoriais.</p>
        </Reveal>
        <div className="scrollbar-hide -mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
          {profiles.map((profile, index) => (
            <Reveal key={profile.title} delay={index * 0.06} className="min-w-[82%] snap-center sm:min-w-0">
              <article className="h-full rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <span className="grid size-10 place-items-center rounded-xl bg-violet-50 text-violet-700"><profile.icon className="size-5" /></span>
                <h3 className="mt-5 font-display text-lg font-bold">{profile.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{profile.text}</p>
                <ul className="mt-5 space-y-2">
                  {profile.items.map((item) => <li key={item} className="flex items-center gap-2 text-xs font-semibold text-zinc-700"><Check className="size-3.5 text-violet-600" />{item}</li>)}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
