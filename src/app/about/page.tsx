import type { Metadata } from 'next'
import AboutPage from '../../components/AboutPage'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Echonix Technology, our four decades of electrical expertise, and the solar professionals serving Kerala.',
  alternates: { canonical: 'https://echonix.in/about' },
}

export default function AboutRoute() {
  return <AboutPage />
}
