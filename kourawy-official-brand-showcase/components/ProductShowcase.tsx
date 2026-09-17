'use client';

import React from 'react';
import Image from 'next/image';
import { Product } from '@/data/products';
import { AppCTAButton } from './CTA';
import { Sparkles, Check, ShieldCheck } from 'lucide-react';

interface ProductShowcaseProps {
  product: Product;
  priority?: boolean;
  lang?: string;
}

export default function ProductShowcase({ product, priority = false, lang = 'fr' }: ProductShowcaseProps) {
  const isEn = lang === 'en';

  return (
    <article
      id={`product-showcase-${product.slug}`}
      className="group bg-[#FAF9F5] border border-[#E5E1D8] flex flex-col justify-between overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-[#1C3326]/40"
    >
      <div>
        {/* Product Visual Container */}
        <div className="relative aspect-4/5 w-full bg-[#EFECE6] overflow-hidden">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            referrerPolicy="no-referrer"
            className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          
          {/* New Arrival Badge */}
          {product.isNew && (
            <div className="absolute top-3 left-3 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] bg-[#1C3326] text-[#FAF9F5] border border-white/10">
                <Sparkles className="w-2.5 h-2.5 text-[#8FA597]" />
                {isEn ? 'New' : 'Nouveau'}
              </span>
            </div>
          )}

          {/* Quick Info Overlay */}
          <div className="absolute bottom-3 right-3 z-10 opacity-90 transition-opacity group-hover:opacity-100">
            <span className="inline-block px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider bg-[#FAF9F5]/95 backdrop-blur-md text-[#19201C] rounded-none border border-[#E5E1D8]">
              {isEn ? 'On App' : 'Sur l’App'}
            </span>
          </div>
        </div>

        {/* Product Metadata */}
        <div className="p-6">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#5E6861] font-bold block mb-1">
            {product.collectionName}
          </span>
          <h3 className="text-base sm:text-lg font-serif font-medium text-[#19201C] leading-snug group-hover:text-[#1C3326] transition-colors mb-2">
            {product.name}
          </h3>
          <p className="text-xs text-[#5E6861] leading-relaxed mb-4 font-light min-h-[36px]">
            {product.shortDescription}
          </p>

          {/* Sourcing Specifications with Fine Lines */}
          <div className="space-y-2 pt-3 border-t border-[#E5E1D8] text-xs">
            <div className="flex items-start gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1C3326]/70 shrink-0 mt-0.5" />
              <span className="text-[11px] text-[#5E6861] leading-tight">
                <strong className="text-[#19201C] font-semibold">{isEn ? 'Material:' : 'Matière :'}</strong> {product.materialDetails}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-[#1C3326]/70 shrink-0 mt-0.5" />
              <span className="text-[11px] text-[#5E6861] leading-tight">
                <strong className="text-[#19201C] font-semibold">{isEn ? 'Fit:' : 'Coupe :'}</strong> {product.fitDetails}
              </span>
            </div>
          </div>

          {/* Colorways */}
          {product.colors && product.colors.length > 0 && (
            <div className="mt-4 pt-3 border-t border-[#E5E1D8]/60">
              <span className="text-[10px] uppercase tracking-widest text-[#5E6861] font-semibold block mb-2">
                {isEn ? 'Colorways' : 'Teintes'}
              </span>
              <div className="flex items-center gap-2">
                {product.colors.map((color) => (
                  <div
                    key={color.name}
                    title={color.name}
                    className="w-5 h-5 rounded-full border border-[#D5D0C5] p-0.5 cursor-pointer hover:scale-110 transition-transform"
                  >
                    <div
                      className="w-full h-full rounded-full"
                      style={{ backgroundColor: color.hex }}
                    />
                  </div>
                ))}
                <span className="text-[10px] tracking-wide text-[#5E6861] ml-1 font-semibold uppercase">
                  {product.colors.length} {isEn ? 'shades' : 'coloris'}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Styled CTA Action button */}
      <div className="p-6 pt-0">
        <AppCTAButton
          variant="outline"
          size="sm"
          className="w-full justify-center border-[#1C3326]/20 text-[#1C3326] hover:bg-[#1C3326] hover:text-white transition-all duration-300 font-semibold text-[11px] tracking-widest uppercase rounded-none py-3"
          label={isEn ? 'Buy on Kourawy App' : 'Commander sur l’application'}
          productContext={product.name}
        />
      </div>
    </article>
  );
}
