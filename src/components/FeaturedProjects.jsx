'use client'

import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../hooks/animations'
import ProjectCard from './ProjectCard'
import projects from '../data/projects'

const featured = projects.filter((p) => p.featured)

export default function FeaturedProjects({ hideHeader = false }) {
  if (featured.length === 0) return null

  return (
    <section
      className="featured-projects"
      aria-labelledby="featured-heading"
    >
      <div className="featured-projects__inner">

        {/* Header */}
        {!hideHeader && (
          <motion.div
            className="featured-projects__header"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.div
              className="featured-projects__eyebrow"
              variants={fadeUp}
            >
              <span />
              <p>Selected Installations</p>
              <span />
            </motion.div>

            <div className="featured-projects__heading-row">
              <motion.h2
                id="featured-heading"
                variants={fadeUp}
              >
                Powering Kerala,
                <br />
                <strong>one project at a time.</strong>
              </motion.h2>

              <motion.p
                className="featured-projects__intro"
                variants={fadeUp}
              >
                From homes to commercial spaces, explore some of our
                landmark solar installations across Kerala.
              </motion.p>
            </div>
          </motion.div>
        )}

        {/* Featured Projects */}
        <div
          className="featured-projects__grid"
          role="list"
        >

          {/* Main Featured Project */}
          {featured[0] && (
            <motion.div
              className="featured-projects__main"
              role="listitem"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
            >
              <ProjectCard
                project={featured[0]}
                delay={0}
                showBadge={true}
              />

              <div className="featured-projects__main-label">
                <span>01</span>
                <span>Featured Installation</span>
              </div>
            </motion.div>
          )}

          {/* Secondary Projects */}
          <div className="featured-projects__side">

            {featured.slice(1, 3).map((project, i) => (
              <motion.div
                key={project.id}
                className="featured-projects__secondary"
                role="listitem"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                custom={i}
              >
                <ProjectCard
                  project={project}
                  delay={(i + 1) * 0.1}
                  showBadge={true}
                />

                <div className="featured-projects__secondary-label">
                  <span>
                    {String(i + 2).padStart(2, '0')}
                  </span>

                  <span>
                    {project.location || 'Kerala'}
                  </span>
                </div>
              </motion.div>
            ))}

          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="featured-projects__footer"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <div className="featured-projects__stats">
            <strong>{featured.length}+</strong>
            <span>Featured installations</span>
          </div>

          <div className="featured-projects__line" />

          <a
            href="/projects"
            className="featured-projects__button"
          >
            Explore All Projects
            <span>↗</span>
          </a>
        </motion.div>

      </div>

    </section>
  )
}