import React from 'react'
import './Legal.css'

export default function Terms() {
  const lastUpdated = 'January 7, 2026'

  return (
    <div className="legal-container">
      <section className="legal-hero">
        <div className="hero-content">
          <h1 className="hero-title">Terms of Service</h1>
          <p className="hero-subtitle">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="legal-content">
        <div className="content-wrapper">
          <div className="legal-intro">
            <p>
              Welcome to Innovative 360 AI. These Terms of Service ("Terms") govern your
              access to and use of our website, products, and services. By accessing or
              using our services, you agree to be bound by these Terms.
            </p>
          </div>

          <div className="legal-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By creating an account or using any of our services, you acknowledge that
              you have read, understood, and agree to be bound by these Terms. If you do
              not agree to these Terms, you may not access or use our services.
            </p>
            <p>
              We reserve the right to modify these Terms at any time. We will provide
              notice of any material changes by posting the updated Terms on our website.
              Your continued use of our services after such changes constitutes your
              acceptance of the modified Terms.
            </p>
          </div>

          <div className="legal-section">
            <h2>2. Description of Services</h2>
            <p>
              Innovative 360 AI provides AI-powered business solutions, including but
              not limited to:
            </p>
            <ul>
              <li>AI Voice Scheduling and appointment management</li>
              <li>Automated customer communication tools</li>
              <li>Calendar integration and synchronization</li>
              <li>Business automation services</li>
              <li>Related analytics and reporting features</li>
            </ul>
            <p>
              We reserve the right to modify, suspend, or discontinue any aspect of our
              services at any time without prior notice.
            </p>
          </div>

          <div className="legal-section">
            <h2>3. Account Registration</h2>
            <p>
              To use certain features of our services, you must create an account. You
              agree to:
            </p>
            <ul>
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your information as necessary</li>
              <li>Keep your password secure and confidential</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized access</li>
            </ul>
            <p>
              We reserve the right to suspend or terminate accounts that violate these
              Terms or are inactive for extended periods.
            </p>
          </div>

          <div className="legal-section">
            <h2>4. Acceptable Use</h2>
            <p>You agree not to use our services to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights of others</li>
              <li>Transmit spam, malware, or other harmful content</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of our services</li>
              <li>Use our services for any fraudulent or deceptive purposes</li>
              <li>Make automated calls that violate TCPA or other regulations</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>5. Payment Terms</h2>
            <p>
              If you subscribe to a paid plan, you agree to pay all applicable fees as
              described on our pricing page. Payment terms include:
            </p>
            <ul>
              <li>Fees are billed in advance on a monthly or annual basis</li>
              <li>Payments are non-refundable except as required by law</li>
              <li>We may change pricing with 30 days' notice</li>
              <li>Failure to pay may result in service suspension</li>
              <li>You are responsible for any applicable taxes</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>6. Intellectual Property</h2>
            <p>
              All content, features, and functionality of our services, including but
              not limited to text, graphics, logos, software, and AI models, are owned
              by Innovative 360 AI or our licensors and are protected by intellectual
              property laws.
            </p>
            <p>
              You retain ownership of any content you submit through our services. By
              submitting content, you grant us a worldwide, non-exclusive license to
              use, process, and store that content to provide our services.
            </p>
          </div>

          <div className="legal-section">
            <h2>7. Third-Party Integrations</h2>
            <p>
              Our services may integrate with third-party applications (such as Google
              Calendar, Microsoft Outlook, or telephony providers). Your use of these
              integrations is subject to the terms of service of those third parties.
              We are not responsible for third-party services or their availability.
            </p>
          </div>

          <div className="legal-section">
            <h2>8. Disclaimer of Warranties</h2>
            <p>
              OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES
              OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p>
              We do not guarantee that our services will be uninterrupted, error-free,
              or that defects will be corrected. AI-generated responses may contain
              errors, and you should verify important information independently.
            </p>
          </div>

          <div className="legal-section">
            <h2>9. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, INNOVATIVE 360 AI SHALL NOT BE
              LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
              DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES.
            </p>
            <p>
              Our total liability for any claims arising from these Terms or your use
              of our services shall not exceed the amount you paid us in the twelve
              months preceding the claim.
            </p>
          </div>

          <div className="legal-section">
            <h2>10. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Innovative 360 AI and its
              officers, directors, employees, and agents from any claims, damages,
              losses, or expenses arising from your use of our services or violation
              of these Terms.
            </p>
          </div>

          <div className="legal-section">
            <h2>11. Termination</h2>
            <p>
              You may terminate your account at any time by contacting us or using
              the account settings. We may terminate or suspend your access to our
              services immediately, without notice, for any breach of these Terms.
            </p>
            <p>
              Upon termination, your right to use our services ceases immediately.
              We may retain your data as required by law or for legitimate business
              purposes.
            </p>
          </div>

          <div className="legal-section">
            <h2>12. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the
              laws of the State of California, without regard to its conflict of law
              provisions. Any disputes arising from these Terms shall be resolved in
              the state or federal courts located in Los Angeles County, California.
            </p>
          </div>

          <div className="legal-section">
            <h2>13. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="contact-info">
              <p><strong>Innovative 360 AI</strong></p>
              <p>Email: legal@innovative360ai.com</p>
              <p>Address: Los Angeles, California</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
