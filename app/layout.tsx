import type { Metadata } from 'next';
import { Barlow_Condensed, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/components/LanguageProvider';

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
});

const sans = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'KASIPKER — бизнес-альянс Казахстана',
  description: 'KASIPKER — премиальный бизнес-альянс предпринимателей Казахстана. Инвестиции, AI, государственная поддержка и международное партнерство в единой экосистеме.',
  openGraph: {
    title: 'KASIPKER — бизнес-альянс Казахстана',
    description: 'Платформа для предпринимателей Казахстана: инвестиции, AI, государственные программы, B2B и международные связи.',
    type: 'website',
  },
  metadataBase: new URL('https://kasipker.kz'),
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="h-full scroll-smooth">
      <body className={`${serif.variable} ${sans.variable} min-h-screen bg-[#0A0A0A] text-brand-text antialiased selection:bg-brand-gold selection:text-black`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
