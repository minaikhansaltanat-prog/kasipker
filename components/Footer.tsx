'use client';

import Image from 'next/image';
import { useTranslations } from '@/components/useTranslations';

export function Footer() {
  const t = useTranslations();
  const f = t.footer;

  return (
    <footer id="contacts" className="bg-brand-dark text-white">
      {/* Map block — opens 2GIS on click */}
      <a
        href="https://go.2gis.com/klDFg"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-60 w-full cursor-pointer items-center justify-center overflow-hidden bg-[#0d1f0d]"
        aria-label="2GIS картасында көру"
      >
        {/* Grid lines background */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(#5BBF3A 1px, transparent 1px), linear-gradient(90deg, #5BBF3A 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(91,191,58,0.18)_0%,transparent_70%)]" />

        {/* Pin + label */}
        <div className="relative flex flex-col items-center gap-3 text-center transition-transform duration-300 group-hover:scale-105">
          {/* Pin icon */}
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-green shadow-green">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>

          <div>
            <p className="text-base font-extrabold text-white">AZYQ — Алматы</p>
            <p className="mt-0.5 text-sm text-brand-green">Алматы, Қазақстан</p>
          </div>

          {/* CTA button */}
          <span className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-brand-green px-5 py-2 text-xs font-bold text-white shadow-green transition-all duration-200 group-hover:bg-brand-green-dark">
            2GIS-та ашу
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
            </svg>
          </span>
        </div>
      </a>

      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/images/azyq-logo.png"
                alt="AZYQ"
                width={400}
                height={400}
                style={{ height: '110px', width: '110px', objectFit: 'contain' }}
              />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-gray-400">{f.tagline}</p>

            {/* Social / contact */}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="tel:+77053271591"
                className="flex items-center gap-2 text-sm font-semibold text-white hover:text-brand-green transition-colors"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-base">📞</span>
                {f.phone}
              </a>
              <a
                href="https://wa.me/77053271591"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-white hover:text-brand-green transition-colors"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-base">💬</span>
                WhatsApp
              </a>
              <a
                href={`mailto:${f.email}`}
                className="flex items-center gap-2 text-sm font-semibold text-white hover:text-brand-green transition-colors"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-base">✉️</span>
                {f.email}
              </a>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-base">📍</span>
                {f.address}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-base">🕐</span>
                {f.workHours}
              </div>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-green">{f.navTitle}</h3>
            <ul className="flex flex-col gap-2">
              {f.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA block */}
          <div className="rounded-2xl bg-white/[0.06] p-5 border border-white/10">
            <p className="mb-3 text-sm font-bold text-white">Серіктес болуға дайынсыз ба?</p>
            <p className="mb-4 text-xs leading-relaxed text-gray-400">
              Тегін консультация алып, сіздің балабақшаңызға арнап есептейміз.
            </p>
            <a
              href="https://wa.me/77053271591"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center text-xs py-2.5"
            >
              WhatsApp арқылы жазу
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-gray-500">{f.copyright}</p>
          <a
            href="https://go.2gis.com/klDFg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:text-brand-green transition-colors"
          >
            2GIS-те көру
          </a>
        </div>
      </div>
    </footer>
  );
}
