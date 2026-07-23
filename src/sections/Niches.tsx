import { useEffect, useRef } from 'react'

const niches = [
  { label: 'Mitologia', eyebrow: 'Lendas que prendem', video: '/assets/videos/preview_1.mp4' },
  { label: 'Fofocas da escola', eyebrow: 'Histórias que viralizam', video: '/assets/videos/preview_2.mp4' },
  { label: 'Mitologia', eyebrow: 'Heróis e deuses', video: '/assets/videos/preview_3.mp4' },
  { label: 'Fofocas da escola', eyebrow: 'Drama em episódios', video: '/assets/videos/preview_4.mp4' },
  { label: 'Histórias assustadoras', eyebrow: 'Suspense em série', video: '/assets/videos/preview_5.mp4' },
  { label: 'História', eyebrow: 'O passado em cena', video: '/assets/videos/preview_6.mp4' },
  { label: 'Histórias assustadoras', eyebrow: 'Relatos que prendem', video: '/assets/videos/preview_7.mp4' },
]

function NichePreview({ niche }: { niche: (typeof niches)[number] }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !reduceMotion) {
        if (!video.src) {
          video.src = niche.video
          video.load()
        }
        void video.play().catch(() => undefined)
      } else {
        video.pause()
      }
    }, { threshold: 0.35 })

    observer.observe(video)
    return () => observer.disconnect()
  }, [niche.video])

  return (
    <article className="group relative aspect-[9/16] w-40 shrink-0 overflow-hidden rounded-2xl bg-zinc-900 shadow-md shadow-zinc-950/10 sm:w-48">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        aria-label={`Preview de vídeo: ${niche.label}`}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 text-white">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">{niche.eyebrow}</p>
        <h3 className="mt-1 text-sm font-semibold sm:text-base">{niche.label}</h3>
      </div>
    </article>
  )
}

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
            <NichePreview key={`${niche.video}-${index}`} niche={niche} />
          ))}
        </div>
      </div>
    </section>
  )
}
