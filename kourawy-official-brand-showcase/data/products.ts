/**
 * Données structurées des pièces et modèles Kourawy
 * Présentation éditoriale sans panier ni transaction directe sur le web.
 */
export interface Product {
  id: string;
  slug: string;
  name: string;
  nameEn?: string;
  collectionSlug: string;
  collectionName: string;
  collectionNameEn?: string;
  shortDescription: string;
  shortDescriptionEn?: string;
  materialDetails: string;
  materialDetailsEn?: string;
  fitDetails: string;
  fitDetailsEn?: string;
  colors: { name: string; nameEn?: string; hex: string }[];
  image: string;
  imageAlt: string;
  imageAltEn?: string;
  isNew?: boolean;
}

export const productsData: Product[] = [
  // T-shirts
  {
    id: 'tshirt-classic-coton',
    slug: 'tshirt-classic-coton',
    name: 'T-shirt Essentiel Col Rond',
    nameEn: 'Round Neck Essential T-Shirt',
    collectionSlug: 't-shirts',
    collectionName: 'T-shirts',
    collectionNameEn: 'T-shirts',
    shortDescription: 'Coton peigné au tombé net, col côtelé renforcé résistant à la déformation.',
    shortDescriptionEn: 'Crisp combed cotton drape with a durable, stretch-resistant ribbed collar.',
    materialDetails: '100% Coton peigné doux, respirant et résistant aux lavages fréquents.',
    materialDetailsEn: '100% Soft combed cotton, highly breathable and wash-resistant.',
    fitDetails: 'Coupe régulière droite, emmanchures confortables adaptées à l’usage quotidien.',
    fitDetailsEn: 'Straight regular fit, comfortable armholes designed for everyday ease.',
    colors: [
      { name: 'Blanc Écru', nameEn: 'Ecru White', hex: '#F7F6F2' },
      { name: 'Vert Forêt Kourawy', nameEn: 'Kourawy Forest Green', hex: '#1C3326' },
      { name: 'Noir Charbon', nameEn: 'Charcoal Black', hex: '#222222' },
      { name: 'Beige Sable', nameEn: 'Sand Beige', hex: '#D6CEBE' },
    ],
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop',
    imageAlt: 'T-shirt essentiel col rond en coton peigné',
    imageAltEn: 'Essential round neck t-shirt in premium combed cotton',
    isNew: true,
  },
  {
    id: 'tshirt-lourd-heavyweight',
    slug: 'tshirt-lourd-heavyweight',
    name: 'T-shirt Densité Supérieure',
    nameEn: 'Heavyweight Premium T-Shirt',
    collectionSlug: 't-shirts',
    collectionName: 'T-shirts',
    collectionNameEn: 'T-shirts',
    shortDescription: 'Matière au grammage structuré pour une tenue impeccable et un style affirmé.',
    shortDescriptionEn: 'Structured heavyweight fabric offering a neat, modern drape and assertive fit.',
    materialDetails: 'Coton lourd à filature compacte, texture douce et dense.',
    materialDetailsEn: 'Heavyweight compact-spun cotton, dense yet soft texture.',
    fitDetails: 'Coupe contemporaine légèrement relaxée, tombé droit et structuré.',
    fitDetailsEn: 'Slightly relaxed modern fit, offering a clean, structured drape.',
    colors: [
      { name: 'Noir Charbon', nameEn: 'Charcoal Black', hex: '#1C1C1C' },
      { name: 'Vert Forêt', nameEn: 'Forest Green', hex: '#1C3326' },
      { name: 'Gris Cendre', nameEn: 'Ash Grey', hex: '#B0B0AA' },
    ],
    image:
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop',
    imageAlt: 'T-shirt lourd densité supérieure',
    imageAltEn: 'High-density heavyweight cotton t-shirt',
  },

  // Polos
  {
    id: 'polo-maille-piquee',
    slug: 'polo-maille-piquee',
    name: 'Polo Classique Maille Piquée',
    nameEn: 'Classic Piqué Polo Shirt',
    collectionSlug: 'polos',
    collectionName: 'Polos',
    collectionNameEn: 'Polo Shirts',
    shortDescription: 'Tricot respirant, patte de boutonnage épurée et col maintenant sa forme.',
    shortDescriptionEn: 'Highly breathable knit, sleek button placket, and collar that holds its shape.',
    materialDetails: 'Maille piquée de coton sélectionné pour son aération sous climat chaud.',
    materialDetailsEn: 'Piqué knit cotton carefully selected for heat dispersion.',
    fitDetails: 'Coupe ajustée naturelle sans serrer, fentes d’aisance latérales.',
    fitDetailsEn: 'Natural regular fit, offering complete ease and side slit ventilation.',
    colors: [
      { name: 'Blanc Craie', nameEn: 'Chalk White', hex: '#F9F8F5' },
      { name: 'Vert Forêt', nameEn: 'Forest Green', hex: '#1C3326' },
      { name: 'Bleu Marine Sombre', nameEn: 'Dark Navy Blue', hex: '#1B2432' },
    ],
    image:
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1000&auto=format&fit=crop',
    imageAlt: 'Polo en maille piquée sobre',
    imageAltEn: 'Minimalist polo shirt in classic cotton piqué knit',
    isNew: true,
  },

  // Chemises
  {
    id: 'chemise-popeline-legere',
    slug: 'chemise-popeline-legere',
    name: 'Chemise Popeline Respirante',
    nameEn: 'Breathable Poplin Shirt',
    collectionSlug: 'chemises',
    collectionName: 'Chemises',
    collectionNameEn: 'Shirts',
    shortDescription: 'Tissu léger et soyeux, col souple et boutons ton sur ton discrets.',
    shortDescriptionEn: 'Light and silky poplin fabric, soft collar, and matching buttons.',
    materialDetails: 'Popeline de coton aérée favorisant la fraîcheur.',
    materialDetailsEn: 'Flowy poplin cotton favoring absolute freshness.',
    fitDetails: 'Coupe semi-ajustée pouvant se porter rentrée ou par-dessus le pantalon.',
    fitDetailsEn: 'Semi-fitted cut that looks sleek tucked in or worn loose.',
    colors: [
      { name: 'Blanc Pur', nameEn: 'Pure White', hex: '#FFFFFF' },
      { name: 'Ciel Pâle', nameEn: 'Pale Blue', hex: '#D8E2DC' },
      { name: 'Vert Doux', nameEn: 'Soft Sage', hex: '#8F9E8B' },
    ],
    image:
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1000&auto=format&fit=crop',
    imageAlt: 'Chemise popeline légère',
    imageAltEn: 'Lightweight poplin cotton shirt',
  },

  // Pantalons
  {
    id: 'pantalon-chino-droit',
    slug: 'pantalon-chino-droit',
    name: 'Pantalon Chino Quotidien',
    nameEn: 'Everyday Chino Pants',
    collectionSlug: 'pantalons',
    collectionName: 'Pantalons',
    collectionNameEn: 'Pants',
    shortDescription: 'Toile de coton souple avec une touche d’élasticité pour la marche active.',
    shortDescriptionEn: 'Soft cotton fabric with a hint of stretch built for active walking.',
    materialDetails: 'Sergé de coton souple et résistant aux frottements.',
    materialDetailsEn: 'Flexible cotton twill built for movement and abrasion resistance.',
    fitDetails: 'Jambe droite équilibrée, taille mi-haute assurant un maintien naturel.',
    fitDetailsEn: 'Balanced straight leg, mid-rise waist ensuring a natural, sturdy fit.',
    colors: [
      { name: 'Beige Sable', nameEn: 'Sand Beige', hex: '#D2C4B2' },
      { name: 'Vert Olive Foncé', nameEn: 'Dark Olive Green', hex: '#313D2F' },
      { name: 'Noir Ébène', nameEn: 'Ebony Black', hex: '#1F1F1F' },
    ],
    image:
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1000&auto=format&fit=crop',
    imageAlt: 'Pantalon chino coupe droite',
    imageAltEn: 'Straight-leg regular chino trousers',
    isNew: true,
  },

  // Jeans
  {
    id: 'jean-droit-classique',
    slug: 'jean-droit-classique',
    name: 'Jean Droit Authentique',
    nameEn: 'Authentic Straight Jeans',
    collectionSlug: 'jeans',
    collectionName: 'Jeans',
    collectionNameEn: 'Jeans',
    shortDescription: 'Denim pur coton à tissage serré, coutures doubles renforcées.',
    shortDescriptionEn: 'Tight-weave pure cotton denim, double reinforced stitching.',
    materialDetails: 'Denim robuste, conçu pour s’assouplir et s’embellir avec le temps.',
    materialDetailsEn: 'Heavyweight raw denim, designed to soften and gain character over time.',
    fitDetails: 'Coupe intemporelle Regular Fit, bas de jambe droit.',
    fitDetailsEn: 'Timeless Regular Fit with a classic straight leg opening.',
    colors: [
      { name: 'Bleu Brut', nameEn: 'Raw Blue', hex: '#20324F' },
      { name: 'Noir Dépassé', nameEn: 'Washed Black', hex: '#2A2A2A' },
    ],
    image:
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000&auto=format&fit=crop',
    imageAlt: 'Jean droit en denim authentique',
    imageAltEn: 'Straight fit authentic denim jeans',
  },

  // Collection Homme
  {
    id: 'vestiaire-homme-complet',
    slug: 'vestiaire-homme-complet',
    name: 'Ensemble Casual Structuré Homme',
    nameEn: 'Men’s Structured Casual Outfit',
    collectionSlug: 'collection-homme',
    collectionName: 'Collection Homme',
    collectionNameEn: "Men's Collection",
    shortDescription: 'Coordination harmonieuse des essentiels masculins pensés pour Conakry.',
    shortDescriptionEn: 'Harmonious pairing of masculine essentials engineered for Conakry.',
    materialDetails: 'Fibres naturelles légères et respirantes.',
    materialDetailsEn: 'Lightweight, ultra-breathable natural fibers.',
    fitDetails: 'Silhouettes fluides et modernes garantissant aisance thermique.',
    fitDetailsEn: 'Fluid, modern silhouettes offering maximum thermal comfort.',
    colors: [
      { name: 'Vert Signature', nameEn: 'Signature Green', hex: '#1C3326' },
      { name: 'Sable Chaud', nameEn: 'Warm Sand', hex: '#D8CFBC' },
    ],
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop',
    imageAlt: 'Ensemble masculin sobre et soigné',
    imageAltEn: 'Minimalist, sharp menswear outfit',
    isNew: true,
  },

  // Collection Femme
  {
    id: 'vestiaire-femme-epure',
    slug: 'vestiaire-femme-epure',
    name: 'Silhouette Épurée Femme',
    nameEn: 'Women’s Minimal Silhouette',
    collectionSlug: 'collection-femme',
    collectionName: 'Collection Femme',
    collectionNameEn: "Women's Collection",
    shortDescription: 'Lignes nettes et tombé délicat pour un vestiaire du quotidien alliant simplicité et distinction.',
    shortDescriptionEn: 'Sharp lines and elegant drape for an everyday wardrobe marrying simplicity and distinction.',
    materialDetails: 'Cotons fins et soyeux sélectionnés pour leur fraîcheur.',
    materialDetailsEn: 'Fine, silky cotton selections picked for airflow and softness.',
    fitDetails: 'Coupes ergonomiques valorisant la démarche naturelle.',
    fitDetailsEn: 'Ergonomic lines celebrating a natural and graceful posture.',
    colors: [
      { name: 'Écru Naturel', nameEn: 'Natural Ecru', hex: '#FAF7F0' },
      { name: 'Vert Feuille', nameEn: 'Leaf Green', hex: '#2C4434' },
      { name: 'Terre Cuite Douce', nameEn: 'Soft Terracotta', hex: '#A86C56' },
    ],
    image:
      'https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=1000&auto=format&fit=crop',
    imageAlt: 'Modèle féminin arborant des vêtements sobres',
    imageAltEn: 'Female model showcasing elegant and sober essentials',
    isNew: true,
  },

  // Essentials
  {
    id: 'pack-essentiels-quotidien',
    slug: 'pack-essentiels-quotidien',
    name: 'T-shirt Basique Intemporel',
    nameEn: 'Timeless Basic T-Shirt',
    collectionSlug: 'essentials',
    collectionName: 'Essentials',
    collectionNameEn: 'Essentials',
    shortDescription: 'Le t-shirt fondamental : col indéformable, zéro étiquette gênante, douceur immédiate.',
    shortDescriptionEn: 'The fundamental t-shirt: warp-resistant neck, tagless comfort, immediate softness.',
    materialDetails: 'Coton prélavé pour prévenir le rétrécissement au lavage.',
    materialDetailsEn: 'Pre-washed cotton to prevent shrinkage and color bleeding.',
    fitDetails: 'Coupe standard équilibrée.',
    fitDetailsEn: 'Balanced regular standard fit.',
    colors: [
      { name: 'Blanc', nameEn: 'White', hex: '#FFFFFF' },
      { name: 'Noir', nameEn: 'Black', hex: '#1A1A1A' },
      { name: 'Gris Chiné', nameEn: 'Heather Grey', hex: '#A9A9A9' },
    ],
    image:
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1000&auto=format&fit=crop',
    imageAlt: 'T-shirt essentiel de coupe quotidienne',
    imageAltEn: 'Essential everyday cotton t-shirt',
  },

  // Premium
  {
    id: 'chemisette-lin-coton-premium',
    slug: 'chemisette-lin-coton-premium',
    name: 'Chemisette Col Cubain Ligne Premium',
    nameEn: 'Cuban Collar Premium Shirt',
    collectionSlug: 'premium',
    collectionName: 'Ligne Premium',
    collectionNameEn: 'Premium Line',
    shortDescription: 'Mélange coton et lin haute densité, boutons en corozo naturel, ourlets invisibles.',
    shortDescriptionEn: 'High-density linen and cotton blend, natural corozo buttons, blind hem stitching.',
    materialDetails: 'Mélange respirant de lin noble et de coton peigné longue fibre.',
    materialDetailsEn: 'Breathable blend of long-staple combed cotton and noble linen.',
    fitDetails: 'Coupe droite aérée et col tailleur décontracté.',
    fitDetailsEn: 'Light, boxy straight fit with a relaxed flat resort collar.',
    colors: [
      { name: 'Sable Naturel', nameEn: 'Natural Sand', hex: '#E2DCD0' },
      { name: 'Vert Kourawy Profond', nameEn: 'Kourawy Deep Green', hex: '#162A1E' },
    ],
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop',
    imageAlt: 'Chemisette haut de gamme col cubain',
    imageAltEn: 'Upscale resort-style cuban collar shirt',
    isNew: true,
  },
];

