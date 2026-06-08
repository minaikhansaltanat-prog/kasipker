'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTranslations } from '@/components/useTranslations';
import { useLanguage } from '@/components/LanguageProvider';
import { type LanguageCode } from '@/lib/i18n';

export function NavBar() {
  const t = useTranslations();
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.mission, href: '#mission' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.howItWorks, href: '#how-it-works' },
    { label: t.nav.advantages, href: '#advantages' },
    { label: t.nav.team, href: '#team' },
    { label: t.nav.contacts, href: '#contacts' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-border'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          {/* Logo */}
          <a href="#" className="flex items-center flex-shrink-0">
            <Image
              src="/images/azyq-logo.png"
              alt="AZYQ"
              width={400}
              height={400}
              style={{ height: '92px', width: '92px', objectFit: 'contain' }}
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-brand-gray hover:text-brand-green transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language switcher — always visible */}
            <div className="flex items-center rounded-full border border-brand-border bg-brand-bg-alt">
              {(['kk', 'ru'] as LanguageCode[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`rounded-full px-3 py-1.5 text-xs font-bold transition-all ${
                    language === lang
                      ? 'bg-brand-green text-white shadow-sm'
                      : 'text-brand-gray hover:text-brand-dark'
                  }`}
                >
                  {t.languageNames[lang]}
                </button>
              ))}
            </div>

            {/* CTA button — desktop only */}
            <a
              href="https://wa.me/77053271591"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden btn-primary text-xs px-4 py-2.5 sm:inline-flex"
            >
              {t.nav.ctaPrimary}
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-brand-border lg:hidden"
              aria-label="Menu"
            >
              <span
                className={`block h-0.5 w-5 bg-brand-dark transition-all duration-200 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
              />
              <span
                className={`block h-0.5 w-5 bg-brand-dark transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block h-0.5 w-5 bg-brand-dark transition-all duration-200 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="border-t border-brand-border bg-white px-4 pb-6 pt-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-brand-gray hover:bg-brand-green-light hover:text-brand-green-dark transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-4">
              <a
                href="https://wa.me/77053271591"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center text-xs py-2.5"
              >
                {t.nav.ctaPrimary}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Spacer */}
      <div className="h-[92px]" />
    </>
  );
}
