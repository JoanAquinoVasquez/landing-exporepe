'use client';

import React from 'react';

interface AndeanPatternProps {
  opacity?: number;
  color?: string;
  className?: string;
}

export default function AndeanPattern({ 
  opacity = 0.08, 
  color = '#D4A017',
  className = '' 
}: AndeanPatternProps) {
  // Use a unique ID for the pattern to avoid collisions if multiple instances exist
  const patternId = React.useId().replace(/:/g, '');

  return (
    <svg 
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern 
          id={`andean-${patternId}`} 
          x="0" 
          y="0" 
          width="80" 
          height="80" 
          patternUnits="userSpaceOnUse"
        >
          {/* Central Cross Element */}
          <rect x="36" y="20" width="8" height="40" fill={color} opacity={opacity} />
          <rect x="20" y="36" width="40" height="8" fill={color} opacity={opacity} />
          
          {/* Corner Elements */}
          <path d="M0,0 L16,0 L16,4 L4,4 L4,16 L0,16 Z" fill={color} opacity={opacity * 0.8} />
          <path d="M80,0 L64,0 L64,4 L76,4 L76,16 L80,16 Z" fill={color} opacity={opacity * 0.8} />
          <path d="M0,80 L16,80 L16,76 L4,76 L4,64 L0,64 Z" fill={color} opacity={opacity * 0.8} />
          <path d="M80,80 L64,80 L64,76 L76,76 L76,64 L80,64 Z" fill={color} opacity={opacity * 0.8} />
          
          {/* Step elements - typical of Andean geometry */}
          <rect x="12" y="12" width="4" height="4" fill={color} opacity={opacity * 0.4} />
          <rect x="64" y="12" width="4" height="4" fill={color} opacity={opacity * 0.4} />
          <rect x="12" y="64" width="4" height="4" fill={color} opacity={opacity * 0.4} />
          <rect x="64" y="64" width="4" height="4" fill={color} opacity={opacity * 0.4} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#andean-${patternId})`} />
    </svg>
  );
}
