import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeroProps {
  onNavigateShop?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateShop }) => {
  const { formatPrice } = useCart();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Pure, clean client product stage photography (NO text overlays)
  const slides = [
    {
      id: 'hubb',
      title: 'Hubb — Royal Crimson Flacon',
      image: '/slide_hubb.png'
    },
    {
      id: 'legacy-709',
      title: 'Legacy 709 — Obsidian Black Flacon',
      image: '/slide_legacy709.png'
    },
    {
      id: 'paradise-oud',
      title: 'Paradise Oud — Emerald Glass Flacon',
      image: '/slide_paradise_oud.png'
    },
    {
      id: 'majnoon',
      title: 'Majnoon — Crystal Clear Rose Flacon',
      image: '/slide_majnoon.png'
    }
  ];

  // Continuous auto-play loop with Ken Burns effect (5 seconds per slide)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleShopCollection = () => {
    if (onNavigateShop) {
      onNavigateShop();
    } else {
      const el = document.getElementById('collection-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
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
          padding: '0 clamp(0.75rem, 2vw, 1.75rem)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        {/* Top Editorial Italic Quote (Gold #C5A059) */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)',
            fontStyle: 'italic',
            fontWeight: 600,
            color: '#C5A059',
            letterSpacing: '0.03em',
            margin: '0 0 0.85rem 0'
          }}
        >
          The fragrance that remains long after you have gone.
        </p>

        {/* Grand Centered Luxury Title (Cinzel Royal Roman Serif - 2 Lines on Mobile) */}
        <div style={{ width: '100%', overflow: 'hidden', marginBottom: '2.25rem' }}>
          <h1
            className="hero-main-title"
            style={{
              fontFamily: "'Cinzel', 'Italiana', 'Marcellus', 'Cormorant Garamond', serif",
              fontSize: 'clamp(1.95rem, 4.4vw, 3.8rem)',
              fontWeight: 650,
              lineHeight: 1.14,
              letterSpacing: '0.08em',
              color: '#111111',
              textTransform: 'uppercase',
              margin: 0,
              display: 'block',
              WebkitFontSmoothing: 'antialiased'
            }}
          >
            G THE LUXURY FRAGRANCE
          </h1>
        </div>

        {/* Action Row: Pill Button & Story Link (Price hidden on mobile) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 'clamp(1rem, 2.5vw, 2.5rem)',
            marginBottom: '3.25rem'
          }}
        >
          {/* Left: Starting Price (Hidden on Mobile) */}
          <span
            className="hero-price-tag"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.85rem',
              fontWeight: 500,
              color: '#333333',
              letterSpacing: '0.04em'
            }}
          >
            From {formatPrice(590)}
          </span>

          {/* Center: Black Pill Button */}
          <button
            className="btn-pill-dark"
            onClick={handleShopCollection}
          >
            <span>SHOP COLLECTION</span>
            <ArrowRight size={14} style={{ marginLeft: '0.5rem' }} />
          </button>

          {/* Right: View Story Link */}
          <button
            onClick={handleShopCollection}
            style={{
              background: 'transparent',
              border: 'none',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.85rem',
              color: '#444444',
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
              cursor: 'pointer',
              padding: 0,
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#C5A059')}
            onMouseLeave={e => (e.currentTarget.style.color = '#444444')}
          >
            View the story
          </button>
        </div>

        {/* Hero Client Products Stage (Smooth Automatic Ken Burns Loop, 14px Radius, No Navigation) */}
        <div
          style={{
            width: '100%',
            borderRadius: '14px',
            overflow: 'hidden',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.06)',
            position: 'relative',
            background: '#F8F6F0'
          }}
        >
          {/* Photographic Stage Slider with Silky Cross-Fade & Ken Burns Zoom */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              minHeight: '400px',
              height: 'clamp(380px, 46vw, 620px)',
              backgroundColor: '#F8F6F0',
              overflow: 'hidden'
            }}
          >
            {slides.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <div
                  key={slide.id}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: isActive ? 1 : 0,
                    transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    pointerEvents: isActive ? 'auto' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#F8F6F0',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className={isActive ? 'animate-ken-burns' : ''}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      display: 'block'
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
