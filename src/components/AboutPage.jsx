'use client'

import { useEffect } from 'react'
import About from './About'
import Footer from './Footer'
import FloatingWhatsApp from './FloatingWhatsApp'
import Navbar from './Navbar'
import Team from './Team'
import PageHero from './PageHero'

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <>
      <Navbar />
      <main className="about-page-main">
        <PageHero
          eyebrow="Who We Are"
          title="Four decades of trust,<br /><strong>powering Kerala solar.</strong>"
          description="A division of ECHO (since 1985). We combine 40 years of electrical excellence with MNRE-empanelled engineering to bring dependable solar power to every rooftop."
          highlights={[
            { label: '1985', value: 'Four Decades<br />of Trust' },
            { label: 'MNRE', value: 'Empanelled<br />EPC Partner' },
            { label: '3.5+ MW', value: 'Installed<br />Across Kerala' },
          ]}
          highlightsLabel="Company credentials"
          headingId="about-page-heading"
        />
        <About />
        <Team />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
