'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'red';
  showIsotipo?: boolean;
}

export function Logo({ className = '', variant = 'dark', showIsotipo = true }: LogoProps) {
  // Colors based on variant
  const colors = {
    dark: { text: 'text-white', x: 'text-rojo', pe: 'text-white' },
    light: { text: 'text-carbon', x: 'text-rojo', pe: 'text-carbon' },
    red: { text: 'text-white', x: 'text-white', pe: 'text-dorado-light' }
  };

  const currentColors = colors[variant];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {showIsotipo && <Isotipo variant={variant} size={32} />}
      <span className={`font-display text-2xl lg:text-3xl tracking-widest leading-none ${currentColors.text}`}>
        <span className={currentColors.x}>X</span>PORE <span className={currentColors.pe}>PE</span>
      </span>
    </div>
  );
}

export function Isotipo({ size = 36, className = '', variant = 'dark' }: { size?: number, className?: string, variant?: 'light' | 'dark' | 'red' }) {
  // Arrow colors based on variant
  const arrow1 = variant === 'red' ? '#FFFFFF' : '#B8301E';
  const arrow2 = variant === 'light' ? '#1A0A08' : (variant === 'red' ? '#F0C84A' : '#FFFFFF');

  return (
    <svg width={size} height={size} viewBox="0 0 72 72" fill="none" className={className}>
      <path 
        d="M12 14 L36 36 L12 58" 
        stroke={arrow1} 
        strokeWidth="10" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M30 14 L54 36 L30 58" 
        stroke={arrow2} 
        strokeWidth="10" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        opacity={variant === 'red' ? 1 : 0.9}
      />
    </svg>
  );
}
