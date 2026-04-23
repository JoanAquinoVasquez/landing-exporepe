'use client';

import { motion } from 'framer-motion';
import { Apple, PlayCircle } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import AndeanPattern from './AndeanPattern';
import FranjaPrehispanica from './FranjaPrehispanica';
import { Isotipo } from './Icons';

export default function CTA() {
  return (
    <div className="relative">
      <FranjaPrehispanica position="top" className="bg-carbon" />
      <SectionWrapper 
        id="cierre" 
        theme="red" 
        className="!py-32 !px-5 lg:!px-10 flex items-center justify-center"
        background={<AndeanPattern opacity={0.1} color="#FFFFFF" />}
      >
        <div className="max-w-[1440px] mx-auto w-full relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center mb-10 backdrop-blur-md border border-white/20"
          >
            <Isotipo variant="light" size={48} />
          </motion.div>
          
          <h2 className="font-display text-4xl lg:text-7xl text-white leading-tight mb-8 tracking-tighter uppercase">
            Empezamos en Lambayeque. <br />
            <span className="text-dorado-light text-6xl lg:text-8xl">Pero el Perú entero nos espera.</span>
          </h2>
          
          <div className="font-body text-white/80 text-2xl lg:text-3xl max-w-2xl mb-16 font-bold uppercase tracking-widest flex flex-col items-center gap-4">
             <span>Somos XplorerPE.</span>
             <span className="text-dorado-light">Gracias.</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl justify-center">
            {/* App Store Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-carbon text-white rounded-[2rem] px-8 py-6 flex items-center justify-center gap-5 border border-white/10 hover:border-dorado/30 transition-all duration-300 shadow-2xl"
            >
              <Apple size={36} className="text-white" />
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-1">Próximamente en</p>
                <p className="text-xl font-bold font-body leading-none">App Store</p>
              </div>
            </motion.button>
            
            {/* Play Store Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-carbon text-white rounded-[2rem] px-8 py-6 flex items-center justify-center gap-5 border border-white/10 hover:border-dorado/30 transition-all duration-300 shadow-2xl"
            >
              <PlayCircle size={36} className="fill-transparent text-white" />
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-1">Próximamente en</p>
                <p className="text-xl font-bold font-body leading-none">Google Play</p>
              </div>
            </motion.button>
          </div>
          </div>
        </div>
      </SectionWrapper>
      <FranjaPrehispanica position="bottom" className="bg-carbon" />
    </div>
  );
}
