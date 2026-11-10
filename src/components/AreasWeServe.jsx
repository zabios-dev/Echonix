'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const locations = [
  {
    title: 'Solar Panel Installation in Malappuram',
    description: 'Reliable solar systems designed for homes and businesses across Malappuram.',
    href: '/solar-malappuram',
  },
  {
    title: 'Solar Installation in Kozhikode',
    description: 'Monsoon-ready solar solutions with complete KSEB support in Kozhikode.',
    href: '/solar-kozhikode',
  },
]

export default function AreasWeServe() {
  return (
    <section className="areas-serve" id="areas-serve" aria-labelledby="areas-serve-heading">
      <div className="areas-serve__inner">
        <div className="areas-serve__header">
          <p className="section-eyebrow">Service Areas</p>
          <h2 className="section-title" id="areas-serve-heading">Areas We Serve</h2>
        </div>
        <div className="areas-serve__grid">
          {locations.map((location, index) => (
            <motion.div
              key={location.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={location.href} className="areas-serve__card">
                <h3>{location.title}</h3>
                <p>{location.description}</p>
                <span className="areas-serve__arrow" aria-hidden="true">
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
