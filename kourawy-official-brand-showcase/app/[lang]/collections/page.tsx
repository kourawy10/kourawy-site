import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import CollectionCard from '@/components/CollectionCard';
import { getLocalizedCollections } from '@/data/collections';
import { AppCTAButton } from '@/components/CTA';
import AppDownloadBanner from '@/components/AppDownloadBanner';
import { siteConfig } from '@/config/site';
import { getDictionary } from '@/lib/i18n';

interface CollectionsPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: CollectionsPageProps): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === 'en';
  return {
    title: isEn ? 'Collections & Essential Wardrobe' : 'Collections & Vestiaire Essentiel',
    description: isEn
      ? 'Discover Kourawy clothing collections: t-shirts, polo shirts, shirts, pants, and timeless pieces designed for daily life in Conakry.'
      : 'Découvrez les collections de vêtements Kourawy : t-shirts, polos, chemises, pantalons et pièces intemporelles conçues pour le quotidien à Conakry.',
    openGraph: {
      title: isEn ? 'Kourawy Collections — Quality for everyday life' : 'Collections Kourawy — La qualité au quotidien',
      description: isEn
        ? 'Browse our permanent lines for men and women. All purchases are handled exclusively through our official Kourawy mobile app.'
        : 'Parcourez nos lignes permanentes pour homme et femme. Les achats s’effectuent exclusivement sur l’application officielle Kourawy.',
      url: `${siteConfig.url}/${lang}/collections`,
    },
  };
}

export default async function CollectionsPage({ params }: CollectionsPageProps) {
  const { lang } = await params;
  const isEn = lang === 'en';
  const dict = getDictionary(lang);
  const collections = getLocalizedCollections(lang);

  return (
    <div className="bg-[#FAF9F5] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: dict.nav.collections }]} lang={lang} />

        {/* Page Header */}
        <div className="max-w-3xl my-8 sm:my-12">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#1C3326] block mb-2">
            {dict.collections_page.badge}
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-medium text-[#19201C] mb-4">
            {dict.nav.collections}
          </h1>
          <p className="text-sm sm:text-base text-[#5E6861] font-light leading-relaxed mb-6">
            {dict.collections_page.subtitle}
          </p>

          <div className="p-4 bg-[#EFECE6]/70 border-l-2 border-[#1C3326] text-xs text-[#5E6861] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span>
              <strong className="text-[#19201C] font-semibold">{isEn ? 'Important Note:' : 'Note importante :'}</strong>{' '}
              {isEn
                ? 'Kourawy presents its clothes here for showcase purposes. All size selections, purchases, and home deliveries are handled exclusively on our official mobile app.'
                : 'Kourawy présente ses pièces ici à titre de découverte. L’ensemble des commandes, choix des tailles et livraisons s’effectuent via notre application mobile.'}
            </span>
            <AppCTAButton
              size="sm"
              variant="outline"
              label={isEn ? 'Open Application' : 'Ouvrir l’application'}
            />
          </div>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {collections.map((collection, idx) => (
            <CollectionCard
              key={collection.id}
              collection={collection}
              priority={idx < 3}
              lang={lang}
            />
          ))}
        </div>
      </div>

      <AppDownloadBanner lang={lang} />
    </div>
  );
}
