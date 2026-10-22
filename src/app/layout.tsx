import type { Metadata } from 'next'
import './globals.css'
import LenisProvider from '../components/LenisProvider'

export const metadata: Metadata = {
  title: {
    default: 'Solar Panel Installation in Kerala | Echonix Technology',
    template: '%s | Echonix Technology',
  },
  description:
    'Professional solar installation across Kerala. Up to ₹78,000 government subsidy. MNRE empanelled EPC company. Free site survey. Call +91 9539 22 08 88',
  keywords: [
    'solar installation Kerala',
    'on-grid solar',
    'off-grid solar',
    'hybrid solar',
    'solar inverter',
    'MNRE',
    'Mahindra Solarize',
    'Echonix',
  ],
  openGraph: {
    title: 'Solar Panel Installation in Kerala | Echonix Technology',
    description:
      'Professional solar installation across Kerala. Up to ₹78,000 government subsidy. MNRE empanelled EPC company.',
    url: 'https://echonix.in',
    siteName: 'Echonix Technology',
    locale: 'en_IN',
    type: 'website',
  },
  metadataBase: new URL('https://echonix.in'),
  verification: {
    google: 'y0DGWeL2Ij-4IoHp4WgdBKg546tY3spR2kdA5qqC2uU',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://echonix.in/#organization',
      name: 'Echonix Technology Pvt. Ltd.',
      url: 'https://echonix.in',
      logo: 'https://echonix.in/logo.png',
      image: 'https://echonix.in/about-team.png',
      telephone: '+919539220888',
      email: 'info@echonix.in',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '31/63F, Police Lane, Tirur',
        addressLocality: 'Malappuram',
        addressRegion: 'Kerala',
        postalCode: '676101',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '10.9029',
        longitude: '75.9238',
      },
      sameAs: [
        'https://www.instagram.com/echonixtechnology/',
        'https://in.linkedin.com/company/echonix-technology-pvt-ltd',
        'https://www.facebook.com/p/Echonix-100083322813630/',
      ],
    },
    {
      '@type': 'Service',
      serviceType: 'Solar Panel Installation',
      provider: {
        '@type': 'LocalBusiness',
        '@id': 'https://echonix.in/#organization',
      },
      areaServed: {
        '@type': 'State',
        name: 'Kerala',
      },
      description:
        'Premium on-grid, off-grid, and hybrid solar system design, grid approvals, and installation for residential and commercial spaces across Kerala.',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-10W2YPK7PW"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-10W2YPK7PW');
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" as="image" href="/heroes/hero-solar.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}
