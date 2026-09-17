import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/config/site';
import { Mail, Phone, MapPin, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';
import { getDictionary } from '@/lib/i18n';

interface ContactPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === 'en';
  return {
    title: isEn ? 'Official Contact | Kourawy Guinea' : 'Contact Officiel | Kourawy Guinée',
    description: isEn
      ? 'Contact the House of Kourawy in Conakry: direct details, WhatsApp customer support, partnership exchanges, and support.'
      : 'Contactez la maison Kourawy à Conakry : coordonnées directes, assistance WhatsApp, échanges de partenariat et service client.',
    openGraph: {
      title: isEn ? 'Kourawy Official Contact | Conakry, Guinea' : 'Contact Officiel Kourawy | Conakry, Guinée',
      description: isEn
        ? 'Official contact details, WhatsApp +224 628 275 389 and direct contact form.'
        : 'Coordonnées officielles, numéro WhatsApp +224 628 275 389 et formulaire de contact direct.',
      url: `${siteConfig.url}/${lang}/contact`,
    },
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { lang } = await params;
  const isEn = lang === 'en';
  const dict = getDictionary(lang);

  return (
    <div className="bg-[#FAF9F5] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: dict.nav.contact }]} lang={lang} />

        {/* Page Header */}
        <div className="max-w-3xl my-8 sm:my-12">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#1C3326] block mb-2">
            {isEn ? 'Client Relations & Inquiry' : 'Échange & Relation Client'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-medium text-[#19201C] mb-4">
            {dict.nav.contact}
          </h1>
          <p className="text-sm sm:text-base text-[#5E6861] leading-relaxed font-light">
            {isEn
              ? 'For general inquiries, advice on fits, mobile app questions, or institutional partnerships, the Kourawy team is entirely at your disposal from Conakry.'
              : 'Pour toute demande d’information générale, conseil sur nos modèles, question liée à l’application mobile ou proposition institutionnelle, l’équipe Kourawy est à votre entière disposition depuis Conakry.'}
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Left Column: Official Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Cards */}
            <div className="p-6 bg-[#EFECE6]/60 border border-[#E5E1D8]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1C3326] mb-3">
                <MessageSquare className="w-4 h-4 text-[#1C3326]" />
                <span>{isEn ? 'Direct WhatsApp Support' : 'Assistance WhatsApp directe'}</span>
              </div>
              <p className="text-xs text-[#525E55] leading-relaxed mb-4">
                {isEn
                  ? 'The fastest, most interactive way to reach our styling and support consultants in Conakry:'
                  : 'Le moyen le plus direct et interactif pour joindre nos conseillers à Conakry :'}
              </p>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#1C3326] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#14261B] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{isEn ? 'Open WhatsApp:' : 'Ouvrir WhatsApp :'} {siteConfig.contact.phoneDisplay}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>

            <div className="p-6 bg-white border border-[#E5E1D8] space-y-5">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#1C3326] shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-xs uppercase tracking-wider font-semibold text-[#142318]">
                    {isEn ? 'Official Email' : 'Email officiel'}
                  </h2>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm text-[#1C3326] hover:underline block mt-0.5 font-medium"
                  >
                    {siteConfig.contact.email}
                  </a>
                  <span className="text-[11px] text-[#6F7B73]">
                    {isEn ? 'Reply within 24 business hours' : 'Réponse sous 24 heures ouvrées'}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-4 border-t border-[#E5E1D8]/60">
                <Mail className="w-5 h-5 text-[#1C3326] shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-xs uppercase tracking-wider font-semibold text-[#142318]">
                    {isEn ? 'Sourcing & Manufacturing' : 'Sourcing & Fournisseurs'}
                  </h2>
                  <a
                    href={`mailto:${siteConfig.contact.sourcingEmail}`}
                    className="text-sm text-[#1C3326] hover:underline block mt-0.5 font-medium"
                  >
                    {siteConfig.contact.sourcingEmail}
                  </a>
                  <span className="text-[11px] text-[#6F7B73]">
                    {isEn ? 'Dedicated desk for textile mills and workshops' : 'Pôle dédié aux fabricants et ateliers textiles'}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-4 border-t border-[#E5E1D8]/60">
                <MapPin className="w-5 h-5 text-[#1C3326] shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-xs uppercase tracking-wider font-semibold text-[#142318]">
                    {isEn ? 'Office Location' : 'Localisation'}
                  </h2>
                  <p className="text-sm text-[#142318] mt-0.5">
                    {siteConfig.location.addressDisplay}
                  </p>
                  <span className="text-[11px] text-[#6F7B73]">
                    {isEn ? 'Administrative Headquarters & Logistics' : 'Siège administratif & Coordination'}
                  </span>
                </div>
              </div>
            </div>

            {/* Credibility note */}
            <div className="p-4 border border-[#E5E1D8] bg-white text-xs text-[#525E55] flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#1C3326] shrink-0 mt-0.5" />
              <span>
                {isEn ? 'Certified Official Website:' : 'Site officiel certifié :'}{' '}
                <strong className="text-[#142318]">kourawy.store</strong>.{' '}
                {isEn
                  ? 'No financial transaction is processed directly on this website; orders are handled through the Kourawy mobile app.'
                  : 'Aucune transaction bancaire n’est effectuée sur ce site web ; les commandes passent par l’application mobile Kourawy.'}
              </span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm lang={lang} />
          </div>
        </div>
      </div>
    </div>
  );
}
