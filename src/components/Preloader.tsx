import React, { useState, useEffect, useRef } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    let isMounted = true;

    const timer = setInterval(() => {
      if (!isMounted) return;
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            if (isMounted) {
              setIsFadingOut(true);
              setTimeout(() => {
                onCompleteRef.current();
              }, 600);
            }
          }, 300);
          return 100;
        }
        return Math.min(100, prev + 3);
      });
    }, 40);

    return () => {
      isMounted = false;
      clearInterval(timer);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: '#FAF8F5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: isFadingOut ? 0 : 1,
        transform: isFadingOut ? 'scale(1.02)' : 'scale(1)',
        pointerEvents: isFadingOut ? 'none' : 'auto'
      }}
    >
      {/* Centered Animated Minimal Container */}
      <div
        className="animate-entrance"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '380px',
          width: '100%',
          position: 'relative'
        }}
      >
        {/* Soft Golden Ambient Aura Behind Logo */}
        <div
          className="animate-glow-pulse"
          style={{
            position: 'absolute',
            top: '20px',
            width: '260px',
            height: '160px',
            background: 'radial-gradient(ellipse, rgba(197, 160, 89, 0.28) 0%, rgba(250, 248, 245, 0) 70%)',
            filter: 'blur(30px)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        {/* Brand Logo with Smooth Floating Breathing Animation */}
        <div
          className="animate-logo-float"
          style={{
            marginBottom: '1rem',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1
          }}
        >
          <img
            src="/luxurylogo2.png"
            alt="G The Luxury Fragrance"
            style={{
              width: '260px',
              maxWidth: '85vw',
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
              filter: 'drop-shadow(0 4px 14px rgba(197, 160, 89, 0.22))'
            }}
          />
        </div>

        {/* Luxury Tagline Line */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '1.25rem',
            fontStyle: 'italic',
            letterSpacing: '0.12em',
            color: '#A87D25',
            margin: '0 0 2.25rem 0',
            position: 'relative',
            zIndex: 1
          }}
        >
          Haute Parfumerie • Dubai
        </p>

        {/* Minimalist Shimmering Progress Bar (Thicker) */}
        <div style={{ width: '100%', maxWidth: '260px', position: 'relative', zIndex: 1 }}>
          <div
            style={{
              width: '100%',
              height: '5px',
              backgroundColor: 'rgba(197, 160, 89, 0.2)',
              borderRadius: '999px',
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #996515 0%, #D4AF37 50%, #E6C875 100%)',
                boxShadow: '0 0 10px rgba(197, 160, 89, 0.5)',
                borderRadius: '999px',
                transition: 'width 0.08s ease-out'
              }}
            />
          </div>

          {/* Percentage Counter */}
          <div
            style={{
              marginTop: '0.75rem',
              textAlign: 'center',
              fontSize: '0.75rem',
              fontFamily: "'Montserrat', sans-serif",
              letterSpacing: '0.15em',
              color: '#8A8A8A',
              fontWeight: 500
            }}
          >
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
};
