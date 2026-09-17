import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductShowcase from '@/components/ProductShowcase';
import { collectionsData, getLocalizedCollections } from '@/data/collections';
import { getLocalizedProducts } from '@/data/products';
import { AppCTAButton } from '@/components/CTA';
import AppDownloadBanner from '@/components/AppDownloadBanner';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import { ArrowLeft, Smartphone, ShieldCheck } from 'lucide-react';
import { getDictionary } from '@/lib/i18n';

interface CollectionDetailPageProps {
  params: Promise<{
    lang: string;
    collection: string;
  }>;
}

export async function generateStaticParams() {
  const paths: Array<{ lang: string; collection: string }> = [];
  ['fr', 'en'].forEach((l) => {
    collectionsData.forEach((c) => {
      paths.push({
        lang: l,
        collection: c.slug,
      });
    });
  });
  return paths;
}

export async function generateMetadata({
  params,
}: CollectionDetailPageProps): Promise<Metadata> {
  const { lang, collection: slug } = await params;
  const isEn = lang === 'en';
  const collection = getLocalizedCollections(lang).find((c) => c.slug === slug);

  if (!collection) {
    return {
      title: isEn ? 'Collection not found | Kourawy' : 'Collection introuvable | Kourawy',
    };
  }

  return {
    title: `${collection.title} — ${collection.subtitle}`,
    description: `${collection.description} ${isEn ? `Discover the ${collection.title} line by Kourawy in Conakry.` : `Découvrez la ligne ${collection.title} de Kourawy à Conakry.`}`,
    openGraph: {
      title: `${collection.title} | Kourawy ${isEn ? 'Guinea' : 'Guinée'}`,
      description: collection.description,
      url: `${siteConfig.url}/${lang}/collections/${collection.slug}`,
      images: [{ url: collection.image, alt: collection.imageAlt }],
    },
  };
}

export default async function CollectionDetailPage({
  params,
}: CollectionDetailPageProps) {
  const { lang, collection: slug } = await params;
  const isEn = lang === 'en';
  const dict = getDictionary(lang);
  
  const collections = getLocalizedCollections(lang);
  const collection = collections.find((c) => c.slug === slug);

  if (!collection) {
    notFound();
  }

  // Retrieve products in this collection
  let products = getLocalizedProducts(lang).filter(
    (p) => p.slug.startsWith(slug) || p.collectionName.toLowerCase().includes(collection.title.toLowerCase())
  );
  
  if (products.length === 0) {
    // Show sample representative pieces
    products = getLocalizedProducts(lang).slice(0, 3);
  }

  const getLocalizedHref = (path: string) => {
    if (path === '/') return `/${lang}`;
    return `/${lang}${path}`;
  };

  return (
    <div className="bg-[#FAF9F5] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: dict.nav.collections, href: '/collections' },
            { label: collection.title },
          ]}
          lang={lang}
        />

        {/* Back Link */}
        <div className="pt-2 pb-6">
          <Link
            href={getLocalizedHref('/collections')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#5E6861] hover:text-[#1C3326] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{isEn ? 'All Collections' : 'Toutes les collections'}</span>
          </Link>
        </div>

        {/* Collection Header Banner */}
        <div className="bg-[#EFECE6]/50 border border-[#E5E1D8] p-6 sm:p-10 mb-12">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#1C3326] block mb-2">
              {isEn ? 'Line' : 'Ligne'} {collection.subtitle}
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-medium text-[#19201C] mb-4">
              {collection.title}
            </h1>
            <p className="text-sm sm:text-base text-[#5E6861] leading-relaxed font-light mb-6">
              {collection.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs">
              <div className="flex items-center gap-1.5 text-[#1C3326]">
                <ShieldCheck className="w-4 h-4" />
                <span className="font-medium">{isEn ? 'Breathable & durable materials' : 'Matières respirantes & durables'}</span>
              </div>
              <span className="text-[#A5AEA8]">•</span>
              <div className="flex items-center gap-1.5 text-[#5E6861]">
                <Smartphone className="w-4 h-4 text-[#1C3326]" />
                <span>{isEn ? 'Orders on mobile application' : 'Commandes sur l’application mobile'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Product Showcase Grid */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-[#E5E1D8] gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-medium text-[#19201C]">
                {isEn ? 'Models in selection' : 'Modèles de la sélection'}
              </h2>
              <p className="text-xs text-[#5E6861] mt-0.5">
                {isEn
                  ? 'Editorial Showcase — garments are available for order on the Kourawy application.'
                  : 'Vitrine éditoriale — les pièces sont disponibles à la commande sur l’application Kourawy.'}
              </p>
            </div>

            <AppCTAButton
              variant="primary"
              size="sm"
              label={isEn ? 'Order on the Application' : 'Commander sur l’application'}
              productContext={collection.title}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <ProductShowcase
                key={product.id}
                product={product}
                priority={idx < 2}
                lang={lang}
              />
            ))}
          </div>
        </div>
      </div>

      <AppDownloadBanner lang={lang} />
    </div>
  );
}
