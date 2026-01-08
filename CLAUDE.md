# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm run dev      # Start dev server on port 5174
npm run build    # Build production bundle to /dist
npm run preview  # Preview production build
```

## Deployment

**Automated (GitHub Actions):** Push to `main` triggers build and deployment to AWS S3 + CloudFront invalidation.

**Manual:**
```bash
./deploy-corporate.sh [aws-profile] [region]  # Defaults: profile=default, region=us-west-1
```

**AWS Infrastructure:**
| Resource | ID/Name |
|----------|---------|
| S3 Bucket | `www.innovative360ai.com` (us-west-2) |
| CloudFront | `E18X59M2CMD9OJ` |
| Route53 Zone | `Z01523492A5RZEDRLWMLY` |
| ACM Certificate | `arn:aws:acm:us-east-1:732417314062:certificate/39b06f23-5bbe-40a1-a07b-3646df17478a` |

**Live URLs:** https://innovative360ai.com, https://www.innovative360ai.com

## Architecture

React 18 SPA with React Router v7, built with Vite 5. Pure CSS styling (no frameworks).

**Structure:**
- `src/components/` - Shared components (Navbar, Footer)
- `src/pages/` - Route page components with co-located CSS files
- `src/App.jsx` - Main app with all route definitions
- `src/styles.css` - Global styles and design tokens

**Routing:** BrowserRouter with routes for Home, About, Products, Contact, Privacy, Terms, plus placeholder pages (Careers, Press, Cookies).

**Brand Colors:**
- Primary gradient: `#667eea` → `#764ba2`
- Text: `#1a1a2e`
- Background: `#f8fafc`

## External Links

The site links to a separate app at `ai-schedule.innovative360ai.com` for login/register functionality.
