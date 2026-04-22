'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

export default function Testimonials() {
  const testimonials = [
    { text: 'XplorePE me permitió conocer lugares en Lambayeque que no aparecen en ninguna guía turística comercial. Es real e impactante.', author: 'Carlos Mendoza', role: 'Viajero' },
    { text: 'La función sin internet es un salvavidas en nuestras rutas por la sierra. Nunca nos sentimos perdidos.', author: 'Elena Paz', role: 'Exploradora' },
    { text: 'Como negocio local, XplorePE nos ha dado una visibilidad que nunca tuvimos antes. Las visitas han crecido un 40%.', author: 'Rosa Torres', role: 'Artesana' },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <SectionWrapper id="cultura" theme="dark" className="!py-32">
       <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-10">
             <Quote size={24} className="text-dorado-light" />
          </div>

          <div className="relative h-64 lg:h-48 w-full max-w-4xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-6"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-dorado-light fill-dorado-light" />
                  ))}
                </div>
                <p className="font-body text-xl lg:text-3xl text-white italic mb-8 leading-relaxed max-w-3xl">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>
                <div className="flex flex-col items-center">
                  <span className="font-display text-xl text-dorado-light tracking-widest">{testimonials[current].author}</span>
                  <span className="font-body text-white/30 text-[10px] uppercase tracking-[0.2em]">{testimonials[current].role}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? 'bg-dorado w-12' : 'bg-white/10 w-4'}`}
              />
            ))}
          </div>
       </div>
    </SectionWrapper>
  );
}
