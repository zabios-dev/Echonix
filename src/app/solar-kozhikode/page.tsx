import type { Metadata } from 'next'
import LocationPage from '../../components/LocationPage'
import { locationPages } from '../../data/locationPages'

export const metadata: Metadata = {
  title: 'Solar Panel Installation in Kozhikode',
  description:
    'Best solar panel installation in Kozhikode (Calicut). On-grid, off-grid & hybrid systems. MNRE empanelled, KSEB approved. Up to ₹78,000 subsidy. Free site survey — call +91 9539 22 08 88.',
  keywords: [
    'solar panel Kozhikode',
    'solar installation Kozhikode',
    'solar energy Calicut',
    'on-grid solar Kozhikode',
    'KSEB solar Kozhikode',
    'Echonix Kozhikode',
  ],
  openGraph: {
    title: 'Solar Panel Installation in Kozhikode | Echonix Technology',
    description:
      'Professional solar installation in Kozhikode. MNRE empanelled, KSEB approved. Up to ₹78,000 government subsidy.',
    url: 'https://echonix.in/solar-kozhikode',
    siteName: 'Echonix Technology',
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://echonix.in/solar-kozhikode',
  },
}

export default function SolarKozhikodePage() {
  return <LocationPage location={locationPages.kozhikode} />
}
