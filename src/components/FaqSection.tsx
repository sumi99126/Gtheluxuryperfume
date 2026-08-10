import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'What makes G The Luxury Fragrance extraits so enduring?',
      answer: 'Our fragrances are master-blended in Dubai at an ultra-rare 35%+ Extrait de Parfum concentration using aged Cambodian agarwood, Florentine iris, and authentic Taif damask rose absolutes. This artisanal concentration guarantees 18 to 24+ hours of royal sillage.'
    },
    {
      id: 'faq-2',
      question: 'Do you deliver across the UAE and GCC countries?',
      answer: 'Yes. We offer complimentary VIP courier across the UAE (Dubai same-day / next-day delivery) and GCC countries with real-time tracked delivery and tamper-evident gold-sealed luxury packaging.'
    },
    {
      id: 'faq-3',
      question: 'Are complimentary discovery samples included with every order?',
      answer: 'Every flacon order includes a complimentary 5ml luxury discovery spray vial of your chosen fragrance from our vault so you can explore other scents alongside your purchase.'
    },
    {
      id: 'faq-4',
      question: 'Can I place an order directly via WhatsApp Concierge?',
      answer: 'Yes! Click the WhatsApp Concierge button on any product card or in your shopping bag to speak directly with our private fragrance advisors at +971 56 570 5449 for personalized recommendations and instant ordering.'
    },
    {
      id: 'faq-5',
      question: 'How should I store my luxury perfume flacon?',
      answer: 'Store your perfume flacon in a cool, dry place away from direct sunlight. Our heavy Italian crystal and UV-protective flacons are specifically engineered to preserve the top notes and oil integrity for years.'
    }
  ];

  const toggleFaq = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section
      id="faqs-section"
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '2rem',
        paddingBottom: '4.5rem',
        width: '100%'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '880px',
          margin: '0 auto',
          padding: '0 clamp(1.25rem, 3.5vw, 2.5rem)'
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.74rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              color: '#8A7A68',
              textTransform: 'uppercase',
              margin: '0 0 0.5rem 0'
            }}
          >
            FREQUENTLY ASKED QUESTIONS
          </p>

          <h2
            style={{
              fontFamily: "'Italiana', 'Cormorant Garamond', 'Prata', 'Playfair Display', serif",
              fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)',
              fontWeight: 400,
              lineHeight: 1.18,
              color: '#1A1A1A',
              margin: 0,
              letterSpacing: '0.01em'
            }}
          >
            Everything you need to know<br />about our haute fragrances
          </h2>
        </div>

        {/* FAQs Accordion Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {faqs.map(faq => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                style={{
                  backgroundColor: isOpen ? '#FFFFFF' : '#FCFAF7',
                  borderRadius: '12px',
                  border: '1.5px solid',
                  borderColor: isOpen ? '#C5A059' : '#EDE7DE',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease',
                  boxShadow: isOpen
                    ? '0 6px 20px rgba(197, 160, 89, 0.08)'
                    : '0 2px 6px rgba(0, 0, 0, 0.015)'
                }}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  style={{
                    width: '100%',
                    padding: '1.3rem 1.6rem',
                    background: 'transparent',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '0.92rem',
                      fontWeight: 600,
                      color: isOpen ? '#C5A059' : '#1A1A1A',
                      transition: 'color 0.2s ease'
                    }}
                  >
                    {faq.question}
                  </span>

                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? '#C5A059' : '#F5F1EB',
                      color: isOpen ? '#FFFFFF' : '#666666',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.25s ease'
                    }}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 1.6rem 1.4rem 1.6rem',
                      borderTop: '1px solid rgba(197, 160, 89, 0.15)'
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '0.86rem',
                        fontWeight: 500,
                        lineHeight: 1.7,
                        color: '#2A2A2A',
                        margin: '0.85rem 0 0 0'
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
