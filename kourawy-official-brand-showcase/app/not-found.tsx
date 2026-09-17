import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Compass } from 'lucide-react';
import { KourawyTreeSymbol } from '@/components/KourawyLogo';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-24 pb-16 px-4 bg-[#FAF9F5]">
      <div className="max-w-md w-full text-center p-8 bg-white border border-[#E7E2D6] rounded-xs shadow-xs">
        <div className="w-14 h-14 bg-[#F2EFE8] text-[#1C3326] rounded-full flex items-center justify-center mx-auto mb-6">
          <KourawyTreeSymbol className="w-8 h-8" />
        </div>

        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#7D8880] mb-2 block">
          Erreur 404
        </span>

        <h1
          className="text-3xl font-serif font-bold text-[#142318] mb-3"
          style={{ fontFamily: 'var(--font-serif, "Cormorant Garamond", Georgia, serif)' }}
        >
          Page introuvable
        </h1>

        <p className="text-sm text-[#525E55] mb-8 leading-relaxed">
          La page que vous recherchez n’existe pas ou a été déplacée. Vous pouvez retourner à
          l’accueil ou explorer notre catalogue de collections.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1C3326] text-white text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#14261B] transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Accueil</span>
          </Link>

          <Link
            href="/collections"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-[#1C3326]/30 text-[#1C3326] text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#F2EFE8] transition-colors"
          >
            <Compass className="w-4 h-4" />
            <span>Nos Collections</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
