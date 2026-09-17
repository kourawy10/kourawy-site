import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  name?: string;
  label?: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  lang?: string;
}

export default function Breadcrumbs({ items, lang = 'fr' }: BreadcrumbsProps) {
  const isEn = lang === 'en';
  const homeLabel = isEn ? 'Home' : 'Accueil';

  const getLocalizedHref = (path: string) => {
    if (!path) return '';
    if (path === '/') return `/${lang}`;
    if (path.startsWith(`/${lang}`)) return path;
    return `/${lang}${path}`;
  };

  const schemaItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: homeLabel,
      item: `https://kourawy.store/${lang}`,
    },
    ...items.map((item, index) => {
      const itemTitle = item.name || item.label || '';
      return {
        '@type': 'ListItem',
        position: index + 2,
        name: itemTitle,
        item: item.href ? `https://kourawy.store${getLocalizedHref(item.href)}` : undefined,
      };
    }),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: schemaItems,
          }),
        }}
      />
      <nav aria-label={isEn ? 'Breadcrumbs' : "Fil d'Ariane"} className="py-4 text-xs text-[#5E6861]">
        <ol className="flex items-center flex-wrap gap-2">
          <li className="flex items-center">
            <Link
              href={`/${lang}`}
              className="hover:text-[#1C3326] transition-colors flex items-center gap-1"
              title={isEn ? 'Kourawy Home' : 'Accueil Kourawy'}
            >
              <Home className="w-3.5 h-3.5" />
              <span className="sr-only">{homeLabel}</span>
            </Link>
          </li>
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            const itemTitle = item.name || item.label || '';
            const localizedHref = item.href ? getLocalizedHref(item.href) : '';
            return (
              <li key={idx} className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-[#A5AEA8]" aria-hidden="true" />
                {item.href && !isLast ? (
                  <Link
                    href={localizedHref}
                    className="hover:text-[#1C3326] transition-colors font-normal truncate max-w-[200px]"
                  >
                    {itemTitle}
                  </Link>
                ) : (
                  <span className="text-[#19201C] font-medium truncate max-w-[240px]" aria-current="page">
                    {itemTitle}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
