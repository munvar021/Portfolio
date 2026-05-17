# Munvar Khajavali Portfolio

Personal portfolio built with Next.js, TypeScript, styled-components, and Framer Motion. The site presents profile content, project case studies, resume viewing, and a contact form powered by EmailJS.

## Features

- Responsive single-page home experience with hero, about, skills, timeline, projects, resume, and contact sections
- Dedicated About, Projects, Project Detail, Resume, Contact, Privacy, and Terms pages
- Project filtering and reusable project card layout variants
- Smooth in-page hash navigation and custom app layout with Lenis scrolling
- EmailJS contact form with shared validation and submit logic
- PDF resume viewer using `react-pdf`
- Centralized site, contact, navigation, home, and about configuration
- Shared theme, mixins, styled-components registry, and ambient type declarations
- Docker and Vercel deployment support through Next.js standalone output

## Tech Stack

- Next.js 15
- React 18
- TypeScript
- styled-components 6
- Framer Motion
- Lenis
- React Hook Form
- EmailJS
- React PDF
- Font Awesome

## Project Structure

```text
.
|-- public/
|   |-- images/
|   |-- resume.pdf
|   |-- health.json
|   |-- manifest.json
|   `-- robots.txt
|-- src/
|   |-- app/
|   |   |-- (public)/
|   |   |   |-- about/
|   |   |   |-- contact/
|   |   |   |-- privacy/
|   |   |   |-- projects/
|   |   |   |-- resume/
|   |   |   |-- terms/
|   |   |   |-- home.styles.ts
|   |   |   `-- page.tsx
|   |   |-- globals.css
|   |   |-- layout.tsx
|   |   |-- loading.tsx
|   |   |-- not-found.tsx
|   |   `-- error.tsx
|   |-- components/
|   |   |-- layout/
|   |   |-- shared/
|   |   `-- ui/
|   |-- config/
|   |-- data/
|   |-- hooks/
|   |-- lib/
|   |-- providers/
|   |-- styles/
|   `-- types/
|-- Dockerfile
|-- docker-compose.yml
|-- next.config.ts
|-- tsconfig.json
`-- vercel.json
```

## Key Modules

- `src/config/site.ts`: site identity, contact details, social links, and metadata inputs
- `src/config/navigation.ts`: header, footer, and policy navigation links
- `src/config/contact.ts`: reusable contact info and social link data
- `src/config/home.ts`: home page stack rows
- `src/config/about.ts`: about page tool and skill display config
- `src/data/projects.ts`: project content and detail data
- `src/data/about.ts`: skills, education, and experience content
- `src/hooks/use-contact-form.ts`: shared EmailJS form state, validation, and submission
- `src/lib/projects.ts`: project filters, filtering helper, and card variant helper
- `src/lib/scroll.ts`: shared smooth scrolling utilities
- `src/styles/theme.ts`: typed styled-components theme tokens
- `src/styles/mixins.ts`: shared style helpers and media utilities
- `src/types/css.d.ts`: CSS side-effect import declarations
- `src/types/styled.d.ts`: styled-components theme typing

## Getting Started

### Prerequisites

- Node.js 20 recommended
- npm
- EmailJS account for the contact form

### Installation

```bash
git clone https://github.com/munvar021/Portfolio.git
cd Portfolio
npm install
cp .env.example .env.local
```

Fill `.env.local` with your EmailJS values:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Development

```bash
npm run dev
```

Open `http://localhost:3000`.

### Production Build

```bash
npm run build
npm run start
```

## Scripts

```bash
npm run dev      # Start Next.js dev server
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run Next lint script
```

## Deployment

Vercel is the recommended hosting target. Add the three `NEXT_PUBLIC_EMAILJS_*` variables in Vercel project settings and deploy from GitHub.

Docker is also supported:

```bash
docker compose up -d --build
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment details.

## Contact

<p>
  <a href="https://portfolio-beta-eight-29.vercel.app">
    <img src="https://img.shields.io/badge/Portfolio-Visit%20Site-a11212?style=for-the-badge" alt="Portfolio" />
  </a>
  <a href="https://www.linkedin.com/in/munvar-khajavali-shaik">
    <img src="https://img.shields.io/badge/LinkedIn-Connect-0a66c2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="mailto:munvar021@gmail.com">
    <img src="https://img.shields.io/badge/Email-Say%20Hello-b91c1c?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</p>
