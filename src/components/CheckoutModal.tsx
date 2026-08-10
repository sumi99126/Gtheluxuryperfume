import React, { useState } from 'react';
import { X, CheckCircle, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { items, subtotalAED, isFreeShipping, formatPrice, complimentarySample, isGiftWrapping, clearCart } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    city: 'Dubai',
    address: '',
    paymentMethod: 'cod' // 'cod' | 'card' | 'applepay'
  });

  if (!isOpen) return null;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '560px',
          background: '#0d0d10',
          border: '1px solid rgba(212, 175, 55, 0.4)',
          borderRadius: '6px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(212, 175, 55, 0.2)',
          overflow: 'hidden',
          position: 'relative'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'linear-gradient(180deg, #181620 0%, #0d0d10 100%)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Sparkles size={16} color="#D4AF37" />
            <h3
              className="font-cinzel"
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#FFF',
                letterSpacing: '0.12em',
                margin: 0
              }}
            >
              VIP CONCIERGE CHECKOUT
            </h3>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#D4AF37',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '1.75rem', maxHeight: '80vh', overflowY: 'auto' }}>
          {isOrdered ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <div
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: 'rgba(34, 197, 94, 0.15)',
                  border: '2px solid #22C55E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: '#22C55E'
                }}
              >
                <CheckCircle size={36} />
              </div>

              <h3
                className="font-cinzel"
                style={{ fontSize: '1.4rem', color: '#FFF', marginBottom: '0.5rem', letterSpacing: '0.1em' }}
              >
                ROYAL ORDER CONFIRMED
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#A0A0A5', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Thank you, <strong>{formData.fullName || 'Valued Patron'}</strong>. Your bespoke flacon is being prepared by our master perfumers in Dubai. Our VIP courier will contact you shortly.
              </p>

              <div
                style={{
                  padding: '1rem',
                  background: 'rgba(212, 175, 55, 0.08)',
                  border: '1px solid rgba(212, 175, 55, 0.25)',
                  borderRadius: '4px',
                  textAlign: 'left',
                  fontSize: '0.78rem',
                  marginBottom: '1.5rem'
                }}
              >
                <div style={{ color: '#F5E6B8', marginBottom: '0.35rem' }}>
                  <strong>Destination:</strong> {formData.city}, UAE
                </div>
                <div style={{ color: '#F5E6B8', marginBottom: '0.35rem' }}>
                  <strong>Complimentary Sample:</strong> {complimentarySample}
                </div>
                <div style={{ color: '#F5E6B8' }}>
                  <strong>Gold Packaging:</strong> {isGiftWrapping ? 'Included' : 'Standard'}
                </div>
              </div>

              <button
                className="btn-gold"
                onClick={() => {
                  clearCart();
                  setIsOrdered(false);
                  onClose();
                }}
                style={{ width: '100%' }}
              >
                Return to Boutique
              </button>
            </div>
          ) : (
            <form onSubmit={handlePlaceOrder}>
              {/* Order Summary Snapshot */}
              <div
                style={{
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  borderRadius: '4px',
                  marginBottom: '1.5rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.8rem', color: '#A0A0A5' }}>
                  <span>Flacons in Order ({items.length}):</span>
                  <span style={{ color: '#FFF' }}>{formatPrice(subtotalAED)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.8rem', color: '#A0A0A5' }}>
                  <span>VIP UAE Delivery:</span>
                  <span style={{ color: isFreeShipping ? '#22C55E' : '#FFF' }}>
                    {isFreeShipping ? 'FREE' : formatPrice(50)}
                  </span>
                </div>
                <div style={{ height: '1px', background: 'rgba(212, 175, 55, 0.15)', margin: '0.5rem 0' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', fontWeight: 700, color: '#FFDF78' }}>
                  <span>Total Amount:</span>
                  <span>{formatPrice(isFreeShipping ? subtotalAED : subtotalAED + 50)}</span>
                </div>
              </div>

              {/* Input Fields */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.74rem', letterSpacing: '0.08em', color: '#C5A059', marginBottom: '0.3rem', textTransform: 'uppercase' }}>
                    Full Name / Title
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sheikh Sultan Al Nuaimi / John Doe"
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      background: '#131317',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      color: '#FFF',
                      borderRadius: '2px',
                      fontSize: '0.82rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.74rem', letterSpacing: '0.08em', color: '#C5A059', marginBottom: '0.3rem', textTransform: 'uppercase' }}>
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 123 4567"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        background: '#131317',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        color: '#FFF',
                        borderRadius: '2px',
                        fontSize: '0.82rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.74rem', letterSpacing: '0.08em', color: '#C5A059', marginBottom: '0.3rem', textTransform: 'uppercase' }}>
                      Emirate / City
                    </label>
                    <select
                      value={formData.city}
                      onChange={e => setFormData({ ...formData, city: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        background: '#131317',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        color: '#FFF',
                        borderRadius: '2px',
                        fontSize: '0.82rem',
                        outline: 'none'
                      }}
                    >
                      <option value="Dubai">Dubai</option>
                      <option value="Abu Dhabi">Abu Dhabi</option>
                      <option value="Sharjah">Sharjah</option>
                      <option value="Ajman">Ajman</option>
                      <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                      <option value="Riyadh (KSA)">Riyadh (KSA)</option>
                      <option value="Doha (Qatar)">Doha (Qatar)</option>
                      <option value="International">International</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.74rem', letterSpacing: '0.08em', color: '#C5A059', marginBottom: '0.3rem', textTransform: 'uppercase' }}>
                    Delivery Address / Villa / Hotel Suite
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Palm Jumeirah, Villa 24 / Burj Khalifa Suite"
                    value={formData.address}
                    onChange={e => setFormData({ ...formData, address: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      background: '#131317',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      color: '#FFF',
                      borderRadius: '2px',
                      fontSize: '0.82rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Submit Order Button */}
              <button
                type="submit"
                className="btn-gold"
                style={{ width: '100%', padding: '0.9rem', fontSize: '0.85rem' }}
              >
                <span>Confirm VIP Order ({formatPrice(isFreeShipping ? subtotalAED : subtotalAED + 50)})</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
