import type { MetadataRoute } from 'next'

const siteUrl = 'https://echonix.in'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    '',
    '/about',
    '/services',
    '/projects',
    '/team',
    '/blog',
    '/solar-kozhikode',
    '/solar-malappuram',
    '/solar-palakkad',
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: 'monthly',
    priority: path.startsWith('/solar-') ? 0.8 : 1,
  }))
}
