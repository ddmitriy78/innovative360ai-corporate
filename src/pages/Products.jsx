import React from 'react'
import { Link } from 'react-router-dom'
import './Products.css'

const products = [
  {
    id: 'voice-scheduling',
    icon: '📞',
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
    icon: '💬',
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
    icon: '⚙️',
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
    icon: '📊',
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
  { name: 'Google Calendar', icon: '📅' },
  { name: 'Microsoft Outlook', icon: '📧' },
  { name: 'Twilio', icon: '📱' },
  { name: 'Slack', icon: '💬' },
  { name: 'Zapier', icon: '⚡' },
  { name: 'Salesforce', icon: '☁️' },
  { name: 'HubSpot', icon: '🎯' },
  { name: 'Stripe', icon: '💳' }
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
