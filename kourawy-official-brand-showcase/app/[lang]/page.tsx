import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import { KourawyTreeSymbol } from '@/components/KourawyLogo';
import { AppCTAButton } from '@/components/CTA';
import CollectionCard from '@/components/CollectionCard';
import ProductShowcase from '@/components/ProductShowcase';
import QualityFeature from '@/components/QualityFeature';
import ArticleCard from '@/components/ArticleCard';
import AppDownloadBanner from '@/components/AppDownloadBanner';
import { getLocalizedCollections } from '@/data/collections';
import { getLocalizedProducts } from '@/data/products';
import { getLocalizedArticles } from '@/data/journal';
import { siteConfig } from '@/config/site';
import { ArrowRight, MessageSquare, Compass, Shield, Users, Award } from 'lucide-react';
import { getDictionary } from '@/lib/i18n';

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const isEn = lang === 'en';

  const allCollections = getLocalizedCollections(lang);
  const featuredProducts = getLocalizedProducts(lang).slice(0, 4);
  const highlightedArticles = getLocalizedArticles(lang).slice(0, 3);

  const getLocalizedHref = (path: string) => {
    if (path === '/') return `/${lang}`;
    return `/${lang}${path}`;
  };

  // Extract core visual collections (Homme & Femme) for the primary split screen block
  const collectionHomme = allCollections.find((c) => c.slug === 'collection-homme');
  const collectionFemme = allCollections.find((c) => c.slug === 'collection-femme');
  // Extract item categories for the secondary collection strip
  const categoriesList = allCollections.filter((c) => 
    ['t-shirts', 'polos', 'chemises', 'pantalons'].includes(c.slug)
  );

  return (
    <div className="flex flex-col bg-[#FAF9F5]">
      {/* 1. CINEMATIC HERO SECTION */}
      <Hero lang={lang} />

      {/* 2. BRAND INTRODUCTION & PHILOSOPHY */}
      <section id="notre-vision" className="py-24 sm:py-28 bg-[#FAF9F5] border-b border-[#E5E1D8]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#1C3326] block mb-3">
              {dict.philosophy.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-[#19201C] mb-6 leading-tight">
              {dict.philosophy.title}
            </h2>
            <div className="w-12 h-px bg-[#1C3326]/30 mx-auto mb-6" />
            <p className="text-sm sm:text-base text-[#5E6861] leading-relaxed font-light max-w-2xl mx-auto">
              {dict.philosophy.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white border border-[#E5E1D8]/60 hover:border-[#1C3326]/20 transition-all duration-300">
              <span className="text-xs font-mono text-[#1C3326]/40 block mb-3 font-semibold">01 / QUALITY</span>
              <h3 className="font-serif font-medium text-lg text-[#19201C] mb-2">{dict.philosophy.card1_title}</h3>
              <p className="text-xs text-[#5E6861] leading-relaxed font-light">{dict.philosophy.card1_desc}</p>
            </div>
            <div className="p-6 bg-white border border-[#E5E1D8]/60 hover:border-[#1C3326]/20 transition-all duration-300">
              <span className="text-xs font-mono text-[#1C3326]/40 block mb-3 font-semibold">02 / ENVIRONMENT</span>
              <h3 className="font-serif font-medium text-lg text-[#19201C] mb-2">{dict.philosophy.card2_title}</h3>
              <p className="text-xs text-[#5E6861] leading-relaxed font-light">{dict.philosophy.card2_desc}</p>
            </div>
            <div className="p-6 bg-white border border-[#E5E1D8]/60 hover:border-[#1C3326]/20 transition-all duration-300">
              <span className="text-xs font-mono text-[#1C3326]/40 block mb-3 font-semibold">03 / STABILITY</span>
              <h3 className="font-serif font-medium text-lg text-[#19201C] mb-2">{dict.philosophy.card3_title}</h3>
              <p className="text-xs text-[#5E6861] leading-relaxed font-light">{dict.philosophy.card3_desc}</p>
            </div>
            <div className="p-6 bg-white border border-[#E5E1D8]/60 hover:border-[#1C3326]/20 transition-all duration-300">
              <span className="text-xs font-mono text-[#1C3326]/40 block mb-3 font-semibold">04 / ACCESS</span>
              <h3 className="font-serif font-medium text-lg text-[#19201C] mb-2">{dict.philosophy.card4_title}</h3>
              <p className="text-xs text-[#5E6861] leading-relaxed font-light">{dict.philosophy.card4_desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PREMIUM CAMPAIGN COLLECTIONS */}
      <section id="collections-en-vedette" className="py-24 sm:py-28 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#1C3326] block mb-2">
                {isEn ? 'Campaign Curation' : 'Sélection Campagne'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#19201C]">
                {isEn ? 'The Permanent Lines' : 'Les Collections Permanentes'}
              </h2>
            </div>
            <Link
              href={getLocalizedHref('/collections')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1C3326] hover:text-[#284735] transition-colors pb-1 border-b border-[#1C3326]/10 hover:border-[#1C3326]"
            >
              <span>{isEn ? 'Explore All Lines' : 'Découvrir tout le vestiaire'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Large Editorial Side-by-Side Campaigns featuring our beautiful Black models */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 mb-20">
            {collectionHomme && (
              <div className="group flex flex-col bg-white border border-[#E5E1D8]/70 overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-[#1C3326]/30">
                <div className="relative aspect-[3/4] w-full bg-[#EFECE6] overflow-hidden">
                  <Image
                    src={collectionHomme.image}
                    alt={collectionHomme.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    referrerPolicy="no-referrer"
                    className="object-cover object-center transition-transform duration-[1500ms] ease-out group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-85" />
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#8FA597] font-bold block mb-1">
                      {collectionHomme.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-medium text-white mb-3">
                      {collectionHomme.title}
                    </h3>
                    <p className="text-xs text-white/80 font-light leading-relaxed max-w-sm mb-5">
                      {collectionHomme.description}
                    </p>
                    <Link
                      href={getLocalizedHref(`/collections/${collectionHomme.slug}`)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-white hover:text-[#8FA597] transition-all group/btn"
                    >
                      <span>{isEn ? 'Discover Line' : 'Explorer la ligne'}</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {collectionFemme && (
              <div className="group flex flex-col bg-white border border-[#E5E1D8]/70 overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-[#1C3326]/30">
                <div className="relative aspect-[3/4] w-full bg-[#EFECE6] overflow-hidden">
                  <Image
                    src={collectionFemme.image}
                    alt={collectionFemme.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    referrerPolicy="no-referrer"
                    className="object-cover object-center transition-transform duration-[1500ms] ease-out group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-85" />
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#8FA597] font-bold block mb-1">
                      {collectionFemme.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-medium text-white mb-3">
                      {collectionFemme.title}
                    </h3>
                    <p className="text-xs text-white/80 font-light leading-relaxed max-w-sm mb-5">
                      {collectionFemme.description}
                    </p>
                    <Link
                      href={getLocalizedHref(`/collections/${collectionFemme.slug}`)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-white hover:text-[#8FA597] transition-all group/btn"
                    >
                      <span>{isEn ? 'Discover Line' : 'Explorer la ligne'}</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Secondary Categories display strip */}
          <div className="border-t border-[#E5E1D8]/70 pt-16">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#5E6861] font-bold mb-8 text-center">
              {isEn ? 'Shop by Apparel Category' : 'Rechercher par catégorie de vêtements'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categoriesList.map((collection) => (
                <CollectionCard
                  key={collection.id}
                  collection={collection}
                  lang={lang}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE KOURAWY STANDARD (SPLIT SCREEN PREMIUM QUALITY SECTION) */}
      <section id="la-qualite-avant-tout" className="py-24 sm:py-32 bg-[#EFECE6]/40 border-y border-[#E5E1D8]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Beautiful garment close-up showing fine craftsmanship details */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/5] w-full bg-[#FAF9F5] border border-[#E5E1D8] shadow-lg overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=85&w=1200&auto=format&fit=crop"
                  alt={isEn ? 'Kourawy neat stitching and fabric details' : 'Coutures soignées et matières Kourawy'}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  referrerPolicy="no-referrer"
                  className="object-cover object-center transition-transform duration-[2000ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#8FA597] font-bold block mb-1">
                    {isEn ? 'Textile Precision' : 'Précision Textile'}
                  </span>
                  <p className="text-xs font-serif italic text-white/90">
                    {isEn ? 'Every stitch has a functional purpose.' : 'Chaque point de couture a un but fonctionnel.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: The storytelling detailing four quality pillars */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#1C3326] block mb-3">
                {dict.quality_teaser.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#19201C] mb-6 leading-tight">
                {isEn ? 'The Kourawy Standard' : 'Le Standard Kourawy'}
              </h2>
              <p className="text-sm text-[#5E6861] leading-relaxed font-light mb-10">
                {dict.quality_teaser.subtitle}
              </p>

              {/* Pillars with custom structured design */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 shrink-0 bg-[#1C3326]/5 text-[#1C3326] flex items-center justify-center font-serif text-sm font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="text-base font-serif font-medium text-[#19201C] mb-1">
                      {dict.quality_teaser.p1_title}
                    </h4>
                    <p className="text-xs text-[#5E6861] leading-relaxed font-light">
                      {dict.quality_teaser.p1_desc}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 shrink-0 bg-[#1C3326]/5 text-[#1C3326] flex items-center justify-center font-serif text-sm font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="text-base font-serif font-medium text-[#19201C] mb-1">
                      {dict.quality_teaser.p2_title}
                    </h4>
                    <p className="text-xs text-[#5E6861] leading-relaxed font-light">
                      {dict.quality_teaser.p2_desc}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 shrink-0 bg-[#1C3326]/5 text-[#1C3326] flex items-center justify-center font-serif text-sm font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="text-base font-serif font-medium text-[#19201C] mb-1">
                      {dict.quality_teaser.p3_title}
                    </h4>
                    <p className="text-xs text-[#5E6861] leading-relaxed font-light">
                      {dict.quality_teaser.p3_desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-[#E5E1D8] text-left">
                <Link
                  href={getLocalizedHref('/quality')}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1C3326] hover:underline underline-offset-4"
                >
                  <span>{dict.quality_teaser.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. AFRICAN IDENTITY SECTION ("PENSÉ EN GUINÉE. OUVERT SUR LE MONDE.") */}
      <section className="py-24 sm:py-32 bg-[#FAF9F5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: The Slogan and description of identity */}
            <div className="lg:col-span-6 lg:order-2">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#1C3326] block mb-3">
                {isEn ? 'Contemporary Heritage' : 'Héritage Contemporain'}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-[#19201C] mb-6 leading-tight">
                {isEn ? 'Designed in Guinea. Open to the world.' : 'Pensé en Guinée. Ouvert sur le monde.'}
              </h2>
              <div className="w-12 h-px bg-[#1C3326]/30 mb-8" />
              
              <p className="text-sm sm:text-base text-[#5E6861] leading-relaxed font-light mb-6">
                {isEn
                  ? "Kourawy is a brand born in Guinea, with the deep ambition to offer a new vision of everyday wear: modern, accessible, and uncompromising on quality. Our clothing represents a meeting point between the thermal requirements of West Africa and international aesthetic standards."
                  : "Kourawy est une marque née en Guinée, avec l'ambition profonde de proposer une nouvelle vision du vêtement du quotidien : moderne, accessible et attentive à la qualité. Nos pièces représentent un point de rencontre entre les exigences thermiques de l'Afrique de l'Ouest et les exigences esthétiques internationales."}
              </p>
              
              <p className="text-xs sm:text-sm text-[#5E6861] leading-relaxed font-light italic mb-8 border-l border-[#1C3326]/40 pl-4">
                {isEn
                  ? "“We design for the active walk under the sun, the structured business days, and the freshness of the evening. This brand is conceived by us, for us.”"
                  : "« Nous concevons pour la marche active sous le soleil, les journées professionnelles rythmées et la fraîcheur du soir. Un vestiaire pensé pour nous, par nous. »"}
              </p>

              <div className="flex gap-4">
                <Link
                  href={getLocalizedHref('/about')}
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#1C3326] text-white text-xs font-semibold uppercase tracking-widest hover:bg-[#284735] transition-colors shadow-xs"
                >
                  {isEn ? 'Our Story' : 'Notre histoire'}
                </Link>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-[#1C3326]/20 text-[#1C3326] text-xs font-semibold uppercase tracking-widest hover:border-[#1C3326] transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right: Stunning authentic photo of Black model outdoors in warm light */}
            <div className="lg:col-span-6 lg:order-1">
              <div className="relative aspect-[4/5] w-full bg-[#EFECE6] border border-[#E5E1D8] shadow-xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=85&w=1200&auto=format&fit=crop"
                  alt={isEn ? 'Kourawy natural elegant styling in Conakry' : 'L’élégance naturelle Kourawy sous le soleil'}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  referrerPolicy="no-referrer"
                  className="object-cover object-center transition-transform duration-[2000ms] group-hover:scale-103"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. REFINED EDITORIAL PRODUCT SHOWCASE */}
      <section id="selection-produits" className="py-24 sm:py-28 bg-white border-t border-[#E5E1D8]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#1C3326] block mb-2">
                {isEn ? 'Piece Previews' : 'Aperçu des pièces'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#19201C] mb-2">
                {isEn ? 'The Iconic Essentials' : 'Les Essentiels Iconiques'}
              </h2>
              <p className="text-xs text-[#5E6861] font-light max-w-lg">
                {isEn
                  ? 'High-precision garments configured as examples of our expertise. Discover colors, sizes, and place orders directly on the Kourawy mobile app.'
                  : 'Des pièces ajustées avec soin à titre d’exemple de notre savoir-faire. Découvrez les nuances, tailles et commandez directement sur l’application Kourawy.'}
              </p>
            </div>
            <AppCTAButton
              variant="outline"
              size="sm"
              className="border-[#1C3326]/30 text-[#1C3326] hover:bg-[#1C3326] hover:text-white transition-all font-semibold uppercase tracking-wider text-xs py-3"
              label={isEn ? 'Access Full Catalogue' : 'Accéder au catalogue complet'}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, idx) => (
              <ProductShowcase
                key={product.id}
                product={product}
                priority={idx < 2}
                lang={lang}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. BRAND STORY & TREE SYMBOL */}
      <section id="notre-histoire" className="py-24 sm:py-32 bg-[#1C3326] text-[#FAF9F5] relative overflow-hidden">
        {/* Organic Watermark background */}
        <div className="absolute -right-24 -bottom-24 opacity-5 pointer-events-none text-white">
          <KourawyTreeSymbol className="w-[500px] h-[500px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="w-12 h-12 bg-[#284735] text-[#FAF9F5] flex items-center justify-center mb-6 border border-white/5 shadow-inner">
                <KourawyTreeSymbol className="w-8 h-8" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#8FA597] block mb-3">
                {dict.history_teaser.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-white mb-6 leading-tight">
                {dict.history_teaser.title}
              </h2>
              
              <blockquote className="border-l-2 border-[#8FA597] pl-4 italic text-lg sm:text-xl font-serif text-[#FAF9F5]/90 mb-8 max-w-xl">
                {isEn ? '“We believe that quality clothing should not be a luxury.”' : '« Nous croyons qu’un vêtement de qualité ne doit pas être inaccessible. »'}
              </blockquote>
              
              <p className="text-sm text-[#FAF9F5]/80 leading-relaxed font-light mb-8 max-w-xl">
                {dict.history_teaser.desc1} {dict.history_teaser.desc2}
              </p>
              
              <Link
                href={getLocalizedHref('/about')}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-[#8FA597] transition-all group"
              >
                <span>{dict.history_teaser.cta}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right side: Portrait shot of beautiful Black male model in a clean warm light environment */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full bg-[#284735] overflow-hidden border border-white/10 shadow-2xl group">
                <Image
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=85&w=1200&auto=format&fit=crop"
                  alt={isEn ? 'Timeless Kourawy portrait campaign' : 'Portrait intemporel de la campagne Kourawy'}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  referrerPolicy="no-referrer"
                  className="object-cover object-center transition-transform duration-[2000ms] group-hover:scale-103"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. THE KOURAWY JOURNAL HIGHLIGHTS */}
      <section id="journal-kourawy" className="py-24 sm:py-28 bg-[#FAF9F5] border-b border-[#E5E1D8]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#1C3326] block mb-2">
                {isEn ? 'The Textile Chronicles' : 'Les Chroniques Textiles'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#19201C]">
                {isEn ? 'Clothing Culture & Advice' : 'Culture du vêtement & conseils'}
              </h2>
            </div>
            <Link
              href={getLocalizedHref('/journal')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1C3326] hover:text-[#284735] transition-colors pb-1 border-b border-[#1C3326]/10 hover:border-[#1C3326]"
            >
              <span>{isEn ? 'Read All Articles' : 'Lire tous les articles'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlightedArticles.map((article) => (
              <ArticleCard key={article.id} article={article} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. COMMERCE LAYER: MOBILE APP DOWNLOAD */}
      <AppDownloadBanner lang={lang} />

      {/* 10. CONTACT, PARTNERS & SUPPORT */}
      <section id="contact-partenariats" className="py-20 sm:py-24 bg-[#EFECE6]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            <div className="p-8 sm:p-10 bg-white border border-[#E5E1D8]/70 flex flex-col justify-between">
              <div>
                <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-[#1C3326] block mb-2">
                  {isEn ? 'Direct Dialogue' : 'Échange direct'}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#19201C] mb-4">
                  {dict.contact_page.form_title} ?
                </h3>
                <p className="text-xs sm:text-sm text-[#5E6861] leading-relaxed font-light mb-8">
                  {isEn
                    ? 'Based in Conakry, we answer with care all your inquiries regarding cuts, availability, or care tips.'
                    : 'Basés à Conakry, nous répondons avec attention à toutes vos interrogations relatives aux coupes, disponibilités ou conseils d’entretien.'}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={getLocalizedHref('/contact')}
                  className="px-6 py-3 bg-[#1C3326] text-white text-xs font-semibold uppercase tracking-widest hover:bg-[#284735] transition-colors"
                >
                  {dict.contact_page.form_title}
                </Link>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-[#1C3326]/30 text-[#1C3326] text-xs font-semibold uppercase tracking-widest hover:bg-[#1C3326] hover:text-white transition-all flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  WhatsApp ({siteConfig.contact.phoneDisplay})
                </a>
              </div>
            </div>

            <div className="p-8 sm:p-10 bg-white border border-[#E5E1D8]/70 flex flex-col justify-between">
              <div>
                <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-[#1C3326] block mb-2">
                  {isEn ? 'Sourcing & Production' : 'Sourcing & Ateliers'}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#19201C] mb-4">
                  {dict.partners_page.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5E6861] leading-relaxed font-light mb-8">
                  {isEn
                    ? 'Are you a textile manufacturer, sewing workshop, or logistics partner sharing our standards of rigor and durability?'
                    : 'Vous êtes fabricant de textiles, atelier de confection ou partenaire logistique partageant nos exigences de rigueur et de durabilité ?'}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E1D8]/60">
                <Link
                  href={getLocalizedHref('/partners')}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1C3326] hover:text-[#284735] group"
                >
                  <span>{isEn ? 'Explore Partnerships' : 'Espace partenaires'}</span>
                  <span className="text-[#5E6861]/70 font-mono font-normal">({siteConfig.contact.sourcingEmail})</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
