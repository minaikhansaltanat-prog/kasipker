'use client';

import { motion } from 'framer-motion';
import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';
import { SectionHeading } from '@/components/SectionHeading';
import { useTranslations } from '@/components/useTranslations';

export default function FacesPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-[#090909] text-brand-text">
      <NavBar />
      <section className="px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title={t.community.title} description={t.community.description} />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.community.profiles.map((profile) => (
              <motion.div
                key={profile.role}
                whileHover={{ y: -10 }}
                className="glass-panel rounded-[36px] border border-white/10 p-8"
              >
                <div className="h-44 rounded-3xl bg-white/5" />
                <p className="mt-6 text-xl font-semibold text-brand-text">{profile.role}</p>
                <p className="mt-3 text-sm leading-7 text-brand-muted">{profile.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
