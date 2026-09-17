/**
 * Configuration principale de la marque Kourawy
 * Site vitrine officiel : https://kourawy.store
 */
export const siteConfig = {
  name: 'Kourawy',
  legalName: 'Kourawy',
  tagline: 'La qualité au quotidien',
  taglineEn: 'Quality for everyday life',
  description:
    'Marque guinéenne de vêtements axée sur la qualité accessible, le confort, la durabilité et des designs intemporels pensés pour accompagner votre quotidien.',
  url: 'https://kourawy.store',
  ogImage: 'https://kourawy.store/og-image.jpg',
  location: {
    city: 'Conakry',
    country: 'Guinée',
    region: 'Afrique de l’Ouest',
    addressDisplay: 'Conakry, Guinée',
  },
  contact: {
    email: 'contact@kourawy.store',
    sourcingEmail: 'sourcing@kourawy.store',
    phoneDisplay: '+224 628 275 389',
    phoneClean: '+224628275389',
    whatsappUrl: 'https://wa.me/224628275389',
    businessHours: 'Lundi – Samedi : 09h00 – 19h00',
  },
  links: {
    appStore: process.env.CLIENT_APP_IOS_URL || 'https://apps.apple.com/app/kourawy',
    googlePlay: process.env.CLIENT_APP_ANDROID_URL || 'https://play.google.com/store/apps/details?id=store.kourawy.app',
    appDownload: process.env.CLIENT_APP_DOWNLOAD_URL || 'https://kourawy.store/download',
    instagram: process.env.INSTAGRAM_URL || 'https://instagram.com/kourawy.store',
    facebook: process.env.FACEBOOK_URL || 'https://facebook.com/kourawy.store',
    tiktok: process.env.TIKTOK_URL || 'https://tiktok.com/@kourawy.store',
  },
  seo: {
    keywords: [
      'Kourawy',
      'Kourawy Guinée',
      'marque de vêtements Guinée',
      'vêtements en Guinée',
      'vêtements de qualité en Guinée',
      'vêtements homme Conakry',
      'vêtements femme Conakry',
      'boutique vêtements Conakry',
      'vêtements coton Guinée',
      'mode intemporelle Conakry',
    ],
  },
};
