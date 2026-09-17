'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, Smartphone, ChevronDown } from 'lucide-react';
import { getDictionary } from '@/lib/i18n';
import { siteConfig } from '@/config/site';

interface HeroProps {
  lang: string;
}

export default function Hero({ lang }: HeroProps) {
  const dict = getDictionary(lang);
  const isEn = lang === 'en';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] flex items-center bg-[#19201C] text-[#FAF9F5] overflow-hidden"
    >
      {/* Background Campaign Visuals */}
      <div className="absolute inset-0 z-0">
        {/* Main background image with soft cinematic dark gradient */}
        <div className="relative w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=85&w=1920&auto=format&fit=crop"
            alt={isEn ? 'Kourawy premium cotton wardrobe' : 'Vestiaire en coton premium Kourawy'}
            fill
            priority
            sizes="100vw"
            referrerPolicy="no-referrer"
            className="object-cover object-[center_35%] opacity-35 scale-105 filter contrast-105 brightness-95 transition-all duration-1000"
          />
          {/* Gradients to blend text carefully and eliminate any reading strain */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#111613] via-[#111613]/85 to-transparent lg:w-[65%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#19201C] via-[#19201C]/40 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text content panel */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Elegant Collection Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/10 backdrop-blur-md text-white border border-white/10 text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#8FA597] animate-pulse" />
              <span>{isEn ? 'New Campaign — Conakry' : 'Nouvelle Campagne — Conakry'}</span>
            </motion.div>

            {/* Brand Title */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-white mb-2 leading-none"
            >
              Kourawy
            </motion.h1>

            {/* Slogan with high-end display typography */}
            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-3xl font-serif italic text-[#8FA597] tracking-wide mb-6"
            >
              {dict.common.slogan}.
            </motion.p>

            {/* Supporting context */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-[#FAF9F5]/85 max-w-lg font-light leading-relaxed mb-8 sm:mb-10"
            >
              {isEn
                ? 'Garments designed for your everyday life, with meticulous attention paid to material excellence, physical comfort, and lasting details.'
                : 'Des vêtements pensés pour votre quotidien, avec une attention particulière portée à la qualité, au confort et aux détails.'}
            </motion.p>

            {/* Call to Actions with refined brand spacing */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <Link
                href={`/${lang}/collections`}
                id="hero-primary-cta"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FAF9F5] text-[#19201C] text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-white hover:tracking-widest active:bg-[#FAF9F5] shadow-md group"
              >
                <span>{dict.hero.cta}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#telecharger-application"
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-transparent border border-white/20 text-white text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-white/10 hover:border-white/40 active:bg-transparent"
              >
                <Smartphone className="w-4 h-4 text-[#8FA597]" />
                <span>{dict.common.appButton}</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Premium Campaign Poster Image on Right (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] w-full max-w-[360px] mx-auto bg-[#284735] border border-white/10 shadow-2xl overflow-hidden group"
            >
              <Image
                src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=85&w=800&auto=format&fit=crop"
                alt={isEn ? 'Kourawy everyday classic shirt' : 'Chemise classique quotidienne Kourawy'}
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                referrerPolicy="no-referrer"
                className="object-cover object-center transition-transform duration-[4000ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8FA597] font-semibold block mb-1">
                  {isEn ? 'Signature Cotton' : 'Coton Signature'}
                </span>
                <p className="text-sm font-serif italic text-white/95 font-medium">
                  {isEn ? 'Crafted for daily breathability' : 'Conçu pour une fraîcheur quotidienne'}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Elegant Floating Scroll Down indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-[9px] uppercase tracking-[0.3em] font-semibold text-white/80">Scroll</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-white" />
        </motion.div>
      </div>
    </section>
  );
}
