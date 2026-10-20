'use client'

import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../hooks/animations'
import ProjectCard from './ProjectCard'
import projects from '../data/projects'

// All projects sorted by year descending (latest first)
const sorted = [...projects].sort((a, b) => {
  const ya = parseInt(a.year) || 0
  const yb = parseInt(b.year) || 0
  return yb - ya
})

/**
 * ProjectGrid — All remaining (non-featured) projects with search + filter.
 * Reuses .gallery section layout, .gallery__grid, .form-input, .credential-badge CSS.
 */
export default function ProjectGrid({ hideHeader = false }) {
  return (
    <section className="projects-all" aria-labelledby="all-projects-heading">
      <div className="gallery__inner">
        {hideHeader ? (
          <h2 className="projects-section-title">
            Some of Our Major Projects
          </h2>
        ) : (
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p className="section-eyebrow" variants={fadeUp}>
              All Projects
            </motion.p>
            <motion.h2
              className="section-title"
              id="all-projects-heading"
              variants={fadeUp}
            >
              Our Complete Portfolio
            </motion.h2>
            <motion.p className="section-subtitle" variants={fadeUp}>
              From homes to institutions — solar done right, every time.
            </motion.p>
          </motion.div>
        )}

        {/* Grid — latest year first */}
        <div className="gallery__grid" role="list">
          {sorted.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={i * 0.08}
              showBadge={false}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
