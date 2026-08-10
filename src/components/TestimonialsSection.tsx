import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: string;
  rating: number;
  text: string;
  name: string;
  role: string;
  avatar: string;
}

export const TestimonialsSection: React.FC = () => {
  const row1Testimonials: Testimonial[] = [
    {
      id: 't1',
      rating: 5,
      text: "G The Luxury's Legacy 709 is seriously bold and classic all at once. It's smooth but intense, giving off this vibe that's both powerful and unmistakably regal.",
      name: "Marcus T.",
      role: "Connoisseur · London, UK",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
    },
    {
      id: 't2',
      rating: 5,
      text: "Hubb totally nails that warm, romantic feeling. It's super inviting and classy without trying too hard. I love how it's perfect for any occasion and always feels stylish.",
      name: "Isabella V.",
      role: "Collector · Milan, IT",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
    },
    {
      id: 't3',
      rating: 5,
      text: "Wearing Flora is like stepping into a sun-drenched Taif rose garden in the morning. It's my go-to for those refined days when I just want to feel radiant and elevated.",
      name: "Camille L.",
      role: "Creative Director · Paris, FR",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80"
    },
    {
      id: 't4',
      rating: 5,
      text: "The oud quality in Majestic Oud is world-class. Aged Cambodian agarwood combined with Taif rose creates a 24-hour royal sillage that commands attention everywhere.",
      name: "Tariq Al-Mansoor",
      role: "Fragrance Aficionado · Dubai, UAE",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80"
    }
  ];

  const row2Testimonials: Testimonial[] = [
    {
      id: 't5',
      rating: 5,
      text: "The longevity is exceptional — it stays close to the skin without overpowering the room. Paradise Oud has quickly become my signature evening scent.",
      name: "Sofia R.",
      role: "Product Manager · Berlin, DE",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80"
    },
    {
      id: 't6',
      rating: 5,
      text: "The packaging and heavy flacon with the engraved Dubai skyline plate are stunning, but the scent itself is what keeps me coming back. It feels like a ritual every time.",
      name: "Julian K.",
      role: "Brand Strategist · New York, US",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=120&auto=format&fit=crop&q=80"
    },
    {
      id: 't7',
      rating: 5,
      text: "G The Luxury Fragrance understands that fragrance is an intimate experience. Every bottle feels like a handcrafted piece of bespoke Dubai architecture.",
      name: "Elena M.",
      role: "Art Director · Barcelona, ES",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80"
    },
    {
      id: 't8',
      rating: 5,
      text: "Ordered via WhatsApp concierge in Dubai. Delivered impeccably packaged in gold foil with complimentary discovery vials. Truly 7-star luxury service.",
      name: "Zaid H.",
      role: "Collector · Riyadh, KSA",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80"
    }
  ];

  const renderCard = (item: Testimonial) => (
    <div
      key={item.id}
      style={{
        width: '380px',
        backgroundColor: '#FFFFFF',
        borderRadius: '14px',
        border: '1px solid #ECE7DF',
        padding: '1.75rem',
        marginRight: '1.25rem',
        flexShrink: 0,
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = '#C5A059';
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = '#ECE7DF';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.04)';
      }}
    >
      <div>
        {/* 5 Golden Stars */}
        <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
          {[...Array(item.rating)].map((_, i) => (
            <Star
              key={i}
              size={15}
              fill="#C5A059"
              color="#C5A059"
            />
          ))}
        </div>

        {/* Review Quote */}
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '0.84rem',
            lineHeight: 1.6,
            color: '#333333',
            margin: '0 0 1.5rem 0'
          }}
        >
          "{item.text}"
        </p>
      </div>

      {/* Author Footer */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <img
          src={item.avatar}
          alt={item.name}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '1px solid #EAE6DF'
          }}
        />
        <div>
          <h4
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.85rem',
              fontWeight: 700,
              color: '#111111',
              margin: 0
            }}
          >
            {item.name}
          </h4>
          <span style={{ fontSize: '0.72rem', color: '#888888' }}>
            {item.role}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="testimonials-section"
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '2rem',
        paddingBottom: '3.5rem',
        width: '100%',
        overflow: 'hidden'
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
        {/* Centered Section Header (Normal Balanced Size) */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
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
            TESTIMONIALS
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
            What our customers say about<br />our products
          </h2>
        </div>
      </div>

      {/* Marquee Wrapper with Inset Left-Right Padding */}
      <div
        style={{
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 clamp(1.25rem, 3.5vw, 3rem)',
          overflow: 'hidden'
        }}
      >
        {/* Row 1: Smooth Infinite Loop (Moving Left) */}
        <div className="marquee-row" style={{ width: '100%', overflow: 'hidden', marginBottom: '1.25rem' }}>
          <div className="animate-marquee-left">
            {row1Testimonials.map(renderCard)}
            {row1Testimonials.map(renderCard)}
          </div>
        </div>

        {/* Row 2: Smooth Infinite Loop (Moving Right) */}
        <div className="marquee-row" style={{ width: '100%', overflow: 'hidden' }}>
          <div className="animate-marquee-right">
            {row2Testimonials.map(renderCard)}
            {row2Testimonials.map(renderCard)}
          </div>
        </div>
      </div>
    </section>
  );
};
