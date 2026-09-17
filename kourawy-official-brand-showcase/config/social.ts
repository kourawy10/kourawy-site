import { siteConfig } from './site';

/**
 * Configuration des réseaux sociaux officiels de Kourawy
 * 
 * Règle stricte : Ne pas afficher de liens inventés.
 * Seuls les canaux confirmés ou renseignés apparaissent dans l'interface.
 */
export interface SocialLink {
  id: string;
  name: string;
  url: string;
  ariaLabel: string;
}

export const socialConfig = {
  // URLs officielles récupérées de siteConfig
  INSTAGRAM_URL: siteConfig.links.instagram,
  FACEBOOK_URL: siteConfig.links.facebook,
  TIKTOK_URL: siteConfig.links.tiktok,
  
  // WhatsApp officiel vérifié (+224 628 275 389)
  WHATSAPP_URL: siteConfig.contact.whatsappUrl,
};

export function getActiveSocialLinks(): SocialLink[] {
  const links: SocialLink[] = [];

  if (socialConfig.WHATSAPP_URL) {
    links.push({
      id: 'whatsapp',
      name: 'WhatsApp',
      url: socialConfig.WHATSAPP_URL,
      ariaLabel: 'Discuter avec Kourawy sur WhatsApp',
    });
  }

  if (socialConfig.INSTAGRAM_URL) {
    links.push({
      id: 'instagram',
      name: 'Instagram',
      url: socialConfig.INSTAGRAM_URL,
      ariaLabel: 'Suivre Kourawy sur Instagram',
    });
  }

  if (socialConfig.FACEBOOK_URL) {
    links.push({
      id: 'facebook',
      name: 'Facebook',
      url: socialConfig.FACEBOOK_URL,
      ariaLabel: 'Rejoindre Kourawy sur Facebook',
    });
  }

  if (socialConfig.TIKTOK_URL) {
    links.push({
      id: 'tiktok',
      name: 'TikTok',
      url: socialConfig.TIKTOK_URL,
      ariaLabel: 'Suivre Kourawy sur TikTok',
    });
  }

  return links;
}
