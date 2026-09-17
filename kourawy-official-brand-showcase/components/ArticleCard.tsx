import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { JournalArticle } from '@/data/journal';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  article: JournalArticle;
  featured?: boolean;
  lang?: string;
}

export default function ArticleCard({ article, featured = false, lang = 'fr' }: ArticleCardProps) {
  const isEn = lang === 'en';

  return (
    <article
      id={`article-card-${article.slug}`}
      className={`group bg-[#FAF9F5] border border-[#E5E1D8] overflow-hidden flex flex-col transition-all duration-300 hover:border-[#1C3326]/50 ${
        featured ? 'md:grid md:grid-cols-12 md:gap-6 items-center' : ''
      }`}
    >
      <div
        className={`relative aspect-16/10 w-full bg-[#EFECE6] overflow-hidden ${
          featured ? 'md:col-span-6 md:aspect-4/3' : ''
        }`}
      >
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-103"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-block px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider bg-[#1C3326] text-[#FAF9F5]">
            {article.category}
          </span>
        </div>
      </div>

      <div className={`p-6 flex-1 flex flex-col justify-between ${featured ? 'md:col-span-6 md:p-8' : ''}`}>
        <div>
          <div className="flex items-center gap-4 text-xs text-[#5E6861] mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#1C3326]" />
              {article.publishedDateDisplay}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#1C3326]" />
              {article.readTime}
            </span>
          </div>

          <h3
            className={`font-serif font-medium text-[#19201C] group-hover:text-[#1C3326] transition-colors mb-2 leading-tight ${
              featured ? 'text-2xl sm:text-3xl' : 'text-xl'
            }`}
          >
            <Link href={`/${lang}/journal/${article.slug}`}>
              {article.title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-[#5E6861] leading-relaxed mb-4 font-light">
            {article.excerpt}
          </p>
        </div>

        <div className="pt-4 border-t border-[#E5E1D8]/70 flex items-center justify-between">
          <span className="text-xs text-[#5E6861]">
            {isEn ? 'By' : 'Par'} {article.author.name}
          </span>

          <Link
            href={`/${lang}/journal/${article.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#1C3326] group-hover:text-[#284735] uppercase tracking-wider"
          >
            <span>{isEn ? 'Read article' : 'Lire l’article'}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
