# Innovative 360 AI - Corporate Website

Corporate website for Innovative 360 AI, showcasing our suite of AI-powered business solutions.

## Live Site

- **Production:** https://www.innovative360ai.com

## Technology Stack

- React 18
- React Router v7
- Vite 5
- Pure CSS (no frameworks)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
corporate-site/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx/css
│   │   └── Footer.jsx/css
│   ├── pages/
│   │   ├── Home.jsx/css
│   │   ├── About.jsx/css
│   │   ├── Products.jsx/css
│   │   ├── Contact.jsx/css
│   │   ├── Privacy.jsx
│   │   ├── Terms.jsx
│   │   └── Legal.css
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── vite.config.js
```

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero, products, testimonials |
| `/about` | About Us | Company story, values, team |
| `/products` | Products | Multi-product showcase |
| `/contact` | Contact | Contact form, FAQ |
| `/privacy` | Privacy Policy | Legal privacy policy |
| `/terms` | Terms of Service | Legal terms |
| `/sms-terms` | SMS Terms | SMS/A2P 10DLC compliance terms |
| `/careers` | Careers | Coming soon |
| `/press` | Press | Coming soon |
| `/cookies` | Cookie Policy | Coming soon |

## Deployment

**Automated CI/CD:** All deployments happen automatically via GitHub Actions when pushing to `main` branch.

- ✅ Build process runs on every push
- ✅ Automated deployment to S3
- ✅ CloudFront cache invalidation
- ✅ Production URL: https://www.innovative360ai.com

### AWS Infrastructure Required

1. **S3 Bucket:** `www.innovative360ai.com`
   - Static website hosting enabled
   - Public access configured

2. **CloudFront Distribution:**
   - Origin: S3 bucket
   - SSL certificate from ACM
   - Custom error response for SPA routing (404 → /index.html)

3. **Route53 DNS:**
   - `innovative360ai.com` → CloudFront
   - `www.innovative360ai.com` → CloudFront

4. **ACM Certificate:**
   - Covers both root and www domains

## Related Projects

- **AI Voice Scheduling App:** https://ai-schedule.innovative360ai.com
- **API Backend:** Lambda + API Gateway

## Brand Assets

- **Primary Gradient:** `#667eea` → `#764ba2`
- **Font:** Inter (system fallback)
- **Logo:** "360" icon with gradient background
test trigger
Trigger Claude review test
