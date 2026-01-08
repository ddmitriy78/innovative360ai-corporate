import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const values = [
  {
    icon: '🎯',
    title: 'Innovation First',
    description: 'We constantly push the boundaries of what AI can do for businesses, staying ahead of the curve with cutting-edge technology.'
  },
  {
    icon: '🤝',
    title: 'Customer Success',
    description: 'Your success is our success. We build solutions that genuinely solve problems and create measurable value.'
  },
  {
    icon: '🔒',
    title: 'Trust & Security',
    description: 'We handle your data with the utmost care, implementing enterprise-grade security and transparent practices.'
  },
  {
    icon: '⚡',
    title: 'Simplicity',
    description: 'Powerful technology should be easy to use. We obsess over creating intuitive experiences for everyone.'
  }
]

const team = [
  {
    name: 'Leadership Team',
    description: 'Our experienced leadership brings decades of combined experience in AI, enterprise software, and business operations.',
    icon: '👔'
  },
  {
    name: 'Engineering',
    description: 'World-class engineers building reliable, scalable AI systems that businesses can depend on.',
    icon: '⚙️'
  },
  {
    name: 'Customer Success',
    description: 'Dedicated specialists ensuring every customer gets the most value from our solutions.',
    icon: '💬'
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
                <span className="placeholder-icon">🚀</span>
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
