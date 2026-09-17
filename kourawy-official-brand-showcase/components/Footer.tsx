'use client';

import React from 'react';
import Link from 'next/link';
import KourawyLogo from './KourawyLogo';
import { siteConfig } from '@/config/site';
import { getActiveSocialLinks } from '@/config/social';
import { Smartphone, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { getDictionary } from '@/lib/i18n';

interface FooterProps {
  lang?: string;
}

export default function Footer({ lang = 'fr' }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const socialLinks = getActiveSocialLinks();
  const dict = getDictionary(lang);
  const isEn = lang === 'en';

  const getLocalizedHref = (path: string) => {
    if (path === '/') return `/${lang}`;
    return `/${lang}${path}`;
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#1C3326] text-[#FAF9F5] border-t border-[#284735] pt-16 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand statement bar */}
        <div className="pb-12 border-b border-[#284735] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <KourawyLogo color="inverted" size="lg" lang={lang} />
            <p className="mt-2 text-sm text-[#D1D9D3] max-w-md leading-relaxed font-light">
              {isEn ? 'Kourawy' : siteConfig.name} — {isEn ? 'Simple, comfortable, and durable garments designed to accompany your daily life in Conakry and West Africa.' : 'Des vêtements simples, confortables et durables pensés pour accompagner votre quotidien à Conakry et en Afrique de l’Ouest.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs text-[#D1D9D3]">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#8FA597] shrink-0" />
              <span>{siteConfig.location.addressDisplay}</span>
            </div>
            <span className="hidden sm:inline text-[#3F5A49]">•</span>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#8FA597] shrink-0" />
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-white transition-colors"
              >
                {siteConfig.contact.email}
              </a>
            </div>
            <span className="hidden sm:inline text-[#3F5A49]">•</span>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#8FA597] shrink-0" />
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-[#284735]">
          {/* Column 1: Kourawy */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8FA597] mb-4">
              Kourawy
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href={getLocalizedHref('/about')}
                  className="text-[#FAF9F5]/80 hover:text-white transition-colors"
                >
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref('/quality')}
                  className="text-[#FAF9F5]/80 hover:text-white transition-colors"
                >
                  {isEn ? 'Quality & Craftsmanship' : 'Qualité & Confection'}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref('/collections')}
                  className="text-[#FAF9F5]/80 hover:text-white transition-colors"
                >
                  {isEn ? 'All Collections' : 'Toutes les Collections'}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref('/collections/t-shirts')}
                  className="text-[#FAF9F5]/80 hover:text-white transition-colors"
                >
                  {isEn ? 'Essential T-Shirts' : 'T-shirts Essentiels'}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref('/collections/collection-homme')}
                  className="text-[#FAF9F5]/80 hover:text-white transition-colors"
                >
                  {isEn ? "Men's Collection" : 'Collection Homme'}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref('/collections/collection-femme')}
                  className="text-[#FAF9F5]/80 hover:text-white transition-colors"
                >
                  {isEn ? "Women's Collection" : 'Collection Femme'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Informations */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8FA597] mb-4">
              {isEn ? 'Information' : 'Informations'}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href={getLocalizedHref('/faq')}
                  className="text-[#FAF9F5]/80 hover:text-white transition-colors"
                >
                  {isEn ? 'Frequently Asked Questions (FAQ)' : 'Questions fréquentes (FAQ)'}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref('/journal')}
                  className="text-[#FAF9F5]/80 hover:text-white transition-colors"
                >
                  {isEn ? 'Journal & Style Tips' : 'Journal & Conseils'}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref('/contact')}
                  className="text-[#FAF9F5]/80 hover:text-white transition-colors"
                >
                  {isEn ? 'Contact Us' : 'Nous contacter'}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref('/partners')}
                  className="text-[#FAF9F5]/80 hover:text-white transition-colors"
                >
                  {isEn ? 'Partnerships & Sourcing' : 'Devenir partenaire & Fournisseurs'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Applications */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8FA597] mb-4">
              Applications
            </h4>
            <p className="text-xs text-[#D1D9D3] mb-3 leading-relaxed">
              {isEn
                ? 'Centralized orders, payments, and tracking on our official mobile app.'
                : 'Commandes, paiements et livraisons centralisés sur notre application mobile.'}
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href={getLocalizedHref('/#telecharger-application')}
                  className="text-[#FAF9F5]/80 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Smartphone className="w-3.5 h-3.5 text-[#8FA597]" />
                  {isEn ? 'Download App' : 'Télécharger l’application'}
                </Link>
              </li>
              <li className="text-xs text-[#8FA597]">
                iOS (App Store) — <span className="text-[#FAF9F5]/60">{isEn ? 'Coming soon' : 'Bientôt disponible'}</span>
              </li>
              <li className="text-xs text-[#8FA597]">
                Android (Google Play) — <span className="text-[#FAF9F5]/60">{isEn ? 'Coming soon' : 'Bientôt disponible'}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Légal */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8FA597] mb-4">
              {isEn ? 'Legal' : 'Légal'}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href={getLocalizedHref('/privacy')}
                  className="text-[#FAF9F5]/80 hover:text-white transition-colors"
                >
                  {isEn ? 'Privacy Policy' : 'Politique de confidentialité'}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref('/terms')}
                  className="text-[#FAF9F5]/80 hover:text-white transition-colors"
                >
                  {isEn ? 'Terms of Use' : 'Conditions d’utilisation'}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref('/cookies')}
                  className="text-[#FAF9F5]/80 hover:text-white transition-colors"
                >
                  {isEn ? 'Cookie Management' : 'Gestion des cookies'}
                </Link>
              </li>
            </ul>

            {/* Social links */}
            {socialLinks.length > 0 && (
              <div className="mt-6">
                <h5 className="text-[11px] uppercase tracking-wider text-[#8FA597] mb-2 font-medium">
                  {isEn ? 'Official Networks' : 'Réseaux officiels'}
                </h5>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((s) => (
                    <a
                      key={s.id}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-2.5 py-1 bg-[#284735] hover:bg-[#345943] text-white rounded-xs transition-colors flex items-center gap-1"
                      aria-label={s.ariaLabel}
                    >
                      <span>{s.name}</span>
                      <ExternalLink className="w-2.5 h-2.5 opacity-70" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8FA597] gap-4">
          <p>© {currentYear} Kourawy — {dict.common.rights}</p>
          <p className="flex items-center gap-1">
            <span>{isEn ? 'Official Site:' : 'Site officiel :'}</span>
            <span className="text-white font-mono">kourawy.store</span>
            <span className="mx-2">•</span>
            <span>{dict.common.conakryGuinea}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
