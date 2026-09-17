/**
 * Configuration des applications mobiles Kourawy
 * 
 * IMPORTANT:
 * Kourawy gère l'ensemble de l'expérience d'achat (panier, commande, paiement et livraison)
 * directement sur ses applications mobiles officielles.
 * 
 * Les URLs officielles seront renseignées ici lors du lancement sur les stores.
 * Si une URL est vide, l'interface affiche l'état "Bientôt disponible" en toute transparence.
 */
export const appConfig = {
  // Renseigner les URLs officielles une fois publiées sur les stores respectifs
  CLIENT_APP_IOS_URL: process.env.NEXT_PUBLIC_CLIENT_APP_IOS_URL || '',
  CLIENT_APP_ANDROID_URL: process.env.NEXT_PUBLIC_CLIENT_APP_ANDROID_URL || '',
  CLIENT_APP_WEB_URL: process.env.NEXT_PUBLIC_CLIENT_APP_WEB_URL || '',

  // URL vers laquelle pointe le QR Code de téléchargement sur desktop
  // Par défaut pointe vers la page d'accueil ou l'ancre dédiée aux applications
  APP_LANDING_URL: 'https://kourawy.store/#telecharger-application',

  // Statut du déploiement
  isIosAvailable: false,
  isAndroidAvailable: false,
  isWebAvailable: false,

  // Textes officiels
  ctaText: 'Acheter sur l’application',
  ctaLongText: 'Acheter sur l’application Kourawy',
  bannerHeadline: 'Téléchargez l’application Kourawy',
  bannerSubline: 'Découvrez les collections, commandez en toute simplicité et faites-vous livrer directement depuis notre application mobile.',
  soonBadgeText: 'Bientôt disponible sur iOS & Android',
};
