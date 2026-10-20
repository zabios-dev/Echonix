'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.play().catch(() => { })
  }, [])

  return (
    <section className="hero2" aria-label="Hero">
      {/* ── Video Background ── */}
      <div className="hero2__bg">
        {/* Fallback image — visible until video is ready */}
        <div
          className="hero2__poster"
          style={{ opacity: loaded ? 0 : 1 }}
          aria-hidden="true"
        />

        {/* Video — fades in once ready */}
        <video
          ref={videoRef}
          className="hero2__video"
          src="/heronew.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setLoaded(true)}
          aria-hidden="true"
          style={{ opacity: loaded ? 1 : 0 }}
        />
        {/* Dark gradient overlay */}
        <div className="hero2__overlay" />
      </div>

      {/* ── Content ── */}
      <div className="hero2__inner">
        <motion.div
          className="hero2__content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow */}
          <motion.p
            className="hero2__eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
          </motion.p>

          {/* Headline */}
          <motion.h1
            className="hero2__headline"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            Kerala&apos;s #1 Choice<br />
            for Solar<br />
            <em>Installation</em>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="hero2__subtext"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            Cut your electricity bill by up to 90% with professional solar installation. Get up to ₹78,000 government subsidy — we handle all the paperwork.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="hero2__ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="https://wa.me/919539220888?text=Hi%20Echonix,%20I%20would%20like%20to%20get%20a%20free%20quote." target="_blank" rel="noopener noreferrer" className="hero2__btn hero2__btn--primary">
              Get Free Quote
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="hero2__btn-arrow">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#services" className="hero2__btn hero2__btn--outline">
              Explore Services
            </a>
          </motion.div>

          {/* Social Follow (Option 2: Clean centered group beneath CTAs) */}
          <motion.div
            className="hero2__social"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}
          >
            <div className="hero2__social-header">
              <span className="hero2__social-line" aria-hidden="true" />
              <span className="hero2__social-label">Follow our journey</span>
              <span className="hero2__social-line" aria-hidden="true" />
            </div>

            <div className="hero2__social-icons">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/echonixtechnology/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero2__social-icon"
                data-social="instagram"
                aria-label="Follow Echonix Solar on Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/p/Echonix-100083322813630/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero2__social-icon"
                data-social="facebook"
                aria-label="Follow Echonix Solar on Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.883v2.271h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://in.linkedin.com/company/echonix-technology-pvt-ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="hero2__social-icon"
                data-social="linkedin"
                aria-label="Follow Echonix Solar on LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll hint (mobile only) ── */}
      <motion.div
        className="hero2__scroll-mobile"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        aria-hidden="true"
      >
        <span className="hero2__scroll-label">SCROLL</span>
        <div className="hero2__scroll-dot" />
      </motion.div>
    </section>
  )
}
