import React from 'react'
import './Legal.css'

export default function Privacy() {
  const lastUpdated = 'January 7, 2026'

  return (
    <div className="legal-container">
      <section className="legal-hero">
        <div className="hero-content">
          <h1 className="hero-title">Privacy Policy</h1>
          <p className="hero-subtitle">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="legal-content">
        <div className="content-wrapper">
          <div className="legal-intro">
            <p>
              At Innovative 360 AI ("we," "our," or "us"), we are committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
              your information when you use our services.
            </p>
          </div>

          <div className="legal-section">
            <h2>1. Information We Collect</h2>

            <h3>1.1 Personal Information</h3>
            <p>We may collect personal information that you provide directly to us, including:</p>
            <ul>
              <li>Name and contact information (email address, phone number)</li>
              <li>Account credentials (username, password)</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Business information (company name, address)</li>
              <li>Communications you send to us</li>
            </ul>

            <h3>1.2 Voice and Call Data</h3>
            <p>When you use our AI voice scheduling services:</p>
            <ul>
              <li>Call recordings and transcripts may be processed to provide the service</li>
              <li>Appointment and scheduling information</li>
              <li>Caller information (phone numbers, names provided during calls)</li>
            </ul>

            <h3>1.3 Automatically Collected Information</h3>
            <p>We automatically collect certain information when you use our services:</p>
            <ul>
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Usage data (pages visited, features used, time spent)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, investigate, and prevent fraudulent activities</li>
              <li>Personalize and improve your experience</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>3. Information Sharing</h2>
            <p>We may share your information in the following circumstances:</p>
            <ul>
              <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf</li>
              <li><strong>Business Transfers:</strong> In connection with any merger, acquisition, or sale of assets</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>With Your Consent:</strong> When you have given us permission to share</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>
          </div>

          <div className="legal-section">
            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your
              personal information against unauthorized access, alteration, disclosure, or
              destruction. These measures include:
            </p>
            <ul>
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and audits</li>
              <li>Access controls and authentication measures</li>
              <li>Employee training on data protection</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>5. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the
              purposes for which it was collected, including to satisfy legal, accounting,
              or reporting requirements. Call recordings are retained according to your
              account settings and applicable legal requirements.
            </p>
          </div>

          <div className="legal-section">
            <h2>6. Your Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul>
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Opt-out:</strong> Opt out of marketing communications</li>
            </ul>
            <p>To exercise these rights, please contact us at privacy@innovative360ai.com.</p>
          </div>

          <div className="legal-section">
            <h2>7. California Privacy Rights</h2>
            <p>
              California residents have additional rights under the California Consumer Privacy
              Act (CCPA), including the right to know what personal information is collected,
              the right to delete personal information, and the right to opt-out of the sale
              of personal information.
            </p>
          </div>

          <div className="legal-section">
            <h2>8. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than
              your country of residence. We ensure appropriate safeguards are in place for
              such transfers in compliance with applicable data protection laws.
            </p>
          </div>

          <div className="legal-section">
            <h2>9. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 18. We do not
              knowingly collect personal information from children. If we learn we have
              collected information from a child, we will take steps to delete it.
            </p>
          </div>

          <div className="legal-section">
            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of
              any changes by posting the new policy on this page and updating the "Last
              updated" date. Your continued use of our services after any changes indicates
              your acceptance of the updated policy.
            </p>
          </div>

          <div className="legal-section">
            <h2>11. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices,
              please contact us at:
            </p>
            <div className="contact-info">
              <p><strong>Innovative 360 AI</strong></p>
              <p>Email: privacy@innovative360ai.com</p>
              <p>Address: Los Angeles, California</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
