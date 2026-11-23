const sharedStats = [
  { value: '25yr', label: 'Panel Warranty' },
  { value: '100%', label: 'KSEB Compliant' },
  { value: '5★', label: 'Customer Rating' },
]

const sharedServices = [
  { title: 'On-Grid Solar', tag: 'Most Popular' },
  { title: 'Off-Grid Solar', tag: 'Energy Independent' },
  { title: 'Hybrid Solar', tag: 'Best of Both' },
]

export const locationPages = {
  kozhikode: {
    name: 'Kozhikode',
    alternateName: 'Calicut',
    stats: [{ value: '300+', label: 'Installations in Kozhikode' }, ...sharedStats],
    intro: 'On-grid, off-grid and hybrid solar installations across Kozhikode (Calicut) district. Government subsidy up to ₹78,000.',
    overview: "From Calicut city to Vadakara, we've installed solar systems across Kozhikode district. Our end-to-end service — survey, design, KSEB approval, installation and support — means zero hassle for you.",
    features: [
      ['Free Site Survey', 'Engineers assess your Kozhikode property, roof angle and shading, then design a system around your energy use.'],
      ['KSEB Net Metering', 'We handle the application, inspection and grid connection without office visits from you.'],
      ['Subsidy Processing', 'We prepare, submit and track your eligible MNRE subsidy claim from start to finish.'],
      ['Monsoon-Ready Systems', "Panels and mounting structures are selected for Kozhikode's heavy rainfall and coastal humidity."],
      ['Fast Turnaround', 'Experienced crews operate across the district for a prompt installation after approvals.'],
      ['After-Sales Support', 'Monitoring, a dedicated support line and optional AMC keep your system performing well.'],
    ],
    services: [
      { ...sharedServices[0], description: 'Connect to the KSEB grid and earn credits through net metering. Ideal for Kozhikode homes and businesses with stable grid supply.' },
      { ...sharedServices[1], description: 'Battery-backed energy independence for coastal and rural areas that experience frequent outages.' },
      { ...sharedServices[2], description: "Grid-connected power with intelligent battery backup for Kozhikode's urban and suburban properties." },
    ],
    areas: ['Kozhikode City', 'Vadakara', 'Koyilandy', 'Feroke', 'Ramanattukara', 'Beypore', 'Perambra', 'Koduvally', 'Chelannur', 'Kunnamangalam', 'Balussery'],
    faqs: [
      ['Do you cover Calicut city and surrounding taluks?', 'Yes. Echonix serves Kozhikode city (Calicut), Vadakara, Koyilandy, Feroke, Ramanattukara and surrounding taluks.'],
      ['How soon can you survey my property in Kozhikode?', 'We typically schedule a free site survey within 24–48 hours of your enquiry.'],
      ['Is the government subsidy available for Kozhikode installations?', 'Yes. Eligible residential systems can receive up to ₹78,000 under the MNRE central subsidy scheme, and we handle the application process.'],
      ["Can solar panels handle Kozhikode's monsoon and coastal climate?", 'Yes. We use suitably rated panels and corrosion-resistant mounting structures for Kerala’s rainfall and coastal conditions.'],
    ],
    cta: 'Free site survey and quote for Kozhikode properties. Our team responds within 2 hours.',
  },
  malappuram: {
    name: 'Malappuram',
    stats: [{ value: '500+', label: 'Installations in Malappuram' }, ...sharedStats],
    intro: 'Professional on-grid, off-grid and hybrid solar installations across Malappuram district. Government subsidy up to ₹78,000.',
    overview: "From Tirur to Manjeri, we've completed 500+ installations across Malappuram district. Our team handles surveys, design, KSEB approvals, installation and after-sales support.",
    features: [
      ['Free Site Survey', 'Our engineers assess your Malappuram site at no cost and design a custom system.'],
      ['KSEB Liaison', 'We manage net-metering paperwork and inspections, so you do not need to visit the office.'],
      ['Subsidy Processing', 'We file and track eligible MNRE subsidy claims through disbursement.'],
      ['Quality Components', 'Tier-1 panels and dependable components are selected for long-term performance.'],
      ['Fast Installation', 'Once approvals are in place, installation normally takes one to two days.'],
      ['5-Year AMC', 'Optional annual maintenance provides worry-free operation.'],
    ],
    services: [
      { ...sharedServices[0], description: 'Connect to the KSEB grid and earn from excess power through net metering — a popular choice across Malappuram.' },
      { ...sharedServices[1], description: 'Battery storage provides energy independence for areas with frequent power cuts.' },
      { ...sharedServices[2], description: 'Grid-connected solar with battery backup for homes and businesses.' },
    ],
    areas: ['Tirur', 'Manjeri', 'Malappuram Town', 'Perinthalmanna', 'Kondotty', 'Kottakkal', 'Ponnani', 'Nilambur', 'Tirurangadi', 'Tanur', 'Valanchery', 'Chemmad'],
    faqs: [
      ['Do you install solar panels in Tirur, Manjeri and Perinthalmanna?', 'Yes. Echonix covers Malappuram district, including Tirur, Manjeri, Perinthalmanna, Kondotty, Kottakkal and nearby areas.'],
      ['How long does installation take in Malappuram?', 'A typical residential installation takes one to two working days after site survey and KSEB approval.'],
      ['Is the ₹78,000 government subsidy available in Malappuram?', 'Eligible residential systems can receive up to ₹78,000 under the MNRE central subsidy scheme. We handle the paperwork at no extra charge.'],
      ['Who handles the KSEB net-metering approval in Malappuram?', 'Echonix manages the application, inspection and liaison process for you.'],
    ],
    cta: 'Get a free site survey and custom quote. Our Malappuram team responds within 2 hours.',
  },
  palakkad: {
    name: 'Palakkad',
    alternateName: 'Palghat',
    stats: [{ value: '200+', label: 'Installations in Palakkad' }, ...sharedStats],
    intro: 'High-efficiency on-grid, off-grid and hybrid solar installations across Palakkad district. Government subsidy up to ₹78,000.',
    overview: "From Palakkad town to Ottapalam, Chittur, and Mannarkkad, Echonix delivers dependable solar systems across Palakkad district. With exceptional solar irradiance throughout the year, Palakkad is Kerala's prime location for solar power. Our end-to-end service — site survey, engineering, KSEB approvals, and long-term support — guarantees maximum generation.",
    features: [
      ['Free Site Survey', 'Our engineers assess your Palakkad property, roof structure, and sun exposure to design an optimal high-yield solar system.'],
      ['KSEB Net Metering', 'We handle the complete KSEB application, inspection, and bi-directional meter installation without office visits from you.'],
      ['Subsidy Processing', 'We prepare, submit, and track your eligible MNRE PM Surya Ghar subsidy claim of up to ₹78,000.'],
      ['High-Heat Engineered', 'Panels and mounting systems are specially selected to withstand Palakkad’s intense summer heat and strong winds.'],
      ['Fast Turnaround', 'Experienced local technical crews complete residential installations within 1 to 2 days after approvals.'],
      ['Dedicated Branch Support', 'Our Parakkunnam, Palakkad branch provides dedicated customer care, scheduled maintenance, and 24/7 technical assistance.'],
    ],
    services: [
      { ...sharedServices[0], description: 'Connect directly to the KSEB grid and reduce your electricity bills to zero through net metering. Perfect for Palakkad homes and businesses.' },
      { ...sharedServices[1], description: 'High-capacity battery storage systems for agricultural estates, farms, and rural properties requiring complete energy independence.' },
      { ...sharedServices[2], description: 'Intelligent grid-tied power with seamless battery backup during grid outages and peak load hours across Palakkad.' },
    ],
    areas: ['Palakkad Town', 'Ottapalam', 'Chittur', 'Mannarkkad', 'Alathur', 'Pattambi', 'Cherpulassery', 'Kanjikode', 'Kollengode', 'Nenmara', 'Shoranur', 'Parakkunnam'],
    faqs: [
      ['Do you provide solar installation across all parts of Palakkad?', 'Yes. Echonix covers Palakkad town, Ottapalam, Chittur, Mannarkkad, Alathur, Pattambi, Cherpulassery, Kanjikode, and surrounding regions with our dedicated local branch.'],
      ['How soon can you survey my rooftop in Palakkad?', 'We schedule a free, no-obligation rooftop survey and generation estimate within 24–48 hours of your enquiry.'],
      ['Is the ₹78,000 government subsidy applicable for Palakkad homes?', 'Yes. Eligible residential installations qualify for up to ₹78,000 under the central MNRE PM Surya Ghar Muft Bijli Yojana. We handle all documentation and portal filing.'],
      ['How do solar panels perform in Palakkad’s hot summer climate?', 'Palakkad receives some of the highest solar irradiance in Kerala. We use premium monocrystalline tier-1 panels with low temperature coefficients to ensure maximum power generation even during peak heat.'],
    ],
    cta: 'Get a free site survey and custom solar quote in Palakkad. Our local team responds within 2 hours.',
  },
}
