import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Navbar from '../components/Navbar'
import Hero from '../components/ui/demo'
import SectionReveal from '../components/SectionReveal'

// Lazy-load below-the-fold components with next/dynamic to reduce main-thread JS blocking
const About = dynamic(() => import('../components/About'))
const MidCTA = dynamic(() => import('../components/MidCTA'))
const Services = dynamic(() => import('../components/Services'))
const Gallery = dynamic(() => import('../components/Gallery'))
const Testimonials = dynamic(() => import('../components/Testimonials'))
const FAQ = dynamic(() => import('../components/FAQ'))
const AreasWeServe = dynamic(() => import('../components/AreasWeServe'))
const Footer = dynamic(() => import('../components/Footer'))
const FloatingWhatsApp = dynamic(() => import('../components/FloatingWhatsApp'))


export const metadata: Metadata = {
  title: 'Solar Panel Installation in Kerala | Echonix Technology',
  description:
    'Professional solar installation across Kerala. Up to ₹78,000 government subsidy. MNRE empanelled EPC company. Free site survey. Call +91 9539 22 08 88',
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero — full-screen video */}
        <Hero />

        {/* 2. About */}
        <SectionReveal delay={0}>
          <About />
        </SectionReveal>

        {/* 3. Mid-page CTA band */}
        <MidCTA />

        {/* 4. Services — numbered accordion */}
        <SectionReveal delay={0}>
          <Services />
        </SectionReveal>

        {/* 5. Project Gallery */}
        <SectionReveal delay={0}>
          <Gallery />
        </SectionReveal>

        {/* 6. Testimonials */}
        <SectionReveal delay={0}>
          <Testimonials />
        </SectionReveal>

        {/* 7. FAQ */}
        <SectionReveal delay={0}>
          <FAQ />
        </SectionReveal>

        <AreasWeServe />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
