'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { SectionHeading } from '@/components/SectionHeading';
import { AnimatedStat } from '@/components/AnimatedStat';
import { useTranslations } from '@/components/useTranslations';

export default function Home() {
  const t = useTranslations();

  return (
    <main className="relative overflow-hidden">
      <NavBar />

      <section className="relative overflow-hidden px-6 pt-8 pb-24 md:px-10 lg:px-16">
        <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="space-y-8"
            >
              <div className="max-w-3xl space-y-4">
                <p className="text-sm uppercase tracking-[0.35em] text-brand-gold">{t.hero.badge}</p>
                <h1 className="text-5xl font-serif leading-[1.03] text-brand-text md:text-6xl xl:text-7xl">
                  {t.hero.title}
                </h1>
                <p className="max-w-xl text-lg leading-8 text-brand-muted md:text-xl">
                  {t.hero.subtitle}
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/membership" className="glass-button shadow-glow">
                  {t.hero.ctaPrimary}
                </Link>
                <Link href="/about" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-brand-text transition hover:border-brand-gold hover:text-brand-gold">
                  {t.hero.ctaSecondary}
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {t.stats.map((stat) => (
                  <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-[48px] border border-white/10 bg-[#111111]/80 p-8 shadow-premium"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(232,199,106,0.2),_transparent_28%)]" />
              <div className="relative space-y-6">
                <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-black/60 p-5">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-brand-muted">{t.hero.panelBadge}</p>
                    <h2 className="mt-3 text-3xl font-serif text-brand-text">{t.hero.panelHeading}</h2>
                    <p className="mt-4 text-sm leading-7 text-brand-muted">{t.hero.panelDescription}</p>
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  {t.heroFeatures.map((statement) => (
                    <div key={statement.title} className="glass-panel rounded-3xl border border-white/10 p-6">
                      <p className="text-sm uppercase tracking-[0.35em] text-brand-gold">{statement.title}</p>
                      <p className="mt-4 text-sm leading-7 text-brand-muted">{statement.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title={t.problem.title} description={t.problem.description} />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="glass-panel rounded-[36px] border border-white/10 p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-brand-gold">{t.problem.title.split(' → ')[0]}</p>
              <ul className="mt-6 space-y-5 text-brand-muted">
                {t.problem.pains.map((pain) => (
                  <li key={pain}>{pain}</li>
                ))}
              </ul>
            </div>
            <div className="glass-panel rounded-[36px] border border-white/10 p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-brand-gold">{t.problem.title.split(' → ')[1]}</p>
              <ul className="mt-6 space-y-5 text-brand-muted">
                {t.problem.solutions.map((solution) => (
                  <li key={solution}>{solution}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0F0F0F] px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title={t.why.title} description={t.why.description} />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {t.premiumCards.map((card) => (
              <motion.div
                key={card.title}
                whileHover={{ y: -10 }}
                className="glass-panel rounded-[36px] border border-white/10 p-8"
              >
                <p className="text-sm uppercase tracking-[0.35em] text-brand-gold">{card.title}</p>
                <p className="mt-4 text-sm leading-7 text-brand-muted">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title={t.history.title} description={t.history.description} />

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_0.95fr]">
            <div className="glass-panel rounded-[48px] border border-white/10 bg-[#111111]/70 p-10">
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.35em] text-brand-gold">{t.history.sectionTitle}</p>
                  <h3 className="text-3xl font-serif text-brand-text">{t.history.sectionHeading}</h3>
                </div>
                <p className="text-brand-muted leading-8">{t.history.paragraph}</p>
                <ul className="space-y-4 text-brand-muted">
                  {t.history.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[48px] border border-white/10 bg-[#111111]/85 p-8">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_left,_rgba(196,154,60,0.2),_transparent_20%)]" />
              <div className="relative space-y-6">
                <div className="rounded-3xl border border-white/10 bg-black/40 p-8">
                  <p className="text-sm uppercase tracking-[0.35em] text-brand-gold">{t.history.timelineTitle}</p>
                  <div className="mt-8 space-y-8">
                    {t.history.timelineItems.map((item) => (
                      <div key={item.year} className="flex items-start gap-4">
                        <span className="mt-1 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-brand-gold/10 text-xl font-semibold text-brand-gold">{item.year}</span>
                        <p className="text-brand-muted leading-7">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0F0F0F] px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title={t.international.title} description={t.international.description} />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {t.international.partners.map((partner) => (
              <motion.div
                key={partner.country}
                whileHover={{ y: -8 }}
                className="glass-panel rounded-[36px] border border-white/10 p-8"
              >
                <p className="text-sm uppercase tracking-[0.35em] text-brand-gold">{partner.country}</p>
                <p className="mt-4 text-sm leading-7 text-brand-muted">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title={t.community.title} description={t.community.description} />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.community.profiles.map((profile) => (
              <motion.div
                key={profile.role}
                whileHover={{ scale: 1.03 }}
                className="group overflow-hidden rounded-[36px] border border-white/10 bg-[#121212]/90 p-8"
              >
                <div className="h-48 rounded-[32px] bg-gradient-to-br from-white/10 via-transparent to-black/20 p-6 transition duration-500 group-hover:shadow-glow" />
                <p className="mt-6 text-xl font-semibold text-brand-text">{profile.role}</p>
                <p className="mt-3 text-sm leading-7 text-brand-muted">{profile.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#090909] px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[48px] border border-white/10 bg-[#111111]/88 p-10 shadow-premium">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-brand-gold">{t.review.title}</p>
                <h2 className="mt-4 text-4xl font-serif text-brand-text md:text-5xl">{t.review.heading}</h2>
                <p className="mt-6 max-w-xl text-brand-muted leading-8">{t.review.paragraph}</p>
              </div>
              <div className="grid gap-4">
                {t.review.quotes.map((quote, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="glass-panel rounded-3xl border border-white/10 p-7"
                  >
                    <p className="text-xl leading-8 text-brand-text">{quote}</p>
                    <p className="mt-5 text-sm uppercase tracking-[0.35em] text-brand-gold">{t.review.quoteLabel}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
