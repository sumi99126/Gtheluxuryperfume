import React from 'react';
import { ShieldCheck, Truck, MessageSquare } from 'lucide-react';
import { BRAND_INSTAGRAM, BRAND_WHATSAPP } from '../data/perfumes';

interface FooterProps {
  onNavigateView?: (view: 'home' | 'shop' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateView }) => {
  const scrollToTop = () => {
    if (onNavigateView) onNavigateView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ backgroundColor: '#000000', color: '#FFFFFF', width: '100%', overflow: 'hidden' }}>
      <div
        style={{
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '4.5rem clamp(1.25rem, 3.5vw, 3rem) 2.5rem clamp(1.25rem, 3.5vw, 3rem)'
        }}
      >
        {/* Main Footer Directory Grid */}
        <div
          className="footer-directory-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Column 1: Header Brand Logo & Social Icons */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            {/* Exact Header Logo Image */}
            <div
              onClick={scrollToTop}
              style={{ cursor: 'pointer', marginBottom: '1.25rem', display: 'inline-block' }}
            >
              <img
                src="/luxurylogo2.png"
                alt="G The Luxury Fragrance Dubai"
                style={{
                  height: '56px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>

            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.72rem',
                color: '#C5A059',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                margin: '0 0 1rem 0',
                fontWeight: 600
              }}
            >
              HAUTE PARFUMERIE • DUBAI
            </p>

            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.82rem',
                lineHeight: 1.65,
                color: '#9E9891',
                margin: '0 0 1.5rem 0',
                maxWidth: '320px'
              }}
            >
              Distilling the timeless prestige of Arabian agarwood oud and French haute perfumery into rare, bespoke extraits de parfum.
            </p>

            {/* Instagram & WhatsApp Prominent Social Icons */}
            <div style={{ display: 'flex', gap: '0.85rem' }}>
              {/* Instagram */}
              <a
                href={BRAND_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(197, 160, 89, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#C5A059',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#C5A059';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.color = '#C5A059';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                title="Follow on Instagram (@gtheluxuryfragrance)"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${BRAND_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(37, 211, 102, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#25D366',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#25D366';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.color = '#25D366';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                title="Chat with VIP Concierge on WhatsApp (+971 56 570 5449)"
              >
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Fragrance Collection */}
          <div>
            <h4
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                color: '#FFFFFF',
                textTransform: 'uppercase',
                margin: '0 0 1.25rem 0'
              }}
            >
              COLLECTION
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {['Hubb (حُبّ)', 'Legacy 709', 'Majestic Oud', 'Paradise Oud (50 ML)', 'Flora (فلورا)', 'Majnoon (مجنون)', 'Discovery Sets'].map(item => (
                <li key={item}>
                  <button
                    onClick={scrollToTop}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      padding: 0,
                      color: '#9E9891',
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '0.82rem',
                      cursor: 'pointer',
                      transition: 'color 0.2s ease',
                      textAlign: 'left'
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#C5A059')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#9E9891')}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: The Maison */}
          <div>
            <h4
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                color: '#FFFFFF',
                textTransform: 'uppercase',
                margin: '0 0 1.25rem 0'
              }}
            >
              THE MAISON
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {['Our Heritage', 'Dubai Alchemy', 'Pure Ingredients', 'Artisanal Flacons', 'VIP Concierge Service', 'Corporate Bespoke Gifting'].map(item => (
                <li key={item}>
                  <button
                    onClick={scrollToTop}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      padding: 0,
                      color: '#9E9891',
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '0.82rem',
                      cursor: 'pointer',
                      transition: 'color 0.2s ease',
                      textAlign: 'left'
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#C5A059')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#9E9891')}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Client Care & Policies */}
          <div>
            <h4
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                color: '#FFFFFF',
                textTransform: 'uppercase',
                margin: '0 0 1.25rem 0'
              }}
            >
              CLIENT CARE
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {['Complimentary Delivery UAE/GCC', 'Authenticity Guarantee', 'Order Tracking', 'Discovery Samples Policy', 'FAQs', 'WhatsApp Concierge'].map(item => (
                <li key={item}>
                  <button
                    onClick={scrollToTop}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      padding: 0,
                      color: '#9E9891',
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '0.82rem',
                      cursor: 'pointer',
                      transition: 'color 0.2s ease',
                      textAlign: 'left'
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#C5A059')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#9E9891')}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Safe Checkout & Copyright */}
        <div
          style={{
            paddingTop: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem',
            fontSize: '0.76rem',
            color: '#77726C',
            fontFamily: "'Montserrat', sans-serif' "
          }}
        >
          <div>
            © {new Date().getFullYear()} G The Luxury Fragrance. All rights reserved. Mastercrafted in Dubai, UAE.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#9E9891' }}>
              <ShieldCheck size={15} color="#C5A059" />
              <span>Safe &amp; Encrypted Checkout</span>
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#9E9891' }}>
              <Truck size={15} color="#C5A059" />
              <span>Complimentary VIP Courier UAE/GCC</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
