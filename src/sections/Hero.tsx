import { motion, useReducedMotion } from 'framer-motion'
import { Instagram, Music2, Youtube, Zap } from 'lucide-react'
import GoogleSignInButton from '@/components/auth/GoogleSignInButton'

const creatorAvatars = [
  '/assets/images/avatar_6.jpg',
  '/assets/images/avatar_7.png',
  '/assets/images/avatar_3.jpg',
  '/assets/images/avatar_4.jpg',
  '/assets/images/avatar_8.jpg',
]

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const fade = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <section id="inicio" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-56 mx-auto h-[400px] max-w-3xl rounded-full bg-violet-200/10 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-5 pb-12 pt-10 text-center sm:px-6 sm:pb-16 sm:pt-24">
        <motion.div {...fade(0)} className="mb-7 inline-flex items-center justify-center gap-3 sm:gap-4">
          <div className="flex -space-x-3 sm:-space-x-3.5" aria-hidden="true">
            {creatorAvatars.map((avatar, index) => (
              <img
                key={`${avatar}-${index}`}
                src={avatar}
                alt=""
                width="48"
                height="48"
                className="size-10 rounded-full border-2 border-white object-cover shadow-sm sm:size-12"
              />
            ))}
          </div>
          <p className="text-left text-xs text-zinc-500 sm:text-base">
            Confiado por <strong className="font-bold text-zinc-950">1.3M</strong> de usuários
          </p>
        </motion.div>

        <motion.h1 {...fade(0.08)} className="font-display mx-auto max-w-3xl text-balance text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-zinc-950 sm:text-5xl lg:text-6xl">
          Crie vídeos sem aparecer e mantenha seu canal em movimento
        </motion.h1>

        <motion.p {...fade(0.16)} className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-zinc-600 sm:text-lg">
          Transforme uma ideia em roteiro, narração, visual e publicação — com um processo simples, consistente e pensado para vídeos verticais.
        </motion.p>

        <motion.div {...fade(0.24)} className="mt-7 flex items-center justify-center gap-3 text-sm text-zinc-500">
          Feito para
          <span className="flex items-center gap-2.5 text-zinc-700" aria-label="YouTube, Instagram e TikTok">
            <Youtube className="size-5" aria-hidden="true" />
            <Instagram className="size-5" aria-hidden="true" />
            <Music2 className="size-5" aria-hidden="true" />
          </span>
        </motion.div>

        <motion.div {...fade(0.32)} className="mt-9 flex justify-center">
          <GoogleSignInButton
            label="Crie seu primeiro vídeo"
            icon={<Zap className="size-5 fill-current" />}
            className="h-14 w-full rounded-xl px-9 text-lg font-bold shadow-xl shadow-violet-600/25 sm:w-auto"
          />
        </motion.div>
        <motion.p {...fade(0.4)} className="mt-4 text-sm text-zinc-400">Receba seu vídeo gerado em menos de 5 minutos.</motion.p>
      </div>
    </section>
  )
}
