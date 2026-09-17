import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

// Cette ligne indique à Next.js de générer ce fichier statiquement lors du build
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
