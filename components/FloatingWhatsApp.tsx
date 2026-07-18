'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa6';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/923143111118"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-300"
      style={{ backgroundColor: '#25D366' }}
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    >
      <div className="absolute inset-0 rounded-full" style={{ boxShadow: '0 0 20px rgba(37, 211, 102, 0.5)' }} />
      <FaWhatsapp className="w-7 h-7 text-white" />
    </motion.a>
  );
}
