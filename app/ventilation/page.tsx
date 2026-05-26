'use client';

import { motion } from 'framer-motion';
import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';
import { SectionHeading } from '@/components/SectionHeading';
import { useTranslations } from '@/components/useTranslations';

export default function VentilationPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-[#090909] text-brand-text">
      <NavBar />

      <section className="px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title={t.ventilation.title} description={t.ventilation.description} />

          <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_0.85fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="glass-panel rounded-[36px] border border-white/10 bg-[#111111]/80 p-10"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-brand-gold">{t.ventilation.sectionTitle}</p>
              <h2 className="mt-5 text-4xl font-serif text-brand-text">{t.ventilation.sectionText}</h2>

              <div className="mt-10 space-y-6">
                {t.ventilation.features.map((feature) => (
                  <div key={feature.title} className="rounded-3xl border border-white/10 bg-black/40 p-6">
                    <p className="text-sm uppercase tracking-[0.35em] text-brand-gold">{feature.title}</p>
                    <p className="mt-4 text-sm leading-7 text-brand-muted">{feature.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="rounded-[36px] border border-white/10 bg-[#0F0F0F]/90 p-10"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-brand-gold">{t.ventilation.bottomTitle}</p>
              <h3 className="mt-5 text-3xl font-serif text-brand-text">{t.ventilation.bottomHeading}</h3>
              <ul className="mt-8 space-y-4 text-brand-muted">
                {t.ventilation.bottomItems.map((item) => (
                  <li key={item} className="leading-7">{item}</li>
                ))}
              </ul>

              <a
                href="/contact"
                className="mt-10 inline-flex rounded-full border border-brand-gold bg-brand-gold/10 px-6 py-3 text-sm font-semibold text-brand-gold transition hover:bg-brand-gold/20"
              >
                {t.ventilation.cta}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
