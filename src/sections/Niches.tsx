import { CornerRightDown } from 'lucide-react'

const niches = [
  { label: 'Mitologia', emoji: '⚡', grad: 'from-indigo-900 to-violet-600', word: 'SEMPRE' },
  { label: 'Fofocas de escola', emoji: '🎒', grad: 'from-pink-800 to-pink-400', word: 'ela' },
  { label: 'Histórias de terror', emoji: '👻', grad: 'from-zinc-900 to-zinc-600', word: 'ela' },
  { label: 'História', emoji: '🏛️', grad: 'from-amber-800 to-amber-500', word: 'DESCUBRA' },
  { label: 'Atos de bondade', emoji: '💛', grad: 'from-emerald-800 to-emerald-400', word: 'HOJE' },
  { label: 'Histórias bíblicas', emoji: '📖', grad: 'from-red-900 to-red-500', word: 'NOME' },
  { label: 'Histórias de anime', emoji: '⛩️', grad: 'from-blue-900 to-blue-400', word: 'NUNCA' },
  { label: 'Assaltos épicos', emoji: '💰', grad: 'from-teal-900 to-teal-400', word: 'NINGUÉM' },
]

export default function Niches() {
  return (
    <section className="overflow-hidden py-14">
      <p className="mb-8 flex items-center gap-2 px-6 text-base font-bold lg:pl-[max(1.5rem,calc((100vw-72rem)/2))]">
        Cria vídeos para qualquer nicho <CornerRightDown className="size-5 text-violet-600" />
      </p>
      <div className="marquee-paused relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-white to-transparent" />
        <div className="animate-marquee-fast flex w-max gap-5">
          {[...niches, ...niches].map((n, i) => (
            <div key={i} className="group relative w-44 shrink-0 overflow-hidden rounded-2xl shadow-lg shadow-black/10 transition-transform duration-300 hover:-translate-y-1.5">
              <div className={`grid h-60 place-items-center bg-gradient-to-br ${n.grad} text-5xl`}>{n.emoji}</div>
              <span className="absolute left-1/2 top-[38%] -translate-x-1/2 text-base font-extrabold tracking-wide text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">{n.word}</span>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-3.5 pb-3 pt-10 text-sm font-semibold text-white">{n.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
