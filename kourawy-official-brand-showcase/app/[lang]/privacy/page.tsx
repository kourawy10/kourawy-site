import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { siteConfig } from '@/config/site';

interface PrivacyPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PrivacyPageProps): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === 'en';
  return {
    title: isEn ? 'Privacy Policy — Kourawy' : 'Politique de Confidentialité — Kourawy',
    description: isEn
      ? 'Learn how Kourawy processes and protects your personal data in compliance with Guinea regulations.'
      : 'Découvrez comment Kourawy traite et protège vos données personnelles conformément aux réglementations applicables en Guinée.',
  };
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { lang } = await params;
  const isEn = lang === 'en';

  return (
    <div className="bg-[#FAF9F5] py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: isEn ? 'Privacy Policy' : 'Politique de confidentialité' }]} lang={lang} />

        <div className="my-8 sm:my-12">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#1C3326] block mb-2">
            {isEn ? 'Privacy Commitment' : 'Engagement de Confidentialité'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-medium text-[#19201C] mb-4">
            {isEn ? 'Privacy Policy' : 'Politique de Confidentialité'}
          </h1>
          <p className="text-xs text-[#5E6861]">
            {isEn ? 'Last updated: February 2025 • Conakry, Republic of Guinea' : 'Dernière mise à jour : Février 2025 • Conakry, République de Guinée'}
          </p>
        </div>

        <div className="space-y-8 text-xs sm:text-sm text-[#5E6861] font-light leading-relaxed mb-20">
          <section className="space-y-3">
            <h2 className="text-xl font-serif font-medium text-[#19201C]">
              {isEn ? '1. Controller Identity' : '1. Identité du responsable du traitement'}
            </h2>
            <p>
              {isEn
                ? 'The kourawy.store website is published by Kourawy ("Kourawy", "we"), with operational headquarters in Conakry, Republic of Guinea.'
                : 'Le site kourawy.store est édité par la maison Kourawy (« Kourawy », « nous »), ayant son siège opérationnel à Conakry, République de Guinée.'}
            </p>
            <p>
              {isEn ? 'Contact for questions related to your data:' : 'Contact pour toute question relative à vos données :'}{' '}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-[#1C3326] underline font-medium">
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-medium text-[#19201C]">
              {isEn ? '2. Nature of the Website & Data Sourcing' : '2. Nature du site web et collecte des données'}
            </h2>
            <p>
              {isEn
                ? 'The kourawy.store website is a showcase representing brand identity, philosophy, and collection insights. It is NOT an e-commerce platform. Zero bank details, credit card values, passwords, or transaction records are ever collected, processed, or stored on this website.'
                : 'Le site kourawy.store est un site vitrine d’information et d’expression de marque. Il ne constitue pas une boutique de commerce électronique en ligne. Aucune information de carte bancaire, aucun mot de passe de compte client ni aucune donnée de paiement n’est collectée ni enregistrée sur ce site web.'}
            </p>
            <p>
              {isEn
                ? 'Any personal data you submit is restricted to details sent voluntarily through our official contact forms (name, email, telephone, inquiry subject, and text message).'
                : 'Les données personnelles que vous pouvez être amené à nous transmettre se limitent aux informations envoyées volontairement par le biais du formulaire de contact officiel (nom, prénom, email, numéro de téléphone, objet et contenu de votre message).'}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-medium text-[#19201C]">
              {isEn ? '3. Intended Uses' : '3. Finalités de la collecte'}
            </h2>
            <p>{isEn ? 'Submitted data is strictly utilized to:' : 'Les données transmises sont exclusivement utilisées pour :'}</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>{isEn ? 'Reply to your inquiries, sizing requests, or general tips;' : 'Répondre à vos demandes de renseignements, devis ou conseils ;'}</li>
              <li>{isEn ? 'Analyze partnership bids and textile sourcing proposals;' : 'Instruire les demandes de partenariat et de sourcing industriel ;'}</li>
              <li>{isEn ? 'Enhance page performance, layout ease, and visitor experience.' : 'Améliorer la qualité de nos services et l’ergonomie de notre site vitrine.'}</li>
            </ul>
            <p>
              {isEn
                ? 'Kourawy never rents, sells, or transfers your personal details to advertising networks for marketing purposes.'
                : 'Kourawy ne vend, ne loue ni ne cède vos informations personnelles à des tiers à des fins publicitaires.'}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-medium text-[#19201C]">
              {isEn ? '4. Kourawy Mobile Applications' : '4. Application mobile Kourawy'}
            </h2>
            <p>
              {isEn
                ? 'Purchases, size configurations, user account setup, delivery addresses, and payment gateways are handled exclusively inside the official Kourawy mobile applications. These actions are subject to separate terms accepted upon app download and sign-up.'
                : 'L’acte d’achat, la création de compte client, le choix des adresses de livraison et les transactions financières sont régis par les conditions spécifiques de l’application mobile Kourawy, acceptées lors de son installation et de votre inscription sur les plateformes officielles.'}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-medium text-[#19201C]">
              {isEn ? '5. Your Rights' : '5. Vos droits'}
            </h2>
            <p>
              {isEn
                ? 'In accordance with privacy standards, you hold full rights to access, update, and request erasure of your data transmitted through our forms. To exercise these rights, please email us directly at'
                : 'Conformément aux principes directeurs de protection de la vie privée, vous disposez d’un droit d’accès, de rectification et d’effacement de vos données transmises via notre formulaire. Pour exercer ces droits, il vous suffit de nous adresser un email à'}{' '}
              <strong className="text-[#19201C] font-semibold">{siteConfig.contact.email}</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
