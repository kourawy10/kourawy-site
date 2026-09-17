import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import ArticleCard from '@/components/ArticleCard';
import { getLocalizedArticles } from '@/data/journal';
import AppDownloadBanner from '@/components/AppDownloadBanner';
import { siteConfig } from '@/config/site';
import { getDictionary } from '@/lib/i18n';

interface JournalPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: JournalPageProps): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === 'en';
  return {
    title: isEn ? 'Journal & Textile Advice — Kourawy Guinea' : 'Journal & Conseils Textiles — Kourawy Guinée',
    description: isEn
      ? 'Textile care advice, sizing guides, decoding cotton weight (GSM), and sustainable garment culture by Kourawy in Conakry.'
      : 'Conseils d’entretien textile, guides de taille, décryptage du grammage de coton et culture du vêtement durable par Kourawy à Conakry.',
    openGraph: {
      title: isEn ? 'Journal & Textile Advice | Kourawy' : 'Journal & Conseils Textiles | Kourawy',
      description: isEn
        ? 'Learn to recognize high-quality garments, understand cotton GSM, and preserve your clothes under tropical weather.'
        : 'Apprenez à reconnaître des vêtements durables, comprendre le coton GSM et préserver vos pièces sous climat tropical.',
      url: `${siteConfig.url}/${lang}/journal`,
    },
  };
}

export default async function JournalPage({ params }: JournalPageProps) {
  const { lang } = await params;
  const isEn = lang === 'en';
  const dict = getDictionary(lang);
  const articles = getLocalizedArticles(lang);

  const [featuredArticle, ...otherArticles] = articles;

  return (
    <div className="bg-[#FAF9F5] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: dict.nav.journal }]} lang={lang} />

        {/* Page Header */}
        <div className="max-w-3xl my-8 sm:my-12">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#1C3326] block mb-2">
            {isEn ? 'Chronicles & Sourcing Craft' : 'Chroniques & Savoir-Faire'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-medium text-[#19201C] mb-4">
            {isEn ? 'The Kourawy Journal' : 'Le Journal Kourawy'}
          </h1>
          <p className="text-sm sm:text-base text-[#5E6861] font-light leading-relaxed">
            {isEn
              ? 'Practical tips, fabric culture, and deep reflections on the contemporary wardrobe. We share our textile expertise to help you select, care for, and enjoy durable garments in Conakry.'
              : 'Conseils pratiques, culture des matières et réflexions sur le vestiaire contemporain. Nous partageons notre expertise pour vous aider à mieux choisir, entretenir et apprécier des vêtements durables à Conakry.'}
          </p>
        </div>

        {/* Featured First Article */}
        {featuredArticle && (
          <div className="mb-14">
            <ArticleCard article={featuredArticle} featured={true} lang={lang} />
          </div>
        )}

        {/* Other Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {otherArticles.map((article) => (
            <ArticleCard key={article.id} article={article} lang={lang} />
          ))}
        </div>
      </div>

      <AppDownloadBanner lang={lang} />
    </div>
  );
}
