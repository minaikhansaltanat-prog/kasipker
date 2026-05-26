'use client';

import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from '@/components/useTranslations';

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export function ContactForm() {
  const t = useTranslations();
  const [sent, setSent] = useState(false);

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, t.contactForm.errors.name),
        email: z.string().email(t.contactForm.errors.email),
        message: z.string().min(15, t.contactForm.errors.message),
      }),
    [t.contactForm.errors],
  );

  const resolver = useMemo(() => zodResolver(schema), [schema]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver,
  });

  const onSubmit = async (data: ContactFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 700));
    console.log('Contact request', data);
    setSent(true);
    reset();
  };

  return (
    <div className="glass-panel rounded-[36px] border border-white/10 bg-[#111111]/90 p-8 shadow-premium">
      <p className="text-sm uppercase tracking-[0.35em] text-brand-gold">{t.contactForm.heading}</p>
      <h2 className="mt-4 text-3xl font-serif text-brand-text">{t.contactForm.heading}</h2>
      <p className="mt-4 text-brand-muted leading-7">{t.contactForm.description}</p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
        <div className="space-y-2">
          <label className="text-sm text-brand-muted">{t.contactForm.fields.name.label}</label>
          <input
            {...register('name')}
            className="w-full rounded-3xl border border-white/10 bg-black/60 px-4 py-3 text-brand-text outline-none transition focus:border-brand-gold"
            placeholder={t.contactForm.fields.name.placeholder}
          />
          <p className="text-xs text-red-400">{errors.name?.message}</p>
        </div>
        <div className="space-y-2">
          <label className="text-sm text-brand-muted">{t.contactForm.fields.email.label}</label>
          <input
            {...register('email')}
            className="w-full rounded-3xl border border-white/10 bg-black/60 px-4 py-3 text-brand-text outline-none transition focus:border-brand-gold"
            placeholder={t.contactForm.fields.email.placeholder}
          />
          <p className="text-xs text-red-400">{errors.email?.message}</p>
        </div>
        <div className="space-y-2">
          <label className="text-sm text-brand-muted">{t.contactForm.fields.message.label}</label>
          <textarea
            {...register('message')}
            rows={5}
            className="w-full rounded-3xl border border-white/10 bg-black/60 px-4 py-3 text-brand-text outline-none transition focus:border-brand-gold"
            placeholder={t.contactForm.fields.message.placeholder}
          />
          <p className="text-xs text-red-400">{errors.message?.message}</p>
        </div>
        <button type="submit" disabled={isSubmitting} className="glass-button w-full">
          {sent ? t.contactForm.sent : t.contactForm.submit}
        </button>
      </form>
    </div>
  );
}
