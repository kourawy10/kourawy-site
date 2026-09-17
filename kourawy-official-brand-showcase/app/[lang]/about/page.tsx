import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import { KourawyTreeSymbol } from '@/components/KourawyLogo';
import AppDownloadBanner from '@/components/AppDownloadBanner';
import { siteConfig } from '@/config/site';
import { MapPin } from 'lucide-react';
import { getDictionary } from '@/lib/i18n';

interface AboutPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === 'en';
  return {
    title: isEn ? 'About Kourawy — Our History & Our Vision' : 'À propos de Kourawy — Notre histoire & Notre vision',
    description: isEn
      ? 'Discover Kourawy, a Guinean clothing brand developed in Conakry to make high-quality, comfortable, and durable daily wear accessible.'
      : 'Découvrez Kourawy, marque guinéenne de vêtements développée à Conakry pour rendre les vêtements de qualité, confortables et durables accessibles au quotidien.',
    openGraph: {
      title: isEn ? 'About Kourawy | Conakry, Guinea' : 'À propos de Kourawy | Conakry, Guinée',
      description: isEn
        ? 'We believe that quality clothing should not be a luxury. Discover the origins and commitments of Kourawy.'
        : 'Nous croyons qu’un vêtement de qualité ne doit pas être inaccessible. Découvrez la genèse et les engagements de Kourawy.',
      url: `${siteConfig.url}/${lang}/about`,
    },
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { lang } = await params;
  const isEn = lang === 'en';
  const dict = getDictionary(lang);

  return (
    <div className="bg-[#FAF9F5] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: dict.nav.about }]} lang={lang} />

        {/* Hero Header */}
        <div className="max-w-3xl my-8 sm:my-12">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#1C3326] block mb-2">
            {dict.about_page.badge}
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-medium text-[#19201C] mb-6">
            {isEn ? 'About Kourawy' : 'À propos de Kourawy'}
          </h1>
          <p className="text-lg sm:text-xl font-serif italic text-[#1C3326] leading-relaxed mb-6">
            {isEn ? '“We believe that quality clothing should not be a luxury.”' : '« Nous croyons qu’un vêtement de qualité ne doit pas être inaccessible. »'}
          </p>
          <p className="text-sm sm:text-base text-[#5E6861] font-light leading-relaxed">
            {dict.about_page.p1}
          </p>
        </div>

        {/* Main Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6 text-xs sm:text-sm text-[#5E6861] leading-relaxed font-light">
            <h2 className="text-2xl font-serif font-medium text-[#19201C]">
              {isEn ? 'A direct response to West African climate & life' : 'Une réponse concrète aux réalités vestimentaires locales'}
            </h2>
            <p>
              {dict.about_page.p2}
            </p>
            <p>
              {isEn
                ? 'Kourawy was developed to bridge this gap. We refuse short cuts in textile crafting: we study every spinning process, neckline stitching, and yarn density to ensure our t-shirts, polo shirts, shirts, and trousers retain their beautiful original shape wash after wash.'
                : 'Kourawy a été imaginée pour combler cet écart. Nous refusons les raccourcis de confection : nous étudions chaque filature, chaque couture d’encolure et chaque résistance de fibre pour garantir que nos t-shirts, polos, chemises et pantalons gardent toute leur tenue au fil des semaines.'}
            </p>
            <div className="pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1C3326] mb-3">
                <MapPin className="w-4 h-4 text-[#1C3326]" />
                <span>{isEn ? 'Conakry Roots, Guinea' : 'Ancrage à Conakry, Guinée'}</span>
              </div>
              <p className="text-xs text-[#5E6861]">
                {isEn
                  ? 'Our design team is based in Conakry. This proximity allows us to design fits perfectly suited to the climate and daily life of our local environment.'
                  : 'Notre équipe est basée à Conakry. Cette proximité nous permet de concevoir des coupes parfaitement adaptées à l’hygrométrie et au quotidien de notre environnement.'}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-4/3 w-full bg-[#EFECE6] border border-[#E5E1D8] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop"
                alt={isEn ? 'Model wearing Kourawy signature clothing' : 'Modèle portant un vêtement de la marque Kourawy'}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter contrast-105"
              />
            </div>
          </div>
        </div>

        {/* L'Arbre Kourawy : Identité Visuelle */}
        <div className="bg-[#1C3326] text-[#FAF9F5] p-8 sm:p-12 mb-20 border border-[#284735] relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <div className="w-12 h-12 bg-[#284735] text-[#FAF9F5] rounded-xs flex items-center justify-center mb-6">
              <KourawyTreeSymbol className="w-8 h-8" />
            </div>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8FA597] block mb-2">
              {isEn ? 'Brand Identity' : 'Identité de Marque'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-medium text-white mb-4">
              {dict.about_page.tree_title}
            </h2>
            <p className="text-xs sm:text-sm text-[#D1D9D3] leading-relaxed font-light mb-6">
              {dict.about_page.tree_p1} {dict.about_page.tree_p2}
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-[#8FA597]">
              <span>{isEn ? '• Official signature emblem' : '• Symbole distinctif officiel'}</span>
              <span>{isEn ? '• Featured on our tags & packages' : '• Présent sur nos étiquettes et emballages'}</span>
              <span>{isEn ? '• Signature of authenticity' : '• Signature d’authenticité'}</span>
            </div>
          </div>
        </div>

        {/* Engagements Clairs */}
        <div className="mb-20">
          <div className="max-w-2xl mb-10">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#1C3326] block mb-2">
              {isEn ? 'Our Principles' : 'Nos Principes'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#19201C] mb-4">
              {isEn ? 'What guides every garment creation' : 'Ce qui guide chaque création'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#FAF9F5] border border-[#E5E1D8]">
              <div className="w-8 h-8 rounded-full bg-[#1C3326]/10 text-[#1C3326] flex items-center justify-center mb-4 text-xs font-semibold">
                01
              </div>
              <h3 className="text-lg font-serif font-medium text-[#19201C] mb-2">
                {isEn ? 'Comfort & Breathability' : 'Confort & Respirabilité'}
              </h3>
              <p className="text-xs text-[#5E6861] leading-relaxed font-light">
                {isEn
                  ? 'Natural fabrics that let air circulate freely, avoiding suffocating feelings or skin friction under the tropical sun.'
                  : 'Des matières naturelles qui laissent circuler l’air, évitant la sensation d’étouffement ou de frottement sur la peau tout au long de la journée.'}
              </p>
            </div>

            <div className="p-6 bg-[#FAF9F5] border border-[#E5E1D8]">
              <div className="w-8 h-8 rounded-full bg-[#1C3326]/10 text-[#1C3326] flex items-center justify-center mb-4 text-xs font-semibold">
                02
              </div>
              <h3 className="text-lg font-serif font-medium text-[#19201C] mb-2">
                {isEn ? 'Stitch & Neck Durability' : 'Durabilité des Coutures'}
              </h3>
              <p className="text-xs text-[#5E6861] leading-relaxed font-light">
                {isEn
                  ? 'Each piece is carefully designed to withstand dozens of laundry cycles without losing its original shape, twisting, or fading prematurely.'
                  : 'Chaque vêtement est pensé pour traverser des dizaines de cycles de lavage sans perdre sa forme d’origine, sans vriller et sans décolorer prématurément.'}
              </p>
            </div>

            <div className="p-6 bg-[#FAF9F5] border border-[#E5E1D8]">
              <div className="w-8 h-8 rounded-full bg-[#1C3326]/10 text-[#1C3326] flex items-center justify-center mb-4 text-xs font-semibold">
                03
              </div>
              <h3 className="text-lg font-serif font-medium text-[#19201C] mb-2">
                {isEn ? 'Fair & Direct Pricing' : 'Prix Accessible & Juste'}
              </h3>
              <p className="text-xs text-[#5E6861] leading-relaxed font-light">
                {isEn
                  ? 'By distributing our collections directly through our official mobile applications, we eliminate unfair middlemen markups.'
                  : 'En distribuant nos collections directement via nos applications mobiles, nous supprimons les marges intermédiaires injustifiées.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <AppDownloadBanner lang={lang} />
    </div>
  );
}
