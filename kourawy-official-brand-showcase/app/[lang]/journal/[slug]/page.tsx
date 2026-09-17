import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  Clock,
  Calendar,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ArticleCard from '@/components/ArticleCard';
import AppDownloadBanner from '@/components/AppDownloadBanner';
import ShareButtons from '@/components/ShareButtons';
import { journalArticles, getLocalizedArticles } from '@/data/journal';
import { siteConfig } from '@/config/site';
import { getDictionary } from '@/lib/i18n';

interface Props {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  const paths: Array<{ lang: string; slug: string }> = [];
  ['fr', 'en'].forEach((l) => {
    journalArticles.forEach((a) => {
      paths.push({
        lang: l,
        slug: a.slug,
      });
    });
  });
  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const isEn = lang === 'en';
  const articles = getLocalizedArticles(lang);
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return { title: isEn ? 'Article not found' : 'Article introuvable' };
  }

  return {
    title: article.seoTitle,
    description: article.metaDescription,
    openGraph: {
      title: article.seoTitle,
      description: article.metaDescription,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author.name],
      images: [
        {
          url: article.image,
          alt: article.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.seoTitle,
      description: article.metaDescription,
      images: [article.image],
    },
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { lang, slug } = await params;
  const isEn = lang === 'en';
  const dict = getDictionary(lang);
  
  const articles = getLocalizedArticles(lang);
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Get related articles (excluding the current one)
  const relatedArticles = articles.filter((a) => a.slug !== slug).slice(0, 2);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    image: article.image,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'Kourawy',
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/${lang}/journal/${article.slug}`,
    },
  };

  const getLocalizedHref = (path: string) => {
    if (path === '/') return `/${lang}`;
    return `/${lang}${path}`;
  };

  return (
    <div className="bg-[#FAF9F5] py-8 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: dict.nav.journal, href: '/journal' },
            { label: article.title },
          ]}
          lang={lang}
        />

        <div className="pt-2 pb-6">
          <Link
            href={getLocalizedHref('/journal')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1C3326] hover:text-[#0E1B13]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{isEn ? 'Back to Journal' : 'Retour au Journal'}</span>
          </Link>
        </div>

        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#7A867E] mb-3">
            <span className="px-2.5 py-1 bg-[#EAE5D9] text-[#1C3326] font-semibold rounded-xs uppercase tracking-wider">
              {article.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <time dateTime={article.publishedAt}>{article.publishedDateDisplay}</time>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-[#19201C] tracking-tight leading-tight mb-6">
            {article.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#5E6861] leading-relaxed font-serif italic pb-6 border-b border-[#E5E1D8]">
            {article.excerpt}
          </p>
        </header>

        <div className="relative aspect-16/9 w-full bg-[#EAE5D9] rounded-xs overflow-hidden mb-10 shadow-xs">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 800px"
            referrerPolicy="no-referrer"
            className="object-cover object-center"
          />
        </div>

        {article.keyTakeaways && article.keyTakeaways.length > 0 && (
          <div className="mb-10 p-6 bg-white border border-[#E5E1D8]">
            <h2 className="text-xs uppercase tracking-widest font-semibold text-[#1C3326] mb-3">
              {isEn ? 'Key Takeaways' : 'Ce qu’il faut retenir'}
            </h2>
            <ul className="space-y-2">
              {article.keyTakeaways.map((point, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5E6861] font-light">
                  <CheckCircle2 className="w-4 h-4 text-[#1C3326] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="space-y-6 text-[#19201C] text-sm sm:text-base leading-relaxed font-light">
          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#E5E1D8] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#7A867E] block">{isEn ? 'Written by' : 'Rédigé par'}</span>
            <p className="text-sm font-semibold text-[#19201C]">{article.author.name}</p>
            <p className="text-xs text-[#5E6861] font-light">{article.author.role}</p>
          </div>

          <div className="flex-1 max-w-md">
            <ShareButtons title={article.title} slug={article.slug} lang={lang} />
          </div>
        </div>
      </article>

      {relatedArticles.length > 0 && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-[#E5E1D8]">
          <h2 className="text-2xl font-serif font-medium text-[#19201C] mb-6">
            {isEn ? 'Further reading' : 'Poursuivre la lecture'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <ArticleCard key={rel.slug} article={rel} lang={lang} />
            ))}
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <AppDownloadBanner compact lang={lang} />
      </div>
    </div>
  );
}