export function getLocalizedProduct(p: Product, lang: string) {
  return {
    ...p,
    name: lang === 'en' && p.nameEn ? p.nameEn : p.name,
    collectionName: lang === 'en' && p.collectionNameEn ? p.collectionNameEn : p.collectionName,
    shortDescription: lang === 'en' && p.shortDescriptionEn ? p.shortDescriptionEn : p.shortDescription,
    materialDetails: lang === 'en' && p.materialDetailsEn ? p.materialDetailsEn : p.materialDetails,
    fitDetails: lang === 'en' && p.fitDetailsEn ? p.fitDetailsEn : p.fitDetails,
    imageAlt: lang === 'en' && p.imageAltEn ? p.imageAltEn : p.imageAlt,
    colors: p.colors.map((c) => ({
      ...c,
      name: lang === 'en' && c.nameEn ? c.nameEn : c.name,
    })),
  };
}

export function getLocalizedProducts(lang: string) {
  return productsData.map((p) => getLocalizedProduct(p, lang));
}

export function getProductsByCollection(collectionSlug: string, lang: string = 'fr'): Product[] {
  const filtered = productsData.filter((p) => p.collectionSlug === collectionSlug);
  return filtered.map((p) => getLocalizedProduct(p, lang));
}

export function getProductBySlug(slug: string, lang: string = 'fr'): Product | undefined {
  const p = productsData.find((p) => p.slug === slug);
  return p ? getLocalizedProduct(p, lang) : undefined;
}
