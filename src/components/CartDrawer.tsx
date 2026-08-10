import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Gift, Truck, ArrowRight, MessageSquare } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { COMPLIMENTARY_SAMPLES, BRAND_WHATSAPP } from '../data/perfumes';

interface CartDrawerProps {
  onOpenCheckoutModal: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onOpenCheckoutModal }) => {
  const {
    items,
    isOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    formatPrice,
    subtotalAED,
    isFreeShipping,
    freeShippingRemainingAED,
    complimentarySample,
    setComplimentarySample,
    isGiftWrapping
  } = useCart();

  const handleWhatsAppVIP = () => {
    const itemsList = items
      .map(i => `• ${i.perfume.name} (${i.selectedSize}) x${i.quantity} - ${formatPrice(i.perfume.priceAED * i.priceMultiplier * i.quantity)}`)
      .join('%0A');
    
    const message = `Hello G The Luxury Fragrance Dubai! 👑%0A%0AI would like to place an order for:%0A${itemsList}%0A%0A*Subtotal:* ${formatPrice(subtotalAED)}%0A*Complimentary Sample:* ${encodeURIComponent(complimentarySample)}%0A*Gold Gift Wrapping:* ${isGiftWrapping ? 'Yes (Included)' : 'No'}%0A%0APlease confirm delivery details across UAE/GCC. Thank you!`;
    
    window.open(`https://wa.me/${BRAND_WHATSAPP}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Backdrop Blur */}
      <div
        className={`cart-drawer-backdrop ${isOpen ? 'active' : ''}`}
        onClick={closeCart}
      />

      {/* Slide-over Right Panel Drawer */}
      <div
        className={`cart-drawer-panel ${isOpen ? 'open' : ''}`}
        aria-label="Shopping Bag Drawer"
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            borderBottom: '1px solid #EFECE6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#FFFFFF'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: '#FAF8F5',
                border: '1px solid #EFECE6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#C5A059'
              }}
            >
              <ShoppingBag size={18} />
            </div>
            <div>
              <h2
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  color: '#111111',
                  margin: 0,
                  textTransform: 'uppercase'
                }}
              >
                SHOPPING BAG
              </h2>
              <span style={{ fontSize: '0.72rem', color: '#888888', letterSpacing: '0.04em' }}>
                {items.length} {items.length === 1 ? 'Item' : 'Items'} Selected
              </span>
            </div>
          </div>

          <button
            onClick={closeCart}
            style={{
              background: '#FAF8F5',
              border: '1px solid #EFECE6',
              color: '#333333',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#111111';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#FAF8F5';
              e.currentTarget.style.color = '#333333';
            }}
            title="Close Bag"
          >
            <X size={16} />
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        <div
          style={{
            padding: '0.75rem 1.75rem',
            backgroundColor: '#FAF8F5',
            borderBottom: '1px solid #EFECE6'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.74rem',
              color: '#444444',
              marginBottom: '0.35rem'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Truck size={13} color="#C5A059" />
              {isFreeShipping ? (
                <span style={{ color: '#2E7D32', fontWeight: 600 }}>
                  ✓ Unlocked Complimentary VIP Courier Across UAE & GCC
                </span>
              ) : (
                <span>
                  Add <strong>{formatPrice(freeShippingRemainingAED)}</strong> more for Free Delivery
                </span>
              )}
            </span>
            <span>{Math.min(100, Math.round((subtotalAED / 500) * 100))}%</span>
          </div>

          <div
            style={{
              width: '100%',
              height: '3.5px',
              backgroundColor: '#EAE6DF',
              borderRadius: '999px',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${Math.min(100, (subtotalAED / 500) * 100)}%`,
                background: 'linear-gradient(90deg, #B38728, #C5A059)',
                transition: 'width 0.3s ease'
              }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div
          style={{
            flexGrow: 1,
            overflowY: 'auto',
            padding: '1.25rem 1.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          {items.length === 0 ? (
            <div
              style={{
                margin: 'auto 0',
                textAlign: 'center',
                padding: '3rem 1rem'
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: '#FAF8F5',
                  border: '1px solid #EFECE6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem auto',
                  color: '#C5A059'
                }}
              >
                <ShoppingBag size={28} />
              </div>
              <h3
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#111111',
                  marginBottom: '0.4rem'
                }}
              >
                Your Bag is Empty
              </h3>
              <p style={{ fontSize: '0.8rem', color: '#777777', marginBottom: '1.5rem' }}>
                Discover our royal extraits de parfum from Dubai.
              </p>
              <button
                onClick={closeCart}
                className="btn-pill-dark"
                style={{ padding: '0.65rem 1.5rem', fontSize: '0.72rem' }}
              >
                Explore Collection
              </button>
            </div>
          ) : (
            items.map(item => {
              const itemTotal = item.perfume.priceAED * item.priceMultiplier * item.quantity;
              return (
                <div
                  key={item.cartItemId}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    padding: '1rem',
                    backgroundColor: '#FAF8F5',
                    borderRadius: '8px',
                    border: '1px solid #EFECE6',
                    position: 'relative'
                  }}
                >
                  {/* Thumbnail */}
                  <div
                    style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '6px',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #EAE6DF',
                      padding: '0.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <img
                      src={item.perfume.image}
                      alt={item.perfume.name}
                      style={{
                        maxHeight: '100%',
                        maxWidth: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </div>

                  {/* Details */}
                  <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <h4
                          style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: '0.84rem',
                            fontWeight: 600,
                            color: '#111111',
                            margin: 0
                          }}
                        >
                          {item.perfume.name}
                        </h4>
                        <span style={{ fontSize: '0.72rem', color: '#888888' }}>
                          {item.selectedSize} • Extrait
                        </span>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: '#999999',
                          cursor: 'pointer',
                          padding: '0.2rem'
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#D32F2F')}
                        onMouseLeave={e => (e.currentTarget.style.color = '#999999')}
                        title="Remove item"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>

                    {/* Quantity & Price */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.6rem' }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #E0DCD5',
                          borderRadius: '999px',
                          padding: '0.15rem 0.45rem',
                          gap: '0.5rem'
                        }}
                      >
                        <button
                          onClick={() => updateQuantity(item.cartItemId, -1)}
                          style={{
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            color: '#444444',
                            display: 'flex',
                            alignItems: 'center'
                          }}
                        >
                          <Minus size={11} />
                        </button>
                        <span style={{ fontSize: '0.75rem', fontWeight: 600, minWidth: '16px', textAlign: 'center' }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, 1)}
                          style={{
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            color: '#444444',
                            display: 'flex',
                            alignItems: 'center'
                          }}
                        >
                          <Plus size={11} />
                        </button>
                      </div>

                      <span
                        style={{
                          fontFamily: "'Cinzel', serif",
                          fontSize: '0.9rem',
                          fontWeight: 700,
                          color: '#111111'
                        }}
                      >
                        {formatPrice(itemTotal)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}

          {/* Complimentary Discovery Vial Selector */}
          {items.length > 0 && (
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '8px',
                border: '1px solid #EFECE6',
                padding: '0.9rem 1rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
                <Gift size={14} color="#C5A059" />
                <span style={{ fontSize: '0.74rem', fontWeight: 600, color: '#111111' }}>
                  Complimentary 5ml Discovery Sample:
                </span>
              </div>
              <select
                value={complimentarySample}
                onChange={e => setComplimentarySample(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.45rem 0.65rem',
                  fontSize: '0.74rem',
                  fontFamily: "'Montserrat', sans-serif",
                  backgroundColor: '#FAF8F5',
                  border: '1px solid #EAE6DF',
                  borderRadius: '4px',
                  color: '#333333',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                {COMPLIMENTARY_SAMPLES.map(sample => (
                  <option key={sample} value={sample}>
                    {sample}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Drawer Footer & Checkout Actions */}
        {items.length > 0 && (
          <div
            style={{
              padding: '1.25rem 1.75rem',
              backgroundColor: '#FFFFFF',
              borderTop: '1px solid #EFECE6',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}
          >
            {/* Subtotal */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontSize: '0.8rem', color: '#666666', fontFamily: "'Montserrat', sans-serif" }}>
                Subtotal
              </span>
              <span
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#111111'
                }}
              >
                {formatPrice(subtotalAED)}
              </span>
            </div>

            {/* Primary Checkout Button */}
            <button
              onClick={() => {
                closeCart();
                onOpenCheckoutModal();
              }}
              style={{
                width: '100%',
                backgroundColor: '#111111',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '999px',
                padding: '0.85rem',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.76rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#C5A059')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#111111')}
            >
              <span>PROCEED TO CHECKOUT</span>
              <ArrowRight size={14} />
            </button>

            {/* WhatsApp VIP Concierge Button */}
            <button
              onClick={handleWhatsAppVIP}
              style={{
                width: '100%',
                backgroundColor: '#25D366',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '999px',
                padding: '0.75rem',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.74rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                transition: 'background-color 0.25s ease'
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1EBE5D')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#25D366')}
            >
              <MessageSquare size={14} />
              <span>Order via WhatsApp (+971 56 570 5449)</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};
