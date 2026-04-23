'use client';

import { motion } from 'framer-motion';
import { User, Store, TrendingUp } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import AndeanPattern from './AndeanPattern';

export default function BusinessModel() {
  return (
    <SectionWrapper id="modelo" theme="dark" className="overflow-hidden relative bg-carbon" background={<AndeanPattern opacity={0.04} color="#D4A017" />}>
      <div className="flex flex-col items-center text-center mb-16 relative z-10">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="w-12 h-1 bg-dorado mb-6" 
        />
        <h2 className="font-display text-4xl lg:text-6xl text-white uppercase tracking-tight mb-6 mt-8">
          Modelo de Negocio <span className="text-dorado-light">B2B2C</span>
        </h2>
        <p className="font-body text-white/60 max-w-2xl text-lg leading-relaxed">
          Monetizamos solo cuando el negocio gana. Una plataforma circular donde todos ganan.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 relative z-10">
        {/* Turista */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white/5 border border-white/10 rounded-[2rem] p-10 relative overflow-hidden group hover:border-dorado/30 transition-all"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-dorado/10 rounded-full blur-[80px] group-hover:bg-dorado/20 transition-all pointer-events-none" />
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-dorado/10 flex items-center justify-center text-dorado">
              <User size={28} />
            </div>
            <h3 className="font-display text-3xl text-white tracking-wide">Para el Turista</h3>
          </div>

          <div className="space-y-6">
            <div className="bg-black/20 p-6 rounded-2xl border border-white/5">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-display text-xl text-white">Plan Free</h4>
              </div>
              <p className="font-body text-white/50 text-sm">Funciones esenciales para enanchar al usuario y que pruebe la experiencia.</p>
            </div>
            <div className="bg-gradient-to-br from-dorado/20 to-dorado/5 p-6 rounded-2xl border border-dorado/30">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-display text-xl text-dorado-light">Plan Pro</h4>
                <span className="font-body text-xs font-bold px-2 py-1 bg-dorado/20 text-dorado-light rounded-full uppercase tracking-wider">Premium</span>
              </div>
              <p className="font-body text-white/70 text-sm">La experiencia completa, IA conversacional avanzada y recompensas multiplicadas.</p>
            </div>
          </div>
        </motion.div>

        {/* Negocio */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white/5 border border-white/10 rounded-[2rem] p-10 relative overflow-hidden group hover:border-rojo/30 transition-all"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-rojo/10 rounded-full blur-[80px] group-hover:bg-rojo/20 transition-all pointer-events-none" />
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-rojo/10 flex items-center justify-center text-rojo">
              <Store size={28} />
            </div>
            <h3 className="font-display text-3xl text-white tracking-wide">Para el Negocio</h3>
          </div>

          <div className="space-y-6">
            <div className="bg-black/20 p-6 rounded-2xl border border-white/5">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-display text-xl text-white">Partner XplorerPE</h4>
                <span className="font-body text-xs font-bold px-2 py-1 bg-white/10 text-white rounded-full uppercase tracking-wider">Comisión CPA</span>
              </div>
              <p className="font-body text-white/50 text-sm">Paga solo cuando un cliente compra gracias a nosotros.</p>
            </div>
            <div className="bg-black/20 p-6 rounded-2xl border border-white/5 hover:border-rojo/30 transition-all">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-display text-xl text-rojo">Plan Destacado</h4>
                <span className="font-body text-xs font-bold px-2 py-1 bg-rojo/20 text-rojo rounded-full uppercase tracking-wider">Suscripción</span>
              </div>
              <p className="font-body text-white/50 text-sm">Marketing mensual para aparecer entre los primeros resultados y rutas.</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Finanzas */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-12 bg-gradient-to-r from-turquesa/10 via-dorado/10 to-rojo/10 border border-white/10 rounded-3xl p-8 relative z-10"
      >
        <div className="grid md:grid-cols-4 gap-6 items-center flex-wrap">
           <div className="md:col-span-1 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                 <TrendingUp className="text-white" />
              </div>
              <span className="font-display text-xl text-white">Finanzas</span>
           </div>
           <div>
              <div className="text-white/50 text-xs uppercase tracking-widest font-bold mb-1">Inversión</div>
              <div className="font-display text-3xl text-white">S/ 120,000</div>
           </div>
           <div>
              <div className="text-white/50 text-xs uppercase tracking-widest font-bold mb-1">Recuperación</div>
              <div className="font-display text-3xl text-white">18 meses</div>
           </div>
           <div>
              <div className="text-white/50 text-xs uppercase tracking-widest font-bold mb-1">ROI</div>
              <div className="font-display text-3xl text-turquesa">42% <span className="text-lg text-white/40">→ 200%</span></div>
           </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
