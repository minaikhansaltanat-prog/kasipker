'use client';

import { motion } from 'framer-motion';
import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';
import { SectionHeading } from '@/components/SectionHeading';
import { useTranslations } from '@/components/useTranslations';

export default function ClustersPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-[#090909] text-brand-text">
      <NavBar />
      <section className="px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title={t.clusters.title} description={t.clusters.description} />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.clusters.items.map((cluster) => (
              <motion.div
                key={cluster.title}
                whileHover={{ y: -10 }}
                className="glass-panel rounded-[36px] border border-white/10 p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-2xl font-semibold text-brand-text">{cluster.title}</p>
                    <p className="mt-3 text-sm text-brand-muted">{cluster.description}</p>
                  </div>
                  <div className="rounded-3xl bg-brand-gold/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-brand-gold">{t.clusters.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
