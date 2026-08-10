import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CLIENT_PRODUCTS } from '../data/perfumes';

interface FeatureBannerProps {
  onNavigateShop?: () => void;
}

export const FeatureBanner: React.FC<FeatureBannerProps> = ({ onNavigateShop }) => {
  const { addToCart } = useCart();
  const featureProduct = CLIENT_PRODUCTS[1]; // Legacy 709 / Noir

  const handleShopNow = () => {
    addToCart(featureProduct, '100ml', 1);
    onNavigateShop?.();
  };

  return (
    <section
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '2rem',
        paddingBottom: '2rem',
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
        {/* Full-width Dark Mocha Luxury Banner Container (Matching Reference) */}
        <div
          className="feature-banner-grid"
          style={{
            width: '100%',
            backgroundColor: '#2A1D16',
            borderRadius: '10px',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            minHeight: '480px',
            position: 'relative',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.12)'
          }}
        >
          {/* Left Text Block */}
          <div
            style={{
              padding: 'clamp(2.5rem, 5vw, 4.5rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              zIndex: 2
            }}
          >
            {/* Kicker */}
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.74rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                color: '#C5A059',
                textTransform: 'uppercase',
                margin: '0 0 1.25rem 0'
              }}
            >
              EXTRAIT DE PARFUM
            </p>

            {/* Main Title (Strictly 2 Lines with Non-Wrapping Spans) */}
            <h2
              style={{
                fontFamily: "'Italiana', 'Cormorant Garamond', 'Prata', 'Playfair Display', serif",
                fontSize: 'clamp(1.85rem, 3.4vw, 3rem)',
                fontWeight: 400,
                lineHeight: 1.2,
                color: '#F4ECE4',
                margin: '0 0 1.25rem 0',
                letterSpacing: '0.01em'
              }}
            >
              <span style={{ display: 'block', whiteSpace: 'nowrap' }}>The softness of iris, the</span>
              <span style={{ display: 'block', whiteSpace: 'nowrap' }}>depth of noir</span>
            </h2>

            {/* Elegant Luxury Sub-text */}
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.86rem',
                lineHeight: 1.65,
                color: '#D8CFC8',
                maxWidth: '480px',
                margin: '0 0 2.25rem 0',
                fontWeight: 300
              }}
            >
              A hypnotic duality between powdery Florentine iris and smoldering Cambodian agarwood, enveloping the senses in creamy bourbon vanilla and warm velvet amber.
            </p>

            {/* Pill CTA Button (White with Cream Hover) */}
            <button
              onClick={handleShopNow}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #FFFFFF',
                color: '#2A1D16',
                borderRadius: '999px',
                padding: '0.65rem 0.75rem 0.65rem 1.6rem',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.85rem',
                boxShadow: '0 4px 18px rgba(0, 0, 0, 0.25)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#F4ECE4';
                e.currentTarget.style.borderColor = '#F4ECE4';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.borderColor = '#FFFFFF';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Shop Now - depth of noir</span>
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: '#2A1D16',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <ArrowRight size={13} strokeWidth={2.5} />
              </div>
            </button>
          </div>

          {/* Right Image Block */}
          <div
            style={{
              width: '100%',
              height: '100%',
              minHeight: '380px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <img
              src="/banner_noir.png"
              alt="The softness of iris, the depth of noir"
              style={{
                width: '100%',
                height: '100%',
                maxHeight: '520px',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
