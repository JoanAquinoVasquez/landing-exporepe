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
        id="download" 
        theme="red" 
        className="!py-32 !px-5 lg:!px-10 flex items-center justify-center"
        background={<AndeanPattern opacity={0.1} color="#FFFFFF" />}
      >
        <div className="max-w-[1440px] mx-auto w-full relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 bg-white/50 rounded-3xl flex items-center justify-center mb-10 backdrop-blur-md border border-white/20"
          >
            <Isotipo variant="light" size={48} />
          </motion.div>
          
          <h2 className="font-display text-6xl lg:text-[10rem] text-white leading-[0.8] mb-10 tracking-tighter">
            EL PERÚ <br /> TE ESPERA
          </h2>
          
          <p className="font-body text-white/80 text-xl max-w-2xl mb-16 leading-relaxed">
            Comienza tu aventura hoy mismo. Sin registros obligatorios, 
            sin señal de internet, sin límites.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl justify-center">
            {/* App Store */}
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-carbon text-white rounded-[2rem] px-8 py-6 flex items-center gap-5 border border-white/10 hover:border-dorado/30 transition-all duration-300"
            >
              <Apple size={36} fill="white" />
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-1">Disponible en</p>
                <p className="text-xl font-bold font-body">App Store</p>
              </div>
            </motion.button>

            {/* Google Play */}
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-carbon text-white rounded-[2rem] px-8 py-6 flex items-center gap-5 border border-white/10 hover:border-dorado/30 transition-all duration-300"
            >
              <PlayCircle size={36} className="text-white" />
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-1">Disponible en</p>
                <p className="text-xl font-bold font-body">Google Play</p>
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
