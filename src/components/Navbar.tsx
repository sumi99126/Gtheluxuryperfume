import React, { useState } from 'react';
import { ShoppingBag, Globe, Menu, X, MessageSquare } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CURRENCIES, BRAND_WHATSAPP } from '../data/perfumes';
import { CurrencyCode } from '../types';

interface NavbarProps {
  onOpenCart?: () => void;
  onNavigateSection?: (sectionId: string) => void;
  currentView?: 'home' | 'shop' | 'product' | 'contact';
  onNavigateView?: (view: 'home' | 'shop' | 'contact') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCart, onNavigateSection, currentView = 'home', onNavigateView }) => {
  const { totalItems, openCart, currency, setCurrency } = useCart();
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCartClick = () => {
    if (onOpenCart) onOpenCart();
    else openCart();
  };

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    if (onNavigateView) onNavigateView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCollectionClick = () => {
    setIsMobileMenuOpen(false);
    if (onNavigateView) {
      onNavigateView('shop');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (onNavigateSection) {
      onNavigateSection('collection');
    }
  };

  const handleContactClick = () => {
    setIsMobileMenuOpen(false);
    if (onNavigateView) {
      onNavigateView('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (onNavigateSection) {
      onNavigateSection('contact');
    }
  };

  return (
    <>
      <header
        style={{
          width: '100%',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
          padding: '0.9rem clamp(1rem, 3.5vw, 3rem)',
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '1440px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center'
          }}
        >
          {/* Left Area: Mobile Hamburger (< 900px) OR Desktop Nav Links */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Mobile Hamburger Toggle Button */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(true)}
              style={{
                display: 'none',
                background: 'transparent',
                border: 'none',
                color: '#111111',
                cursor: 'pointer',
                padding: '0.4rem 0.4rem 0.4rem 0',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Open Navigation Menu"
            >
              <Menu size={24} />
            </button>

            {/* Desktop Left Navigation Links */}
            <div
              className="desktop-nav-links"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(1.5rem, 2.5vw, 3rem)'
              }}
            >
              <button
                onClick={handleCollectionClick}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: currentView === 'shop' ? '#C5A059' : '#1A1A1A',
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.78rem',
                  fontWeight: 550,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  padding: 0,
                  position: 'relative',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C5A059')}
                onMouseLeave={e => (e.currentTarget.style.color = currentView === 'shop' ? '#C5A059' : '#1A1A1A')}
              >
                COLLECTION
                {currentView === 'shop' && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      width: '100%',
                      height: '2px',
                      backgroundColor: '#C5A059'
                    }}
                  />
                )}
              </button>

              <button
                onClick={() => {
                  if (onNavigateView) onNavigateView('home');
                  setTimeout(() => {
                    const el = document.getElementById('recommendation-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#1A1A1A',
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.78rem',
                  fontWeight: 550,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C5A059')}
                onMouseLeave={e => (e.currentTarget.style.color = '#1A1A1A')}
              >
                ABOUT
              </button>

              <button
                onClick={() => {
                  if (onNavigateView) onNavigateView('home');
                  setTimeout(() => {
                    const el = document.getElementById('feature-banner-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#1A1A1A',
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.78rem',
                  fontWeight: 550,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C5A059')}
                onMouseLeave={e => (e.currentTarget.style.color = '#1A1A1A')}
              >
                INGREDIENTS
              </button>
            </div>
          </div>

          {/* Center Brand Logo (Perfect Center in both Desktop and Mobile) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              padding: '0 0.5rem'
            }}
            onClick={handleLogoClick}
          >
            <img
              src="/luxurylogo2.png"
              alt="G The Luxury Fragrance"
              style={{
                height: 'clamp(40px, 5vw, 54px)',
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
                filter: 'drop-shadow(0 2px 8px rgba(197, 160, 89, 0.25))'
              }}
            />
          </div>

          {/* Right Navigation Tools */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: 'clamp(0.85rem, 2vw, 2.5rem)'
            }}
          >
            {/* Desktop Right Navigation Links (DISCOVERY, JOURNAL, CONTACT) */}
            <div
              className="desktop-nav-links"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(1.5rem, 2vw, 2.5rem)'
              }}
            >
              <button
                onClick={handleCollectionClick}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#1A1A1A',
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.78rem',
                  fontWeight: 550,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C5A059')}
                onMouseLeave={e => (e.currentTarget.style.color = '#1A1A1A')}
              >
                DISCOVERY
              </button>

              <button
                onClick={() => {
                  if (onNavigateView) onNavigateView('home');
                  setTimeout(() => {
                    const el = document.getElementById('testimonials-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#1A1A1A',
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.78rem',
                  fontWeight: 550,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C5A059')}
                onMouseLeave={e => (e.currentTarget.style.color = '#1A1A1A')}
              >
                JOURNAL
              </button>

              <button
                onClick={handleContactClick}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: currentView === 'contact' ? '#C5A059' : '#1A1A1A',
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.78rem',
                  fontWeight: 550,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  padding: 0,
                  position: 'relative',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C5A059')}
                onMouseLeave={e => (e.currentTarget.style.color = currentView === 'contact' ? '#C5A059' : '#1A1A1A')}
              >
                CONTACT
                {currentView === 'contact' && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      width: '100%',
                      height: '2px',
                      backgroundColor: '#C5A059'
                    }}
                  />
                )}
              </button>
            </div>

            {/* Currency Switcher (Hidden on Mobile) */}
            <div className="desktop-currency-switcher" style={{ position: 'relative' }}>
              <button
                onClick={() => setIsCurrencyOpen(prev => !prev)}
                style={{
                  color: '#1A1A1A',
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.35rem 0.6rem',
                  borderRadius: '6px',
                  backgroundColor: '#FAF8F5',
                  border: '1px solid #EFECE6'
                }}
              >
                <Globe size={13} color="#C5A059" />
                <span>{currency}</span>
              </button>

              {isCurrencyOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    right: 0,
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #EFECE6',
                    borderRadius: '8px',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                    padding: '0.4rem',
                    zIndex: 110,
                    minWidth: '95px'
                  }}
                >
                  {(Object.keys(CURRENCIES) as CurrencyCode[]).map(currCode => (
                    <button
                      key={currCode}
                      onClick={() => {
                        setCurrency(currCode);
                        setIsCurrencyOpen(false);
                      }}
                      style={{
                        width: '100%',
                        background: currency === currCode ? '#FAF8F5' : 'transparent',
                        color: currency === currCode ? '#C5A059' : '#333333',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '0.4rem 0.6rem',
                        fontSize: '0.72rem',
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: currency === currCode ? 700 : 500,
                        textAlign: 'left',
                        cursor: 'pointer'
                      }}
                    >
                      {currCode} ({CURRENCIES[currCode].symbol})
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Button */}
            <button
              onClick={handleCartClick}
              style={{
                position: 'relative',
                background: 'transparent',
                border: 'none',
                color: '#1A1A1A',
                cursor: 'pointer',
                padding: '0.35rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#C5A059')}
              onMouseLeave={e => (e.currentTarget.style.color = '#1A1A1A')}
              aria-label="Open Shopping Bag"
            >
              <ShoppingBag size={21} strokeWidth={1.75} />
              {totalItems > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-2px',
                    right: '-4px',
                    backgroundColor: '#C5A059',
                    color: '#FFFFFF',
                    borderRadius: '50%',
                    width: '18px',
                    height: '18px',
                    fontSize: '0.62rem',
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Luxury Slide-in Drawer from LEFT side */}
      <div
        className={`mobile-left-drawer-backdrop ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`mobile-left-drawer-panel ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={e => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1.5rem',
              borderBottom: '1px solid #EFECE6'
            }}
          >
            <img
              src="/luxurylogo1.png"
              alt="G The Luxury Fragrance"
              style={{ height: '42px', width: 'auto', objectFit: 'contain' }}
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: '#111111',
                padding: '0.4rem'
              }}
            >
              <X size={22} />
            </button>
          </div>

          {/* Drawer Links */}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '1.75rem 1.5rem', gap: '1.5rem', flexGrow: 1 }}>
            <button
              onClick={handleLogoClick}
              style={{
                background: 'transparent',
                border: 'none',
                color: currentView === 'home' ? '#C5A059' : '#111111',
                fontSize: '1rem',
                fontWeight: 650,
                letterSpacing: '0.12em',
                textAlign: 'left',
                fontFamily: "'Montserrat', sans-serif",
                cursor: 'pointer',
                padding: 0
              }}
            >
              HOME
            </button>

            <button
              onClick={handleCollectionClick}
              style={{
                background: 'transparent',
                border: 'none',
                color: currentView === 'shop' ? '#C5A059' : '#111111',
                fontSize: '1rem',
                fontWeight: 650,
                letterSpacing: '0.12em',
                textAlign: 'left',
                fontFamily: "'Montserrat', sans-serif",
                cursor: 'pointer',
                padding: 0
              }}
            >
              COLLECTION / SHOP
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (onNavigateView) onNavigateView('home');
                setTimeout(() => {
                  const el = document.getElementById('recommendation-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#111111',
                fontSize: '1rem',
                fontWeight: 650,
                letterSpacing: '0.12em',
                textAlign: 'left',
                fontFamily: "'Montserrat', sans-serif",
                cursor: 'pointer',
                padding: 0
              }}
            >
              ABOUT
            </button>

            <button
              onClick={handleContactClick}
              style={{
                background: 'transparent',
                border: 'none',
                color: currentView === 'contact' ? '#C5A059' : '#111111',
                fontSize: '1rem',
                fontWeight: 650,
                letterSpacing: '0.12em',
                textAlign: 'left',
                fontFamily: "'Montserrat', sans-serif",
                cursor: 'pointer',
                padding: 0
              }}
            >
              CONTACT US
            </button>
          </div>

          {/* Drawer Footer with VIP WhatsApp */}
          <div style={{ borderTop: '1px solid #EFECE6', padding: '1.5rem', backgroundColor: '#FAF8F5' }}>
            <a
              href={`https://wa.me/${BRAND_WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                color: '#FFFFFF',
                backgroundColor: '#25D366',
                borderRadius: '999px',
                padding: '0.75rem 1rem',
                textDecoration: 'none',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                fontFamily: "'Montserrat', sans-serif"
              }}
            >
              <MessageSquare size={16} />
              <span>WhatsApp VIP Concierge</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
