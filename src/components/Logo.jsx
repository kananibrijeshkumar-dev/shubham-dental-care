import React from 'react';

export const Logo = ({ className = "", size = 48, variant = 'primary' }) => {
  const textColor = variant === 'light' ? '#FAFAFA' : 'var(--primary)';

  return (
    <div className={`flex items-center gap-3 ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.1))' }}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 64 64" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF7D6" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#997A15" />
          </linearGradient>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2A7BBA" />
            <stop offset="50%" stopColor="#0F4C81" />
            <stop offset="100%" stopColor="#082A4A" />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* 3D Smile Curve */}
        <path 
          d="M12 40 C 24 56, 40 56, 52 40" 
          stroke="url(#goldGradient)" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          filter="url(#shadow)"
        />
        {/* 3D 'S' / Abstract Tooth */}
        <path 
          d="M 40 24 C 40 16, 24 16, 24 24 C 24 32, 40 32, 40 40 C 40 48, 24 48, 24 40" 
          stroke="url(#blueGradient)" 
          strokeWidth="5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          filter="url(#shadow)" 
        />
        {/* Precision Nodes */}
        <circle cx="24" cy="40" r="3" fill="url(#blueGradient)" filter="url(#shadow)" />
        <circle cx="40" cy="24" r="3" fill="url(#blueGradient)" filter="url(#shadow)" />
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.1' }}>
        <span style={{ fontFamily: 'var(--font-primary)', fontSize: '1.25rem', fontWeight: '900', color: textColor, letterSpacing: '-0.02em', textShadow: '1px 1px 2px rgba(0,0,0,0.05)' }}>
          Shubham <span style={{ color: 'var(--secondary)' }}>Dental</span>
        </span>
        <span style={{ fontSize: '0.65rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-dark)' }}>
          Care Studio
        </span>
      </div>
    </div>
  );
};
