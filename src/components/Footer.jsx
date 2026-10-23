'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const companyLinks = [
    { label: 'Home', to: '/' },
    { label: 'About Us', href: isHomePage ? '#about' : '/#about' },
    { label: 'Our Team', href: isHomePage ? '#about' : '/#about' },
    { label: 'Projects', to: '/projects' },
    { label: 'News', href: isHomePage ? '#why-solar' : '/#why-solar' },
  ]

  const serviceLinks = [
    { label: 'On-Grid Solar', href: isHomePage ? '#services' : '/#services' },
    { label: 'Off-Grid Solar', href: isHomePage ? '#services' : '/#services' },
    { label: 'Hybrid Solar', href: isHomePage ? '#services' : '/#services' },
    { label: 'Home Inverters & Batteries', href: isHomePage ? '#services' : '/#services' },
  ]

  const phoneLinks = [
    { href: 'tel:+919207220883', label: '+91 9207220883' },
    { href: 'tel:+919539220888', label: '+91 9539220888' },
  ]

  const workingAreas = ['Tirur', 'Kozhikode', 'Cherpulassery', 'Malappuram', 'Wandoor']

  const branches = [
    {
      city: 'Tirur',
      addressLines: [
        'Tirur Rd, near OLD VISWAS THEATER,',
        'North BP Angadi, Tirur, Kerala - 676102',
      ],
      mapUrl: 'https://maps.app.goo.gl/UGgr2VUAZdg4TGLMA',
    },
    {
      city: 'Kozhikode',
      addressLines: [
        'Palace Rd, opp. KSEB SUB STATION,',
        'Mankave, Kozhikode, Kerala - 673007',
      ],
      mapUrl: 'https://maps.app.goo.gl/uXpnNkPsss4np3gV7',
    },
  ]

  const socialLinks = [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/echonixtechnology/',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://in.linkedin.com/company/echonix-technology-pvt-ltd',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.6 9.1V18H4.1V9.1h2.5Zm.2-2.8c0 .7-.5 1.2-1.4 1.2h-.1c-.8 0-1.3-.5-1.3-1.2S4.5 5 5.4 5s1.4.5 1.4 1.3Zm8.9 6.3V18h-2.5v-4.7c0-1.2-.4-2-1.5-2-.8 0-1.3.5-1.5 1-.1.2-.1.5-.1.8V18H7.7V9.1h2.5v1.1c.3-.6 1-1.4 2.4-1.4 1.8 0 3.1 1.2 3.1 3.9Z" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/p/Echonix-100083322813630/',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3l-.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8Z" fill="currentColor" />
        </svg>
      ),
    },
  ]

  const renderFooterLink = (link) => {
    if (link.to) {
      return (
        <Link href={link.to} onClick={() => window.scrollTo({ top: 0 })} className="footer__link">
          {link.label}
        </Link>
      )
    }

    return (
      <a href={link.href} className="footer__link">
        {link.label}
      </a>
    )
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        {/* Signature */}
        <div className="footer__signature">
          <span className="footer__signature-text">ECHONIX</span>
          <div className="footer__signature-svg-wrap" aria-hidden="true">
            <svg viewBox="0 0 1200 160" className="footer__signature-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 20h1200M0 50h1200M0 80h1200M0 110h1200M0 140h1200" stroke="currentColor" strokeWidth="0.8" opacity="0.12" />
              <path d="M100 0v160M200 0v160M300 0v160M400 0v160M500 0v160M600 0v160M700 0v160M800 0v160M900 0v160M1000 0v160M1100 0v160" stroke="currentColor" strokeWidth="0.8" opacity="0.12" />
              <rect x="202" y="22" width="96" height="26" fill="var(--clr-amber)" opacity="0.08" />
              <rect x="502" y="82" width="96" height="26" fill="var(--clr-amber)" opacity="0.08" />
              <rect x="802" y="52" width="96" height="26" fill="var(--clr-amber)" opacity="0.08" />
              <circle cx="600" cy="-40" r="160" stroke="var(--clr-amber)" strokeDasharray="6 8" strokeWidth="1.2" opacity="0.15" />
            </svg>
          </div>
        </div>

        {/* Main Grid */}
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__col footer__col--brand">
            <div className="footer__logo-wrap">
              <span className="footer__logo-text">ECHONIX</span>
            </div>
            <p className="footer__tagline">Delivering High Quality Solar Solutions Since 1985</p>
            {/* Our Branches */}
            <div className="footer__branches" aria-label="Our Branches">
              <h4 className="footer__branches-title">Our Branches</h4>

              <div className="footer__branches-grid">
                {branches.map((branch) => (
                  <div key={branch.city} className="footer__branch-item">
                    <span className="footer__branch-city">
                      {branch.city}
                    </span>

                    <address className="footer__branch-address">
                      {branch.addressLines.map((line, idx) => (
                        <span key={idx} className="address-line">
                          {line}
                        </span>
                      ))}
                    </address>

                    <a
                      href={branch.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer__branch-map-link"
                      aria-label={`Get directions to ${branch.city} branch on Google Maps`}
                    >
                      <span>Get Directions</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="footer__col">
            <h3 className="footer__col-title">Company</h3>
            <ul className="footer__links-list">
              {companyLinks.map((link) => (
                <li key={link.label}>{renderFooterLink(link)}</li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h3 className="footer__col-title">Services</h3>
            <ul className="footer__links-list">
              {serviceLinks.map((link) => (
                <li key={link.label}>{renderFooterLink(link)}</li>
              ))}
            </ul>
          </div>

          {/* Follow */}
          <div className="footer__col">
            <h3 className="footer__col-title">Follow</h3>
            <div className="footer__social-links" aria-label="Social media links">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="footer__social-chip"
                  aria-label={link.label}
                  title={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="footer__contact-info footer__social-contact" aria-label="Contact information">
              <p className="contact-line contact-line--phone">
                <span className="label">Phone:</span>
                <span className="footer__contact-items" aria-label="Phone numbers">
                  {phoneLinks.map((phoneLink, index) => (
                    <span key={phoneLink.label} className="footer__contact-item">
                      <a href={phoneLink.href} className="footer__contact-link footer__contact-link--phone">
                        {phoneLink.label}
                      </a>
                      {index < phoneLinks.length - 1 && <span className="footer__link-sep">,</span>}
                    </span>
                  ))}
                </span>
              </p>
              <p className="contact-line contact-line--email">
                <span className="label">Email:</span>
                <a href="mailto:info@echonix.in" className="footer__contact-link footer__contact-link--email">
                  info@echonix.in
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="copyright">© 2025 Echonix Technology Pvt. Ltd.</p>
          <p className="attribution">Powered by <a href="https://zabios.in" className="bottom-link" target="_blank" rel="noopener">Zabios</a></p>
        </div>
      </div>
    </footer>
  )
}
