'use client';

import { motion } from 'framer-motion';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import AndeanPattern from './AndeanPattern';

export default function Destinations() {
  const destinations = [
    {
      name: 'Machu Picchu',
      region: 'Cusco',
      image: 'https://images.unsplash.com/photo-1509216242873-7786f446f465?auto=format&fit=crop&q=80',
      tag: 'Maravilla Mundial',
      rating: 5.0
    },
    {
      name: 'Señor de Sipán',
      region: 'Lambayeque',
      image: 'https://peru.info/archivos/publicacion/29-imagen-174739342018.jpg',
      tag: 'Arqueología',
      rating: 4.9
    },
    {
      name: 'Huacachina',
      region: 'Ica',
      image: 'https://images.unsplash.com/photo-1527736848781-72dc3b2ee00f?auto=format&fit=crop&ixlib=rb-4.1.0',
      tag: 'Sandboarding',
      rating: 4.8
    },
    {
      name: 'Lago Titicaca',
      region: 'Puno',
      image: 'https://images.unsplash.com/photo-1620417396507-9a57523d16a6?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tag: 'Altura',
      rating: 4.9
    },
    {
      name: 'Chan Chan',
      region: 'La Libertad',
      image: 'https://denomades-blog.imgix.net/blog/wp-content/uploads/2020/01/16204452/Screen-Shot-2020-01-16-at-3.41.34-PM.png?auto=compress,format',
      tag: 'Cultura Chimú',
      rating: 4.7
    },
  ];

  return (
    <SectionWrapper id="destinos" theme="light" className="!px-0 overflow-visible">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 text-rojo font-bold uppercase tracking-widest text-xs mb-4">
            <MapPin size={14} />
            <span>Exploración sin límites</span>
          </div>
          <h2 className="font-display text-5xl lg:text-7xl text-carbon leading-none mb-0">
            DESCUBRE EL <br /> <span className="text-rojo">PERÚ AUTÉNTICO</span>
          </h2>
        </div>
        <button className="group flex items-center gap-3 font-body font-bold text-sm text-carbon/40 hover:text-rojo transition-colors uppercase tracking-widest">
          Ver todos los destinos
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Horizontal Scroll Area */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide px-5 lg:px-10 pb-20 snap-x snap-mandatory">
        {destinations.map((d, i) => (
          <motion.div
            key={d.name}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className="flex-none w-[320px] md:w-[400px] h-[520px] rounded-[2.5rem] overflow-hidden relative snap-start group shadow-2xl shadow-black/10 transition-all duration-500"
          >
            {/* Image Layer */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${d.image})` }}
            />

            {/* Overlay Layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-carbon/90 via-carbon/20 to-transparent transition-opacity duration-300" />

            {/* Brand Pattern Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
              <AndeanPattern color="#FFFFFF" opacity={0.5} />
            </div>

            {/* Top Info */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 flex items-center gap-2">
                <Star size={12} className="text-dorado-light fill-dorado-light" />
                <span className="font-body text-xs text-white font-bold">{d.rating}</span>
              </div>
              <div className="bg-rojo/90 backdrop-blur-md text-white font-body text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                {d.tag}
              </div>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-10 left-10 right-10">
              <p className="text-dorado-light font-body text-xs font-bold uppercase tracking-widest mb-2">{d.region}</p>
              <h3 className="text-white font-display text-4xl lg:text-5xl leading-none">{d.name}</h3>
              <div className="h-1 w-0 group-hover:w-full bg-dorado transition-all duration-500 mt-4 rounded-full" />
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
