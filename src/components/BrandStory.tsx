import React from 'react';
import { Sparkles, ShieldCheck, Gem, Compass, Award } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const BrandStory: React.FC = () => {
  return (
    <section
      id="brand-story"
      style={{
        padding: '6.5rem 0',
        background: 'radial-gradient(ellipse at 50% 50%, #15120c 0%, #070709 80%)',
        borderTop: '1px solid rgba(212, 175, 55, 0.15)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.15)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container-luxury">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Brand Emblem & Visual */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '420px',
                padding: '3rem 2rem',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, rgba(20, 18, 24, 0.8) 0%, rgba(10, 10, 12, 0.95) 100%)',
                border: '1.5px solid rgba(212, 175, 55, 0.4)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.9), inset 0 0 30px rgba(212, 175, 55, 0.08)',
                textAlign: 'center'
              }}
            >
              {/* Rotating Gold Halo */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-10px',
                  borderRadius: '12px',
                  border: '1px dashed rgba(212, 175, 55, 0.2)',
                  pointerEvents: 'none'
                }}
              />

              <div
                style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  margin: '0 auto 1.5rem',
                  background: 'radial-gradient(circle, #241c0f 0%, #09090b 100%)',
                  border: '2px solid #D4AF37',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)'
                }}
              >
                <img
                  src="/luxurylogo2.png"
                  alt="G The Luxury Fragrance Dubai"
                  style={{
                    width: '78%',
                    height: '78%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.7))'
                  }}
                />
              </div>

              <h3
                className="font-cinzel"
                style={{
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  letterSpacing: '0.15em',
                  marginBottom: '0.25rem'
                }}
              >
                G THE LUXURY FRAGRANCE
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#D4AF37', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                Haute Parfumerie • Dubai
              </p>

              <div style={{ height: '1px', background: 'rgba(212, 175, 55, 0.25)', margin: '1rem 0' }} />

              <a
                href="https://www.instagram.com/gtheluxuryfragrance/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.6rem 1.4rem',
                  background: 'rgba(212, 175, 55, 0.1)',
                  border: '1px solid #D4AF37',
                  borderRadius: '2px',
                  color: '#FFDF78',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-serif)',
                  letterSpacing: '0.12em',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.25)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
                }}
              >
                <InstagramIcon size={16} color="#D4AF37" />
                <span>Follow @gtheluxuryfragrance</span>
              </a>
            </div>
          </div>

          {/* Right Column: Story & Royal Pillars */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#D4AF37',
                fontSize: '0.75rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem'
              }}
            >
              <Sparkles size={13} />
              <span>THE DUBAI HERITAGE</span>
            </div>

            <h2
              className="font-cinzel"
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                fontWeight: 700,
                color: '#FFF',
                letterSpacing: '0.08em',
                lineHeight: 1.2,
                marginBottom: '1.25rem'
              }}
            >
              CRAFTED FOR THOSE WHO COMMAND <span className="gold-text-shimmer">PRESENCE</span>
            </h2>

            <p style={{ fontSize: '0.95rem', color: '#B5B5BD', lineHeight: 1.75, marginBottom: '1.75rem' }}>
              Born in Dubai, <strong>G The Luxury Fragrance</strong> was founded on the philosophy that true luxury is unforgettable. Combining centuries-old Arabian perfumery traditions with contemporary French haute distillation, every drop is formulated as a heavy <em>Extrait de Parfum</em> with unmatched longevity and magnetic projection.
            </p>

            {/* 4 Pillars Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2rem'
              }}
            >
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <div style={{ color: '#D4AF37', marginTop: '0.15rem' }}>
                  <Gem size={20} />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '0.88rem', color: '#FFF', marginBottom: '0.2rem' }}>
                    Rare Aged Agarwood
                  </h4>
                  <p style={{ fontSize: '0.75rem', color: '#888' }}>
                    Sustainably sourced wild Cambodian and Assam oud distillates.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <div style={{ color: '#D4AF37', marginTop: '0.15rem' }}>
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '0.88rem', color: '#FFF', marginBottom: '0.2rem' }}>
                    35-38% Concentration
                  </h4>
                  <p style={{ fontSize: '0.75rem', color: '#888' }}>
                    Highest grade extrait de parfum for all-day royal sillage.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <div style={{ color: '#D4AF37', marginTop: '0.15rem' }}>
                  <Award size={20} />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '0.88rem', color: '#FFF', marginBottom: '0.2rem' }}>
                    24K Gold Detailing
                  </h4>
                  <p style={{ fontSize: '0.75rem', color: '#888' }}>
                    Weighted crystal flacons with bespoke engraved caps.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <div style={{ color: '#D4AF37', marginTop: '0.15rem' }}>
                  <Compass size={20} />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '0.88rem', color: '#FFF', marginBottom: '0.2rem' }}>
                    Bespoke VIP Concierge
                  </h4>
                  <p style={{ fontSize: '0.75rem', color: '#888' }}>
                    White-glove courier delivery across UAE and GCC nations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
