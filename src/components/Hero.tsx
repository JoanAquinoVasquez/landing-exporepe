'use client';

import { motion, Variants } from 'framer-motion';
import { Download, Play, Map, Trophy, ChevronDown } from 'lucide-react';
import AndeanPattern from './AndeanPattern';
import { Logo } from './Icons';

export default function Hero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section className="relative min-h-screen bg-carbon overflow-hidden flex items-center pt-20">
      <AndeanPattern opacity={0.1} color="#D4A017" />
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-rojo/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-dorado/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 lg:px-10 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            variants={container} 
            initial="hidden" 
            animate="visible"
            className="text-left"
          >
            <motion.div variants={item} className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-dorado/30 bg-dorado/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-dorado animate-pulse" />
              <span className="font-body text-dorado-light text-[10px] uppercase font-bold tracking-[0.3em]">
                Turismo inteligente · Perú 2026
              </span>
            </motion.div>

            <motion.h1 
              variants={item}
              className="font-display text-white leading-tight tracking-tight mb-8 pr-4"
              style={{ fontSize: 'clamp(56px, 10vw, 150px)', lineHeight: '0.95' }}
            >
              EL PERÚ<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-dorado-light">EN TUS</span><br />
              <span className="text-dorado-light">MANOS</span>
            </motion.h1>

            <motion.p 
              variants={item} 
              className="font-body text-white/60 text-lg lg:text-xl max-w-lg mb-12 leading-relaxed"
            >
              Descubre destinos únicos, explora sin internet y conecta con la esencia local. 
              La guía definitiva para el viajero moderno en el Perú.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-5 mt-8">
              <button className="group relative overflow-hidden bg-rojo hover:bg-rojo-dark transition-all duration-300 text-white font-body font-bold rounded-full px-10 py-5 flex items-center gap-3 shadow-2xl shadow-rojo/20">
                <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
                <span className="uppercase tracking-widest text-xs">Descargar Gratis</span>
              </button>
              
              <button className="group border border-white/20 hover:border-white/50 bg-white/5 backdrop-blur-sm transition-all duration-300 text-white font-body font-bold rounded-full px-10 py-5 flex items-center gap-3 active:scale-95">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Play size={14} className="fill-white ml-0.5" />
                </div>
                <span className="uppercase tracking-widest text-xs">Ver Experiencia</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Device Mockup with advanced animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
            className="hidden lg:flex justify-end perspective-1000"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotateX: [0, 5, 0],
                rotateY: [0, -5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-[300px] h-[600px] rounded-[50px] border-[8px] border-white/10 bg-carbon overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-carbon rounded-b-3xl z-20 border-x border-b border-white/10" />
              
              {/* Screen Content Wrapper */}
              <div className="absolute inset-0 bg-arena-light flex flex-col">
                {/* Simulated App Header */}
                <div className="bg-rojo p-6 pt-10 flex items-center justify-center">
                  <Logo variant="red" showIsotipo={true} className="scale-75" />
                </div>
                
                {/* Simulated Content */}
                <div className="p-6 space-y-6 flex-1 bg-gradient-to-b from-rojo/5 to-arena-light">
                  <div className="h-40 rounded-3xl bg-white shadow-sm border border-black/5 overflow-hidden relative">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509216242873-7786f446f465?auto=format&fit=crop&q=80')] bg-cover bg-center" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="text-[10px] text-dorado uppercase font-bold">Destacado</div>
                      <div className="text-white font-display text-lg">Cusco Imperial</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 rounded-3xl bg-white shadow-sm border border-black/5 flex flex-col items-center justify-center gap-2">
                       <Map size={24} className="text-rojo" />
                       <span className="text-[10px] font-bold uppercase tracking-tighter">Mapas Offline</span>
                    </div>
                    <div className="h-32 rounded-3xl bg-white shadow-sm border border-black/5 flex flex-col items-center justify-center gap-2">
                       <Trophy size={24} className="text-dorado" />
                       <span className="text-[10px] font-bold uppercase tracking-tighter">Logros</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-2 w-3/4 bg-black/10 rounded-full" />
                    <div className="h-2 w-full bg-black/5 rounded-full" />
                    <div className="h-2 w-1/2 bg-black/5 rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Hero Bottom Decor */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-carbon to-transparent hidden md:block" />
      
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} className="text-white/20" />
      </motion.div>
    </section>
  );
}
