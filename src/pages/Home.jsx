import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
    <path d="M14.5 2a7.5 7.5 0 017.5 7.5" opacity="0.5"/>
    <path d="M14.5 6a3.5 3.5 0 013.5 3.5" opacity="0.7"/>
  </svg>
)

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" strokeWidth="2"/>
  </svg>
)

const AutomationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
    <circle cx="12" cy="12" r="8" opacity="0.3" strokeDasharray="4 2"/>
  </svg>
)

const products = [
  {
    icon: <PhoneIcon />,
    title: 'AI Voice Scheduling',
    description: 'Never miss a booking again. Our AI assistant answers calls 24/7, schedules appointments, and syncs with your calendar.',
    link: '/products',
    cta: 'Learn More'
  },
  {
    icon: <CalendarIcon />,
    title: 'Smart Calendar Integration',
    description: 'Seamlessly connects with Google Calendar and Microsoft Outlook. Real-time availability, zero double-bookings.',
    link: '/products',
    cta: 'Learn More'
  },
  {
    icon: <AutomationIcon />,
    title: 'Business Automation',
    description: 'From email confirmations to SMS reminders, automate your entire customer communication workflow.',
    link: '/products',
    cta: 'Learn More'
  }
]

const stats = [
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'AI Availability' },
  { value: '50+', label: 'Languages' },
  { value: '<3s', label: 'Response Time' }
]

const testimonials = [
  {
    quote: "This AI scheduling system has transformed how we handle appointments. Our no-show rate dropped by 40%.",
    author: "Sarah M.",
    role: "Salon Owner",
    avatar: "SM"
  },
  {
    quote: "The voice AI is incredibly natural. Customers often don't realize they're talking to an AI assistant.",
    author: "Michael R.",
    role: "Healthcare Practice Manager",
    avatar: "MR"
  },
  {
    quote: "Setup was a breeze. We were up and running in less than 5 minutes with all our services configured.",
    author: "Jennifer L.",
    role: "Fitness Studio Owner",
    avatar: "JL"
  }
]

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Intelligent AI Solutions for Modern Business
          </h1>
          <p className="hero-subtitle">
            Transform your operations with AI-powered voice assistants, smart scheduling,
            and seamless automation. Built for businesses that want to work smarter.
          </p>
          <div className="hero-actions">
            <a
              href="https://ai-schedule.innovative360ai.com/register"
              className="btn btn-white btn-large"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Free Trial
            </a>
            <Link to="/products" className="btn btn-outline-white btn-large">
              View Products
            </Link>
          </div>

          {/* AI Voice Call Preview */}
          <div className="ai-chat-preview">
            <div className="phone-mockup">
              <div className="phone-header">
                <div className="call-icon">📞</div>
                <div className="chat-header-info">
                  <div className="chat-header-name">AI Voice Assistant</div>
                  <div className="chat-header-status">Active Call - 00:47</div>
                </div>
              </div>
              <div className="phone-messages">
                <div className="call-status">
                  <div className="waveform">
                    <span className="wave-bar"></span>
                    <span className="wave-bar"></span>
                    <span className="wave-bar"></span>
                    <span className="wave-bar"></span>
                    <span className="wave-bar"></span>
                  </div>
                  <p className="listening-text">Listening...</p>
                </div>
                <div className="phone-message bot">
                  <div className="phone-msg-avatar">🤖</div>
                  <div className="phone-msg-bubble">
                    Hi! I can help schedule your appointment. What service do you need?
                  </div>
                </div>
                <div className="phone-message user">
                  <div className="phone-msg-bubble">
                    <span style={{ opacity: 0.7 }}>🎤</span> "Haircut tomorrow at 3pm"
                  </div>
                  <div className="phone-msg-avatar">👤</div>
                </div>
                <div className="phone-message bot">
                  <div className="phone-msg-avatar">🤖</div>
                  <div className="phone-msg-bubble">
                    Perfect! Booked for tomorrow at 3:00 PM. Confirmation sent!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="section-container">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            Comprehensive AI solutions designed to streamline your business operations
          </p>
          <div className="products-grid">
            {products.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-icon">{product.icon}</div>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <Link to={product.link} className="product-link">
                  {product.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-container">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Businesses trust Innovative 360 AI to power their operations
          </p>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.avatar}</div>
                  <div className="author-info">
                    <div className="author-name">{testimonial.author}</div>
                    <div className="author-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-container">
          <h2 className="cta-title">Ready to Transform Your Business?</h2>
          <p className="cta-subtitle">
            Join hundreds of businesses already using AI to work smarter.
            Start your free 14-day trial today.
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
