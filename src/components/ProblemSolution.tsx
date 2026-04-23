'use client';

import { motion } from 'framer-motion';
import { MapPinOff, EyeOff, Store, Navigation, Map, Globe, Camera, Crown } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import AndeanPattern from './AndeanPattern';
import Image from 'next/image';

import guideAiImg from '@/assets/guide_ai.jpeg';

export default function ProblemSolution() {
  const problems = [
    { 
      icon: MapPinOff, 
      title: 'Tiempo Perdido', 
      desc: 'El turista extranjero planifica hasta por 4 meses buscando información dispersa.' 
    },
    { 
      icon: EyeOff, 
      title: 'Turismo Superficial', 
      desc: 'La mayoría se queda en lo comercial sin experimentar la auténtica cultura peruana.' 
    },
    { 
      icon: Store, 
      title: 'Negocios Invisibles', 
      desc: 'Como la "Tía Veneno", miles de negocios locales valiosos no existen en Google Maps.' 
    },
  ];

  const solutions = [
    { 
      icon: Navigation, 
      title: 'Rutas a tu Medida', 
      desc: 'Planifica tu viaje completo conversando con inteligencia artificial.',
      color: 'text-dorado'
    },
    { 
      icon: Map, 
      title: 'Ruta Viva', 
      desc: 'Itinerarios que reaccionan a tu clima, tiempo, energía y bolsillo en tiempo real.',
      color: 'text-turquesa'
    },
    { 
      icon: Globe, 
      title: 'Vive como Local', 
      desc: 'Descubre desde el restaurante de mantel blanco hasta la genuina carretilla de la esquina.',
      color: 'text-rojo'
    },
    { 
      icon: Camera, 
      title: 'Lente Ancestral', 
      desc: 'Toma una foto y deja que la IA te narre su historia en español, inglés o quechua.',
      color: 'text-dorado'
    },
    { 
      icon: Crown, 
      title: 'Pasaporte XplorePE', 
      desc: 'Acumula puntos por explorar y canjéalos en nuestra red de negocios aliados.',
      color: 'text-rojo'
    },
  ];

  return (
    <>
      {/* Slide 1 - El Problema */}
      <SectionWrapper id="problema" theme="light" className="border-b border-black/5">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="w-12 h-1 bg-rojo mb-6" 
          />
          <h2 className="font-display text-4xl lg:text-6xl text-carbon uppercase tracking-tight mb-6 mt-8">
            El turista llega al Perú,<br/>
            <span className="text-rojo">pero no vive el Perú</span>
          </h2>
          <p className="font-body text-carbon/60 max-w-2xl text-lg leading-relaxed">
            Salimos a las calles y encontramos un patrón alarmante: el turista no encuentra lo auténtico, y el negocio local no encuentra al turista.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p) => (
            <motion.div
              key={p.title}
              whileHover={{ y: -10 }}
              className="bg-white border border-black/[0.08] rounded-[2rem] p-10 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-rojo/5 flex items-center justify-center mb-6 text-rojo">
                <p.icon size={28} />
              </div>
              <h3 className="font-display text-2xl text-carbon mb-4 tracking-wide">{p.title}</h3>
              <p className="font-body text-carbon/50 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Slide 2 & 3 - Solución & Propuesta de Valor */}
      <SectionWrapper 
        id="solucion" 
        theme="dark" 
        className="!pt-32 !pb-32"
        background={<AndeanPattern opacity={0.06} color="#D4A017" />}
      >
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="font-display text-4xl lg:text-5xl text-white uppercase tracking-tight mb-6">
            No es un mapa. <br/>
            <span className="text-dorado-light">Es un guía que piensa contigo.</span>
          </h2>
          <p className="font-body text-white/60 text-lg leading-relaxed">
            XplorePE es tu guía digital con inteligencia artificial. Acompaña al turista en cada paso y conecta al negocio local con el viajero que camina a su lado.
          </p>
        </div>

        {/* 5 Soluciones con Nombre Propio */}
        <div className="grid lg:grid-cols-2 gap-x-20 gap-y-12 items-center">
          <div>
            <h3 className="font-display text-3xl text-white uppercase tracking-wide mb-10 border-b border-white/10 pb-4">
              5 Soluciones con<br/>Nombre Propio
            </h3>
            <div className="space-y-8">
              {solutions.map((s, i) => (
                <motion.div 
                  key={s.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-5 items-start group"
                >
                  <div className={`mt-1 p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-dorado/50 group-hover:bg-dorado/5 transition-all duration-300 ${s.color}`}>
                    <s.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-display text-xl text-white mb-1 tracking-wide group-hover:text-dorado-light transition-colors">
                      {s.title}
                    </h4>
                    <p className="font-body text-white/50 text-sm leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0 flex justify-center perspective-1000">
             {/* App Screenshot */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
               whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
               transition={{ duration: 1.2, ease: "easeOut" }}
               className="relative w-[300px] h-[600px] rounded-[40px] border-[8px] border-white/10 bg-carbon overflow-hidden shadow-[0_30px_80px_-15px_rgba(212,160,23,0.3)]"
             >
               <Image 
                  src={guideAiImg} 
                  alt="Rutas a tu medida App" 
                  fill 
                  className="object-cover"
               />
             </motion.div>
             
             {/* Decorative glow behind the phone */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-dorado/20 rounded-full blur-[80px] -z-10 animate-pulse" />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
