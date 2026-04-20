'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  theme?: 'light' | 'dark' | 'red';
  background?: React.ReactNode;
}

export default function SectionWrapper({ 
  children, 
  id, 
  className = '', 
  theme = 'light',
  background
}: SectionWrapperProps) {
  
  const backgrounds = {
    light: 'bg-arena-light text-carbon',
    dark: 'bg-carbon text-white',
    red: 'bg-gradient-to-br from-rojo to-rojo-dark text-white',
  };

  return (
    <section 
      id={id} 
      className={`relative py-24 px-5 lg:px-10 overflow-hidden ${backgrounds[theme]} ${className}`}
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {background}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" as "linear" }}
        className="max-w-[1440px] mx-auto relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
}
