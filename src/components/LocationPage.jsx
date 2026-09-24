import Link from 'next/link'
import { ArrowUpRight, Check, MapPin, Phone } from 'lucide-react'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingWhatsApp from './FloatingWhatsApp'

export default function LocationPage({ location }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: location.faqs.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <Navbar />

      <main>
        {/* Hero Section */}
        <section
          className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#12382d] px-4 py-32 text-center"
          style={{ paddingTop: 'calc(92px + 4rem)' }}
        >
          <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#f5a623]/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-40 bottom-20 h-[500px] w-[500px] rounded-full bg-[#f5a623]/8 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-4xl">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f5a623]/30 bg-[#f5a623]/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#f5a623]">
              <span className="h-2 w-2 rounded-full bg-[#f5a623]" />
              {location.name} District — Kerala
            </span>

            <h1
              className="mt-4 font-extrabold leading-tight tracking-tight text-white"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 4.2rem)' }}
            >
              Solar Panel Installation
              <br />
              <span className="text-[#f5a623]">
                in {location.name}
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-white/75">
              Kerala&apos;s trusted solar EPC company — MNRE empanelled and
              KSEB approved. {location.intro}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:+919539220888"
                className="inline-flex items-center gap-3 rounded-full bg-[#f5a623] px-8 py-4 text-sm font-black text-[#12382d] shadow-lg transition-all hover:bg-[#e99b1b] hover:shadow-xl"
              >
                <Phone size={18} />
                Call for Free Site Survey
              </a>

              <Link
                href="/#services"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                View Solar Solutions
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {location.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <p className="text-2xl font-black text-[#f5a623]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-white/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="bg-[#f7f7f3] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="mb-12 max-w-3xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#f5a623] sm:w-10" />
                <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#e99b1b]">
                  Why Choose Echonix
                </span>
                <span className="h-px w-8 bg-[#f5a623] sm:w-10" />
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-[#17382e] sm:text-4xl md:text-5xl">
                {location.name}&apos;s preferred
                <br />
                <span className="text-[#e99b1b]">
                  solar installation partner
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#555] sm:text-lg">
                {location.overview}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {location.features.map(([title, body]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-black/8 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#f5a623]/15">
                    <Check size={20} className="text-[#e99b1b]" />
                  </div>

                  <h3 className="mb-2 text-base font-extrabold text-[#17382e]">
                    {title}
                  </h3>

                  <p className="text-sm leading-relaxed text-[#666]">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-[#12382d] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="mb-12 max-w-3xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
                Solar solutions available
                <br />
                <span className="text-[#f5a623]">
                  in {location.name}
                </span>
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {location.services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-7"
                >
                  <span className="inline-block rounded-full bg-[#f5a623]/20 px-3 py-1 text-xs font-bold text-[#f5a623]">
                    {service.tag}
                  </span>

                  <h3 className="mt-4 text-xl font-extrabold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {service.description}
                  </p>

                  <Link
                    href="/services"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#f5a623] hover:underline"
                  >
                    Learn more
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas Section */}
        <section className="bg-[#f7f7f3] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="mb-10 flex items-center gap-3">
              <MapPin size={20} className="text-[#e99b1b]" />

              <h2 className="text-2xl font-extrabold text-[#17382e] sm:text-3xl">
                Areas we serve in {location.name}
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {location.areas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-[#e99b1b]/30 bg-white px-4 py-2 text-sm font-semibold text-[#17382e] shadow-sm"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="mb-10 text-2xl font-extrabold text-[#17382e] sm:text-3xl">
              FAQs — Solar in {location.name}
            </h2>

            <div className="space-y-5">
              {location.faqs.map(([question, answer]) => (
                <div
                  key={question}
                  className="rounded-2xl border border-black/8 bg-[#f7f7f3] p-6"
                >
                  <p className="font-extrabold text-[#17382e]">
                    {question}
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-[#555]">
                    {answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#12382d] py-20">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to go solar in {location.name}?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
              {location.cta}
            </p>

            <a
              href="tel:+919539220888"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#f5a623] px-10 py-4 text-base font-black text-[#12382d] shadow-xl transition-all hover:bg-[#e99b1b]"
            >
              <Phone size={20} />
              +91 9539 22 08 88
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
