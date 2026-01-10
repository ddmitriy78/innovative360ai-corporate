import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import SmsTerms from './pages/SmsTerms'

// Placeholder components for pages not yet implemented
function ComingSoon({ title }) {
  return (
    <div style={{
      paddingTop: '70px',
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '40px 20px'
    }}>
      <h1 style={{ fontSize: '36px', marginBottom: '16px', color: '#1a1a2e' }}>{title}</h1>
      <p style={{ fontSize: '18px', color: '#666' }}>This page is coming soon.</p>
    </div>
  )
}

function Careers() {
  return <ComingSoon title="Careers" />
}

function Press() {
  return <ComingSoon title="Press" />
}

function Cookies() {
  return <ComingSoon title="Cookie Policy" />
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />

            {/* Legal Pages */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/sms-terms" element={<SmsTerms />} />
            <Route path="/cookies" element={<Cookies />} />

            {/* Company Pages */}
            <Route path="/careers" element={<Careers />} />
            <Route path="/press" element={<Press />} />

            {/* 404 Fallback */}
            <Route path="*" element={
              <div style={{
                paddingTop: '70px',
                minHeight: '60vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '40px 20px'
              }}>
                <h1 style={{ fontSize: '72px', marginBottom: '16px', color: '#667eea' }}>404</h1>
                <p style={{ fontSize: '24px', color: '#1a1a2e', marginBottom: '12px' }}>Page Not Found</p>
                <p style={{ fontSize: '16px', color: '#666', marginBottom: '24px' }}>
                  The page you're looking for doesn't exist.
                </p>
                <a href="/" style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  padding: '14px 28px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}>
                  Go Home
                </a>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
