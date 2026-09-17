import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { HelpCircle, ArrowRight, MessageCircle } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import AppDownloadBanner from '@/components/AppDownloadBanner';
import { getLocalizedFaq } from '@/data/faq';
import { siteConfig } from '@/config/site';
import { getDictionary } from '@/lib/i18n';

interface FAQPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: FAQPageProps): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === 'en';
  return {
    title: isEn ? 'Frequently Asked Questions (FAQ) | All about Kourawy' : 'Questions Fréquentes (FAQ) | Tout savoir sur Kourawy',
    description: isEn
      ? 'Answers to common questions about Kourawy clothing brand, mobile app ordering, craftsmanship, sizing, and support in Conakry.'
      : 'Réponses aux questions courantes sur la marque Kourawy, la commande sur l’application mobile, la confection, les tailles et le service client à Conakry.',
    openGraph: {
      title: isEn ? 'Kourawy Official FAQ — Answers & Information' : 'FAQ Officielle Kourawy — Réponses & Informations',
      description: isEn
        ? 'How to order, where to find Kourawy garments, and how to reach us in Conakry.'
        : 'Comment commander, où trouver les vêtements Kourawy et comment nous contacter à Conakry.',
      url: `${siteConfig.url}/${lang}/faq`,
    },
  };
}

export default async function FAQPage({ params }: FAQPageProps) {
  const { lang } = await params;
  const isEn = lang === 'en';
  const dict = getDictionary(lang);
  const faqList = getLocalizedFaq(lang);

  // Generate FAQPage JSON-LD Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqList.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const getLocalizedHref = (path: string) => {
    if (path === '/') return `/${lang}`;
    return `/${lang}${path}`;
  };

  return (
    <div className="bg-[#FAF9F5] py-8 sm:py-12">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: dict.nav.faq }]} lang={lang} />

        <div className="max-w-2xl my-8 sm:my-12">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#1C3326] mb-2 block">
            {isEn ? 'Help & Transparency' : 'Aide & Transparence'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-medium text-[#19201C] mb-4">
            {isEn ? 'Frequently Asked Questions' : 'Questions Fréquentes'}
          </h1>
          <p className="text-sm sm:text-base text-[#5E6861] leading-relaxed font-light">
            {isEn
              ? 'Find clear, transparent answers to the most common questions about our clothing, ordering systems, and our organization.'
              : 'Retrouvez les réponses transparentes aux questions les plus régulières concernant nos pièces, le fonctionnement des commandes et notre organisation.'}
          </p>
        </div>

        {/* FAQ Items Accordion / Cards */}
        <div className="space-y-4 mb-16">
          {faqList.map((item) => (
            <div
              key={item.id}
              id={`faq-item-${item.id}`}
              className="p-6 bg-white border border-[#E5E1D8]"
            >
              <h2 className="text-base sm:text-lg font-serif font-medium text-[#19201C] mb-3 flex items-start gap-2.5">
                <HelpCircle className="w-5 h-5 text-[#1C3326] shrink-0 mt-0.5" />
                <span>{item.question}</span>
              </h2>
              <div className="pl-7 text-xs sm:text-sm text-[#5E6861] leading-relaxed font-light">
                {item.answer}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions bridge */}
        <div className="p-8 bg-white border border-[#E5E1D8] flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <h3 className="text-lg sm:text-xl font-serif font-medium text-[#19201C] mb-1">
              {isEn ? 'Cannot find your answer?' : 'Vous ne trouvez pas votre réponse ?'}
            </h3>
            <p className="text-xs text-[#5E6861] font-light">
              {isEn
                ? 'Our customer support based in Conakry is always happy to help on WhatsApp or email.'
                : 'Notre service basé à Conakry est disponible pour échanger sur WhatsApp ou par email.'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1C3326] text-white text-xs font-semibold hover:bg-[#14261B]"
            >
              <MessageCircle className="w-4 h-4 text-[#4ADE80]" />
              <span>WhatsApp</span>
            </a>
            <Link
              href={getLocalizedHref('/contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-[#1C3326]/30 text-[#1C3326] text-xs font-semibold hover:bg-[#FAF9F5] transition-colors"
            >
              <span>{isEn ? 'Contact Form' : 'Formulaire'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <AppDownloadBanner compact lang={lang} />
      </div>
    </div>
  );
}
