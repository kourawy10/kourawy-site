import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/config/site';
import { Factory, Truck, Briefcase, FileCheck2, Mail, ShieldCheck } from 'lucide-react';
import { getDictionary } from '@/lib/i18n';

interface PartnersPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PartnersPageProps): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === 'en';
  return {
    title: isEn ? 'Partnerships & Sourcing — Kourawy Guinea' : 'Partenariats & Sourcing Industriel — Kourawy Guinée',
    description: isEn
      ? 'Dedicated area for textile manufacturers, garment workshops, logistic partners, and B2B collaborations with Kourawy in Conakry.'
      : 'Espace dédié aux fabricants textiles, ateliers de confection, partenaires logistiques et collaborations B2B avec Kourawy à Conakry.',
    openGraph: {
      title: isEn ? 'Partners & Sourcing | Kourawy' : 'Partenaires & Sourcing | Kourawy',
      description: isEn
        ? 'Join the Kourawy ecosystem: supplier selection criteria, high-craft manufacturing, and collaborations in Guinea.'
        : 'Rejoignez l’écosystème Kourawy : critères de sélection des fournisseurs, fabrication soignée et collaborations en Guinée.',
      url: `${siteConfig.url}/${lang}/partners`,
    },
  };
}

export default async function PartnersPage({ params }: PartnersPageProps) {
  const { lang } = await params;
  const isEn = lang === 'en';
  const dict = getDictionary(lang);

  return (
    <div className="bg-[#FAF9F5] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: dict.nav.partners }]} lang={lang} />

        {/* Page Header */}
        <div className="max-w-3xl my-8 sm:my-12">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#1C3326] block mb-2">
            {isEn ? 'Industrial & B2B Relations' : 'Relations Industrielles & B2B'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-medium text-[#19201C] mb-4">
            {isEn ? 'Become a Kourawy Partner' : 'Devenir Partenaire de Kourawy'}
          </h1>
          <p className="text-sm sm:text-base text-[#5E6861] font-light leading-relaxed">
            {isEn
              ? 'To construct a highly durable and credible brand, Kourawy carefully selects industrial partners who share our absolute commitment to manufacturing precision, supply stability, and full transparency.'
              : 'Pour bâtir une marque durable et crédible, Kourawy sélectionne avec rigueur des partenaires qui partagent notre engagement pour la qualité d’exécution, la transparence des processus et la constance des approvisionnements.'}
          </p>
        </div>

        {/* Categories of Collaboration */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 bg-[#FAF9F5] border border-[#E5E1D8]">
            <div className="w-12 h-12 bg-[#EFECE6] rounded-xs flex items-center justify-center mb-4">
              <Factory className="w-6 h-6 text-[#1C3326]" />
            </div>
            <h2 className="text-lg font-serif font-medium text-[#19201C] mb-2">
              {isEn ? 'Textile Mills & Workshops' : 'Ateliers & Filatures textiles'}
            </h2>
            <p className="text-xs text-[#5E6861] leading-relaxed font-light mb-4">
              {isEn
                ? 'Manufacturers of premium cotton fabrics, circular knitting mills, stitch crafters, and garment specialists capable of meeting strict dimensional tolerances.'
                : 'Fabricants de tissus en coton, ateliers de tricotage circulaire, confectionneurs de mailles et façonniers capables de respecter des tolérances dimensionnelles strictes.'}
            </p>
            <span className="text-[11px] text-[#1C3326] font-semibold uppercase tracking-wider block">
              {isEn ? 'Sample Audit Required' : 'Audit d’échantillons requis'}
            </span>
          </div>

          <div className="p-6 bg-[#FAF9F5] border border-[#E5E1D8]">
            <div className="w-12 h-12 bg-[#EFECE6] rounded-xs flex items-center justify-center mb-4">
              <Truck className="w-6 h-6 text-[#1C3326]" />
            </div>
            <h2 className="text-lg font-serif font-medium text-[#19201C] mb-2">
              {isEn ? 'Logistics & Last Mile' : 'Logistique & Dernier kilomètre'}
            </h2>
            <p className="text-xs text-[#5E6861] leading-relaxed font-light mb-4">
              {isEn
                ? 'Delivery providers and express transport services operating in Conakry and interior regions, securing short waiting times and package integrity.'
                : 'Opérateurs logistiques et transporteurs intervenant à Conakry et dans les préfectures de l’intérieur, garantissant le respect des délais et l’intégrité des colis.'}
            </p>
            <span className="text-[11px] text-[#1C3326] font-semibold uppercase tracking-wider block">
              {isEn ? 'Real-time Traceability' : 'Traçabilité en temps réel'}
            </span>
          </div>

          <div className="p-6 bg-[#FAF9F5] border border-[#E5E1D8]">
            <div className="w-12 h-12 bg-[#EFECE6] rounded-xs flex items-center justify-center mb-4">
              <Briefcase className="w-6 h-6 text-[#1C3326]" />
            </div>
            <h2 className="text-lg font-serif font-medium text-[#19201C] mb-2">
              {isEn ? 'Corporate & B2B Orders' : 'Commandes B2B & Corporate'}
            </h2>
            <p className="text-xs text-[#5E6861] leading-relaxed font-light mb-4">
              {isEn
                ? 'Companies, institutions, or schools looking to supply their staff with clean, minimal, highly durable clothing crafted to our high-quality standards.'
                : 'Entreprises, institutions ou organisations souhaitant doter leurs collaborateurs de vêtements sobres, durables et confectionnés selon nos standards de qualité.'}
            </p>
            <span className="text-[11px] text-[#1C3326] font-semibold uppercase tracking-wider block">
              {isEn ? 'Sizing & Clean Branding' : 'Quantités & Personnalisation sobre'}
            </span>
          </div>
        </div>

        {/* Processus de Sourcing */}
        <div className="bg-[#1C3326] text-[#FAF9F5] p-8 sm:p-12 mb-16">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8FA597] block mb-2">
              {isEn ? 'Selection Requirements' : 'Cahier des Charges'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-medium text-white mb-4">
              {isEn ? 'Our industrial qualification workflow' : 'Notre processus de qualification industrielle'}
            </h2>
            <p className="text-xs sm:text-sm text-[#D1D9D3] leading-relaxed font-light mb-6">
              {isEn
                ? 'Kourawy never introduces products into its dynamic catalog without complete pre-validation of sample garments. Every batch undergoes exhaustive checks (stitch stability, collar stretch, dye endurance, and iron behavior).'
                : 'Kourawy n’intègre aucun produit dans son catalogue sans validation préalable d’échantillons témoins. Chaque matière fait l’objet de vérifications approfondies (stabilité des teintures, tenue des surjets, comportement au fer et résistance à l’eau calcaire).'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#284735] text-xs">
              <div className="flex items-start gap-2.5">
                <FileCheck2 className="w-4 h-4 text-[#8FA597] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white mb-0.5">{isEn ? '1. Initial review' : '1. Échange initial'}</strong>
                  <span className="text-[#D1D9D3] font-light">
                    {isEn ? 'Presentation of your capacities and technical datasheets.' : 'Présentation de vos capacités et fiches techniques.'}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#8FA597] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white mb-0.5">{isEn ? '2. Product sampling' : '2. Échantillonnage'}</strong>
                  <span className="text-[#D1D9D3] font-light">
                    {isEn ? 'Creation of prototypes tested directly on-site in Conakry.' : 'Production de prototypes témoins testés à Conakry.'}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#8FA597] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white mb-0.5">{isEn ? '3. Supply agreement' : '3. Contrat d’approvisionnement'}</strong>
                  <span className="text-[#D1D9D3] font-light">
                    {isEn ? 'Joint commitment on volumes, lead times, and cost stability.' : 'Engagement sur les volumes, délais et stabilité des coûts.'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Sourcing Submission */}
        <div className="bg-[#FAF9F5] border border-[#E5E1D8] p-6 sm:p-10 mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#1C3326] block mb-2">
              {isEn ? 'Partner Contact' : 'Prise de Contact Partenaire'}
            </span>
            <h2 className="text-2xl font-serif font-medium text-[#19201C] mb-2">
              {isEn ? 'Submit a collaboration proposal' : 'Proposer une collaboration'}
            </h2>
            <p className="text-xs sm:text-sm text-[#5E6861] font-light leading-relaxed">
              {isEn
                ? 'To submit an application for your workshop or a B2B/corporate inquiry, you can send us your details using the form below or directly by email to'
                : 'Pour soumettre un dossier d’atelier ou une demande corporate, vous pouvez nous adresser vos coordonnées via le formulaire ci-dessous ou directement par email à'}{' '}
              <a href={`mailto:${siteConfig.contact.sourcingEmail}`} className="text-[#1C3326] font-medium underline">
                {siteConfig.contact.sourcingEmail}
              </a>
              .
            </p>
          </div>

          <ContactForm isPartnership={true} defaultSubject={isEn ? 'Partnership inquiry / Sourcing' : 'Demande de partenariat / Sourcing'} lang={lang} />
        </div>
      </div>
    </div>
  );
}
