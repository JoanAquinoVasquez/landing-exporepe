'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useMotionValueEvent } from 'framer-motion';
import {
  MapPinOff, WifiOff, EyeOff, Menu, X, ChevronDown,
  Check, Star, Download, Map, Trophy, Play,
} from 'lucide-react';

// ─── SVG fallback logos ───────────────────────────────────────────────────────
function LogoSVG({ width = 140, className = '' }: { width?: number; className?: string }) {
  return (
    <svg width={width} height={Math.round(width * 0.29)} viewBox="0 0 140 40" fill="none" className={className}>
      <text x="0" y="32" fontFamily="var(--font-bebas)" fontSize="36" fill="currentColor" letterSpacing="2">
        XPORE
      </text>
      <text x="90" y="32" fontFamily="var(--font-bebas)" fontSize="36" fill="#D4A017" letterSpacing="2">
        PE
      </text>
    </svg>
  );
}

function IsotipoSVG({ size = 36, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" className={className}>
      <text x="2" y="28" fontFamily="var(--font-bebas)" fontSize="30" fill="currentColor">{'>>'}</text>
    </svg>
  );
}

// ─── Logo with PNG fallback ───────────────────────────────────────────────────
function LogoImg({ width = 140, height = 40, className = '' }: { width?: number; height?: number; className?: string }) {
  const [error, setError] = useState(false);
  if (error) return <LogoSVG width={width} className={className} />;
  return (
    <Image
      src="/logo.png"
      alt="XporePE"
      width={width}
      height={height}
      className={`object-contain ${className}`}
      priority
      onError={() => setError(true)}
    />
  );
}

function IsotipoImg({ size = 36, className = '' }: { size?: number; className?: string }) {
  const [error, setError] = useState(false);
  if (error) return <IsotipoSVG size={size} className={className} />;
  return (
    <Image
      src="/isotipo.png"
      alt="XporePE"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      priority
      onError={() => setError(true)}
    />
  );
}

// ─── Andean SVG pattern ───────────────────────────────────────────────────────
function AndeanPattern({ opacity = 0.08, color = '#D4A017' }: { opacity?: number; color?: string }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={`andean-${color.replace('#', '')}`} x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <rect x="28" y="20" width="8" height="40" fill={color} opacity={opacity} />
          <rect x="20" y="28" width="40" height="8" fill={color} opacity={opacity} />
          <path d="M0,0 L12,0 L12,4 L4,4 L4,12 L0,12 Z" fill={color} opacity={opacity * 0.6} />
          <path d="M80,0 L68,0 L68,4 L76,4 L76,12 L80,12 Z" fill={color} opacity={opacity * 0.6} />
          <path d="M0,80 L12,80 L12,76 L4,76 L4,68 L0,68 Z" fill={color} opacity={opacity * 0.6} />
          <path d="M80,80 L68,80 L68,76 L76,76 L76,68 L80,68 Z" fill={color} opacity={opacity * 0.6} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#andean-${color.replace('#', '')})`} />
    </svg>
  );
}

// ─── Counter hook ─────────────────────────────────────────────────────────────
function useCounter(target: number, duration = 1500, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let val = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      val += step;
      if (val >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(val));
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

// ─── TikTok icon ─────────────────────────────────────────────────────────────
function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// NAVBAR
// ═══════════════════════════════════════════════════════════════════════════════
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 50));

  const links = ['Destinos', 'Cultura', 'Retos', 'Negocios'];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-bgDark/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10 h-16 flex items-center justify-between">
          <div className="hidden md:block">
            <LogoImg width={140} height={40} className="brightness-0 invert" />
          </div>
          <div className="md:hidden">
            <IsotipoImg size={36} className="brightness-0 invert" />
          </div>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-body font-semibold text-sm tracking-wide text-white/80 hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#download"
              className="bg-roja hover:bg-rojaDeep transition-colors text-white font-body font-semibold text-sm rounded-full px-6 py-2"
            >
              Descargar Gratis
            </a>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-bgDark flex flex-col"
          >
            <div className="flex items-center justify-between px-5 h-16">
              <IsotipoImg size={36} className="brightness-0 invert" />
              <button onClick={() => setMobileOpen(false)} className="text-white p-2">
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              {links.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="font-display text-4xl text-white tracking-wider"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </motion.a>
              ))}
              <motion.a
                href="#download"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.1 }}
                className="mt-4 bg-roja text-white font-body font-semibold rounded-full px-8 py-3"
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

