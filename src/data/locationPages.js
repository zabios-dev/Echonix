const sharedStats = [
  { value: '₹78K', label: 'Max Government Subsidy' },
  { value: '25yr', label: 'Panel Warranty' },
  { value: '100%', label: 'KSEB Compliant' },
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
    stats: [{ value: '200+', label: 'Installations in Palakkad' }, ...sharedStats],
    intro: "Palakkad's high solar irradiance means faster payback and higher yields than most of Kerala. Government subsidy up to ₹78,000.",
    overview: "Palakkad's unique geography — the Palakkad Gap — gives the district some of Kerala's highest solar radiation levels. We design systems with optimal tilt and orientation for maximum annual yield.",
    features: [
      ['High-Yield System Design', "We account for Palakkad's sun angle, Gap wind and seasonal variation to maximise annual output."],
      ['KSEB Net Metering', 'We manage application, inspection and grid connection across Palakkad KSEB sections.'],
      ['Maximum Subsidy', 'We prepare documentation and track eligible residential subsidy disbursement.'],
      ['Agricultural Solar', 'Custom pump-integrated, off-grid and grid-tied systems for farms and plantations.'],
      ['Proven Quality', 'Tier-1 panels with long performance warranties and Indian grid-standard certification.'],
      ['End-to-End Support', 'One point of contact from site survey through commissioning and maintenance.'],
    ],
    services: [
      { ...sharedServices[0], tag: 'High ROI in Kerala', description: "Palakkad's high solar irradiance helps maximise net-metering returns and export value." },
      { ...sharedServices[1], description: 'Battery-backed energy independence for rural and remote properties.' },
      { ...sharedServices[2], description: 'Grid benefits with battery backup for mixed urban-rural power needs.' },
    ],
    areas: ['Palakkad Town', 'Chittur', 'Ottapalam', 'Shoranur', 'Mannarkkad', 'Alathur', 'Malampuzha', 'Nemmara', 'Pattambi', 'Thrithala', 'Kongad'],
    faqs: [
      ['Is Palakkad a good district for solar energy?', 'Yes. The Palakkad Gap contributes to high solar irradiance, which can improve energy yield and payback compared with much of Kerala.'],
      ['Do you serve Chittur, Mannarkkad and the eastern taluks?', 'Yes. Echonix covers Palakkad town, Chittur, Mannarkkad, Ottapalam, Shoranur, Alathur, Malampuzha and surrounding taluks.'],
      ['What subsidy is available for Palakkad solar installations?', 'Eligible residential grid-tied systems can receive up to ₹78,000 under the MNRE central subsidy scheme.'],
      ['Can you handle agricultural and commercial solar in Palakkad?', 'Yes. We design systems for homes, farms, commercial establishments and industrial units across the district.'],
    ],
    cta: "Palakkad's sun gives you Kerala's best solar returns. Get a free site survey and quote today.",
  },
}
