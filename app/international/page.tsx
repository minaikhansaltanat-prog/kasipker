'use client';

import { motion } from 'framer-motion';
import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';
import { SectionHeading } from '@/components/SectionHeading';
import { useTranslations } from '@/components/useTranslations';

export default function InternationalPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-[#090909] text-brand-text">
      <NavBar />
      <section className="px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title={t.international.title} description={t.international.description} />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-panel rounded-[48px] border border-white/10 bg-[#111111]/85 p-10"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-brand-gold">{t.international.leadTitle}</p>
              <h3 className="mt-4 text-3xl font-serif text-brand-text">{t.international.leadHeading}</h3>
              <p className="mt-6 text-brand-muted leading-8">{t.international.leadParagraph}</p>
              <p className="mt-8 text-sm uppercase tracking-[0.35em] text-brand-gold">{t.international.schemeTitle}</p>
              <p className="mt-4 text-brand-muted leading-7">{t.international.schemeDescription}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid gap-6"
            >
              {t.international.partners.map((zone) => (
                <div key={zone.country} className="glass-panel rounded-[36px] border border-white/10 bg-[#111111]/85 p-8">
                  <p className="text-sm uppercase tracking-[0.35em] text-brand-gold">{zone.country}</p>
                  <p className="mt-4 text-sm leading-7 text-brand-muted">{zone.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
