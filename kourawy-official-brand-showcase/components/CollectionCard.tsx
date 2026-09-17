'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Collection } from '@/data/collections';
import { ArrowRight } from 'lucide-react';

interface CollectionCardProps {
  collection: Collection;
  priority?: boolean;
  lang?: string;
}

export default function CollectionCard({ collection, priority = false, lang = 'fr' }: CollectionCardProps) {
  const isEn = lang === 'en';

  return (
    <article
      id={`collection-card-${collection.slug}`}
      className="group relative flex flex-col bg-[#FAF9F5] border border-[#E5E1D8] overflow-hidden transition-all duration-500 hover:shadow-lg hover:border-[#1C3326]/40"
    >
      <div className="relative aspect-[4/5] w-full bg-[#EFECE6] overflow-hidden">
        <Image
          src={collection.image}
          alt={collection.imageAlt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          referrerPolicy="no-referrer"
          className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111613]/80 via-[#111613]/10 to-transparent opacity-90 transition-opacity" />
        
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-block px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase bg-[#FAF9F5]/95 backdrop-blur-md text-[#19201C] rounded-none shadow-xs border border-[#E5E1D8]">
            {collection.itemCountLabel}
          </span>
        </div>

        <div className="absolute bottom-5 left-5 right-5 text-white z-10">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#FAF9F5]/85 font-bold block mb-1">
            {collection.subtitle}
          </span>
          <h3 className="text-xl font-serif font-medium text-white mb-0">
            {collection.title}
          </h3>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <p className="text-xs text-[#5E6861] leading-relaxed line-clamp-2 mb-4 font-light min-h-[36px]">
          {collection.description}
        </p>

        <div className="pt-3 border-t border-[#E5E1D8]/60 flex items-center justify-between">
          <Link
            href={`/${lang}/collections/${collection.slug}`}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#1C3326] uppercase tracking-widest group-hover:text-[#284735] transition-colors"
          >
            <span>{isEn ? 'Discover collection' : 'Découvrir la sélection'}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