// ═══════════════════════════════════════════════════════════════════════════════
// HERO
// ═══════════════════════════════════════════════════════════════════════════════
function Hero() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section className="relative min-h-screen bg-bgDark overflow-hidden flex items-center">
      <AndeanPattern opacity={0.07} color="#D4A017" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.p variants={item} className="font-body text-dorado tracking-widest text-xs uppercase mb-4">
              Turismo inteligente · Perú
            </motion.p>
            <motion.h1
              variants={item}
              className="font-display text-white leading-none tracking-wider"
              style={{ fontSize: 'clamp(72px, 12vw, 120px)' }}
            >
              EL PERÚ<br />EN TUS<br />MANOS
            </motion.h1>
            <motion.p variants={item} className="font-body text-white/70 text-lg max-w-lg mt-6">
              Descubre destinos únicos, explora sin internet y conecta con la comunidad local.
              Tu guía inteligente para recorrer el Perú.
            </motion.p>
            <motion.div variants={item} className="flex flex-wrap gap-4 mt-8">
              <a
                href="#download"
                className="bg-roja hover:bg-rojaDeep transition-colors text-white font-body font-semibold rounded-full px-8 py-3 flex items-center gap-2"
              >
                <Download size={18} />
                Descargar Gratis
              </a>
              <button className="border border-white/30 hover:border-white/60 transition-colors text-white font-body font-semibold rounded-full px-8 py-3 flex items-center gap-2">
                <Play size={18} />
                Ver Demo
              </button>
            </motion.div>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="relative w-[260px] h-[520px] rounded-[40px] border-4 border-white/20 bg-bgDarkMid overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-bgDark rounded-b-2xl z-10" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 pt-10">
                  <div className="w-full h-32 rounded-2xl bg-gradient-to-br from-roja/40 to-rojaDeep/20 border border-white/10 flex items-center justify-center">
                    <Map size={40} className="text-dorado" />
                  </div>
                  <div className="w-full space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-3 rounded-full bg-white/10" style={{ width: `${100 - i * 12}%` }} />
                    ))}
                  </div>
                  <div className="w-full h-24 rounded-xl bg-gradient-to-br from-dorado/20 to-teal/10 border border-white/10 flex items-center justify-center gap-3">
                    <Trophy size={24} className="text-doradoLight" />
                    <div>
                      <div className="text-white font-body text-xs font-semibold">¡Logro desbloqueado!</div>
                      <div className="text-dorado font-body text-xs">+250 puntos</div>
                    </div>
                  </div>
                  <div className="flex gap-2 w-full">
                    <div className="flex-1 h-20 rounded-xl bg-white/5 border border-white/10" />
                    <div className="flex-1 h-20 rounded-xl bg-white/5 border border-white/10" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown size={28} className="text-white/40" />
      </motion.div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PROBLEMS
