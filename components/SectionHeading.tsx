'use client';

export function SectionHeading({ title, description }: { title: string; description: string }) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="text-sm uppercase tracking-[0.35em] text-brand-muted">KASIPKER</p>
      <h2 className="text-3xl md:text-5xl font-serif leading-tight text-brand-text">{title}</h2>
      <p className="text-base md:text-lg text-brand-muted leading-8">{description}</p>
    </div>
  );
}
