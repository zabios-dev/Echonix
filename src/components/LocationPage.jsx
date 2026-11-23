import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {
  ArrowUpRight,
  MapPin,
  Phone,
  ShieldCheck,
  Zap,
  BatteryCharging,
  Grid3X3,
  Clock,
  Wrench,
  FileCheck,
  Sun,
  ChevronRight,
} from 'lucide-react'
import Navbar from './Navbar'

const Footer = dynamic(() => import('./Footer'))
const FloatingWhatsApp = dynamic(() => import('./FloatingWhatsApp'))

/* ── Static data ─────────────────────────────────── */

const nearbyLocations = [
  { name: 'Malappuram', href: '/solar-malappuram', anchor: 'Solar installation in Malappuram' },
  { name: 'Kozhikode', href: '/solar-kozhikode', anchor: 'Solar installation in Kozhikode' },
  { name: 'Palakkad', href: '/solar-palakkad', anchor: 'Solar installation in Palakkad' },
]

const serviceIconMap = {
  'On-Grid Solar': Grid3X3,
  'Off-Grid Solar': BatteryCharging,
  'Hybrid Solar': Zap,
}

const serviceImageMap = {
  'On-Grid Solar': '/images/services/on-grid.webp',
  'Off-Grid Solar': '/images/services/off-grid.webp',
  'Hybrid Solar': '/images/services/hybrid.webp',
}

/** Rotate through meaningful feature icons */
const featureIcons = [Sun, ShieldCheck, FileCheck, Clock, Wrench, BatteryCharging]

/* ── Trust badges shown below hero CTA ──────────── */
const trustBadges = [
  'MNRE Empanelled',
  'KSEB Approved',
  'Free Site Survey',
  '5-Year AMC Available',
]

