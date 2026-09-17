/**
 * Données structurées des collections Kourawy
 * Showcase éditorial — non e-commerce.
 */
export interface Collection {
  id: string;
  slug: string;
  title: string;
  titleEn?: string;
  subtitle: string;
  subtitleEn?: string;
  description: string;
  descriptionEn?: string;
  image: string;
  imageAlt: string;
  imageAltEn?: string;
  featured: boolean;
  itemCountLabel: string;
  itemCountLabelEn?: string;
}

export const collectionsData: Collection[] = [
  {
    id: 't-shirts',
    slug: 't-shirts',
    title: 'T-shirts',
    titleEn: 'T-shirts',
    subtitle: 'La base essentielle',
    subtitleEn: 'The essential base',
    description:
      'Des t-shirts épurés confectionnés dans un coton peigné doux et respirant, conçus pour résister au temps et aux lavages.',
    descriptionEn:
      'Sleek t-shirts crafted from soft and breathable combed cotton, designed to withstand time and frequent washes.',
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'T-shirt épuré et intemporel Kourawy sur fond neutre',
    imageAltEn: 'Minimal and timeless Kourawy t-shirt on a neutral background',
    featured: true,
    itemCountLabel: 'Modèles essentiels',
    itemCountLabelEn: 'Essential models',
  },
  {
    id: 'polos',
    slug: 'polos',
    title: 'Polos',
    titleEn: 'Polo Shirts',
    subtitle: 'Élégance décontractée',
    subtitleEn: 'Relaxed elegance',
    description:
      'Maille piquée respirante, col structuré et finitions soignées pour un équilibre parfait entre confort quotidien et allure habillée.',
    descriptionEn:
      'Breathable piqué knit, structured collar, and refined finishes for the perfect balance between daily comfort and a polished look.',
    image:
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Polo sobre en maille piquée',
    imageAltEn: 'Clean polo shirt in breathable piqué knit',
    featured: true,
    itemCountLabel: 'Ligne classique',
    itemCountLabelEn: 'Classic line',
  },
  {
    id: 'chemises',
    slug: 'chemises',
    title: 'Chemises',
    titleEn: 'Shirts',
    subtitle: 'Coupes fluides et nettes',
    subtitleEn: 'Fluid and crisp cuts',
    description:
      'Chemises en popeline et lin mélangé légers, pensées pour offrir aisance et élégance sous le climat ouest-africain.',
    descriptionEn:
      'Lightweight poplin and blended linen shirts, designed to offer absolute comfort and style under the West African sun.',
    image:
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Chemise à coupe fluide et tissu aéré',
    imageAltEn: 'Flowy and lightweight breathable shirt',
    featured: true,
    itemCountLabel: 'Coupes actuelles',
    itemCountLabelEn: 'Contemporary cuts',
  },
  {
    id: 'pantalons',
    slug: 'pantalons',
    title: 'Pantalons',
    titleEn: 'Pants',
    subtitle: 'Confort et structure',
    subtitleEn: 'Comfort and structure',
    description:
      'Chinos et pantalons droits en toile de coton souple, garantissant liberté de mouvement et tenue irréprochable toute la journée.',
    descriptionEn:
      'Chinos and straight-cut trousers in soft cotton twill, guaranteeing freedom of movement and a perfect fit all day long.',
    image:
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Pantalon chino en coton bien structuré',
    imageAltEn: 'Well-structured cotton chino trousers',
    featured: true,
    itemCountLabel: 'Coupes quotidiennes',
    itemCountLabelEn: 'Everyday fits',
  },
  {
    id: 'jeans',
    slug: 'jeans',
    title: 'Jeans',
    titleEn: 'Jeans',
    subtitle: 'Denim authentique',
    subtitleEn: 'Authentic denim',
    description:
      'Toile denim robuste et confortable, délavages sobres et coutures renforcées pour un basique qui gagne en caractère avec le temps.',
    descriptionEn:
      'Sturdy and comfortable denim twill, sober washes, and reinforced stitching for a wardrobe basic that gains character with age.',
    image:
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Jeans en toile denim sobre et résistante',
    imageAltEn: 'Sober and highly durable authentic denim jeans',
    featured: false,
    itemCountLabel: 'Denim durable',
    itemCountLabelEn: 'Durable denim',
  },
  {
    id: 'collection-homme',
    slug: 'collection-homme',
    title: 'Collection Homme',
    titleEn: "Men's Collection",
    subtitle: 'Ligne masculine intemporelle',
    subtitleEn: 'Timeless masculine line',
    description:
      'Une sélection complète de pièces indispensables pour le vestiaire masculin contemporain : coupes précises et matières naturelles.',
    descriptionEn:
      'A complete curation of essential garments for the contemporary male wardrobe: precise cuts and natural fabrics.',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Modèle masculin portant une tenue sobre et élégante',
    imageAltEn: 'Male model wearing a sober, elegant outfit',
    featured: true,
    itemCountLabel: 'Vestiaire complet',
    itemCountLabelEn: 'Complete wardrobe',
  },
  {
    id: 'collection-femme',
    slug: 'collection-femme',
    title: 'Collection Femme',
    titleEn: "Women's Collection",
    subtitle: 'Ligne féminine épurée',
    subtitleEn: 'Sleek feminine line',
    description:
      'Silhouettes minimales, matières douces et tombés impeccables, pensés pour allier féminité naturelle et aisance quotidienne.',
    descriptionEn:
      'Minimalist silhouettes, soft textiles, and flawless drape designed to combine natural elegance with daily comfort.',
    image:
      'https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Modèle féminine portant des vêtements épurés',
    imageAltEn: 'Female model showcasing elegant and clean essentials',
    featured: true,
    itemCountLabel: 'Vestiaire complet',
    itemCountLabelEn: 'Complete wardrobe',
  },
  {
    id: 'essentials',
    slug: 'essentials',
    title: 'Essentials',
    titleEn: 'Essentials',
    subtitle: 'Les piliers de votre garde-robe',
    subtitleEn: 'The pillars of your wardrobe',
    description:
      'Les pièces fondamentales à porter en toute saison, faciles à assortir et conçues pour durer sans jamais se démoder.',
    descriptionEn:
      'The fundamental garments to wear in any season, easy to style and engineered to last without ever going out of fashion.',
    image:
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Pièces vestimentaires neutres et polyvalentes',
    imageAltEn: 'Neutral and highly versatile wardrobe core pieces',
    featured: true,
    itemCountLabel: 'Permanents',
    itemCountLabelEn: 'Permanent essentials',
  },
  {
    id: 'premium',
    slug: 'premium',
    title: 'Ligne Premium',
    titleEn: 'Premium Line',
    subtitle: 'Finitions d’exception',
    subtitleEn: 'Exceptional finishes',
    description:
      'Des textiles à densité supérieure, finitions sellier et détails subtils pour une expérience de confort et de maintien supérieure.',
    descriptionEn:
      'High-density textiles, precise trims, and subtle details for a superior comfort and support experience.',
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Vêtements aux finitions soignées de la ligne Premium',
    imageAltEn: 'Finely trimmed upscale garments from our Premium Line',
    featured: false,
    itemCountLabel: 'Séries soignées',
    itemCountLabelEn: 'Exquisite series',
  },
];

export function getLocalizedCollection(c: Collection, lang: string) {
  return {
    ...c,
    title: lang === 'en' && c.titleEn ? c.titleEn : c.title,
    subtitle: lang === 'en' && c.subtitleEn ? c.subtitleEn : c.subtitle,
    description: lang === 'en' && c.descriptionEn ? c.descriptionEn : c.description,
    imageAlt: lang === 'en' && c.imageAltEn ? c.imageAltEn : c.imageAlt,
    itemCountLabel: lang === 'en' && c.itemCountLabelEn ? c.itemCountLabelEn : c.itemCountLabel,
  };
}

export function getLocalizedCollections(lang: string) {
  return collectionsData.map((c) => getLocalizedCollection(c, lang));
}

export function getCollectionBySlug(slug: string, lang: string = 'fr'): Collection | undefined {
  const col = collectionsData.find((c) => c.slug === slug);
  return col ? getLocalizedCollection(col, lang) : undefined;
}
