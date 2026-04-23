'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc?: string;
}

export default function VideoModal({ isOpen, onClose, videoSrc = '/demo.mp4' }: VideoModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-carbon/90 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center z-10"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors z-20"
            >
              <X size={24} />
            </button>

            {/* Video Element */}
            {/* Si el archivo demo.mp4 se coloca en la carpeta public, esto lo reproducirá automáticamente */}
            <video 
              controls 
              autoPlay 
              className="w-full h-full object-cover"
              src={videoSrc}
            >
              Tu navegador no soporta la etiqueta de video.
            </video>
            
            {/* Fallback Overlay text para indicar dónde poner el archivo */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-50 bg-black/50">
                <span className="text-white font-display text-2xl tracking-widest uppercase mb-2">Espacio para Video Demostración</span>
                <span className="text-white/60 font-body text-sm">demo.mp4</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
