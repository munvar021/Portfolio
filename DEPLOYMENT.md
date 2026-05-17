# Deployment Guide

This project is a Next.js app configured for standalone production output through `next.config.ts`.

## Environment Variables

Create `.env.local` for local development and add the same values in your hosting provider.

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

These values are used by the shared contact form hook in `src/hooks/use-contact-form.ts`.

## Local Development

```bash
npm install
cp .env.example .env.local
npm run dev
```

The app runs at `http://localhost:3000` unless that port is already in use.

## Build Verification

```bash
npm run build
```

The build performs Next compilation, type checking, page data collection, and static generation.

## Vercel

1. Import the GitHub repository in Vercel.
2. Add the `NEXT_PUBLIC_EMAILJS_*` environment variables.
3. Keep the framework preset as Next.js.
4. Deploy from `main`.

Preview and production deployments can be handled by Vercel's GitHub integration.

## Docker

The Dockerfile uses a multi-stage build:

- `deps`: installs dependencies with `npm ci`
- `builder`: runs `npm run build`
- `production`: serves the standalone Next.js server as a non-root user with a `/health.json` health check

Because the contact form uses `NEXT_PUBLIC_*` variables, EmailJS values are passed as Docker build args through `docker-compose.yml`. Create `.env.local` before building the image.

Run locally:

```bash
docker compose up -d --build
```

The container exposes `http://localhost:3000`.

## nginx

`nginx.conf` is available for Docker-network reverse proxy deployments. It proxies to the `portfolio` service on port `3000`, enables gzip, forwards standard proxy headers, and mirrors the production security headers.

## CI/CD

The GitHub Actions workflow in `.github/workflows/ci-cd.yml` runs on pushes to `main` and `develop`, plus pull requests to `main`.

Pipeline steps:

- Check out the repository
- Set up Node.js 20
- Install dependencies with `npm ci`
- Run `npx tsc --noEmit`
- Run `npm run build`
- Validate the Docker image with `docker build`

Deployment steps currently document that Vercel handles preview and production releases through its GitHub integration.
