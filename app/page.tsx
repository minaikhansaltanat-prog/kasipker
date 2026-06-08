'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { useTranslations } from '@/components/useTranslations';
import AudioPlayer from '@/components/AudioPlayer';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut', delay },
  }),
};

const UMKA_REVIEW = `Хотим выразить благодарность компании ИП AZYQ за добросовестную работу по поставке продуктов питания для нашего детского сада.

Все продукты всегда свежие, соответствуют требованиям качества и доставляются точно в срок. Особенно хочется отметить высокий уровень организации работы: вся необходимая документация предоставляется своевременно и в полном порядке.

Благодаря надежности и профессионализму компании мы уверены в качестве питания наших воспитанников. Желаем коллективу ИП AZYQ дальнейшего развития, процветания и успехов в работе!

С уважением, коллектив детского сада «УМКА» на Хан Тенгри`;

export default function Home() {
  const t = useTranslations();
  const [formData, setFormData] = useState({ name: '', phone: '', kindergarten: '' });
  const [submitted, setSubmitted] = useState(false);
  const [testimonialsTab, setTestimonialsTab] = useState<'video' | 'written' | 'audio' | '2gis'>('video');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<{ text: string; name: string; title: string } | null>(null);

  const carouselRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);
  const hasDragged = useRef(false);

  const openModal = (data: { text: string; name: string; title: string }) => {
    setModalData(data);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setModalOpen(false); document.body.style.overflow = ''; }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const onCarouselMD = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;
    hasDragged.current = false;
    dragStartX.current = e.clientX;
    dragScrollLeft.current = carouselRef.current?.scrollLeft ?? 0;
  };
  const onCarouselMU = () => {
    isDragging.current = false;
    setTimeout(() => { hasDragged.current = false; }, 80);
  };
  const onCarouselML = () => { isDragging.current = false; };
  const onCarouselMM = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !carouselRef.current) return;
    const dx = e.clientX - dragStartX.current;
    if (Math.abs(dx) > 5) hasDragged.current = true;
    carouselRef.current.scrollLeft = dragScrollLeft.current - dx * 1.2;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const WA_LINK = 'https://wa.me/77053271591';
  const PHONE = '+7 705 327 1591';
  const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  return (
    <main className="overflow-x-hidden">
      <NavBar />

      {/* ══════════════════════════════════════
          BLOCK 1 — HERO
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white pt-0 pb-0">
        {/* Background decorations */}
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-brand-green-bg opacity-60" />
        <div className="absolute -left-20 top-1/2 h-80 w-80 rounded-full bg-brand-red-light opacity-40" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left: copy */}
            <div className="py-5 lg:py-10">
              <motion.div
                initial="hidden"
                animate="visible"
                custom={0}
                variants={fadeUp}
                className="mb-5"
              >
                <span className="eyebrow">B2B · Алматы · балабақшалар</span>
              </motion.div>

              <motion.h1
                initial="hidden"
                animate="visible"
                custom={0.1}
                variants={fadeUp}
                className="mb-4 text-4xl font-black leading-[1.1] text-brand-dark md:text-5xl xl:text-6xl"
                style={{ letterSpacing: '-0.03em' }}
              >
                <span className="block">{t.hero.h1Line1}</span>
                <span className="block text-brand-green">{t.hero.h1Line2}</span>
                <span className="block">{t.hero.h1Line3}</span>
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="visible"
                custom={0.2}
                variants={fadeUp}
                className="mb-6 max-w-lg text-base leading-relaxed text-brand-gray md:text-lg"
              >
                {t.hero.subtitle}
              </motion.p>

              <motion.div
                initial="hidden"
                animate="visible"
                custom={0.3}
                variants={fadeUp}
                className="mb-6 flex flex-wrap gap-3"
              >
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 text-base">
                  {t.hero.ctaPrimary}
                </a>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-outline px-8 py-4 text-base">
                  {t.hero.ctaSecondary}
                </a>
              </motion.div>

              {/* Trust bar */}
              <motion.div
                initial="hidden"
                animate="visible"
                custom={0.4}
                variants={fadeUp}
                className="flex flex-wrap gap-x-5 gap-y-2"
              >
                {t.hero.trust.map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-sm font-semibold text-brand-gray">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-green text-[10px] font-black text-white">✓</span>
                    {item}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: image */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.15}
              variants={fadeIn}
              className="relative hidden lg:block"
            >
              {/* Green blob bg */}
              <div className="absolute inset-0 rounded-4xl bg-brand-green-light" style={{ transform: 'rotate(-3deg)' }} />
              <div className="relative overflow-hidden rounded-4xl">
                <Image
                  src="/images/dostavka.png"
                  alt="AZYQ жеткізу"
                  width={1254}
                  height={1254}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-6 rounded-2xl bg-white p-4 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green text-white text-xl">🚚</div>
                  <div>
                    <p className="text-xs text-brand-muted">Жеткізу</p>
                    <p className="text-sm font-extrabold text-brand-dark">Дүйсенбі 8:00</p>
                  </div>
                </div>
              </div>
              {/* Floating stat */}
              <div className="absolute -top-4 -right-4 rounded-2xl bg-brand-red px-4 py-3 text-white shadow-red">
                <p className="text-2xl font-black">50+</p>
                <p className="text-xs opacity-80">балабақша</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile hero image */}
        <div className="relative mt-8 block lg:hidden">
          <Image
            src="/images/dostavka.png"
            alt="AZYQ жеткізу"
            width={600}
            height={400}
            className="h-64 w-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>
      </section>

      {/* ══════════════════════════════════════
          BLOCK 2 — MISSION
      ══════════════════════════════════════ */}
      <section id="mission" className="bg-brand-green-bg py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
              className="order-2 lg:order-1"
            >
              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src="/images/ff.png"
                  alt="AZYQ миссия"
                  width={1254}
                  height={1254}
                  className="h-auto w-full object-cover"
                />
              </div>
            </motion.div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
                <span className="eyebrow mb-4 inline-block">{t.mission.eyebrow}</span>
              </motion.div>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.1}
                variants={fadeUp}
                className="section-title mb-6"
              >
                {t.mission.heading}
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.2}
                variants={fadeUp}
                className="mb-4 leading-relaxed text-brand-gray"
              >
                {t.mission.text1}
              </motion.p>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.3}
                variants={fadeUp}
                className="leading-relaxed text-brand-gray"
              >
                {t.mission.text2}
              </motion.p>

              {/* Mission image secondary */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.4}
                variants={fadeUp}
                className="mt-8 overflow-hidden rounded-2xl"
              >
                <Image
                  src="/images/nan.jpg"
                  alt="AZYQ өнімдер"
                  width={1036}
                  height={1036}
                  className="h-40 w-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BLOCK 3 — STATS
      ══════════════════════════════════════ */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {t.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.1}
                variants={fadeUp}
                className="stat-card"
              >
                <div className="mb-2 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-brand-green md:text-5xl">{stat.value}</span>
                  {stat.unit && (
                    <span className="text-lg font-bold text-brand-green">{stat.unit}</span>
                  )}
                </div>
                <p className="text-xs font-semibold leading-snug text-brand-gray md:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BLOCK 4 — PAIN + SOLUTION
      ══════════════════════════════════════ */}
      <section className="bg-brand-bg-alt py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-8 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
              <span className="eyebrow mb-4 inline-block">{t.pain.eyebrow}</span>
            </motion.div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              variants={fadeUp}
              className="section-title mx-auto max-w-2xl"
            >
              {t.pain.title}
            </motion.h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Pain column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              variants={fadeUp}
              className="rounded-3xl bg-brand-red-light p-8 border border-brand-red/20"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-red text-white text-xl">✗</span>
                <h3 className="text-lg font-extrabold text-brand-dark">{t.pain.painTitle}</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {t.pain.painItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-brand-gray">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-red/20 text-brand-red text-xs font-bold">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solution column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
              variants={fadeUp}
              className="rounded-3xl bg-brand-green-light p-8 border border-brand-green/20"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green text-white text-xl">✓</span>
                <h3 className="text-lg font-extrabold text-brand-dark">{t.pain.solutionTitle}</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {t.pain.solutionItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-brand-gray">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-green text-white text-xs font-black">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Quote */}
          <motion.blockquote
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3}
            variants={fadeUp}
            className="mt-10 rounded-2xl border-l-4 border-brand-green bg-white p-6 text-center shadow-card"
          >
            <p className="text-xl font-bold italic text-brand-dark md:text-2xl">«{t.pain.quote}»</p>
          </motion.blockquote>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BLOCK 5 — SERVICES
      ══════════════════════════════════════ */}
      <section id="services" className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-8 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
              <span className="eyebrow mb-4 inline-block">{t.services.eyebrow}</span>
            </motion.div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              variants={fadeUp}
              className="section-title"
            >
              {t.services.title}
            </motion.h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.items.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.1}
                variants={fadeUp}
                className="card group cursor-default"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green-light text-3xl group-hover:bg-brand-green group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-base font-extrabold text-brand-dark">{item.title}</h3>
                <p className="text-sm leading-relaxed text-brand-gray">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Fleet image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            variants={fadeUp}
            className="mt-10 overflow-hidden rounded-3xl"
            style={{ backgroundColor: '#70b71e' }}
          >
            <Image
              src="/images/gazel11.png"
              alt="AZYQ жеткізу көліктері"
              width={1170}
              height={489}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BLOCK 6 — HOW IT WORKS
      ══════════════════════════════════════ */}
      <section id="how-it-works" className="bg-brand-dark py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-14 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-green mb-4">
                {t.howItWorks.eyebrow}
              </span>
            </motion.div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              variants={fadeUp}
              className="text-3xl font-extrabold text-white md:text-4xl"
              style={{ letterSpacing: '-0.02em' }}
            >
              {t.howItWorks.title}
            </motion.h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {t.howItWorks.steps.map((step, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.15}
                variants={fadeUp}
                className="relative rounded-3xl bg-white/[0.06] p-8 border border-white/10 hover:bg-white/10 transition-colors"
              >
                {/* Connector line */}
                {i < 2 && (
                  <div className="absolute hidden md:block top-1/2 -right-3 h-0.5 w-6 bg-brand-green/40" />
                )}
                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-green text-2xl font-black text-white">
                    {step.step}
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-green">{step.day}</p>
                    <p className="text-lg font-extrabold text-white">{step.title}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-gray-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Fleet rear image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3}
            variants={fadeUp}
            className="mt-12 overflow-hidden rounded-3xl"
          >
            <Image
              src="/images/avasy.png"
              alt="AZYQ автопарк"
              width={1254}
              height={1190}
              className="h-64 w-full object-cover object-top md:h-[420px]"
            />
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BLOCK 7 — ADVANTAGES
      ══════════════════════════════════════ */}
      <section id="advantages" className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-8 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
              <span className="eyebrow mb-4 inline-block">{t.advantages.eyebrow}</span>
            </motion.div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              variants={fadeUp}
              className="section-title"
            >
              {t.advantages.title}
            </motion.h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {t.advantages.items.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.12}
                variants={fadeUp}
                className={`rounded-3xl p-8 border-2 ${
                  item.color === 'green'
                    ? 'border-brand-green/30 bg-brand-green-light'
                    : 'border-brand-red/30 bg-brand-red-light'
                }`}
              >
                <div
                  className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${
                    item.color === 'green' ? 'bg-brand-green' : 'bg-brand-red'
                  } text-white`}
                >
                  {item.icon}
                </div>
                <h3 className="mb-3 text-xl font-extrabold text-brand-dark">{item.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-brand-gray">{item.desc}</p>
                <div
                  className={`rounded-xl px-4 py-2 text-xs font-bold ${
                    item.color === 'green'
                      ? 'bg-brand-green text-white'
                      : 'bg-brand-red text-white'
                  }`}
                >
                  {item.stat}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BLOCK 8 — TEAM
      ══════════════════════════════════════ */}
      <section id="team" className="bg-brand-bg-alt py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-8 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
              <span className="eyebrow mb-4 inline-block">{t.team.eyebrow}</span>
            </motion.div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              variants={fadeUp}
              className="section-title"
            >
              {t.team.title}
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
              variants={fadeUp}
              className="mt-3 text-brand-gray"
            >
              {t.team.subtitle}
            </motion.p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.team.members.map((member, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.1}
                variants={fadeUp}
                className="card text-center"
              >
                {/* Avatar placeholder */}
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-green to-brand-green-dark text-3xl font-black text-white shadow-green">
                  {member.initials}
                </div>
                <h3 className="mb-1 font-extrabold text-brand-dark">{member.name}</h3>
                <p className="text-xs leading-snug text-brand-gray">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BLOCK 9 — PARTNER KINDERGARTENS
      ══════════════════════════════════════ */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-10 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
              <span className="eyebrow mb-4 inline-block">{t.partners.eyebrow}</span>
            </motion.div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              variants={fadeUp}
              className="section-title"
            >
              {t.partners.title}
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
              variants={fadeUp}
              className="mt-3 text-brand-gray"
            >
              {t.partners.subtitle}
            </motion.p>
          </div>

          {/* Partner logos placeholder grid */}
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.05}
                variants={fadeIn}
                className="flex h-20 items-center justify-center rounded-2xl border-2 border-dashed border-brand-border bg-brand-bg-alt p-3"
              >
                <div className="flex flex-col items-center gap-1">
                  <div className="h-8 w-8 rounded-full bg-brand-green-light flex items-center justify-center">
                    <span className="text-lg">🏫</span>
                  </div>
                  <span className="text-[10px] font-bold text-brand-muted">Балабақша</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3}
            variants={fadeIn}
            className="mt-6 text-center text-sm text-brand-muted"
          >
            * Серіктестер логотиптері жаңартылуда
          </motion.p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BLOCK 10 — TESTIMONIALS (3 TABS)
      ══════════════════════════════════════ */}
      <section className="bg-brand-green-bg py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          {/* Header */}
          <div className="mb-10 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
              <span className="eyebrow mb-4 inline-block">{t.testimonials.eyebrow}</span>
            </motion.div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              variants={fadeUp}
              className="section-title"
            >
              {t.testimonials.title}
            </motion.h2>
          </div>

          {/* Tab switcher */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            variants={fadeUp}
            className="mb-10 flex justify-center"
          >
            <div className="inline-flex rounded-2xl bg-white p-1.5 shadow-card gap-1">
              {(
                [
                  { key: 'video', icon: '🎥', label: t.testimonials.tabVideo },
                  { key: 'written', icon: '✍️', label: t.testimonials.tabWritten },
                  { key: 'audio', icon: '🎤', label: t.testimonials.tabAudio },
                  { key: '2gis', icon: '📍', label: '2GIS' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setTestimonialsTab(tab.key)}
                  className={`flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition-all duration-200 ${
                    testimonialsTab === tab.key
                      ? 'bg-brand-green text-white shadow-green scale-[1.02]'
                      : 'text-brand-gray hover:text-brand-dark hover:bg-brand-green-light'
                  }`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* ── VIDEO TAB ── */}
          {testimonialsTab === 'video' && (
            <div className="grid gap-5 md:grid-cols-3">
              {/* Real video — otzyv1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0 }}
                className="overflow-hidden rounded-3xl bg-white shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="overflow-hidden rounded-t-3xl bg-black">
                  <video
                    src={`${BASE_PATH}/videos/otzyv1.mp4`}
                    controls
                    playsInline
                    preload="metadata"
                    style={{ width: '100%', display: 'block', borderRadius: 0 }}
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-green text-white font-bold text-sm">
                      У
                    </div>
                    <div>
                      <p className="font-extrabold text-brand-dark text-sm">«Умка» балабақшасы</p>
                      <p className="text-xs text-brand-muted italic">Алматы қаласы</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Placeholder cards */}
              {t.testimonials.videoItems.slice(0, 2).map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (i + 1) * 0.1 }}
                  className="group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div
                    className={`relative flex h-48 items-center justify-center ${
                      item.color === 'green'
                        ? 'bg-gradient-to-br from-brand-green to-brand-green-dark'
                        : 'bg-gradient-to-br from-brand-red to-brand-red-dark'
                    }`}
                  >
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white" />
                      <div className="absolute -left-4 -bottom-4 h-20 w-20 rounded-full bg-white" />
                    </div>
                    <span className="absolute bottom-3 left-4 text-xs font-black text-white/40 tracking-widest uppercase">azyq</span>
                    <span className="absolute top-3 right-3 rounded-lg bg-black/40 px-2 py-0.5 text-xs font-bold text-white">
                      {item.duration}
                    </span>
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-white font-bold text-sm ${
                          item.color === 'green' ? 'bg-brand-green' : 'bg-brand-red'
                        }`}
                      >
                        {item.name[0]}
                      </div>
                      <div>
                        <p className="font-extrabold text-brand-dark text-sm">{item.name}</p>
                        <p className="text-xs text-brand-muted">{item.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* ── WRITTEN TAB ── */}
          {testimonialsTab === 'written' && (
            <div
              ref={carouselRef}
              className="reviews-carousel"
              onMouseDown={onCarouselMD}
              onMouseUp={onCarouselMU}
              onMouseLeave={onCarouselML}
              onMouseMove={onCarouselMM}
            >
              {/* Text review cards */}
              {t.testimonials.writtenItems.map((item, i) => (
                <div
                  key={i}
                  className="review-card rounded-2xl bg-white p-5 shadow-card border border-brand-border"
                  onClick={() => { if (hasDragged.current) return; openModal({ text: item.quote, name: item.name, title: item.role }); }}
                >
                  <div className="absolute -top-3 left-5 flex h-8 w-8 items-center justify-center rounded-full bg-brand-green text-white text-lg font-black shadow-green select-none">
                    "
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-brand-gray italic">«{item.quote}»</p>
                  <div className="mt-4 flex items-center gap-3 border-t border-brand-border pt-3">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand-green-light text-brand-green-dark font-bold text-sm">
                      {item.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-extrabold text-brand-dark leading-tight">{item.name}</p>
                      <p className="text-xs text-brand-muted">{item.role}</p>
                    </div>
                  </div>
                  <div className="review-read-more">Толық оқу ↗</div>
                </div>
              ))}

              {/* WhatsApp screenshot cards — Умка */}
              {['/images/t1.jpg', '/images/t2.jpg'].map((src, i) => (
                <div
                  key={`umka-${i}`}
                  className="review-card review-card-screenshot border border-brand-border shadow-card"
                  style={{ height: 280 }}
                  onClick={() => { if (hasDragged.current) return; openModal({ text: UMKA_REVIEW, name: '«Умка» балабақшасы', title: '«Умка» балабақшасының директоры' }); }}
                >
                  <Image
                    src={src}
                    alt="«Умка» балабақшасы пікірі"
                    fill
                    className="object-cover object-top"
                    sizes="320px"
                  />
                  <div className="review-read-more">Толық оқу ↗</div>
                </div>
              ))}
            </div>
          )}

          {/* ── 2GIS TAB ── */}
          {testimonialsTab === '2gis' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="flex justify-center"
            >
              <a
                href="https://go.2gis.com/klDFg"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-card hover:shadow-card-hover transition-all duration-300 block"
              >
                {/* Header stripe */}
                <div className="flex items-center gap-4 bg-brand-green px-8 py-5">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/20">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-extrabold text-white leading-tight">2GIS-тегі пікірлер</p>
                    <p className="text-sm text-white/80">AZYQ — Алматы</p>
                  </div>
                </div>

                {/* Stars + rating */}
                <div className="px-8 py-6 text-center">
                  <div className="mb-3 flex justify-center gap-1">
                    {[1,2,3,4,5].map((s) => (
                      <svg key={s} width="32" height="32" viewBox="0 0 24 24" fill="#5BBF3A">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="mb-1 text-3xl font-black text-brand-dark">5.0</p>
                  <p className="text-sm text-brand-muted">2GIS картасындағы рейтинг</p>

                  <div className="my-5 border-t border-brand-border" />

                  <p className="mb-6 text-sm leading-relaxed text-brand-gray">
                    Барлық шынайы пікірлерді 2GIS картасында оқыңыз — балабақша директорларының тікелей бағалауы.
                  </p>

                  <div className="inline-flex items-center gap-2 rounded-xl bg-brand-green px-8 py-3.5 text-sm font-bold text-white shadow-green group-hover:bg-brand-green-dark transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    2GIS-та пікірлерді оқу
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                    </svg>
                  </div>
                </div>
              </a>
            </motion.div>
          )}

          {/* ── AUDIO TAB ── */}
          {testimonialsTab === 'audio' && (
            <div className="grid gap-5 md:grid-cols-3">
              {t.testimonials.audioItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <AudioPlayer
                    src={item.src ? `${BASE_PATH}${item.src}` : ''}
                    name={item.name}
                    role={item.role}
                    fallbackDuration={item.duration}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════
          BLOCK 11 — GIFT OFFER
      ══════════════════════════════════════ */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-10 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
              <span className="eyebrow mb-4 inline-block">{t.gift.eyebrow}</span>
            </motion.div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              variants={fadeUp}
              className="section-title"
            >
              {t.gift.title}
            </motion.h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Gift cards */}
            <div className="flex flex-col gap-5">
              {t.gift.items.map((gift, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.15}
                  variants={fadeUp}
                  className="rounded-3xl border-2 border-brand-green bg-brand-green-light p-6"
                >
                  <div className="mb-4 flex items-start gap-4">
                    <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-green text-3xl text-white shadow-green">
                      {gift.icon}
                    </span>
                    <div>
                      <span className="mb-1 inline-block rounded-full bg-brand-red px-3 py-0.5 text-xs font-bold text-white">
                        {gift.badge}
                      </span>
                      <h3 className="text-lg font-extrabold text-brand-dark">{gift.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-brand-gray">{gift.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Requirements + CTA */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
              variants={fadeUp}
              className="rounded-3xl bg-brand-bg-alt p-8 border border-brand-border"
            >
              <h3 className="mb-5 text-lg font-extrabold text-brand-dark">{t.gift.requirementsTitle}</h3>
              <ul className="mb-8 flex flex-col gap-3">
                {t.gift.requirementItems.map((req, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-brand-gray">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-green/20 text-brand-green-dark text-xs font-bold">
                      {i + 1}
                    </span>
                    {req}
                  </li>
                ))}
              </ul>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center text-sm py-4"
              >
                {t.gift.cta}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BLOCK 12 — FINAL CTA + CONTACT FORM
      ══════════════════════════════════════ */}
      <section id="cta" className="bg-brand-dark py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Text side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
            >
              <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-brand-green/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-green">
                {t.finalCta.eyebrow}
              </span>
              <h2
                className="mb-6 text-3xl font-extrabold text-white md:text-4xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                {t.finalCta.title}
              </h2>
              <p className="mb-8 leading-relaxed text-gray-400">{t.finalCta.text}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-8 py-4"
                >
                  {t.finalCta.ctaPrimary}
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp px-8 py-4"
                >
                  {t.finalCta.ctaSecondary}
                </a>
              </div>

              {/* Contact info */}
              <div className="mt-10 flex flex-col gap-3">
                <a href={`tel:${PHONE}`} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <span className="text-brand-green">📞</span>
                  <span className="font-semibold">{PHONE}</span>
                </a>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <span className="text-brand-green">💬</span>
                  <span className="font-semibold">WhatsApp</span>
                </a>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.15}
              variants={fadeUp}
              className="rounded-3xl bg-white p-8"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-green-light text-3xl">
                    ✅
                  </div>
                  <p className="text-lg font-extrabold text-brand-dark">{t.contactForm.success}</p>
                </div>
              ) : (
                <>
                  <h3 className="mb-2 text-xl font-extrabold text-brand-dark">{t.contactForm.title}</h3>
                  <p className="mb-6 text-sm text-brand-gray">{t.contactForm.subtitle}</p>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                      type="text"
                      required
                      placeholder={t.contactForm.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-brand-border px-4 py-3 text-sm text-brand-dark outline-none focus:border-brand-green transition-colors"
                    />
                    <input
                      type="tel"
                      required
                      placeholder={t.contactForm.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-brand-border px-4 py-3 text-sm text-brand-dark outline-none focus:border-brand-green transition-colors"
                    />
                    <input
                      type="text"
                      required
                      placeholder={t.contactForm.kindergartenPlaceholder}
                      value={formData.kindergarten}
                      onChange={(e) => setFormData({ ...formData, kindergarten: e.target.value })}
                      className="w-full rounded-xl border border-brand-border px-4 py-3 text-sm text-brand-dark outline-none focus:border-brand-green transition-colors"
                    />
                    <button type="submit" className="btn-primary w-full justify-center py-4 text-base">
                      {t.contactForm.submit}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />

      {/* ── REVIEW MODAL ── */}
      <div
        className={`review-modal-overlay${modalOpen ? ' is-open' : ''}`}
        onClick={closeModal}
        role="dialog"
        aria-modal="true"
      >
        <div className="review-modal-panel" onClick={(e) => e.stopPropagation()}>
          {/* Handle */}
          <div className="mx-auto mt-3 mb-1 h-1 w-10 rounded-full bg-gray-200" />

          {modalData && (
            <>
              {/* Header */}
              <div className="sticky top-0 flex items-center gap-3 border-b border-brand-border bg-white px-6 py-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-brand-green text-white font-bold text-base">
                  {modalData.name.startsWith('«') ? modalData.name[1] : modalData.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-extrabold text-brand-dark leading-tight">{modalData.name}</p>
                  <p className="text-xs text-brand-muted mt-0.5">{modalData.title}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-brand-gray hover:bg-gray-200 text-sm font-bold"
                  aria-label="Жабу"
                >
                  ✕
                </button>
              </div>

              {/* Body */}
              <div className="px-6 pt-5">
                {modalData.text.split('\n\n').map((para, i) => (
                  <p key={i} className="mb-4 text-sm leading-relaxed text-brand-gray">
                    {para}
                  </p>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* ══════════════════════════════════════
          FLOATING WHATSAPP BUTTON
      ══════════════════════════════════════ */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float"
        aria-label="WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </main>
  );
}
