'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { User } from 'lucide-react';
import Image from 'next/image';

import joanImg from '@/assets/joan.jpg';
import cesarImg from '@/assets/cesar.jpg';
import alejandraImg from '@/assets/alejandra.jpeg';
import luceroImg from '@/assets/lucero.jpg';
import juanImg from '@/assets/juan_villegas.jpg';

export default function Team() {
  const team = [
    {name: 'Juan Villegas', role: 'Experto en Aplicaciones con IA & Redes', img: juanImg},
    { name: 'Joan Aquino', role: 'Desarrollo de Software & IA', img: joanImg },
    { name: 'Cesar Maco', role: 'Desarrollo Móvil & Realidad Aumentada', img: cesarImg },
    { name: 'Alejandra Contreras', role: 'Estrategia & Alianzas', img: alejandraImg },
    { name: 'Lucero Cayatopa', role: 'Marketing & Comportamiento Usuario', img: luceroImg },
  ];

  return (
    <SectionWrapper id="equipo" theme="light" className="bg-arena-light border-b border-black/5">
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="w-12 h-1 bg-dorado mb-6" 
        />
        <h2 className="font-display text-4xl lg:text-6xl text-carbon uppercase tracking-tight mb-6 mt-8">
          Detrás de <span className="text-dorado">XplorePE</span>
        </h2>
        <p className="font-body text-carbon/60 max-w-2xl text-lg leading-relaxed">
          Un equipo multidisciplinario con algo en común:<br/>
          <strong>Conocemos el Perú que queremos mostrar.</strong>
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="group relative"
          >
            <div className="aspect-square bg-carbon/5 rounded-3xl mb-4 overflow-hidden relative border border-black/5 shadow-sm">
               <div className="absolute inset-0 bg-carbon/10 group-hover:bg-carbon/0 transition-colors z-10" />
               <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-end justify-center pb-6">
                 <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-rojo transition-colors">
                   <User size={18} />
                 </button>
               </div>
               <Image 
                 src={member.img} 
                 alt={member.name} 
                 fill
                 className="object-cover transition-transform duration-700 group-hover:scale-110"
               />
            </div>
            <div className="text-center">
              <h3 className="font-display text-2xl text-carbon mb-1">{member.name}</h3>
              <p className="font-body text-carbon/50 text-xs uppercase tracking-widest">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
