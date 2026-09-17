/**
 * Configuration des outils d'analyse d'audience
 * Désactivés par défaut jusqu'à ce que les identifiants réels soient configurés dans l'environnement.
 */
export const analyticsConfig = {
  // Google Analytics ID (ex: G-XXXXXXXXXX)
  GOOGLE_ANALYTICS_ID: process.env.NEXT_PUBLIC_GA_ID || '',

  // Google Search Console vérification meta tag
  GOOGLE_SITE_VERIFICATION: process.env.NEXT_PUBLIC_GSC_VERIFICATION || '',

  // Meta Pixel ID
  META_PIXEL_ID: process.env.NEXT_PUBLIC_META_PIXEL_ID || '',

  // Vérification si actif
  isEnabled: Boolean(process.env.NEXT_PUBLIC_GA_ID),
};
