'use client'

import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingWhatsApp from './FloatingWhatsApp'
import FeaturedProjects from './FeaturedProjects'
import ProjectGrid from './ProjectGrid'
import PageHero from './PageHero'

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <>
      <Navbar />
      <main className="projects-page">
        <PageHero
          eyebrow="Our Portfolio"
          title="Projects across<br /><strong>Kerala &amp; beyond.</strong>"
          description="Real installations. Real results. From residential rooftops to large-scale commercial and government institutions — engineered for decades of clean, dependable power."
          highlights={[
            { label: '3.5+ MW', value: 'Installed<br />Capacity' },
            { label: '500+', value: 'Projects<br />Commissioned' },
            { label: '100%', value: 'Tier-1 Solar<br />Modules' },
          ]}
          highlightsLabel="Key project metrics"
          headingId="projects-page-heading"
        />

        {/* Featured projects section — hidden for now */}
        {/* <FeaturedProjects hideHeader={true} /> */}

        {/* All remaining projects + search/filter */}
        <ProjectGrid hideHeader={true} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
