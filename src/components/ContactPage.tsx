import React, { useState } from 'react';
import { MapPin, MessageSquare, Send, Check } from 'lucide-react';
import { BRAND_WHATSAPP, BRAND_INSTAGRAM } from '../data/perfumes';

interface ContactPageProps {
  onBackToHome: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBackToHome }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'VIP Fragrance Consultation',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', phone: '', subject: 'VIP Fragrance Consultation', message: '' });
    }, 4000);
  };

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#111111', minHeight: '100vh', width: '100%' }}>
      {/* 1. Centered Header */}
      <section
        style={{
          backgroundColor: '#FAF8F5',
          borderBottom: '1px solid #EFECE6',
          padding: '3.5rem clamp(1.25rem, 3.5vw, 3rem) 3rem clamp(1.25rem, 3.5vw, 3rem)',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.25rem', fontSize: '0.74rem', color: '#888888', fontFamily: "'Montserrat', sans-serif" }}>
            <button
              onClick={onBackToHome}
              style={{ background: 'transparent', border: 'none', color: '#888888', cursor: 'pointer', padding: 0 }}
              onMouseEnter={e => (e.currentTarget.style.color = '#C5A059')}
              onMouseLeave={e => (e.currentTarget.style.color = '#888888')}
            >
              Home
            </button>
            <span>/</span>
            <span style={{ color: '#111111', fontWeight: 600 }}>VIP Concierge &amp; Contact</span>
          </div>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)',
              fontStyle: 'italic',
              fontWeight: 600,
              color: '#C5A059',
              letterSpacing: '0.03em',
              margin: '0 0 0.75rem 0'
            }}
          >
            At your distinguished service.
          </p>

          <h1
            style={{
              fontFamily: "'Cinzel', 'Italiana', 'Marcellus', serif",
              fontSize: 'clamp(1.95rem, 4.4vw, 3.5rem)',
              fontWeight: 700,
              color: '#111111',
              margin: '0 0 0.85rem 0',
              letterSpacing: '0.08em'
            }}
          >
            CONTACT Us
          </h1>

          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.86rem',
              color: '#666666',
              maxWidth: '580px',
              margin: '0 auto',
              lineHeight: 1.6
            }}
          >
            Connect directly with our master perfumery advisors for bespoke consultations, corporate gifting, or expedited GCC orders.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '3.5rem clamp(1.25rem, 3.5vw, 3rem) 5rem clamp(1.25rem, 3.5vw, 3rem)'
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2.5rem, 4vw, 4.5rem)',
            alignItems: 'start'
          }}
        >
          {/* LEFT: Contact Information & Direct Channels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h2
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '1.4rem',
                  color: '#111111',
                  margin: '0 0 0.6rem 0',
                  fontWeight: 700
                }}
              >
                Direct Maison Inquiries
              </h2>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.84rem', color: '#666666', lineHeight: 1.6, margin: 0 }}>
                Our dedicated fragrance advisors are available 7 days a week for private consultations and bespoke orders.
              </p>
            </div>

            {/* Channels Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* WhatsApp Direct */}
              <a
                href={`https://wa.me/${BRAND_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  backgroundColor: '#FAF8F5',
                  border: '1px solid #EFECE6',
                  borderRadius: '14px',
                  padding: '1.25rem 1.5rem',
                  textDecoration: 'none',
                  color: '#111111',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#25D366';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#EFECE6';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(37, 211, 102, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#25D366',
                    flexShrink: 0
                  }}
                >
                  <MessageSquare size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#888888', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Instant VIP WhatsApp
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#111111', fontFamily: "'Montserrat', sans-serif" }}>
                    +971 56 570 5449
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#25D366' }}>Online 24/7 for Client Care</div>
                </div>
              </a>

              {/* Instagram Official */}
              <a
                href={BRAND_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  backgroundColor: '#FAF8F5',
                  border: '1px solid #EFECE6',
                  borderRadius: '14px',
                  padding: '1.25rem 1.5rem',
                  textDecoration: 'none',
                  color: '#111111',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#C5A059';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#EFECE6';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(197, 160, 89, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#C5A059',
                    flexShrink: 0
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#888888', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Official Instagram
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#111111', fontFamily: "'Montserrat', sans-serif" }}>
                    @gtheluxuryfragrance
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#C5A059' }}>Behind-the-scenes &amp; New Launches</div>
                </div>
              </a>

              {/* Private Dubai Atelier */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  backgroundColor: '#FAF8F5',
                  border: '1px solid #EFECE6',
                  borderRadius: '14px',
                  padding: '1.25rem 1.5rem'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: '#111111',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    flexShrink: 0
                  }}
                >
                  <MapPin size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#888888', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Haute Parfumerie Atelier
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#111111', fontFamily: "'Montserrat', sans-serif" }}>
                    Downtown Dubai / Dubai Design District
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#777777' }}>United Arab Emirates</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Interactive Message Form */}
          <div
            className="contact-form-card"
            style={{
              backgroundColor: '#FAF8F5',
              borderRadius: '16px',
              border: '1px solid #EFECE6',
              padding: '2.5rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)'
            }}
          >
            <h3
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '1.25rem',
                color: '#111111',
                margin: '0 0 0.5rem 0',
                fontWeight: 700
              }}
            >
              Send an Inquiry
            </h3>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.8rem', color: '#777777', margin: '0 0 1.75rem 0' }}>
              Fill out the form below and our perfumery specialist will respond within 2 hours.
            </p>

            {isSubmitted ? (
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #C5A059',
                  padding: '2.5rem',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: '#C5A059',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem auto'
                  }}
                >
                  <Check size={26} />
                </div>
                <h4 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.15rem', color: '#111111', margin: '0 0 0.5rem 0' }}>
                  Thank You for Reaching Out
                </h4>
                <p style={{ fontSize: '0.84rem', color: '#666666', fontFamily: "'Montserrat', sans-serif", margin: 0 }}>
                  Your message has been received. Our VIP concierge will contact you via WhatsApp or Email promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#333333', marginBottom: '0.4rem', fontFamily: "'Montserrat', sans-serif" }}>
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Sheikh Ahmed / Lord Harrington"
                    style={{
                      width: '100%',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E0DAD0',
                      borderRadius: '8px',
                      padding: '0.75rem 1rem',
                      fontSize: '0.82rem',
                      fontFamily: "'Montserrat', sans-serif",
                      outline: 'none',
                      color: '#111111'
                    }}
                  />
                </div>

                <div className="contact-form-grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#333333', marginBottom: '0.4rem', fontFamily: "'Montserrat', sans-serif" }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                      placeholder="client@luxury.com"
                      style={{
                        width: '100%',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E0DAD0',
                        borderRadius: '8px',
                        padding: '0.75rem 1rem',
                        fontSize: '0.82rem',
                        fontFamily: "'Montserrat', sans-serif",
                        outline: 'none',
                        color: '#111111'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#333333', marginBottom: '0.4rem', fontFamily: "'Montserrat', sans-serif" }}>
                      WhatsApp Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={e => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+971 50 123 4567"
                      style={{
                        width: '100%',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E0DAD0',
                        borderRadius: '8px',
                        padding: '0.75rem 1rem',
                        fontSize: '0.82rem',
                        fontFamily: "'Montserrat', sans-serif",
                        outline: 'none',
                        color: '#111111'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#333333', marginBottom: '0.4rem', fontFamily: "'Montserrat', sans-serif" }}>
                    Inquiry Subject
                  </label>
                  <select
                    value={formState.subject}
                    onChange={e => setFormState({ ...formState, subject: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E0DAD0',
                      borderRadius: '8px',
                      padding: '0.75rem 1rem',
                      fontSize: '0.82rem',
                      fontFamily: "'Montserrat', sans-serif",
                      outline: 'none',
                      color: '#111111',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="VIP Fragrance Consultation">VIP Fragrance Consultation</option>
                    <option value="Order Tracking & Delivery">Order Tracking &amp; Delivery</option>
                    <option value="Corporate Bespoke Gifting">Corporate Bespoke Gifting</option>
                    <option value="Private Vault Discovery Sets">Private Vault Discovery Sets</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#333333', marginBottom: '0.4rem', fontFamily: "'Montserrat', sans-serif" }}>
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell us about the scent profile or custom request you desire..."
                    style={{
                      width: '100%',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E0DAD0',
                      borderRadius: '8px',
                      padding: '0.75rem 1rem',
                      fontSize: '0.82rem',
                      fontFamily: "'Montserrat', sans-serif",
                      outline: 'none',
                      color: '#111111',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    backgroundColor: '#C5A059',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '999px',
                    padding: '0.85rem 2rem',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 4px 18px rgba(197, 160, 89, 0.4)',
                    transition: 'all 0.25s ease',
                    marginTop: '0.5rem'
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#111111')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#C5A059')}
                >
                  <span>SEND INQUIRY TO CONCIERGE</span>
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
