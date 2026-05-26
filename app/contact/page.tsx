'use client';

import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';
import { SectionHeading } from '@/components/SectionHeading';
import { ContactForm } from '@/components/ContactForm';
import { useTranslations } from '@/components/useTranslations';

export default function ContactPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-[#090909] text-brand-text">
      <NavBar />
      <section className="px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title={t.contact.title} description={t.contact.description} />
          <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_0.8fr]">
            <div className="glass-panel rounded-[48px] border border-white/10 bg-[#111111]/85 p-10">
              <p className="text-sm uppercase tracking-[0.35em] text-brand-gold">{t.contact.subtitle}</p>
              <h2 className="mt-4 text-4xl font-serif text-brand-text">{t.contact.description}</h2>
              <div className="mt-8 space-y-6 text-brand-muted">
                <p>{t.contact.phoneLabel}: <a href="tel:+77078690263" className="text-brand-gold hover:text-brand-hover">+7 707 869 0263</a></p>
                <p>{t.contact.emailLabel}: <a href="mailto:kasipker.aliyansy@gmail.com" className="text-brand-gold hover:text-brand-hover">kasipker.aliyansy@gmail.com</a></p>
                <p>{t.contact.whatsappLabel}: <a href="https://wa.me/7078690263" target="_blank" rel="noreferrer" className="text-brand-gold hover:text-brand-hover">{t.contact.whatsappLink}</a></p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