/* ═══════════════════════════════════════════════════
   LocationPage Component
═══════════════════════════════════════════════════ */
export default function LocationPage({ location }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: location.faqs.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main className="overflow-x-hidden">

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            HERO — Full-bleed solar photo + green overlay
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section
          className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center"
          style={{ paddingTop: 'calc(92px + 5rem)', paddingBottom: '5rem' }}
        >
          {/* Background photo */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <Image
              src="/heroes/hero-solar.webp"
              alt="Solar Panel Installation"
              fill
              priority
              fetchPriority="high"
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>

          {/* Deep green gradient overlay — brand identity */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(160deg, rgba(14,42,34,0.95) 0%, rgba(18,56,45,0.82) 50%, rgba(14,42,34,0.94) 100%)',
            }}
            aria-hidden="true"
          />

          {/* Subtle bottom fade to white — visual bridge to next section */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(14,42,34,0.6))' }}
            aria-hidden="true"
          />

          {/* Amber glow accents */}
          <div className="pointer-events-none absolute -right-48 top-16 h-[600px] w-[600px] rounded-full bg-[#f5a623]/8 blur-[80px]" />
          <div className="pointer-events-none absolute -left-48 bottom-24 h-[500px] w-[500px] rounded-full bg-[#f5a623]/6 blur-[80px]" />

          <div className="relative z-10 mx-auto max-w-4xl">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f5a623]/35 bg-[#f5a623]/12 px-5 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#f5a623]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#f5a623]">
                {location.name} District — Kerala
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-extrabold leading-[1.08] tracking-tight text-white"
              style={{ fontSize: 'clamp(2.6rem, 6.5vw, 4.5rem)' }}
            >
              Solar Panel Installation
              <br />
              <span
                className="text-[#f5a623]"
                style={{ textShadow: '0 0 40px rgba(245,166,35,0.35)' }}
              >
                in {location.name}
              </span>
            </h1>

            {/* Sub-copy */}
            <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-white/72">
              Kerala&apos;s trusted solar EPC company — MNRE empanelled &amp; KSEB approved.{' '}
              {location.intro}
            </p>

            {/* Primary CTAs */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:+919539220888"
                className="inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-[#f5a623] px-8 py-4 text-sm font-black text-[#12382d] shadow-[0_8px_32px_rgba(245,166,35,0.40)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e99b1b] hover:shadow-[0_12px_40px_rgba(245,166,35,0.50)] active:translate-y-0"
              >
                <Phone size={17} strokeWidth={2.5} />
                Call for Free Site Survey
              </a>

              <Link
                href="/services"
                className="inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/18 hover:border-white/40"
              >
                View Solar Solutions
                <ArrowUpRight size={17} />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/14 bg-white/8 px-3.5 py-1.5 text-[11px] font-semibold text-white/80 backdrop-blur-sm"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Stats grid */}
            <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {location.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/12 bg-white/6 p-5 backdrop-blur-sm"
                >
                  <p
                    className="text-3xl font-black text-[#f5a623]"
                    style={{ textShadow: '0 0 24px rgba(245,166,35,0.3)' }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-wide text-white/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            WHY CHOOSE — Feature cards with social proof
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="bg-[#f7f6f2] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            {/* Header row */}
            <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#f5a623]" />
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#e99b1b]">
                    Why Choose Echonix
                  </span>
                </div>

                <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#17382e] sm:text-4xl md:text-5xl">
                  {location.name}&apos;s preferred
                  <br />
                  <span className="text-[#e99b1b]">solar installation partner</span>
                </h2>
              </div>

              <p className="max-w-lg text-base leading-relaxed text-[#555] lg:text-right">
                {location.overview}
              </p>
            </div>

            {/* Feature cards */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {location.features.map(([title, body], i) => {
                const Icon = featureIcons[i % featureIcons.length]
                return (
                  <article
                    key={title}
                    className="group relative cursor-default overflow-hidden rounded-2xl border border-black/7 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(16,39,31,0.12)]"
                  >
                    {/* Amber left accent — reveals on hover */}
                    <span className="absolute inset-y-0 left-0 w-[3px] rounded-r-full bg-[#f5a623] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

                    {/* Icon + number row */}
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f5a623]/12 transition-colors duration-200 group-hover:bg-[#f5a623]/20">
                        <Icon size={20} className="text-[#e99b1b]" strokeWidth={2} />
                      </div>
                      <span className="font-black tabular-nums text-[11px] text-[#c8c4ba]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="mb-2 text-base font-extrabold text-[#17382e]">{title}</h3>
                    <p className="text-sm leading-relaxed text-[#64686b]">{body}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SERVICES — Image cards on dark green
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="bg-[#0f2d22] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            {/* Header */}
            <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#f5a623]/60" />
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#f5a623]/80">
                    Our Services
                  </span>
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
                  Solar solutions in
                  <br />
                  <span className="text-[#f5a623]">{location.name}</span>
                </h2>
              </div>

              <Link
                href="/services"
                className="inline-flex cursor-pointer shrink-0 items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-bold text-white/80 transition-all duration-200 hover:border-[#f5a623]/50 hover:text-[#f5a623]"
              >
                All services <ArrowUpRight size={15} />
              </Link>
            </div>

            {/* Service cards */}
            <div className="grid gap-6 sm:grid-cols-3">
              {location.services.map((service) => {
                const Icon = serviceIconMap[service.title] ?? Zap
                const img = serviceImageMap[service.title]
                return (
                  <article
                    key={service.title}
                    className="group flex cursor-default flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-250 hover:border-white/22 hover:bg-white/8 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)]"
                  >
                    {/* Image thumbnail */}
                    {img && (
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={img}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, 33vw"
                        />
                        {/* Gradient scrim */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a2318]/90 via-[#0a2318]/20 to-transparent" />

                        {/* Tag badge */}
                        <span className="absolute left-4 top-4 rounded-full bg-[#f5a623] px-3 py-1 text-[11px] font-black tracking-wide text-[#12382d] shadow-md">
                          {service.tag}
                        </span>
                      </div>
                    )}

                    <div className="flex flex-1 flex-col p-6">
                      {/* Icon */}
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#f5a623]/15 transition-colors duration-200 group-hover:bg-[#f5a623]/22">
                        <Icon size={18} className="text-[#f5a623]" strokeWidth={2} />
                      </div>

                      <h3 className="text-lg font-extrabold text-white">{service.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-white/62">
                        {service.description}
                      </p>

                      <Link
                        href="/services"
                        className="mt-6 inline-flex cursor-pointer items-center gap-1.5 text-xs font-bold text-[#f5a623] transition-all duration-150 hover:gap-2.5"
                        aria-label={`Learn more about ${service.title}`}
                      >
                        Learn more <ChevronRight size={14} strokeWidth={2.5} />
                      </Link>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            AREAS WE SERVE — Tag cloud with map pin header
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="bg-[#f7f6f2] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            {/* Header */}
            <div className="mb-10 flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f5a623]/15">
                <MapPin size={20} className="text-[#e99b1b]" strokeWidth={2.2} />
              </div>
              <div>
                <p className="mb-0.5 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#e99b1b]">
                  Coverage
                </p>
                <h2 className="text-2xl font-extrabold text-[#17382e] sm:text-3xl">
                  Areas we serve in {location.name}
                </h2>
              </div>
            </div>

            {/* Tag cloud */}
            <div className="flex flex-wrap gap-2.5">
              {location.areas.map((area, i) => (
                <span
                  key={area}
                  className="inline-flex cursor-default items-center gap-2 rounded-full border border-[#e99b1b]/25 bg-white px-4 py-2.5 text-sm font-semibold text-[#17382e] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#e99b1b]/55 hover:shadow-md"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#f5a623]" />
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            FAQ — Bordered accordion-style cards
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            {/* Header */}
            <div className="mb-12">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-[#f5a623]" />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#e99b1b]">
                  Common Questions
                </span>
              </div>
              <h2 className="text-2xl font-extrabold text-[#17382e] sm:text-3xl md:text-4xl">
                FAQs — Solar in {location.name}
              </h2>
            </div>

            <div className="space-y-3.5">
              {location.faqs.map(([question, answer], i) => (
                <div
                  key={question}
                  className="relative overflow-hidden rounded-2xl border border-black/8 bg-[#f7f6f2] px-6 py-5 transition-shadow duration-200 hover:shadow-sm"
                >
                  {/* Amber left bar */}
                  <span className="absolute inset-y-0 left-0 w-[3px] rounded-r-full bg-[#f5a623]" />

                  <div className="flex items-start gap-3 pl-1">
                    <span className="mt-0.5 shrink-0 rounded-lg bg-[#f5a623]/12 px-2 py-0.5 text-[10px] font-black text-[#e99b1b]">
                      Q{String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="font-extrabold leading-snug text-[#17382e]">{question}</p>
                      <p className="mt-2 text-sm leading-relaxed text-[#5a5f63]">{answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            NEARBY LOCATIONS
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="bg-[#f7f6f2] py-14 md:py-18" aria-labelledby="nearby-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <h2
              id="nearby-heading"
              className="mb-6 text-xl font-extrabold text-[#17382e] sm:text-2xl"
            >
              We also serve nearby
            </h2>

            <div className="flex flex-wrap gap-3">
              {nearbyLocations
                .filter((n) => n.name !== location.name)
                .map((nearby) => (
                  <Link
                    key={nearby.href}
                    href={nearby.href}
                    className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#e99b1b]/30 bg-white px-5 py-3 text-sm font-bold text-[#17382e] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#e99b1b]/65 hover:shadow-md"
                  >
                    {nearby.anchor}
                    <ArrowUpRight size={15} className="text-[#e99b1b]" />
                  </Link>
                ))}
            </div>

            <Link
              href="/#areas-serve"
              className="mt-5 inline-flex cursor-pointer items-center gap-1.5 text-sm font-bold text-[#e99b1b] transition-all duration-150 hover:gap-2.5 hover:underline"
            >
              Explore all service areas <ArrowUpRight size={15} />
            </Link>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            CTA — Premium centred section with glow
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="relative overflow-hidden bg-[#0f2d22] py-24 md:py-32">
          {/* Radial amber glow */}
          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="h-[600px] w-[800px] rounded-full bg-[#f5a623]/7 blur-[100px]" />
          </div>

          {/* Subtle grid texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg,#fff 0px,#fff 1px,transparent 1px,transparent 60px), repeating-linear-gradient(90deg,#fff 0px,#fff 1px,transparent 1px,transparent 60px)',
            }}
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-2xl px-4 text-center">
            {/* Eyebrow badge */}
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f5a623]/30 bg-[#f5a623]/10 px-5 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f5a623]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#f5a623]">
                Free Site Survey — No Obligation
              </span>
            </span>

            <h2
              className="font-extrabold leading-tight text-white"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}
            >
              Ready to go solar
              <br />
              <span className="text-[#f5a623]">in {location.name}?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/65">
              {location.cta}
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:+919539220888"
                className="inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#f5a623] px-10 py-4 text-base font-black text-[#12382d] shadow-[0_8px_32px_rgba(245,166,35,0.40)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e99b1b] hover:shadow-[0_14px_44px_rgba(245,166,35,0.55)] active:translate-y-0"
              >
                <Phone size={19} strokeWidth={2.5} />
                +91 9539 22 08 88
              </a>

              <Link
                href="/services"
                className="inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-white/22 bg-white/8 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/14 hover:border-white/38"
              >
                Explore Services
                <ArrowUpRight size={17} />
              </Link>
            </div>

            {/* Micro trust line */}
            <p className="mt-7 text-xs font-medium text-white/40">
              Response within 2 hours · No spam · Zero obligation
            </p>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
