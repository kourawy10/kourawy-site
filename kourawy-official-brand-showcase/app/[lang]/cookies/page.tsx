import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

interface CookiesPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: CookiesPageProps): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === 'en';
  return {
    title: isEn ? 'Cookies Policy — Kourawy' : 'Politique relative aux Cookies — Kourawy',
    description: isEn
      ? 'Understand how web cookies and local storage are utilized on the official website of Kourawy clothing brand (kourawy.store).'
      : 'Comprendre l’usage des témoins de navigation (cookies) sur le site officiel de la marque Kourawy.',
  };
}

export default async function CookiesPage({ params }: CookiesPageProps) {
  const { lang } = await params;
  const isEn = lang === 'en';

  return (
    <div className="bg-[#FAF9F5] py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: isEn ? 'Cookie Settings' : 'Gestion des cookies' }]} lang={lang} />

        <div className="my-8 sm:my-12">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#1C3326] block mb-2">
            {isEn ? 'Digital Transparency' : 'Transparence Numérique'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-medium text-[#19201C] mb-4">
            {isEn ? 'Cookies Policy' : 'Politique relative aux Cookies'}
          </h1>
          <p className="text-xs text-[#5E6861]">
            {isEn ? 'Last updated: February 2025 • Conakry, Republic of Guinea' : 'Dernière mise à jour : Février 2025 • Conakry, République de Guinée'}
          </p>
        </div>

        <div className="space-y-8 text-xs sm:text-sm text-[#5E6861] font-light leading-relaxed mb-20">
          <section className="space-y-3">
            <h2 className="text-xl font-serif font-medium text-[#19201C]">
              {isEn ? '1. What is a Cookie?' : '1. Qu’est-ce qu’un cookie ?'}
            </h2>
            <p>
              {isEn
                ? 'A cookie is a small text file saved on your device (computer, tablet, smartphone) when you visit a website. It allows the website to remember useful setup details temporarily, such as your display or language preferences.'
                : 'Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la consultation d’un site internet. Il permet au site de mémoriser temporairement des informations utiles, telles que vos préférences d’affichage.'}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-medium text-[#19201C]">
              {isEn ? '2. What Cookies do we utilize on kourawy.store?' : '2. Quels cookies utilisons-nous sur kourawy.store ?'}
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-[#EFECE6]/50 border border-[#E5E1D8]">
                <h3 className="text-sm font-semibold text-[#19201C] mb-1">
                  {isEn ? '• Strictly Necessary Cookies (Technical)' : '• Cookies strictement nécessaires (Techniques)'}
                </h3>
                <p>
                  {isEn
                    ? 'These cookies are absolutely essential to ensure secure, correct loading of our website (e.g., memorizing your choice on our cookie consent banner). They cannot be disabled.'
                    : 'Ces cookies sont indispensables au bon affichage et à la sécurité du site (par exemple, mémoriser votre choix d’acceptation ou de refus du bandeau de consentement). Ils ne peuvent pas être désactivés.'}
                </p>
              </div>

              <div className="p-4 bg-[#EFECE6]/50 border border-[#E5E1D8]">
                <h3 className="text-sm font-semibold text-[#19201C] mb-1">
                  {isEn ? '• Audience Measurement (Anonymized Statistics)' : '• Cookies de mesure d’audience (Statistiques anonymisées)'}
                </h3>
                <p>
                  {isEn
                    ? 'These cookies help us analyze visitor frequency, load speeds, and potential bugs, so we can continuously optimize the browsing experience. This data is entirely aggregated and anonymous.'
                    : 'Ces cookies nous permettent de mesurer la fréquentation des pages et d’identifier d’éventuelles lenteurs afin d’améliorer l’expérience de navigation des visiteurs. Ces données sont agrégées et anonymes.'}
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-medium text-[#19201C]">
              {isEn ? '3. Zero Intrusive Tracking' : '3. Absence de cookies publicitaires intrusifs'}
            </h2>
            <p>
              {isEn
                ? 'Kourawy does not employ tracking cookies, cross-site targeting scripts, or third-party behavioral networks to sell your browsing habits. Your peace of mind and data safety are core priorities.'
                : 'Kourawy ne recourt à aucun réseau de pistage publicitaire tiers revendant vos données de navigation. Votre tranquillité d’esprit et le respect de votre vie privée constituent des priorités fondamentales.'}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-medium text-[#19201C]">
              {isEn ? '4. Modifying your Preferences' : '4. Comment modifier vos préférences ?'}
            </h2>
            <p>
              {isEn
                ? 'You can delete or manage cookies at any time using your web browser configurations (Chrome, Safari, Firefox, Edge) or by resetting local storage data.'
                : 'Vous pouvez à tout moment effacer vos cookies via les paramètres de votre navigateur web (Chrome, Safari, Firefox, Edge) ou en réinitialisant le stockage local de votre navigateur.'}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
