'use client';

import { motion } from 'framer-motion';
import { Rocket, Activity, Users, Percent, Flame } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { useState } from 'react';
import VideoModal from './VideoModal';

export default function Traction() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const metrics = [
    {
      icon: Activity,
      label: "Recurrencia de Uso",
      desc: "Viajeros interactuando frecuentemente con la IA.",
      value: "Métrica 1"
    },
    {
      icon: Users,
      label: "Usuarios Pro Activos",
      desc: "Conversión a nuestro plan premium.",
      value: "Métrica 2"
    },
    {
      icon: Percent,
      label: "Comisiones CPA",
      desc: "Ingresos generados por Partners XplorerPE.",
      value: "Métrica 3"
    }
  ];

  return (
    <SectionWrapper id="traccion" theme="light" className="bg-white border-b border-black/5">
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="w-12 h-1 bg-rojo mb-6" 
        />
        <h2 className="font-display text-4xl lg:text-6xl text-carbon uppercase tracking-tight mb-6 mt-8">
          Tracción: <br/>
          <span className="text-rojo">Validado en la calle.</span><br/>
          No en una sala.
        </h2>
        <p className="font-body text-carbon/60 max-w-2xl text-lg leading-relaxed">
          MVP en fase final. Primeros interesados apuntados en Chiclayo. 
          Al salir a producción, el éxito se medirá por estas 3 métricas clave:
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-arena-light border border-black/[0.08] rounded-[2rem] p-8 shadow-sm hover:shadow-lg transition-all relative overflow-hidden"
          >
            <div className="flex justify-between items-start mb-6">
               <div className="w-12 h-12 rounded-xl bg-rojo/10 flex items-center justify-center text-rojo">
                 <m.icon size={24} />
               </div>
               <span className="font-body text-[10px] font-bold uppercase tracking-widest text-carbon/30">
                 {m.value}
               </span>
            </div>
            <h3 className="font-display text-2xl text-carbon mb-2 tracking-wide">{m.label}</h3>
            <p className="font-body text-carbon/60 text-sm">{m.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="max-w-4xl mx-auto bg-gradient-to-r from-carbon-mid to-carbon rounded-3xl p-8 lg:p-12 text-center flex flex-col items-center relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
        <div className="w-16 h-16 rounded-full bg-dorado/20 flex items-center justify-center mb-6 relative z-10">
          <Flame className="text-dorado" size={32} />
        </div>
        <h3 className="font-display text-3xl lg:text-4xl text-white mb-4 relative z-10">
          Producto en Construcción
        </h3>
        <p className="font-body text-white/60 text-lg max-w-lg mb-8 relative z-10">
          Nuestro MVP está en fase final de desarrollo. Estamos ajustando los detalles para ofrecer una experiencia perfecta en Lambayeque como piloto.
        </p>
        <button 
          onClick={() => setIsVideoModalOpen(true)}
          className="bg-dorado hover:bg-dorado-light text-carbon font-body font-bold uppercase tracking-widest text-sm py-4 px-10 rounded-full transition-colors relative z-10 shadow-xl shadow-dorado/20"
        >
          Ver Demostración
        </button>
      </motion.div>

      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </SectionWrapper>
  );
}
