import { lazy, Suspense, type ReactNode } from 'react'
import DeferredSection from '@/components/DeferredSection'
import Navbar from '@/sections/Navbar'
import Hero from '@/sections/Hero'

const Niches = lazy(() => import('@/sections/Niches'))
const Proof = lazy(() => import('@/sections/Proof'))
const Comparison = lazy(() => import('@/sections/Comparison'))
const Testimonials = lazy(() => import('@/sections/Testimonials'))
const HowItWorks = lazy(() => import('@/sections/HowItWorks'))
const Demo = lazy(() => import('@/sections/Demo'))
const CtaBanner = lazy(() => import('@/sections/CtaBanner'))
const Faq = lazy(() => import('@/sections/Faq'))
const Footer = lazy(() => import('@/sections/Footer'))

function Deferred({ children, id, minHeight }: { children: ReactNode; id?: string; minHeight: number }) {
  return (
    <DeferredSection id={id} minHeight={minHeight}>
      <Suspense fallback={null}>{children}</Suspense>
    </DeferredSection>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <Deferred minHeight={560}><Niches /></Deferred>
        <Deferred minHeight={760}><Proof /></Deferred>
        <Deferred minHeight={680}><Comparison /></Deferred>
        <Deferred id="para-quem" minHeight={620}><Testimonials /></Deferred>
        <Deferred id="como-funciona" minHeight={1500}><HowItWorks /></Deferred>
        <Deferred id="demo" minHeight={820}><Demo /></Deferred>
        <Deferred minHeight={480}><CtaBanner /></Deferred>
        <Deferred id="faq" minHeight={720}><Faq /></Deferred>
      </main>
      <Deferred minHeight={300}><Footer /></Deferred>
    </div>
  )
}
