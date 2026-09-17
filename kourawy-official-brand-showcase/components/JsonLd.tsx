import React from 'react';
import { siteConfig } from '@/config/site';

export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ClothingStore',
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    image: siteConfig.ogImage,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location.city,
      addressCountry: 'GN', // Guinea ISO code
    },
    telephone: siteConfig.contact.phoneClean,
    email: siteConfig.contact.email,
    sameAs: [
      siteConfig.contact.whatsappUrl,
    ],
    priceRange: '$$',
    areaServed: [
      {
        '@type': 'Country',
        name: 'Guinea',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'West Africa',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: 'fr-GN',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
