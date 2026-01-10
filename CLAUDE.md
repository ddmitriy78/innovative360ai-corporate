# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm run dev      # Start dev server on port 5174
npm run build    # Build production bundle to /dist
npm run preview  # Preview production build
```

## Deployment

**IMPORTANT: CI/CD Only Deployment Policy**
- **NEVER deploy manually** - All deployments must go through GitHub Actions CI/CD pipeline
- Push to `main` branch automatically triggers build and deployment to AWS S3 + CloudFront invalidation
- Manual deployments via `deploy-corporate.sh` or `aws s3 sync` commands are **PROHIBITED**
- This ensures consistent deployments, proper testing, and audit trail

**Required GitHub Secrets:**
- `AWS_ACCESS_KEY_ID` - IAM user access key with S3 and CloudFront permissions
- `AWS_SECRET_ACCESS_KEY` - IAM user secret key

**Required GitHub Variables:**
- `CLOUDFRONT_DISTRIBUTION_ID` - CloudFront distribution ID for cache invalidation

**Setup Instructions:**
1. Go to repository Settings → Secrets and variables → Actions
2. Add secrets: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `ANTHROPIC_API_KEY`
3. Add variable: `CLOUDFRONT_DISTRIBUTION_ID` (E18X59M2CMD9OJ)
4. Ensure IAM user has permissions for S3 (PutObject, DeleteObject) and CloudFront (CreateInvalidation)

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

## Code Review Guidelines

**Automated PR Reviews:** Claude Code automatically reviews all pull requests via GitHub Actions (`.github/workflows/claude-review.yml`).

**Interactive Reviews:** Mention `@claude` in PR comments for specific questions or code review requests.

**Review Focus Areas:**

1. **Code Quality & React Best Practices**
   - Follow existing patterns: React 18 hooks, functional components
   - Component structure: shared in `src/components/`, pages in `src/pages/`
   - Co-locate CSS files with components (e.g., `Contact.jsx` + `Contact.css`)
   - Proper hook usage: dependencies in `useEffect`, `useState` patterns
   - React Router v7 route definitions in `src/App.jsx`

2. **Security**
   - **CRITICAL:** No hardcoded credentials, API keys, or AWS secrets in code
   - Validate all user input in forms
   - Check for XSS vulnerabilities in dynamic content
   - No `dangerouslySetInnerHTML` without sanitization
   - Environment variables must use proper validation

3. **CSS & Design Consistency**
   - Use brand colors: gradient `#667eea` → `#764ba2`, text `#1a1a2e`, bg `#f8fafc`
   - Follow existing spacing and typography patterns
   - Responsive design: test mobile breakpoints (max-width: 768px)
   - Pure CSS only - no CSS frameworks (Tailwind, Bootstrap, etc.)
   - Hero sections use gradient overlay + background image pattern

4. **Build & Deployment Safety**
   - Changes must not break `npm run build`
   - Test production build output in `/dist`
   - No console errors or warnings in production
   - Verify asset paths are correct (images in `/public/images/`)
   - Respect CI/CD-only deployment policy (no manual deployment commands)

5. **A2P 10DLC Compliance** (for SMS-related changes)
   - SMS Terms page must remain compliant at `/sms-terms`
   - All SMS-related content must follow TCPA regulations
   - Verify opt-in/opt-out language is accurate
   - Check contact information consistency (+1-415-532-2679, contact@innovative360ai.com)

6. **Performance**
   - Check for unnecessary re-renders
   - Verify images are optimized
   - Avoid large bundle size increases
   - Use lazy loading for heavy components if needed

**Review Response Format:**
- Provide concise, actionable feedback
- Reference specific files and line numbers
- Suggest concrete fixes with code examples
- Flag security issues with HIGH priority
- Approve PRs that meet all standards
