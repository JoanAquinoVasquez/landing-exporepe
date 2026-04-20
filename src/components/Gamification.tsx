'use client';

import { motion } from 'framer-motion';
import { Trophy, Star, CheckCircle } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { useEffect, useState } from 'react';

function useCounter(target: number, duration = 1500, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let val = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      val += step;
      if (val >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(val));
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

export default function Gamification() {
  const [inView, setInView] = useState(false);
  const count = useCounter(1250, 2000, inView);

  return (
    <SectionWrapper id="retos" theme="light" className="overflow-visible">
       <motion.div onViewportEnter={() => setInView(true)} />
       <div className="grid lg:grid-cols-2 gap-20 items-center">
         <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 text-rojo font-bold mb-6">
              <Trophy size={20} />
              <span className="uppercase tracking-widest text-xs">Sistema de Recompensas</span>
            </div>
            <h2 className="font-display text-5xl lg:text-7xl text-carbon leading-none mb-8">
              VIAJA. EXPLORA.<br /> <span className="text-rojo">GANA PREMIOS.</span>
            </h2>
            <div className="space-y-6">
              {[
                { title: 'Logros Únicos', desc: 'Desbloquea medallas exclusivas al visitar puntos históricos.', icon: Star },
                { title: 'Puntos Xpore', desc: 'Acumula puntos canjeables en restaurantes y artesanos locales.', icon: CheckCircle },
                { title: 'Ranking Nacional', desc: 'Demuestra que eres el mayor explorador del Perú.', icon: Trophy },
              ].map((item, i) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-4 items-start"
                >
                  <div className="mt-1 text-rojo">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-body font-bold text-lg text-carbon">{item.title}</h3>
                    <p className="font-body text-carbon/50 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
         </div>

         <div className="order-1 lg:order-2 flex justify-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="relative w-full max-w-sm aspect-square"
            >
              <div className="absolute inset-0 bg-rojo/5 rounded-[3rem] rotate-6" />
              <div className="absolute inset-0 bg-dorado/5 rounded-[3rem] -rotate-3" />
              <div className="relative h-full bg-white border border-black/5 rounded-[3rem] shadow-2xl p-10 flex flex-col items-center justify-center text-center">
                 <motion.div 
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="w-24 h-24 mb-6"
                 >
                    <svg viewBox="0 0 100 100" fill="none">
                      <path d="M50 5 L64 35 L95 40 L72 62 L78 95 L50 80 L22 95 L28 62 L5 40 L36 35 Z" fill="#D4A017" />
                    </svg>
                 </motion.div>
                 <p className="font-body text-carbon/40 text-xs uppercase tracking-widest font-bold mb-2">Puntos del Explorador</p>
                 <div className="font-display text-8xl text-carbon mb-2">
                   {count}
                 </div>
                 <div className="bg-rojo/10 text-rojo font-body text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                   ¡Nuevo Rango: Chasqui!
                 </div>
              </div>
            </motion.div>
         </div>
       </div>
    </SectionWrapper>
  );
}
