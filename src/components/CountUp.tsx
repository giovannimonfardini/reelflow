import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function CountUp({ target, suffix = '+' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const start = performance.now()
    let raf: number
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1)
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target])

  return <span ref={ref}>{value.toLocaleString('pt-BR')}{suffix}</span>
}
