# Z.N.K Tools & Services

Premium digital subscription website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Premium Dark Theme** with neon gradients and glassmorphism
- **Responsive Design** for all devices
- **Smooth Animations** using Framer Motion
- **WhatsApp Integration** for orders
- **JSON-based Content** for easy editing
- **SEO Optimized** with metadata and sitemap
- **No Database Required** - all data stored in JSON files

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/              # Next.js app directory
│   ├── globals.css   # Global styles
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   └── [pages]/      # Other pages
├── components/       # Reusable components
├── data/            # JSON data files
│   ├── products.json
│   ├── reviews.json
│   ├── categories.json
│   ├── faq.json
│   ├── hero.json
│   └── settings.json
├── types/           # TypeScript types
├── utils/           # Utility functions
└── public/          # Static assets
```

## Editing Content

All content is stored in JSON files in the `data/` directory:

- **products.json** - Product information
- **reviews.json** - Customer reviews
- **categories.json** - Product categories
- **faq.json** - Frequently asked questions
- **hero.json** - Hero section content
- **settings.json** - Business settings and configuration

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Business Information

- **Name**: Z.N.K Tools & Services
- **WhatsApp**: +92 314 3111118
- **Type**: Digital Subscription Store

## License

© 2024 Z.N.K Tools & Services. All rights reserved.
