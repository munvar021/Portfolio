# Deployment Guide

This project is a Next.js app configured for standalone production output through `next.config.ts`.

Node.js 22.13 or newer is required. Local development and Docker use Node.js 26; CI builds on both Node.js 24 and 26. Run `nvm use` to select the version in `.nvmrc`.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your EmailJS values. Set the same variables in Vercel for each deployment environment.

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

These public values are bundled into the browser assets during the build. Rebuild the application or Docker image after changing them. Without these values, the pages work but the contact form cannot send email.

## Local Development

```bash
nvm use
npm ci
cp .env.example .env.local
npm run dev
```

The app runs at `http://localhost:3000` unless that port is already in use.

## Build Verification

```bash
npm run lint
npm run typecheck
npm run build
```

ESLint and TypeScript checks run separately. The build performs Next compilation, type checking, page data collection, and static generation.

## Vercel

1. Import the GitHub repository in Vercel.
2. Select Node.js 24.x from the [supported Vercel runtimes](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions).
3. Add the `NEXT_PUBLIC_EMAILJS_*` environment variables.
4. Set the production branch to `main`.
5. Deploy. `vercel.json` selects Next.js, installs with `npm ci`, runs `npm run build`, and configures response headers.

Vercel's GitHub integration creates preview deployments for pull requests and production deployments from `main`. Review the preview and CI results before merging.

## Docker

The Dockerfile uses a shared Node.js 26 Debian slim base and three build stages:

- `deps`: installs locked dependencies with `npm ci` and a BuildKit npm cache
- `builder`: runs `npm run build`
- `production`: copies the standalone server, public files, and static assets, then serves them as the non-root `node` user with a bounded `/health.json` health check

Compose passes the EmailJS values to Docker as build arguments. Use `--env-file .env.local` so Compose reads them when interpolating the build configuration. A service-level `env_file` only supplies runtime variables and cannot configure these public browser values after the build.

Run locally:

```bash
docker compose --env-file .env.local config --quiet
docker compose --env-file .env.local up -d --build --wait
curl --fail http://127.0.0.1:3000/health.json
```

The default endpoint is `http://127.0.0.1:3000`. `APP_PORT` changes the host port; `HOST_IP` defaults to `127.0.0.1`. Set `HOST_IP=0.0.0.0` to bind the published ports on all host interfaces. The application continues to listen on port 3000 inside the container.

View logs or stop the stack:

```bash
docker compose --env-file .env.local logs --tail=100 -f
docker compose --env-file .env.local --profile proxy down
```

The `NODE_VERSION` Docker build argument defaults to `26-bookworm-slim`. The Debian base supports native dependencies using glibc. `.dockerignore` keeps local environment files, credentials, caches, and development tools out of the build context.

## nginx

Start the optional reverse proxy with the `proxy` profile:

```bash
docker compose --env-file .env.local --profile proxy up -d --build --wait
curl --fail http://127.0.0.1:8080/health.json
```

The proxy is available at `http://127.0.0.1:8080`; `NGINX_PORT` changes that port. It waits for the application health check before starting and mounts `nginx.conf` read-only.

The configuration uses Docker DNS to follow recreated app containers, forwards the original host and protocol, enables gzip and conditional WebSocket upgrades, and disables buffering for [Next.js streaming](https://nextjs.org/docs/app/guides/self-hosting#streaming-and-suspense). Next.js controls caching for its responses and static assets. The bundled listener uses HTTP; configure HTTPS at your external ingress when hosting publicly.

## CI/CD

The GitHub Actions workflow in `.github/workflows/ci-cd.yml` runs on pushes and pull requests to `main` and `develop`, and supports manual runs.

Its jobs run in parallel:

- `checks`: installs locked dependencies, then runs ESLint and TypeScript on the Node.js version in `.nvmrc`
- `build`: installs locked dependencies and creates production builds on Node.js 24 and 26
- `docker`: validates Compose and nginx configuration, builds and loads the image with the GitHub Actions build cache, then checks app health directly and the health, home, and resume endpoints through nginx

Actions are pinned to release commit hashes. Jobs have time limits and cancel superseded runs on the same branch. Container logs are printed on failure and test containers are removed after each run.

Vercel manages deployments through its GitHub integration; the workflow validates the source and containers without needing deployment credentials.