// ═══════════════════════════════════════════════════════════════════════════════
function Problems() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const cards = [
    { icon: MapPinOff, title: 'Información dispersa', desc: 'Los mejores lugares no aparecen en Google Maps.' },
    { icon: WifiOff, title: 'Sin internet, sin guía', desc: 'Las zonas arqueológicas no tienen señal.' },
    { icon: EyeOff, title: 'Negocios invisibles', desc: 'Restaurantes y artesanos locales sin visibilidad.' },
  ];

  return (
    <section className="bg-bgPrimary py-24 px-5 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-textPrimary mb-14"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
        >
          ¿POR QUÉ XPOREPE?
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white border border-black/[0.08] rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <card.icon size={32} className="text-roja mb-4" />
              <h3 className="font-body font-bold text-textPrimary text-lg mb-2">{card.title}</h3>
              <p className="font-body text-textSecondary text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SOLUTION
// ═══════════════════════════════════════════════════════════════════════════════
function Solution() {
  const cards = [
    { num: '01', title: 'Rutas Personalizadas', desc: 'IA que aprende tus intereses y diseña rutas únicas.' },
    { num: '02', title: 'Modo Sin Internet', desc: 'Descarga destinos completos. Explora sin señal.' },
    { num: '03', title: 'Comunidad Local', desc: 'Publica lugares, comenta, reacciona, descubre.' },
  ];

  return (
    <section className="bg-bgDark py-24 px-5 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-doradoLight mb-14"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
        >
          NUESTRA SOLUCIÓN
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="bg-bgDarkMid border border-white/10 rounded-2xl p-8"
            >
              <div className="font-display text-5xl text-dorado/30 mb-4">{card.num}</div>
              <h3 className="font-display text-white text-2xl tracking-wide mb-3">{card.title}</h3>
              <p className="font-body text-white/60 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// HOW IT WORKS
// ═══════════════════════════════════════════════════════════════════════════════
function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    { icon: Download, label: 'Descarga la app', sub: 'Disponible en iOS y Android, gratis.' },
    { icon: Map, label: 'Elige tu destino', sub: 'Más de 50 destinos en todo el Perú.' },
    { icon: Trophy, label: 'Explora y gana recompensas', sub: 'Badges, puntos y rankings de exploradores.' },
  ];

  return (
    <section id="retos" className="bg-bgPrimary py-24 px-5 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-textPrimary mb-16"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
        >
          ASÍ FUNCIONA
        </motion.h2>

        <div ref={ref} className="relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-[16%] right-[16%] hidden md:block h-[2px] overflow-hidden">
            <motion.div
              className="h-full bg-dorado origin-left"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-bgDark flex items-center justify-center mb-6 relative z-10 border-4 border-bgPrimary ring-2 ring-bgDark/20">
                  <step.icon size={32} className="text-dorado" />
                </div>
                <div className="font-display text-textPrimary text-2xl tracking-wide mb-2">{step.label}</div>
                <p className="font-body text-textSecondary text-sm">{step.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// DESTINATIONS
// ═══════════════════════════════════════════════════════════════════════════════
function Destinations() {
  const dests = [
    { name: 'Machu Picchu', region: 'Cusco', from: '#B8301E', to: '#8C2010', stars: 5 },
    { name: 'Señor de Sipán', region: 'Lambayeque', from: '#D4A017', to: '#1A0A08', stars: 5 },
    { name: 'Huacachina', region: 'Ica', from: '#2EC4B6', to: '#1A7A72', stars: 4 },
    { name: 'Chan Chan', region: 'La Libertad', from: '#8C2010', to: '#2E1612', stars: 5 },
    { name: 'Colca Canyon', region: 'Arequipa', from: '#2EC4B6', to: '#1A0A08', stars: 4 },
    { name: 'Lago Titicaca', region: 'Puno', from: '#D4A017', to: '#2EC4B6', stars: 5 },
  ];

  return (
    <section id="destinos" className="bg-bgDark py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-white"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
        >
          DESCUBRE EL PERÚ
        </motion.h2>
      </div>

      <div className="flex gap-5 overflow-x-auto scrollbar-hide px-5 lg:px-10 snap-x snap-mandatory pb-4">
        {dests.map((d, i) => (
          <motion.div
            key={d.name}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ scale: 1.05 }}
            className="flex-none w-[280px] h-[380px] rounded-2xl overflow-hidden relative snap-start cursor-pointer transition-shadow"
            style={{
              background: `linear-gradient(135deg, ${d.from}, ${d.to})`,
            }}
          >
            <AndeanPattern opacity={0.12} color="#ffffff" />
            <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/30 backdrop-blur rounded-full px-3 py-1">
              <Star size={12} className="text-doradoLight fill-doradoLight" />
              <span className="font-body text-xs text-white font-semibold">{d.stars}.0</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="font-display text-white text-2xl tracking-wide leading-tight">{d.name}</h3>
              <p className="font-body text-dorado text-sm font-semibold mt-1">{d.region}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// GAMIFICATION
// ═══════════════════════════════════════════════════════════════════════════════
function Gamification() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const count = useCounter(1250, 1500, inView);

  return (
    <section className="bg-bgPrimary py-24 px-5 lg:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="font-display text-textPrimary leading-none mb-10"
            style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}
          >
            VIAJA.<br />COMPLETA.<br />GANA.
          </h2>
          <ul className="space-y-4">
            {[
              'Completa rutas y desbloquea badges',
              'Gana puntos canjeables en negocios locales',
              'Compite en el ranking de exploradores',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-dorado flex items-center justify-center flex-none">
                  <Check size={12} className="text-white" />
                </div>
                <span className="font-body text-textSecondary text-base">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-bgDark rounded-3xl p-10 flex flex-col items-center text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            className="mb-6"
          >
            <svg width="80" height="80" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="36" fill="#D4A017" opacity="0.2" />
              <circle cx="40" cy="40" r="28" fill="#D4A017" opacity="0.4" />
              <circle cx="40" cy="40" r="20" fill="#D4A017" />
              <text x="40" y="46" textAnchor="middle" fontSize="20" fill="#1A0A08" fontFamily="var(--font-bebas)">★</text>
            </svg>
          </motion.div>

          <p className="font-body text-white/60 text-sm mb-2">¡Nuevo logro desbloqueado!</p>
          <p className="font-body text-white font-bold text-lg mb-1">Explorador del Inca</p>

          <div className="mt-6 bg-bgDarkMid rounded-2xl px-8 py-4">
            <div className="font-display text-doradoLight" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>
              {count.toLocaleString()}
            </div>
            <div className="font-body text-white/50 text-sm">puntos acumulados</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TESTIMONIALS
// ═══════════════════════════════════════════════════════════════════════════════
function Testimonials() {
  const testimonials = [
    { text: 'Encontré restaurantes increíbles que no salen en ninguna app. XporePE es diferente.', name: 'Carlos M.', location: 'Lima' },
    { text: 'Exploré Sipán sin señal. Todo descargado, perfecto.', name: 'Andrea K.', location: 'Turista USA' },
    { text: 'Publicamos nuestro negocio y triplicamos visitas.', name: 'Rosa T.', location: 'Artesana, Lambayeque' },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, [testimonials.length]);

  return (
    <section id="cultura" className="bg-bgDark py-24 px-5 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-doradoLight mb-14 text-center"
          style={{ fontSize: 'clamp(24px, 4vw, 48px)' }}
        >
          LO QUE DICEN LOS EXPLORADORES
        </motion.h2>

        <div className="relative h-60 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full max-w-2xl mx-auto bg-bgDarkMid border border-white/10 rounded-2xl p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} className="text-doradoLight fill-doradoLight" />
                ))}
              </div>
              <p className="font-body text-white/80 text-base italic mb-6 leading-relaxed">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>
              <div>
                <span className="font-body font-bold text-white text-sm">— {testimonials[current].name}</span>
                <span className="font-body text-white/40 text-sm"> · {testimonials[current].location}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-dorado w-6' : 'bg-white/20 w-2'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// DOWNLOAD CTA
// ═══════════════════════════════════════════════════════════════════════════════
function DownloadCTA() {
  return (
    <section id="download" className="bg-roja py-24 px-5 lg:px-10 relative overflow-hidden">
      <AndeanPattern opacity={0.1} color="#ffffff" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="font-display text-white leading-none mb-4"
            style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}
          >
            EL PERÚ TE ESPERA
          </h2>
          <p className="font-body text-white/80 text-lg mb-10">
            Descarga gratis. Sin registro obligatorio.
          </p>

          <div className="flex justify-center mb-10">
            <LogoImg width={160} height={46} className="brightness-0 invert" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* App Store */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white/10 border border-white/20 rounded-2xl px-8 py-4 backdrop-blur flex items-center gap-4 text-white hover:bg-white/20 transition-colors"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
              </svg>
              <div className="text-left">
                <div className="font-body text-xs text-white/70">Disponible en</div>
                <div className="font-body font-bold text-base">App Store</div>
              </div>
            </motion.button>

            {/* Google Play */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white/10 border border-white/20 rounded-2xl px-8 py-4 backdrop-blur flex items-center gap-4 text-white hover:bg-white/20 transition-colors"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.35.2.74.24 1.12.1l12.09-6.98-2.55-2.56L3.18 23.76zm16.27-9.35L17.1 13l-2.62 2.62 2.62 2.63 2.37-1.37c.68-.39.68-1.45-.02-1.87zM3.07.31C2.74.54 2.5.94 2.5 1.46v21.09c0 .52.24.92.57 1.15l.08.05L14.3 12.1v-.28L3.15.26l-.08.05zm10.09 11.19L3.07.31l11.23 6.49-2.14 2.14-2.55-2.56.02 4.08 1.53 1.54z" />
              </svg>
              <div className="text-left">
                <div className="font-body text-xs text-white/70">Disponible en</div>
                <div className="font-body font-bold text-base">Google Play</div>
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FOOTER
// ═══════════════════════════════════════════════════════════════════════════════
function Footer() {
  return (
    <footer id="negocios" className="bg-bgDark py-16 px-5 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 items-start mb-10">
          <div>
            <LogoImg width={120} height={34} className="brightness-0 invert opacity-80" />
            <p className="font-body text-white/40 text-sm mt-3 max-w-xs leading-relaxed">
              La app de turismo inteligente que conecta viajeros con el Perú auténtico.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {['Destinos', 'Cultura', 'Retos', 'Negocios'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-body text-white/50 hover:text-white transition-colors text-sm"
              >
                {link}
              </a>
            ))}
          </div>

          <div>
            <p className="font-body text-white/40 text-xs uppercase tracking-widest mb-4">Síguenos</p>
            <div className="flex gap-3">
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 hover:bg-roja transition-colors flex items-center justify-center text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              {/* TikTok */}
              <a href="#" aria-label="TikTok" className="w-10 h-10 rounded-full bg-white/10 hover:bg-roja transition-colors flex items-center justify-center text-white">
                <TikTokIcon size={18} />
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/10 hover:bg-roja transition-colors flex items-center justify-center text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-body text-textTertiary text-xs">© 2026 XporePE · MacSoft Perú</p>
          <p className="font-body text-textTertiary text-xs">Hecho con ❤️ para el Perú</p>
        </div>
      </div>
    </footer>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════════════════════════════════════
export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problems />
      <Solution />
      <HowItWorks />
      <Destinations />
      <Gamification />
      <Testimonials />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
