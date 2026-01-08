import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const TargetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
)

const HandshakeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 12h2a2 2 0 100-4h-3c-.6 0-1.1.2-1.4.6L3 14h3c1.1 0 2-.9 2-2V9c0-.6.4-1 1-1h2z"/>
    <path d="M13 12h-2a2 2 0 110 4h3c.6 0 1.1-.2 1.4-.6L21 10h-3c-1.1 0-2 .9-2 2v3c0 .6-.4 1-1 1h-2z" opacity="0.7"/>
    <path d="M7 14v-2M17 10v2" opacity="0.5"/>
  </svg>
)

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0110 0v4"/>
    <circle cx="12" cy="16" r="1" fill="currentColor"/>
  </svg>
)

const BoltIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>
  </svg>
)

const LeadershipIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4z"/>
    <circle cx="12" cy="19" r="3"/>
    <path d="M12 16v-3" opacity="0.5"/>
  </svg>
)

const GearIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
  </svg>
)

const MessageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
    <path d="M8 10h8M8 14h4" opacity="0.6"/>
  </svg>
)

const RocketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/>
    <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" opacity="0.6"/>
  </svg>
)

const values = [
  {
    icon: <TargetIcon />,
    title: 'Innovation First',
    description: 'We constantly push the boundaries of what AI can do for businesses, staying ahead of the curve with cutting-edge technology.'
  },
  {
    icon: <HandshakeIcon />,
    title: 'Customer Success',
    description: 'Your success is our success. We build solutions that genuinely solve problems and create measurable value.'
  },
  {
    icon: <LockIcon />,
    title: 'Trust & Security',
    description: 'We handle your data with the utmost care, implementing enterprise-grade security and transparent practices.'
  },
  {
    icon: <BoltIcon />,
    title: 'Simplicity',
    description: 'Powerful technology should be easy to use. We obsess over creating intuitive experiences for everyone.'
  }
]

const team = [
  {
    name: 'Leadership Team',
    description: 'Our experienced leadership brings decades of combined experience in AI, enterprise software, and business operations.',
    icon: <LeadershipIcon />
  },
  {
    name: 'Engineering',
    description: 'World-class engineers building reliable, scalable AI systems that businesses can depend on.',
    icon: <GearIcon />
  },
  {
    name: 'Customer Success',
    description: 'Dedicated specialists ensuring every customer gets the most value from our solutions.',
    icon: <MessageIcon />
  }
]

export default function About() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1 className="hero-title">About Innovative 360 AI</h1>
          <p className="hero-subtitle">
            We're on a mission to make AI accessible and practical for every business.
            Our intelligent solutions automate the mundane so you can focus on what matters.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="section-container">
          <div className="story-grid">
            <div className="story-content">
              <h2 className="section-title">Our Story</h2>
              <p>
                Innovative 360 AI was founded with a simple observation: businesses spend
                countless hours on repetitive tasks that AI could handle better. Phone calls
                go unanswered, appointments get double-booked, and valuable opportunities slip away.
              </p>
              <p>
                We set out to change that. Starting with AI voice scheduling, we've built
                solutions that work around the clock, speak multiple languages, and integrate
                seamlessly with the tools businesses already use.
              </p>
              <p>
                Today, our AI assistants handle thousands of conversations daily, helping
                businesses of all sizes deliver better customer experiences while freeing
                up their teams for higher-value work.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <span className="placeholder-icon"><RocketIcon /></span>
                <span className="placeholder-text">Innovation in Action</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="section-container">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">
            The principles that guide everything we do
          </p>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="section-container">
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">
            Talented individuals dedicated to building the future of business AI
          </p>
          <div className="team-grid">
            {team.map((dept, index) => (
              <div key={index} className="team-card">
                <div className="team-icon">{dept.icon}</div>
                <h3 className="team-name">{dept.name}</h3>
                <p className="team-description">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-container">
          <h2 className="cta-title">Join Us on Our Mission</h2>
          <p className="cta-subtitle">
            Whether you're looking to transform your business or join our team,
            we'd love to hear from you.
          </p>
          <div className="cta-actions">
            <a
              href="https://ai-schedule.innovative360ai.com/register"
              className="btn btn-white btn-large"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try Our Products
            </a>
            <Link to="/contact" className="btn btn-outline-white btn-large">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
