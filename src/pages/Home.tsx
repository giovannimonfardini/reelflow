import Navbar from '@/sections/Navbar'
import Hero from '@/sections/Hero'
import Niches from '@/sections/Niches'
import Proof from '@/sections/Proof'
import Comparison from '@/sections/Comparison'
import Testimonials from '@/sections/Testimonials'
import HowItWorks from '@/sections/HowItWorks'
import Demo from '@/sections/Demo'
import CtaBanner from '@/sections/CtaBanner'
import Faq from '@/sections/Faq'
import Footer from '@/sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <Niches />
        <Proof />
        <Comparison />
        <Testimonials />
        <HowItWorks />
        <Demo />
        <CtaBanner />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}
