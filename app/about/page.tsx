'use client';

import { motion } from 'framer-motion';
import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';
import { SectionHeading } from '@/components/SectionHeading';
import { useTranslations } from '@/components/useTranslations';

export default function AboutPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-[#090909] text-brand-text">
      <NavBar />
      <section className="px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title={t.about.title} description={t.about.description} />

          <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-panel rounded-[48px] border border-white/10 bg-[#111111]/85 p-10"
            >
              <p className="text-brand-muted leading-8">{t.about.introduction}</p>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {t.about.values.map((item) => (
                  <div key={item.label} className="rounded-3xl border border-white/10 bg-black/40 p-6">
                    <p className="text-sm uppercase tracking-[0.35em] text-brand-gold">{item.label}</p>
                    <p className="mt-3 text-sm leading-7 text-brand-muted">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="glass-panel rounded-[48px] border border-white/10 bg-[#111111]/85 p-10">
                <p className="text-sm uppercase tracking-[0.35em] text-brand-gold">{t.about.historyTitle}</p>
                <p className="mt-4 text-brand-muted leading-8">{t.about.historyText}</p>
              </div>
              <div className="glass-panel rounded-[48px] border border-white/10 bg-[#111111]/85 p-10">
                <p className="text-sm uppercase tracking-[0.35em] text-brand-gold">{t.about.philosophyTitle}</p>
                <p className="mt-4 text-brand-muted leading-8">{t.about.philosophyText}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
