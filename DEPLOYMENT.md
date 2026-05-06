# DevOps & Deployment Guide

## 🚀 Production Setup

### Vercel Deployment (Current)

1. **Connect Repository**: Link your GitHub repo to Vercel
2. **Environment Variables**: Add in Vercel dashboard:
   - `REACT_APP_EMAILJS_SERVICE_ID`
   - `REACT_APP_EMAILJS_TEMPLATE_ID`
   - `REACT_APP_EMAILJS_PUBLIC_KEY`

3. **Auto Deploy**: Pushes to `main` trigger production deploys

### CI/CD Pipeline

GitHub Actions automatically:
- Runs tests on PRs and pushes
- Builds the application
- Validates code quality
- Deploys via Vercel integration

### Docker Deployment (Alternative)

```bash
# Build image
docker build -t portfolio .

# Run container
docker-compose up -d

# Access at http://localhost:3000
```

## 🔒 Security

- Security headers configured in `vercel.json`
- Environment variables never committed
- HTTPS enforced by Vercel
- XSS and clickjacking protection

## 📊 Monitoring

Add to Vercel dashboard:
- Analytics
- Web Vitals
- Error tracking

## 🔄 Deployment Workflow

1. **Development**: Work on feature branches
2. **PR**: Create PR to `main` → triggers tests
3. **Review**: Preview deployment created automatically
4. **Merge**: Auto-deploys to production
5. **Monitor**: Check Vercel dashboard for metrics

## 📝 Environment Variables

Copy `.env.example` to `.env` and fill in values:
```bash
cp .env.example .env
```

Never commit `.env` file.
