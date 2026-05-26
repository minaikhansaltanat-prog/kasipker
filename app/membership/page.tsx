'use client';

import { motion } from 'framer-motion';
import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';
import { SectionHeading } from '@/components/SectionHeading';
import { useTranslations } from '@/components/useTranslations';

export default function MembershipPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-[#090909] text-brand-text">
      <NavBar />
      <section className="px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title={t.membership.title} description={t.membership.description} />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {t.membership.tiers.map((tier) => (
              <motion.div
                key={tier.name}
                whileHover={{ y: -10 }}
                className="glass-panel rounded-[36px] border border-white/10 p-8"
              >
                <p className="text-sm uppercase tracking-[0.35em] text-brand-gold">{tier.name}</p>
                <h3 className="mt-4 text-2xl font-semibold text-brand-text">{tier.name} {t.membership.title}</h3>
                <p className="mt-4 text-sm leading-7 text-brand-muted">{tier.value}</p>
                <div className="mt-8 flex items-center justify-between">
                  <span className="rounded-full bg-brand-gold/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-brand-gold">Premium</span>
                  <a href="https://wa.me/7078690263" className="text-sm text-brand-gold hover:text-brand-hover">{t.membership.contact}</a>
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
