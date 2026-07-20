const niches = [
  { label: 'Mitologia', eyebrow: 'Lendas que prendem', image: '/assets/niches/mitologia.jpg' },
  { label: 'Histórias de terror', eyebrow: 'Suspense em série', image: '/assets/niches/terror.jpg' },
  { label: 'Fatos históricos', eyebrow: 'O passado em cena', image: '/assets/niches/historia.jpg' },
  { label: 'IA e tecnologia', eyebrow: 'O futuro explicado', image: '/assets/niches/tecnologia.jpg' },
  { label: 'Mistérios', eyebrow: 'Perguntas sem resposta', image: '/assets/niches/terror.jpg' },
  { label: 'Grandes descobertas', eyebrow: 'Histórias que inspiram', image: '/assets/niches/historia.jpg' },
]

export default function Niches() {
  return (
    <section aria-labelledby="niches-title" className="overflow-hidden border-y border-zinc-100 bg-white py-14 sm:py-16">
      <div className="mx-auto mb-8 flex max-w-6xl items-center justify-start gap-2 px-5 sm:px-6">
        <h2 id="niches-title" className="font-display text-base font-bold tracking-tight text-zinc-950 sm:text-lg">
          Cria vídeos para qualquer nicho
        </h2>
        <img src="/assets/doodle_arrow.png" alt="" width="256" height="256" className="size-11 shrink-0 object-contain sm:size-12" aria-hidden="true" />
      </div>

      <div className="marquee-paused relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white sm:w-24" />
        <div className="animate-marquee-fast flex w-max gap-4 px-4 sm:gap-5">
          {[...niches, ...niches].map((niche, index) => (
            <article key={`${niche.label}-${index}`} className="group relative aspect-[9/14] w-40 shrink-0 overflow-hidden rounded-2xl bg-zinc-900 shadow-md shadow-zinc-950/10 sm:w-48">
              <img src={niche.image} alt="" width="675" height="1200" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-black/10" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/65">{niche.eyebrow}</p>
                <h3 className="mt-1 text-sm font-semibold sm:text-base">{niche.label}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
