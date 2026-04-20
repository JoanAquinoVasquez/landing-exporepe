'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Logo } from './Icons';

interface NavbarProps {
  links: string[];
}

export default function Navbar({ links }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (v) => {
    setScrolled(v > 50);
  });

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex items-center
          ${scrolled ? 'bg-carbon/90 backdrop-blur-xl border-b border-dorado/10 h-16' : 'bg-transparent h-20'}
        `}
      >
        <div className="max-w-[1440px] mx-auto w-full px-5 lg:px-10 flex items-center justify-between">
          <Logo variant="dark" />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-body text-xs uppercase tracking-widest text-white/70 hover:text-dorado-light transition-colors font-semibold"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#download"
            className="bg-rojo hover:bg-rojo-dark transition-all duration-300 text-white font-body font-bold text-xs uppercase tracking-widest rounded-full px-8 py-3 shadow-lg shadow-rojo/20 active:scale-95"
          >
            Descargar Gratis
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={28} />
        </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-carbon flex flex-col p-8"
          >
            <div className="flex items-center justify-between mb-20">
              <Logo variant="dark" />
              <button onClick={() => setMobileOpen(false)} className="text-white p-2">
                <X size={32} />
              </button>
            </div>
            
            <div className="flex flex-col gap-10 items-center justify-center flex-1">
              {links.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="font-display text-5xl text-white tracking-wider hover:text-dorado-light"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </motion.a>
              ))}
              <motion.a
                href="#download"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: links.length * 0.1 }}
                className="mt-10 bg-rojo text-white font-body font-bold uppercase tracking-widest rounded-full px-12 py-4 text-sm"
                onClick={() => setMobileOpen(false)}
              >
                Descargar Gratis
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
