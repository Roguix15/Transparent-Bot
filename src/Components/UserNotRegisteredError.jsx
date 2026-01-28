import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function GlassCard({ children, className, hover = true, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      className={cn(
        "relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6",
        "shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
        "transition-all duration-300",
        hover && "hover:border-indigo-500/30 hover:shadow-indigo-500/10",
        className
      )}
    >
      {children}
    </motion.div>
  );
}