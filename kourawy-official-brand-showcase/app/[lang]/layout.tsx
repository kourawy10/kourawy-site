import type { Metadata } from 'next';
import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import { siteConfig } from '@/config/site';

interface Props {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return [{ lang: 'fr' }, { lang: 'en' }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === 'en';

  const title = isEn
    ? 'Kourawy — Quality for everyday life | Clothing Brand in Guinea'
    : 'Kourawy — La qualité au quotidien | Marque de vêtements en Guinée';

  const description = isEn
    ? 'Guinean clothing brand focused on affordable quality, comfort, durability, and timeless designs tailored for everyday life.'
    : siteConfig.description;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: title,
      template: '%s | Kourawy',
    },
    description,
    keywords: siteConfig.seo.keywords,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: isEn ? 'en_US' : 'fr_FR',
      url: `${siteConfig.url}/${lang}`,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: `${siteConfig.url}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: isEn ? 'Kourawy — Quality clothing brand in Guinea' : 'Kourawy — Marque de vêtements de qualité en Guinée',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isEn ? 'Kourawy — Quality for everyday life' : 'Kourawy — La qualité au quotidien',
      description,
      images: [`${siteConfig.url}/og-image.jpg`],
    },
    icons: {
      icon: [
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/logo.svg', type: 'image/svg+xml' },
      ],
      apple: [{ url: '/favicon.svg' }],
    },
    alternates: {
      canonical: `${siteConfig.url}/${lang}`,
      languages: {
        fr: `${siteConfig.url}/fr`,
        en: `${siteConfig.url}/en`,
        'x-default': `${siteConfig.url}/fr`,
      },
    },
  };
}

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;
  const isEn = lang === 'en';

  // Schema.org structured data for Organization, WebSite and LocalBusiness (Conakry, Guinea)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.svg`,
        description: isEn
          ? 'Guinean clothing brand focused on affordable quality, comfort, durability, and timeless designs.'
          : siteConfig.description,
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phoneDisplay,
        address: {
          '@type': 'PostalAddress',
          addressLocality: siteConfig.location.city,
          addressCountry: 'GN',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: isEn
          ? 'Guinean clothing brand focused on affordable quality, comfort, durability, and timeless designs.'
          : siteConfig.description,
        publisher: {
          '@id': `${siteConfig.url}/#organization`,
        },
        inLanguage: isEn ? 'en-US' : 'fr-FR',
      },
    ],
  };

  return (
    <html lang={lang} className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#19201C] antialiased selection:bg-[#1C3326] selection:text-[#FAF9F5]">
        <Header lang={lang} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} />
        <CookieConsent lang={lang} />
      </body>
    </html>
  );
}
