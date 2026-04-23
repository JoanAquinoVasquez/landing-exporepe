'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import demoVideo from '@/assets/demo.mp4';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc?: string;
}

export default function VideoModal({ isOpen, onClose, videoSrc = demoVideo }: VideoModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
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
            className="relative h-[85vh] aspect-[9/19.5] bg-black rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white/10 flex items-center justify-center z-10"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors z-20"
            >
              <X size={24} />
            </button>

            {/* Video Element */}
            <video 
              controls 
              autoPlay 
              className="w-full h-full object-cover"
              src={videoSrc}
            >
              Tu navegador no soporta la etiqueta de video.
            </video>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
