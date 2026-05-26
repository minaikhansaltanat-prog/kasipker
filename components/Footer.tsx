'use client';

import Link from 'next/link';
import { useTranslations } from '@/components/useTranslations';

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="mt-24 border-t border-white/10 bg-[#080808] px-6 py-16 text-brand-muted">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-brand-gold">{t.footer.title}</p>
          <h3 className="text-2xl font-serif text-brand-text">{t.footer.title}</h3>
          <p className="max-w-md leading-7">{t.footer.description}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] text-brand-gold">{t.footer.contacts}</p>
            <p>+7 707 869 0263</p>
            <p>kasipker.aliyansy@gmail.com</p>
          </div>
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] text-brand-gold">{t.footer.navigation}</p>
            <div className="space-y-2 text-sm">
              {t.navItems.slice(0, 4).map((item) => (
                <Link key={item.href} href={item.href} className="block hover:text-brand-gold">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] text-brand-gold">{t.footer.social}</p>
            <p className="text-sm leading-7 text-brand-text">{t.footer.socialPlaceholder}</p>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-white/5 pt-8 text-sm text-brand-muted">
        {t.footer.copyright}
      </div>
    </footer>
  );
}
