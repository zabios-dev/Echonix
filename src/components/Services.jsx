"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  Grid3X3,
  BatteryCharging,
  Zap,
  Cpu,
} from "lucide-react";

const services = [
  {
    id: "on-grid",
    number: "01",
    title: "On-Grid Solar",
    description:
      "Connect your solar system directly to the KSEB grid and use the power you generate. Excess electricity can be exported to the grid through net metering, helping bring your electricity bills close to zero.",
    tags: ["KSEB Net-Metering", "Subsidy Eligible", "No Battery Costs"],
    icon: Grid3X3,
    image: "/images/services/on-grid.jpg",
  },
  {
    id: "off-grid",
    number: "02",
    title: "Off-Grid Solar",
    description:
      "Generate, store and use your own solar power without depending on the electrical grid. A reliable solution for properties that experience frequent or long-duration power cuts.",
    tags: ["Battery Backup Included", "Power Cut Protection", "100% Grid Independent"],
    icon: BatteryCharging,
    image: "/images/services/off-grid.jpg",
  },
  {
    id: "hybrid",
    number: "03",
    title: "Hybrid Solar",
    description:
      "Stay connected to the KSEB grid while storing solar energy in batteries. Hybrid systems provide backup during outages while allowing you to use or export solar power during normal grid hours.",
    tags: ["Grid + Battery Backup", "Outage Protection", "Smart Energy Management"],
    icon: Zap,
    image: "/images/services/hybrid.jpg",
  },
  {
  id: "inverters",
  number: "04",
  title: "Home Inverters & Batteries",
  description:
    "Reliable home inverter solutions with tubular and lithium batteries to provide dependable backup power during outages. We supply, install and commission efficient inverter and battery systems tailored to your home's power requirements.",
  tags: [
    "Tubular Batteries",
    "Lithium Batteries",
    "Professional Installation",
  ],
  icon: Cpu,
  image: "/images/services/inverter.jpg",
},
];

export default function Services() {
  const [activeId, setActiveId] = useState(services[0].id);
  const activeService = services.find((s) => s.id === activeId) ?? services[0];

  return (
    <section id="services" className="bg-[#f7f6f2] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-12 max-w-2xl md:mb-16">
          <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-[#17382e] sm:text-4xl md:text-5xl">
            Our Services Complete
            <br />
            <span className="text-[#e99b1b]">One Solution</span> for Every
            <br />
            Need
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
          {/* LEFT — accordion list */}
          <div className="lg:col-span-5">
            <div className="divide-y divide-black/8 rounded-2xl border border-black/8 bg-white">
              {services.map((service) => {
                const isActive = service.id === activeId;

                return (
                  <div key={service.id} className="relative">
                    {/* Amber accent bar for active item */}
                    {isActive && (
                      <motion.span
                        layoutId="svc-accent"
                        className="absolute inset-y-0 left-0 w-[3px] rounded-r bg-[#f5a623]"
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}

                    <button
                      type="button"
                      onClick={() => setActiveId(isActive ? activeId : service.id)}
                      aria-expanded={isActive}
                      className="flex w-full items-center gap-3 px-5 py-5 text-left sm:px-6"
                    >
                      <span
                        className={`text-xs font-black tabular-nums ${
                          isActive ? "text-[#f5a623]" : "text-black/25"
                        }`}
                      >
                        {service.number}
                      </span>

                      <span
                        className={`flex-1 text-sm font-bold leading-snug sm:text-[15px] ${
                          isActive ? "text-[#17382e]" : "text-[#3a3a38]"
                        }`}
                      >
                        {service.title}
                      </span>

                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-black/30 transition-transform duration-300 ${
                          isActive ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-6 pl-11 sm:px-6 sm:pl-12">
                            <p className="text-sm leading-relaxed text-[#68706d]">
                              {service.description}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                              {service.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-full bg-[#f2f1ec] px-3 py-1 text-[11px] font-semibold text-[#3a3a38]"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <a
                              href="/services"
                              className="mt-5 inline-flex items-center gap-2 rounded-full border border-black/12 px-5 py-2 text-xs font-bold text-[#17382e] transition-colors hover:border-[#17382e] hover:bg-[#17382e] hover:text-white"
                            >
                              Learn More
                              <ArrowUpRight size={14} />
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT — sticky image panel */}
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-[0_20px_60px_rgba(16,39,31,0.15)] sm:aspect-[16/10]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeService.id}
                  src={activeService.image}
                  alt={activeService.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 flex items-baseline gap-3 p-6">
                <span className="text-2xl font-black text-[#f5a623]">
                  {activeService.number}
                </span>
                <span className="text-base font-bold text-white sm:text-lg">
                  {activeService.title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}