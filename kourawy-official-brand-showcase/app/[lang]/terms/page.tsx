import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { siteConfig } from '@/config/site';

interface TermsPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: TermsPageProps): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === 'en';
  return {
    title: isEn ? 'Terms of Use — Kourawy' : 'Conditions Générales d’Utilisation — Kourawy',
    description: isEn
      ? 'Read the general terms of use for the official website of Kourawy clothing brand (kourawy.store).'
      : 'Consultez les conditions générales d’utilisation du site web officiel de la marque de vêtements Kourawy (kourawy.store).',
  };
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { lang } = await params;
  const isEn = lang === 'en';

  return (
    <div className="bg-[#FAF9F5] py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: isEn ? 'Terms of Use' : 'Conditions d’utilisation' }]} lang={lang} />

        <div className="my-8 sm:my-12">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#1C3326] block mb-2">
            {isEn ? 'Legal Framework' : 'Cadre Légal'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-medium text-[#19201C] mb-4">
            {isEn ? 'Terms of Use' : 'Conditions d’Utilisation'}
          </h1>
          <p className="text-xs text-[#5E6861]">
            {isEn ? 'Last revised: February 2025 • Conakry, Republic of Guinea' : 'Dernière révision : Février 2025 • Conakry, République de Guinée'}
          </p>
        </div>

        <div className="space-y-8 text-xs sm:text-sm text-[#5E6861] font-light leading-relaxed mb-20">
          <section className="space-y-3">
            <h2 className="text-xl font-serif font-medium text-[#19201C]">
              {isEn ? '1. Website Purpose' : '1. Objet du site'}
            </h2>
            <p>
              {isEn
                ? 'The kourawy.store website is exclusively created to showcase brand identity, textile sourcing craftsmanship, editorial collections, and insights. It is a certified official showcase.'
                : 'Le site kourawy.store a pour objet exclusif de présenter l’identité, la démarche de confection, l’actualité et les collections de la marque Kourawy. Il constitue une vitrine informative officielle.'}
            </p>
            <p>
              {isEn
                ? 'This is NOT an e-commerce website. Zero shopping carts, checkout forms, credit card gateways, or transactional actions are available on this site.'
                : 'Ce site n’est pas un site de vente en ligne. Aucun panier d’achat direct, aucun module de paiement par carte bancaire et aucune validation de commande marchande ne sont disponibles sur le site internet.'}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-medium text-[#19201C]">
              {isEn ? '2. Intellectual Property & Brand' : '2. Propriété intellectuelle & Marque'}
            </h2>
            <p>
              {isEn
                ? 'The name Kourawy, the brand signature "La qualité au quotidien", the stylized tree logo, as well as all visual photography, text layouts, and code layouts displayed on this website are the exclusive property of Kourawy or licensed for use.'
                : 'Le nom Kourawy, le slogan « La qualité au quotidien », le logo représentant l’arbre stylisé ainsi que l’ensemble des photographies, textes, chartes graphiques et contenus éditoriaux figurant sur ce site sont la propriété exclusive de Kourawy ou font l’objet de droits d’usage concédés.'}
            </p>
            <p>
              {isEn
                ? 'Any reproduction, copy, distribution, or unauthorized exploitation of these elements without prior written consent from Kourawy is strictly prohibited.'
                : 'Toute reproduction, distribution ou exploitation totale ou partielle sans accord écrit préalable de Kourawy est rigoureusement interdite.'}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-medium text-[#19201C]">
              {isEn ? '3. Mobile App Redirection' : '3. Redirection vers les applications mobiles'}
            </h2>
            <p>
              {isEn
                ? 'To buy Kourawy garments, users are directed to download and utilize our official Kourawy mobile applications. Our complete sales policies, exchange rights, and home deliveries in Conakry are governed by and accessible inside the mobile app.'
                : 'Pour acquérir les pièces Kourawy, les utilisateurs sont invités à télécharger et utiliser les applications mobiles officielles Kourawy disponibles sur les stores agréés. Les conditions générales de vente (CGV), les modalités de livraison à Conakry et les règles de rétractation sont détaillées directement au sein de l’application.'}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-medium text-[#19201C]">
              {isEn ? '4. Governing Law' : '4. Droit applicable'}
            </h2>
            <p>
              {isEn
                ? 'These terms of use are governed by the laws of the Republic of Guinea. In the event of an issue, a friendly resolution is always preferred before any legal action is brought before the competent courts in Conakry.'
                : 'Les présentes conditions d’utilisation sont régies par le droit en vigueur en République de Guinée. En cas de litige, une solution amiable sera systématiquement privilégiée avant tout recours judiciaire auprès des juridictions compétentes de Conakry.'}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
