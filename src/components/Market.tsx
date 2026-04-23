'use client';

import { motion } from 'framer-motion';
import { Target, Users, Store } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

export default function Market() {
  const stats = [
    {
      icon: Users,
      value: "78%",
      label: "Millennials y Centennials",
      desc: "Del turimo receptor, nuestro target principal según PROMPERÚ.",
      color: "text-turquesa"
    },
    {
      icon: Store,
      value: "+1,800",
      label: "Negocios Locales",
      desc: "En Lambayeque esperando conectar directamente con el viajero de hoy.",
      color: "text-rojo"
    },
    {
      icon: Target,
      value: "5% / 15%",
      label: "Meta Año 1",
      desc: "Capturar el 5% del mercado turístico y 15% de los negocios locales.",
      color: "text-dorado"
    }
  ];

  return (
    <SectionWrapper id="mercado" theme="light" className="bg-arena-light border-b border-black/5">
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="w-12 h-1 bg-turquesa mb-6" 
        />
        <h2 className="font-display text-4xl lg:text-6xl text-carbon uppercase tracking-tight mb-6 mt-8">
          El mercado tiene <span className="text-turquesa">dos caras</span>
        </h2>
        <p className="font-body text-carbon/60 max-w-2xl text-lg leading-relaxed">
          Un ecosistema vivo donde turistas digitales buscan experiencias reales 
          y los negocios locales están listos para ofrecerlas.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border border-black/[0.08] rounded-[2rem] p-10 shadow-sm flex flex-col items-center text-center"
          >
            <div className={`w-16 h-16 rounded-full bg-carbon/5 flex items-center justify-center mb-6 ${stat.color}`}>
              <stat.icon size={32} />
            </div>
            <div className={`font-display text-5xl mb-2 ${stat.color}`}>
              {stat.value}
            </div>
            <h3 className="font-display text-xl text-carbon mb-3 tracking-wide">{stat.label}</h3>
            <p className="font-body text-carbon/50 text-sm leading-relaxed">{stat.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
