import React from 'react';

interface AdirePatternProps {
  className?: string;
  variant?: 'sunburst' | 'spiral' | 'chevron' | 'eleko-grid' | 'cowrie' | 'border-strip';
  color?: string;
}

export const AdirePattern: React.FC<AdirePatternProps> = ({
  className = 'w-6 h-6',
  variant = 'sunburst',
  color = 'currentColor',
}) => {
  if (variant === 'spiral') {
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M50 50 C 45 45, 45 35, 50 30 C 60 25, 70 35, 70 50 C 70 68, 48 72, 35 65 C 20 55, 22 30, 40 18 C 62 5, 85 20, 88 45 C 92 75, 65 92, 35 90 C 10 88, 2 60, 5 35"
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="50" cy="50" r="4" fill={color} />
      </svg>
    );
  }

  if (variant === 'cowrie') {
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="50" rx="36" ry="46" stroke={color} strokeWidth="3.5" />
        <path
          d="M50 15 C 44 25, 42 40, 46 50 C 42 60, 44 75, 50 85 C 56 75, 58 60, 54 50 C 58 40, 56 25, 50 15 Z"
          stroke={color}
          strokeWidth="3"
          fill="none"
        />
        <line x1="38" y1="35" x2="45" y2="35" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="55" y1="35" x2="62" y2="35" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="36" y1="50" x2="44" y2="50" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="56" y1="50" x2="64" y2="50" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="38" y1="65" x2="45" y2="65" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="55" y1="65" x2="62" y2="65" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (variant === 'chevron') {
    return (
      <svg className={className} viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 20 L20 5 L40 20 L60 5 L80 20 L100 5 L120 20" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M0 35 L20 20 L40 35 L60 20 L80 35 L100 20 L120 35" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (variant === 'eleko-grid') {
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="84" height="84" stroke={color} strokeWidth="3" rx="2" />
        <line x1="50" y1="8" x2="50" y2="92" stroke={color} strokeWidth="2" strokeDasharray="3 3" />
        <line x1="8" y1="50" x2="92" y2="50" stroke={color} strokeWidth="2" strokeDasharray="3 3" />
        {/* Diamond centers */}
        <polygon points="50,18 78,50 50,82 22,50" stroke={color} strokeWidth="2.5" fill="none" />
        <circle cx="50" cy="50" r="6" fill={color} />
      </svg>
    );
  }

  if (variant === 'border-strip') {
    return (
      <svg className={className} viewBox="0 0 400 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 12 Q 25 0, 50 12 T 100 12 T 150 12 T 200 12 T 250 12 T 300 12 T 350 12 T 400 12"
          stroke={color}
          strokeWidth="2"
          fill="none"
        />
        <circle cx="25" cy="12" r="3" fill={color} />
        <circle cx="75" cy="12" r="3" fill={color} />
        <circle cx="125" cy="12" r="3" fill={color} />
        <circle cx="175" cy="12" r="3" fill={color} />
        <circle cx="225" cy="12" r="3" fill={color} />
        <circle cx="275" cy="12" r="3" fill={color} />
        <circle cx="325" cy="12" r="3" fill={color} />
        <circle cx="375" cy="12" r="3" fill={color} />
      </svg>
    );
  }

  // Default: Sunburst / Celestial resist motif
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="14" stroke={color} strokeWidth="3" />
      <circle cx="50" cy="50" r="6" fill={color} />
      <circle cx="50" cy="50" r="26" stroke={color} strokeWidth="2.5" strokeDasharray="4 4" />
      <circle cx="50" cy="50" r="38" stroke={color} strokeWidth="2" strokeDasharray="2 3" />
      {/* Sun rays */}
      <line x1="50" y1="4" x2="50" y2="10" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="90" x2="50" y2="96" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="4" y1="50" x2="10" y2="50" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="90" y1="50" x2="96" y2="50" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="17" y1="17" x2="22" y2="22" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="78" y1="78" x2="83" y2="83" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="17" y1="83" x2="22" y2="78" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="78" y1="22" x2="83" y2="17" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
};
