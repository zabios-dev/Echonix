'use client'

export default function PageHero({
  eyebrow,
  title,
  description,
  highlights = [],
  highlightsLabel = 'Key highlights',
  headingId = 'page-hero-heading',
}) {
  return (
    <section className="page-intro-header" aria-labelledby={headingId}>
      <div className="page-intro-header__inner">
        <div className="services-selector__intro">
          <div className="services-selector__intro-orbit" aria-hidden="true">
            <span />
            <span />
            <i />
          </div>

          <div className="services-selector__intro-copy">
            <div className="services-selector__eyebrow">
              <span />
              <p>{eyebrow}</p>
            </div>

            <h1 id={headingId} dangerouslySetInnerHTML={{ __html: title }} />

            {description && <p>{description}</p>}
          </div>

          {highlights.length > 0 && (
            <div className="services-selector__intro-steps" aria-label={highlightsLabel}>
              {highlights.map((item, index) => (
                <div key={index}>
                  <b>{item.label}</b>
                  <span dangerouslySetInnerHTML={{ __html: item.value }} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
