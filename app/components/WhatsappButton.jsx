'use client';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function WhatsappButton({ isVisible = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="fixed bottom-5 right-5 z-30"
    >
      <motion.div
        className="flex items-center gap-2 px-4 py-4 bg-white text-black border border-gray-300 rounded-full cursor-pointer transition-colors duration-300 ease-in-out hover:bg-green-500 hover:text-white"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWhatsapp className="h-8 w-8 transition-transform duration-300 ease-out" />
      </motion.div>
    </motion.div>
  );
}
