'use client';

import { Instagram, Twitter, Linkedin, Facebook } from './SocialIcons';
import { Logo } from './Icons';

export default function Footer() {
  const links = ['Destinos', 'Cultura', 'Retos', 'Negocios'];
  const social = [
    { icon: Instagram, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Facebook, href: '#' },
  ];

  return (
    <footer className="bg-carbon py-20 px-5 lg:px-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <Logo variant="dark" className="!gap-4 mb-6" />
            <p className="font-body text-white/40 text-sm leading-relaxed max-w-xs">
              La plataforma de turismo inteligente que conecta al mundo con la esencia más auténtica del Perú. Descubre, explora y apoya lo local.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-display text-xl text-dorado-light uppercase tracking-widest mb-2">Explora</h4>
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="font-body text-white/40 hover:text-white transition-colors text-sm uppercase tracking-widest font-semibold">
                {l}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-display text-xl text-dorado-light uppercase tracking-widest mb-2">Compañía</h4>
            {['Nosotros', 'Privacidad', 'Términos', 'Contacto'].map(l => (
              <a key={l} href="#" className="font-body text-white/40 hover:text-white transition-colors text-sm uppercase tracking-widest font-semibold">
                {l}
              </a>
            ))}
          </div>

          <div>
            <h4 className="font-display text-xl text-dorado-light uppercase tracking-widest mb-6">Síguenos</h4>
            <div className="flex gap-4">
              {social.map((s, i) => (
                <a 
                  key={i} 
                  href={s.href} 
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-dorado/50 hover:bg-dorado/5 transition-all duration-300"
                >
                  <s.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-body text-white/20 text-xs uppercase tracking-[0.2em]">
            © 2026 XporePE
          </p>
          <div className="flex items-center gap-2">
             <div className="w-1.5 h-1.5 rounded-full bg-rojo" />
             <p className="font-body text-white/20 text-xs uppercase tracking-[0.2em]">
               Hecho con pasión por el Perú
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
