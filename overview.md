# Echonix Technology - Architecture & System Overview

## Overview
**Echonix Technology** is a modern, high-performance web platform built for a premier MNRE-empanelled Solar EPC company in Kerala. The application delivers an intuitive user experience for residential, commercial, and industrial clients seeking solar installation, net-metering, and subsidy details.

---

## Technical Architecture

```
                       ┌──────────────────────────────────────────┐
                       │        Next.js App Router (v15)          │
                       └────────────────────┬─────────────────────┘
                                            │
           ┌────────────────────────────────┼────────────────────────────────┐
           │                                │                                │
┌──────────▼──────────┐          ┌──────────▼──────────┐          ┌──────────▼──────────┐
│  Layout & Providers │          │    Page Modules     │          │  Design System & UI │
├─────────────────────┤          ├─────────────────────┤          ├─────────────────────┤
│ • RootLayout        │          │ • Landing (/)       │          │ • Tailwind CSS v4   │
│ • LenisProvider     │          │ • /services         │          │ • Framer Motion     │
│ • JSON-LD SEO Schema│          │ • /projects         │          │ • Lucide Icons      │
│ • Font preloads     │          │ • Regional SEO Pages│          │ • Custom Animations │
└─────────────────────┘          └─────────────────────┘          └─────────────────────┘
```

### Core Technology Stack
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router architecture with React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom CSS utility rules
- **Motion & Smooth Scroll**: [Framer Motion](https://www.framer.com/motion/) for interactive UI components & scroll reveals, `@studio-freight/lenis` for physics-based smooth scrolling
- **Iconography**: `lucide-react`
- **Asset Delivery**: Static web media (`.png`, `.jpg`, `.mp4`, `.webm`) served via Next.js `public/` asset directory

---

## Directory Structure & Component Breakdown

```
Echonix/
├── public/
│   ├── heroes/               # Hero videos and background banners
│   ├── images/services/      # High-res service graphics (on-grid, off-grid, hybrid, inverter)
│   └── icons.svg             # Vector brand graphics
├── src/
│   ├── app/                  # Next.js App Router routes
│   │   ├── layout.tsx        # Root layout, meta tags & Schema.org JSON-LD
│   │   ├── page.tsx          # Main homepage composed of section components
│   │   ├── services/         # Services page route
│   │   ├── projects/         # Portfolio page route
│   │   ├── solar-kozhikode/  # Regional landing page (Kozhikode)
│   │   ├── solar-malappuram/ # Regional landing page (Malappuram)
│   │   └── solar-palakkad/   # Regional landing page (Palakkad)
│   └── components/           # Reusable UI sections and widgets
│       ├── Navbar.jsx        # Sticky navigation bar
│       ├── Services.jsx      # Accordion-style service showcase on homepage
│       ├── ServicesPage.jsx  # Dedicated service page & Solar Quiz Wizard
│       ├── Gallery.jsx       # Interactive project gallery
│       ├── LenisProvider.tsx # Global smooth scroll wrapper
│       └── FloatingWhatsApp.js # Direct WhatsApp action button
```

---

## How It Works (Brief Workflow)

1. **Page Load & SEO Optimization**:
   - `RootLayout` (`src/app/layout.tsx`) initializes metadata, preloads key fonts and hero images, injects JSON-LD structured data for local business SEO, and wraps the app inside `LenisProvider`.

2. **Homepage Experience (`src/app/page.tsx`)**:
   - Users view a full-screen hero section (`Hero`), followed by an introduction (`About`), mid-page call to action (`MidCTA`), and an interactive accordion (`Services.jsx`).
   - `Services.jsx` displays 4 core solar solution categories with animated tab switching and sticky image previews.

3. **Services & Interactive Solar Wizard (`ServicesPage.jsx`)**:
   - Details the 4 core offerings: **On-Grid Solar**, **Off-Grid Solar**, **Hybrid Solar**, and **Solar Inverters**.
   - Includes a 3-step interactive **Solar Quiz Wizard** that collects user property type, monthly KSEB bill range, and power cut frequency to generate tailored system recommendations (size, subsidy eligibility, estimated savings) and route inquiries directly to WhatsApp.

4. **Regional SEO & Conversion**:
   - Location-specific pages (`solar-kozhikode`, `solar-malappuram`, `solar-palakkad`) target regional Kerala search queries.
   - Sticky WhatsApp floaters (`FloatingWhatsApp.jsx`) and direct call buttons enable immediate conversion.
