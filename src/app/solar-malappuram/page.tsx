import type { Metadata } from 'next'
import LocationPage from '../../components/LocationPage'
import { locationPages } from '../../data/locationPages'

export const metadata: Metadata = {
  title: 'Solar Panel Installation in Malappuram',
  description:
    'Best solar panel installation in Malappuram. On-grid, off-grid & hybrid systems. MNRE empanelled, KSEB approved. Up to ₹78,000 subsidy. Free site survey — call +91 9539 22 08 88.',
  keywords: [
    'solar panel Malappuram',
    'solar installation Malappuram',
    'solar energy Malappuram',
    'on-grid solar Malappuram',
    'KSEB solar Malappuram',
    'Echonix Malappuram',
  ],
  openGraph: {
    title: 'Solar Panel Installation in Malappuram | Echonix Technology',
    description:
      'Professional solar installation in Malappuram. MNRE empanelled, KSEB approved. Up to ₹78,000 government subsidy.',
    url: 'https://echonix.in/solar-malappuram',
    siteName: 'Echonix Technology',
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://echonix.in/solar-malappuram',
  },
}

export default function SolarMalappuramPage() {
  return <LocationPage location={locationPages.malappuram} />
}
