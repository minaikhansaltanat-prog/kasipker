'use client';

import { motion } from 'framer-motion';

export function AnimatedStat({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="glass-panel rounded-3xl border border-white/10 bg-[#111111]/80 p-6 text-center"
    >
      <p className="text-4xl font-serif text-brand-gold">{value}</p>
      <p className="mt-3 text-sm uppercase tracking-[0.35em] text-brand-muted">{label}</p>
    </motion.div>
  );
}
