import React from 'react'
import { Link } from 'react-router-dom'
import './Products.css'

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
    <path d="M14.5 2a7.5 7.5 0 017.5 7.5" opacity="0.5"/>
    <path d="M14.5 6a3.5 3.5 0 013.5 3.5" opacity="0.7"/>
  </svg>
)

const MessageSquareIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
    <circle cx="9" cy="10" r="1" fill="currentColor"/>
    <circle cx="15" cy="10" r="1" fill="currentColor"/>
    <path d="M9 14c.5 1 1.5 1.5 3 1.5s2.5-.5 3-1.5" opacity="0.7"/>
  </svg>
)

const WorkflowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
    <circle cx="12" cy="12" r="8" opacity="0.3" strokeDasharray="4 2"/>
  </svg>
)

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18"/>
    <path d="M18 17l-3-5-4 4-4-6-4 5" opacity="0.7"/>
    <circle cx="7" cy="15" r="2" fill="currentColor"/>
    <circle cx="11" cy="13" r="2" fill="currentColor"/>
    <circle cx="15" cy="8" r="2" fill="currentColor"/>
  </svg>
)

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6" opacity="0.7"/>
  </svg>
)

const SmartphoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
    <line x1="12" y1="18" x2="12" y2="18" strokeWidth="2.5"/>
  </svg>
)

const SlackIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="9" width="4" height="4" rx="1"/>
    <rect x="17" y="9" width="4" height="4" rx="1"/>
    <rect x="10" y="2" width="4" height="4" rx="1"/>
    <rect x="10" y="16" width="4" height="4" rx="1"/>
  </svg>
)

const ZapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>
  </svg>
)

const CloudIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/>
  </svg>
)

const TargetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
)

const CreditCardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
    <line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
)

const products = [
  {
    id: 'voice-scheduling',
    icon: <PhoneIcon />,
    name: 'AI Voice Scheduling',
    tagline: 'Never miss a booking again',
    description: 'Our flagship AI voice assistant answers calls 24/7, schedules appointments, sends confirmations, and syncs with your calendar. Multilingual support with natural conversation flow.',
    features: [
      '24/7 AI call answering',
      'Real-time calendar sync',
      'Email & SMS confirmations',
      'Multilingual support (50+ languages)',
      'Smart scheduling rules',
      'Missed-call text-back'
    ],
    status: 'available',
    ctaText: 'Start Free Trial',
    ctaLink: 'https://ai-schedule.innovative360ai.com/register'
  },
  {
    id: 'customer-ai',
    icon: <MessageSquareIcon />,
    name: 'Customer AI Agent',
    tagline: 'AI-powered customer support',
    description: 'Deploy intelligent AI agents that handle customer inquiries, support tickets, and FAQs. Seamlessly escalate to human agents when needed.',
    features: [
      'Natural language understanding',
      'Knowledge base integration',
      'Multi-channel support',
      'Smart escalation rules',
      'Sentiment analysis',
      'Custom training on your data'
    ],
    status: 'coming-soon',
    ctaText: 'Join Waitlist',
    ctaLink: '/contact'
  },
  {
    id: 'workflow-automation',
    icon: <WorkflowIcon />,
    name: 'Workflow Automation',
    tagline: 'Automate repetitive tasks',
    description: 'Build custom automation workflows that connect your tools and eliminate manual tasks. From lead follow-ups to invoice processing.',
    features: [
      'Visual workflow builder',
      '100+ app integrations',
      'Conditional logic & branching',
      'Scheduled triggers',
      'Webhook support',
      'Error handling & retries'
    ],
    status: 'coming-soon',
    ctaText: 'Join Waitlist',
    ctaLink: '/contact'
  },
  {
    id: 'analytics-insights',
    icon: <ChartIcon />,
    name: 'AI Analytics & Insights',
    tagline: 'Data-driven decisions',
    description: 'Get actionable insights from your business data with AI-powered analytics. Understand trends, predict outcomes, and optimize performance.',
    features: [
      'Real-time dashboards',
      'Predictive analytics',
      'Custom reports',
      'Anomaly detection',
      'Natural language queries',
      'Data visualization'
    ],
    status: 'coming-soon',
    ctaText: 'Join Waitlist',
    ctaLink: '/contact'
  }
]

