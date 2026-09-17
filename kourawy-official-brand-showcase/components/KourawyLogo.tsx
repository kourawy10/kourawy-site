import React from 'react';
import Link from 'next/link';

interface KourawyLogoProps {
  className?: string;
  variant?: 'full' | 'symbol-only' | 'stacked';
  color?: 'default' | 'inverted' | 'forest';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  lang?: string;
}

export function KourawyTreeSymbol({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Rooted trunk and balanced organic canopy */}
      <path
        d="M50 86V50"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Lower leaves */}
      <path
        d="M50 52C42 43 32 40 27 44C22 47 22 55 28 58C35 62 44 57 50 52Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      <path
        d="M50 52C58 43 68 40 73 44C78 47 78 55 72 58C65 62 56 57 50 52Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      {/* Mid leaves */}
      <path
        d="M50 48C45 35 37 28 31 30C25 32 25 40 32 44C38 47 46 46 50 48Z"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      <path
        d="M50 48C55 35 63 28 69 30C75 32 75 40 68 44C62 47 54 46 50 48Z"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      {/* Top crown leaf */}
      <path
        d="M50 48C47 31 43 19 50 15C57 19 53 31 50 48Z"
        fill="currentColor"
        fillOpacity="0.25"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      {/* Subtle base root indicator */}
      <circle cx="50" cy="88" r="2.5" fill="currentColor" />
    </svg>
  );
}

export default function KourawyLogo({
  className = '',
  variant = 'full',
  color = 'default',
  size = 'md',
  lang = 'fr',
}: KourawyLogoProps) {
  const colorClasses = {
    default: 'text-[#19221C] hover:text-[#1C3326]',
    forest: 'text-[#1C3326]',
    inverted: 'text-[#FAF9F5] hover:text-[#FFFFFF]',
  }[color];

  const sizeConfigs = {
    sm: { symbol: 'w-6 h-6', text: 'text-base tracking-[0.2em]' },
    md: { symbol: 'w-7 h-7', text: 'text-lg tracking-[0.25em]' },
    lg: { symbol: 'w-9 h-9', text: 'text-xl tracking-[0.28em]' },
    xl: { symbol: 'w-12 h-12', text: 'text-2xl tracking-[0.3em]' },
  }[size];

  return (
    <Link
      href={`/${lang}`}
      id="kourawy-brand-logo"
      className={`inline-flex items-center gap-3 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1C3326]/30 focus:ring-offset-2 rounded-sm ${colorClasses} ${className}`}
      aria-label={lang === 'en' ? 'Kourawy — Back to home' : "Kourawy — Retour à l'accueil"}
    >
      <KourawyTreeSymbol className={sizeConfigs.symbol} />
      {variant !== 'symbol-only' && (
        <span
          className={`font-serif font-semibold uppercase leading-none ${sizeConfigs.text}`}
          style={{ fontFamily: 'var(--font-serif, "Cormorant Garamond", Georgia, serif)' }}
        >
          KOURAWY
        </span>
      )}
    </Link>
  );
}
