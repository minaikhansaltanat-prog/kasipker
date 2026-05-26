'use client';

import { motion } from 'framer-motion';
import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';
import { SectionHeading } from '@/components/SectionHeading';
import { useTranslations } from '@/components/useTranslations';

export default function ServicesPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-[#090909] text-brand-text">
      <NavBar />
      <section className="px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title={t.services.title} description={t.services.description} />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.items.map((service) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -10 }}
                className="glass-panel rounded-[36px] border border-white/10 p-8"
              >
                <div className="text-sm uppercase tracking-[0.35em] text-brand-gold">{service.title}</div>
                <p className="mt-4 text-sm leading-7 text-brand-muted">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
