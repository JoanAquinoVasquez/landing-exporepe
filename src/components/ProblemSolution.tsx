'use client';

import { motion } from 'framer-motion';
import { MapPinOff, WifiOff, EyeOff, CheckCircle2, Zap, Users } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import AndeanPattern from './AndeanPattern';

export default function ProblemSolution() {
  const problems = [
    { 
      icon: MapPinOff, 
      title: 'Información dispersa', 
      desc: 'Los mejores lugares y secretos locales no aparecen en las apps convencionales.' 
    },
    { 
      icon: WifiOff, 
      title: 'Zonas sin conexión', 
      desc: 'Las rutas más auténticas suelen estar en zonas sin señal de internet.' 
    },
    { 
      icon: EyeOff, 
      title: 'Negocios invisibles', 
      desc: 'Emprendedores y artesanos locales que merecen ser descubiertos.' 
    },
  ];

  const solutions = [
    { 
      icon: Zap, 
      title: 'Rutas con IA', 
      desc: 'Itinerarios personalizados que aprenden de tus gustos y ritmo de viaje.',
      color: 'text-dorado'
    },
    { 
      icon: CheckCircle2, 
      title: 'Modo Offline Total', 
      desc: 'Descarga mapas y guías completas para navegar sin límites ni señal.',
      color: 'text-turquesa'
    },
    { 
      icon: Users, 
      title: 'Impulso Local', 
      desc: 'Conectamos directamente con el corazón de cada comunidad peruana.',
      color: 'text-rojo'
    },
  ];

  return (
    <>
      <SectionWrapper id="problemas" theme="light" className="border-b border-black/5">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="w-12 h-1 bg-rojo mb-6" 
          />
          <h2 className="font-display text-4xl lg:text-7xl text-carbon uppercase tracking-tight mb-6">
            El problema del <span className="text-rojo">turismo actual</span>
          </h2>
          <p className="font-body text-carbon/60 max-w-2xl text-lg leading-relaxed">
            Viajar por el Perú es una experiencia mágica, pero los desafíos tecnológicos 
            suelen empañar la aventura.
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

      <SectionWrapper 
        id="solucion" 
        theme="dark" 
        className="!pt-32 !pb-32"
        background={<AndeanPattern opacity={0.06} color="#D4A017" />}
      >
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-display text-5xl lg:text-8xl text-white uppercase tracking-tighter leading-[0.85] mb-8">
              Tu compañero <br />
              <span className="text-dorado-light">inteligente</span><br />
              de viaje
            </h2>
            <div className="space-y-10 mt-12">
              {solutions.map((s, i) => (
                <motion.div 
                  key={s.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-6 items-start group"
                >
                  <div className={`mt-1 p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-dorado/50 group-hover:bg-dorado/5 transition-all duration-300 ${s.color}`}>
                    <s.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-white mb-2 tracking-wide group-hover:text-dorado-light transition-colors">
                      {s.title}
                    </h3>
                    <p className="font-body text-white/40 text-sm leading-relaxed max-w-md">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
             {/* Abstract Graphic Element */}
             <div className="aspect-square relative flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-[1px] border-dorado/20 rounded-full border-dashed"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-10 border-[1px] border-white/10 rounded-full"
                />
                <div className="w-64 h-64 bg-rojo/20 rounded-full blur-[60px] animate-pulse" />
                <div className="z-10 font-display text-9xl text-white/5 select-none text-center leading-none">
                  PERU<br/>2026
                </div>
             </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
