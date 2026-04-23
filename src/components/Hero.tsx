'use client';

import { motion, Variants } from 'framer-motion';
import { Download, Play, ChevronDown } from 'lucide-react';
import AndeanPattern from './AndeanPattern';
import Image from 'next/image';
import homescreenImg from '@/assets/homescreen.jpeg';
import { useState } from 'react';
import VideoModal from './VideoModal';

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

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
                Un récord con una realidad oculta
              </span>
            </motion.div>

            <motion.h1 
              variants={item}
              className="font-display text-white leading-tight tracking-tight mb-8 pr-4"
              style={{ fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: '0.95' }}
            >
              ¿PERDISTE<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-dorado-light">TIEMPO</span><br />
              <span className="text-dorado-light">PLANEANDO?</span>
            </motion.h1>

            <motion.p 
              variants={item} 
              className="font-body text-white/60 text-lg lg:text-xl max-w-lg mb-12 leading-relaxed"
            >
              &quot;No están solos. En 2025, Lambayeque recibió más de 1 millón de turistas según GERCETUR, y la mayoría pasó por lo mismo. Un récord histórico... pero con una realidad que nadie quiere contar.&quot;
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-5 mt-8">
              <button className="group relative overflow-hidden bg-rojo hover:bg-rojo-dark transition-all duration-300 text-white font-body font-bold rounded-full px-10 py-5 flex items-center gap-3 shadow-2xl shadow-rojo/20">
                <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
                <span className="uppercase tracking-widest text-xs">Descargar App</span>
              </button>
              
              <button 
                onClick={() => setIsVideoModalOpen(true)}
                className="group border border-white/20 hover:border-white/50 bg-white/5 backdrop-blur-sm transition-all duration-300 text-white font-body font-bold rounded-full px-10 py-5 flex items-center gap-3 active:scale-95"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Play size={14} className="fill-white ml-0.5" />
                </div>
                <span className="uppercase tracking-widest text-xs">Ver Demo</span>
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
              <div className="absolute inset-0 bg-carbon flex flex-col">
                 <Image 
                   src={homescreenImg} 
                   alt="XplorePE App Home Screen" 
                   fill 
                   className="object-cover opacity-90"
                 />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Hero Bottom Decor */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-carbon to-transparent hidden md:block" />
      
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20"
        animate={{ y: [0, 10, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#problema"><ChevronDown size={32} className="text-white/40 hover:text-white" /></a>
      </motion.div>

      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </section>
  );
}
