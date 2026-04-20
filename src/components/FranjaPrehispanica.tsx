'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FranjaProps {
  position?: 'top' | 'bottom';
  className?: string;
}

export default function FranjaPrehispanica({ position = 'top', className = '' }: FranjaProps) {
  // A set of pre-hispanic geometric icons (SVG paths)
  const patterns = [
    "M20 10 L30 20 L20 30 L10 20 Z", // Rhombus
    "M10 10 H30 V30 H10 Z M15 15 H25 V25 H15 Z", // Concentric squares
    "M10 20 L20 10 L30 20 L20 30 Z M20 15 L25 20 L20 25 L15 20 Z", // Concentric rhombus
    "M10 10 L30 30 M30 10 L10 30", // Cross
    "M10 10 H30 L20 30 Z", // Triangle
  ];

  return (
    <div 
      className={`w-full h-12 bg-carbon flex items-center overflow-hidden relative z-20 
      ${position === 'top' ? 'border-b border-dorado/20' : 'border-t border-dorado/20'} 
      ${className}`}
    >
      <motion.div 
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {/* Double the content for seamless loop */}
        {[...Array(40)].map((_, i) => (
          <div key={i} className="flex-shrink-0 px-6 flex items-center justify-center opacity-30">
            <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
              <path 
                d={patterns[i % patterns.length]} 
                stroke="#D4A017" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </div>
        ))}
        {[...Array(40)].map((_, i) => (
          <div key={`dup-${i}`} className="flex-shrink-0 px-6 flex items-center justify-center opacity-30">
            <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
              <path 
                d={patterns[i % patterns.length]} 
                stroke="#D4A017" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
