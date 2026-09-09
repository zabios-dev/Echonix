'use client'

import About from './About'
import Footer from './Footer'
import FloatingWhatsApp from './FloatingWhatsApp'
import Navbar from './Navbar'
import Team from './Team'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="about-page-main">
        <h1 className="sr-only">About Echonix Technology</h1>
        <About />
        <Team />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