const integrations = [
  { name: 'Google Calendar', icon: <CalendarIcon /> },
  { name: 'Microsoft Outlook', icon: <MailIcon /> },
  { name: 'Twilio', icon: <SmartphoneIcon /> },
  { name: 'Slack', icon: <SlackIcon /> },
  { name: 'Zapier', icon: <ZapIcon /> },
  { name: 'Salesforce', icon: <CloudIcon /> },
  { name: 'HubSpot', icon: <TargetIcon /> },
  { name: 'Stripe', icon: <CreditCardIcon /> }
]

export default function Products() {
  return (
    <div className="products-container">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="hero-content">
          <h1 className="hero-title">AI Products That Work For You</h1>
          <p className="hero-subtitle">
            A complete suite of AI-powered tools designed to automate your business
            operations, delight customers, and drive growth.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-list-section">
        <div className="section-container">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`product-row ${index % 2 === 1 ? 'reverse' : ''}`}
            >
              <div className="product-info">
                <div className="product-header">
                  <span className="product-icon-large">{product.icon}</span>
                  {product.status === 'coming-soon' && (
                    <span className="coming-soon-badge">Coming Soon</span>
                  )}
                </div>
                <h2 className="product-name">{product.name}</h2>
                <p className="product-tagline">{product.tagline}</p>
                <p className="product-description">{product.description}</p>
                <ul className="product-features">
                  {product.features.map((feature, fIndex) => (
                    <li key={fIndex}>
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                {product.status === 'available' ? (
                  <a
                    href={product.ctaLink}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {product.ctaText}
                  </a>
                ) : (
                  <Link to={product.ctaLink} className="btn btn-secondary">
                    {product.ctaText}
                  </Link>
                )}
              </div>
              <div className="product-visual">
                <div className="product-mockup">
                  <div className="mockup-header">
                    <div className="mockup-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="mockup-content">
                    <div className="mockup-icon">{product.icon}</div>
                    <div className="mockup-title">{product.name}</div>
                    <div className="mockup-bars">
                      <div className="bar" style={{ width: '80%' }}></div>
                      <div className="bar" style={{ width: '60%' }}></div>
                      <div className="bar" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations Section */}
      <section className="integrations-section">
        <div className="section-container">
          <h2 className="section-title">Seamless Integrations</h2>
          <p className="section-subtitle">
            Connect with the tools you already use
          </p>
          <div className="integrations-grid">
            {integrations.map((integration, index) => (
              <div key={index} className="integration-item">
                <span className="integration-icon">{integration.icon}</span>
                <span className="integration-name">{integration.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA Section */}
      <section className="pricing-cta-section">
        <div className="section-container">
          <div className="pricing-cta-content">
            <h2 className="pricing-cta-title">Simple, Transparent Pricing</h2>
            <p className="pricing-cta-subtitle">
              Start with our free trial. Upgrade as you grow. No hidden fees.
            </p>
            <div className="pricing-cards-preview">
              <div className="price-card-mini">
                <h4>Starter</h4>
                <div className="price">$49<span>/mo</span></div>
                <p>50 calls included</p>
              </div>
              <div className="price-card-mini popular">
                <div className="popular-tag">Most Popular</div>
                <h4>Pro</h4>
                <div className="price">$199<span>/mo</span></div>
                <p>300 calls included</p>
              </div>
              <div className="price-card-mini">
                <h4>Growth</h4>
                <div className="price">$399<span>/mo</span></div>
                <p>600 calls included</p>
              </div>
            </div>
            <a
              href="https://ai-schedule.innovative360ai.com/pricing"
              className="btn btn-primary btn-large"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Full Pricing
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-container">
          <h2 className="cta-title">Ready to Get Started?</h2>
          <p className="cta-subtitle">
            Transform your business with AI. Start your free 14-day trial today.
          </p>
          <div className="cta-actions">
            <a
              href="https://ai-schedule.innovative360ai.com/register"
              className="btn btn-white btn-large"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Free Trial
            </a>
            <Link to="/contact" className="btn btn-outline-white btn-large">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
