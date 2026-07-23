import { useEffect, useRef, useState, type ReactNode } from 'react'

type DeferredSectionProps = {
  children: ReactNode
  id?: string
  minHeight?: number
}

export default function DeferredSection({ children, id, minHeight = 720 }: DeferredSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        setIsReady(true)
        observer.disconnect()
      },
      { rootMargin: '300px 0px' },
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      id={id}
      className="deferred-section scroll-mt-20"
      style={isReady ? undefined : { minHeight }}
    >
      {isReady ? children : null}
    </div>
  )
}
