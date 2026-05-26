'use client';

import { translations } from '@/lib/i18n';
import { useLanguage } from '@/components/LanguageProvider';

export function useTranslations() {
  const { language } = useLanguage();
  return translations[language];
}
