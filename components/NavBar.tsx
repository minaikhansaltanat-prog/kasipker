'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageProvider';
import { useTranslations } from '@/components/useTranslations';

export function NavBar() {
  const { language, setLanguage } = useLanguage();
  const t = useTranslations();

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="sticky top-0 z-50 mx-auto flex w-full max-w-[1440px] items-center justify-between border-b border-white/10 bg-[#080808]/95 px-6 py-4 backdrop-blur-3xl"
    >
      <Link href="/" className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 px-4 py-2 transition hover:border-brand-gold hover:bg-white/10">
        <img src="/kasipker-logo.svg" alt="KASIPKER" className="h-11 w-11 rounded-2xl bg-[#0D1522]/90 p-2" />
        <span className="font-serif text-base font-semibold uppercase tracking-[0.32em] text-brand-gold">
          KASIPKER
        </span>
      </Link>

      <nav className="hidden items-center gap-6 lg:flex">
        {t.navItems.map((item) => (
          <Link key={item.href} href={item.href} className="text-sm text-brand-muted transition hover:text-brand-gold">
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 md:flex">
          {Object.entries(t.languageNames).map(([code, label]) => (
            <button
              key={code}
              type="button"
              onClick={() => setLanguage(code as typeof language)}
              className={`rounded-full border px-3 py-2 text-xs font-semibold uppercase transition ${language === code ? 'border-brand-gold bg-white/10 text-brand-gold' : 'border-white/10 text-brand-muted hover:border-brand-gold hover:text-brand-gold'}`}
            >
              {label}
            </button>
          ))}
        </div>
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="https://wa.me/7078690263"
          className="glass-button hidden md:inline-flex"
        >
          {t.hero.ctaPrimary}
        </motion.a>
      </div>
    </motion.header>
  );
}
