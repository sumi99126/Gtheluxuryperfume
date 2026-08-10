import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CtaBannerProps {
  onNavigateShop?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onNavigateShop }) => {
  const handleExplore = () => {
    if (onNavigateShop) {
      onNavigateShop();
    } else {
      const el = document.getElementById('recommendation-section') || document.querySelector('section:nth-of-type(3)');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="cta-section"
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '2rem',
        paddingBottom: '3.5rem',
        width: '100%'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 clamp(1.25rem, 3.5vw, 3rem)'
        }}
      >
        {/* Compact Luxury Card with Image Background & Overlay (Left Aligned) */}
        <div
          style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            minHeight: '360px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            textAlign: 'left',
            padding: 'clamp(3rem, 5vw, 4.5rem) clamp(2.5rem, 5vw, 4.5rem)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)'
          }}
        >
          {/* Background Image */}
          <img
            src="/cta_bg_v3.png"
            alt="G The Luxury Fragrance Dubai"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center right',
              display: 'block'
            }}
          />

          {/* Dark Luxury Gradient Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, rgba(8, 7, 10, 0.9) 0%, rgba(8, 7, 10, 0.72) 50%, rgba(8, 7, 10, 0.25) 100%)'
            }}
          />

          {/* Left-Aligned Content */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              maxWidth: '560px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}
          >
            {/* Main Heading (Refined & Smaller) */}
            <h2
              className="font-catilde"
              style={{
                fontSize: 'clamp(1.35rem, 2.2vw, 1.85rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                margin: '0 0 0.5rem 0',
                lineHeight: 1.25,
                letterSpacing: '0.02em'
              }}
            >
              Discover The Fragrance That Defines Your Presence
            </h2>

            {/* Sub text */}
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.84rem',
                lineHeight: 1.6,
                color: '#D8CFC8',
                maxWidth: '520px',
                margin: '0 0 1.5rem 0',
                fontWeight: 400
              }}
            >
              Master-blended in micro-batches with aged Cambodian agarwood, pure Taif roses, and rare molten amber.
            </p>

            {/* Single Action Button */}
            <button
              onClick={handleExplore}
              style={{
                backgroundColor: '#C5A059',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '999px',
                padding: '0.7rem 1.6rem',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 16px rgba(197, 160, 89, 0.35)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.color = '#111111';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#C5A059';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>EXPLORE COLLECTION</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
