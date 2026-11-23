import type { Metadata } from 'next'
import LocationPage from '../../components/LocationPage'
import { locationPages } from '../../data/locationPages'

export const metadata: Metadata = {
  title: 'Solar Panel Installation in Palakkad',
  description:
    'Best solar panel installation in Palakkad. On-grid, off-grid & hybrid systems. MNRE empanelled, KSEB approved. Up to ₹78,000 subsidy. Free site survey — call +91 9539 22 08 88.',
  keywords: [
    'solar panel Palakkad',
    'solar installation Palakkad',
    'solar energy Palakkad',
    'on-grid solar Palakkad',
    'KSEB solar Palakkad',
    'Echonix Palakkad',
  ],
  openGraph: {
    title: 'Solar Panel Installation in Palakkad | Echonix Technology',
    description:
      'Professional solar installation in Palakkad. MNRE empanelled, KSEB approved. Up to ₹78,000 government subsidy.',
    url: 'https://echonix.in/solar-palakkad',
    siteName: 'Echonix Technology',
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://echonix.in/solar-palakkad',
  },
}

export default function SolarPalakkadPage() {
  return <LocationPage location={locationPages.palakkad} />
}
