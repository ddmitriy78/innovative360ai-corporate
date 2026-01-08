import React, { useState } from 'react'
import './Contact.css'

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6" opacity="0.7"/>
  </svg>
)

const MessageCircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
    <path d="M8 10h8M8 14h4" opacity="0.6"/>
  </svg>
)

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v6l4 2"/>
  </svg>
)

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" opacity="0.6"/>
  </svg>
)

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="M9 12l2 2 4-4" opacity="0.6"/>
  </svg>
)

const contactMethods = [
  {
    icon: <MailIcon />,
    title: 'Email',
    description: 'Our support team typically responds within 24 hours.',
    value: 'contact@innovative360ai.com',
    link: 'mailto:contact@innovative360ai.com'
  },
  {
    icon: <MessageCircleIcon />,
    title: 'Live Chat',
    description: 'Chat with our team during business hours.',
    value: 'Available 9am - 6pm PST',
    link: null
  },
  {
    icon: <MapPinIcon />,
    title: 'Office',
    description: 'Visit us at our headquarters.',
    value: 'Los Angeles, California',
    link: null
  }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'general',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, this would send to an API endpoint
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1 className="hero-title">Contact Us</h1>
          <p className="hero-subtitle">
            Have questions? We'd love to hear from you. Send us a message
            and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="methods-section">
        <div className="section-container">
          <div className="methods-grid">
            {contactMethods.map((method, index) => (
              <div key={index} className="method-card">
                <div className="method-icon">{method.icon}</div>
                <h3 className="method-title">{method.title}</h3>
                <p className="method-description">{method.description}</p>
                {method.link ? (
                  <a href={method.link} className="method-value method-link">
                    {method.value}
                  </a>
                ) : (
                  <span className="method-value">{method.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="form-section">
        <div className="section-container">
          <div className="form-grid">
            <div className="form-info">
              <h2 className="section-title">Send Us a Message</h2>
              <p className="form-intro">
                Fill out the form and our team will get back to you within 24 hours.
                For urgent matters, please use email or live chat.
              </p>
              <div className="response-info">
                <div className="response-item">
                  <span className="response-icon"><ClockIcon /></span>
                  <span>Average response time: 4 hours</span>
                </div>
                <div className="response-item">
                  <span className="response-icon"><GlobeIcon /></span>
                  <span>Support available worldwide</span>
                </div>
                <div className="response-item">
                  <span className="response-icon"><ShieldIcon /></span>
                  <span>Your information is secure</span>
                </div>
              </div>
            </div>

            <div className="form-wrapper">
              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        subject: 'general',
                        message: ''
                      })
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="company">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject *</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="general">General Inquiry</option>
                        <option value="sales">Sales</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership</option>
                        <option value="press">Press/Media</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-full">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How do I get started?</h4>
              <p>Sign up for a free 14-day trial. No credit card required. You can set up your AI assistant in under 5 minutes.</p>
            </div>
            <div className="faq-item">
              <h4>Do you offer custom solutions?</h4>
              <p>Yes! Contact our sales team to discuss enterprise solutions and custom integrations tailored to your needs.</p>
            </div>
            <div className="faq-item">
              <h4>What support is included?</h4>
              <p>All plans include email support. Pro and Growth plans include priority support with faster response times.</p>
            </div>
            <div className="faq-item">
              <h4>Can I cancel anytime?</h4>
              <p>Absolutely. You can cancel your subscription at any time with no cancellation fees or long-term commitments.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
