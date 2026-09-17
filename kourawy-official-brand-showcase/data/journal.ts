/**
 * Articles éditoriaux du Journal Kourawy
 * Conçus pour valoriser l'expertise textile, le conseil vestimentaire et le référencement naturel en Guinée et en Afrique de l'Ouest.
 */
export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  titleEn?: string;
  excerpt: string;
  excerptEn?: string;
  category: string;
  categoryEn?: string;
  publishedAt: string;
  publishedDate?: string;
  publishedDateDisplay: string;
  publishedDateDisplayEn?: string;
  author: {
    name: string;
    role: string;
    roleEn?: string;
  };
  readTime: string;
  readTimeEn?: string;
  image: string;
  imageAlt: string;
  imageAltEn?: string;
  seoTitle: string;
  seoTitleEn?: string;
  metaDescription: string;
  metaDescriptionEn?: string;
  content: string[]; // Paragraphes formatés
  contentEn?: string[];
  keyTakeaways: string[];
  keyTakeawaysEn?: string[];
}

export const journalArticles: JournalArticle[] = [
  {
    id: '1',
    slug: 'reconnaitre-un-tshirt-de-qualite',
    title: 'Comment reconnaître un t-shirt de qualité : matière, grammage et finitions',
    titleEn: 'How to Recognize a Quality T-Shirt: Material, Weight, and Finishes',
    excerpt:
      'Col qui ne gondole pas, coutures régulières et fibres résistantes : découvrez les critères essentiels pour identifier un t-shirt véritablement durable.',
    excerptEn:
      'A collar that doesn’t warp, uniform stitching, and resilient fibers: discover the essential criteria for identifying a truly durable t-shirt.',
    category: 'Guide Textile',
    categoryEn: 'Textile Guide',
    publishedAt: '2026-03-10',
    publishedDateDisplay: '10 Mars 2026',
    publishedDateDisplayEn: 'March 10, 2026',
    author: {
      name: 'Équipe Éditoriale Kourawy',
      role: 'Département Qualité & Sourcing',
      roleEn: 'Quality & Sourcing Department',
    },
    readTime: '4 min de lecture',
    readTimeEn: '4 min read',
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'T-shirt en coton de qualité aux coutures soignées',
    imageAltEn: 'Quality cotton t-shirt with neat and durable seams',
    seoTitle: 'Comment reconnaître un t-shirt de qualité | Journal Kourawy',
    seoTitleEn: 'How to Recognize a Quality T-Shirt | Kourawy Journal',
    metaDescription:
      'Col indéformable, coton peigné, grammage et coutures régulières : apprenez à reconnaître un t-shirt durable et résistant au quotidien à Conakry.',
    metaDescriptionEn:
      'Non-stretching collar, combed cotton, fabric weight, and uniform stitching: learn to identify a durable, everyday t-shirt in Conakry.',
    keyTakeaways: [
      'Privilégiez le coton peigné aux fibres longues pour limiter le boulochage.',
      'Examinez la bande de propreté et la tension du col côtelé.',
      'Vérifiez la rectitude des coutures d’épaules pour garantir la longévité de la coupe.',
    ],
    keyTakeawaysEn: [
      'Choose combed cotton with long fibers to prevent pilling.',
      'Check the neck tape and the tension of the ribbed collar.',
      'Verify the straightness of shoulder seams to guarantee fit longevity.',
    ],
    content: [
      'Un bon t-shirt fait partie des pièces les plus sollicitées d’une garde-robe. Porté presque tous les jours sous un climat chaud, lavé fréquemment, il est souvent le premier vêtement à montrer des signes de fatigue : col qui se détend, coutures qui vrillent sur le côté, matière qui devient rêche ou transparente.',
      'Le premier indicateur réside dans le choix de la fibre. Un coton peigné (combed cotton) a été débarrassé de ses impuretés et des fibres les plus courtes au moment du filage. Résultat : le tissu est non seulement plus doux au contact direct de la peau, mais il présente également une meilleure résistance mécanique face aux tractions répétées.',
      'Le second point névralgique est le col. Un t-shirt de qualité intègre généralement un bord-côte renforcé intégrant une discrète pointe d’élasthanne pour retrouver sa forme initiale après chaque enfilage, complété d’une bande de propreté sur l’encolure arrière qui empêche l’étirement.',
      'Enfin, observez les coutures d’emmanchures et d’ourlets : des points de surjet réguliers et serrés protègent le tissu de l’effilochage prématuré, assurant au vêtement une tenue irréprochable au fil des mois.',
    ],
    contentEn: [
      'A good t-shirt is one of the most worn pieces in any wardrobe. Worn almost daily in warm climates and washed frequently, it is often the first garment to show signs of wear: a sagging collar, twisting side seams, or fabric that becomes rough or translucent.',
      'The primary indicator of quality lies in the fiber selection. Combed cotton has been cleared of impurities and short fibers during spinning. The result: the fabric is not only softer against the skin but also has much greater physical resistance to repeated stretching.',
      'The second critical point is the collar. A high-quality t-shirt typically features a reinforced rib-knit collar with a subtle touch of elastane to ensure it returns to its original shape after every wear, complemented by a back neck tape that prevents stretching.',
      'Finally, inspect the seams around the armholes and hems: uniform, tight overlock stitches protect the fabric from premature fraying, keeping the garment looking pristine month after month.',
    ],
  },
  {
    id: '2',
    slug: 'comprendre-le-coton-et-le-grammage-gsm',
    title: 'Comprendre le coton et le grammage (GSM) des tissus au quotidien',
    titleEn: 'Understanding Cotton and Fabric Weight (GSM) for Everyday Wear',
    excerpt:
      'Le grammage en grammes par mètre carré (GSM) est souvent cité, mais que signifie-t-il vraiment pour le confort thermique et la longévité ?',
    excerptEn:
      'Fabric weight in Grams per Square Meter (GSM) is often quoted, but what does it actually mean for thermal comfort and durability?',
    category: 'Matières & Savoir-Faire',
    categoryEn: 'Fabrics & Expertise',
    publishedAt: '2026-02-24',
    publishedDateDisplay: '24 Février 2026',
    publishedDateDisplayEn: 'February 24, 2026',
    author: {
      name: 'Équipe Éditoriale Kourawy',
      role: 'Atelier Textile',
      roleEn: 'Textile Workshop',
    },
    readTime: '5 min de lecture',
    readTimeEn: '5 min read',
    image:
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Rouleaux et texture de toile de coton naturelle',
    imageAltEn: 'Rolls and texture of natural cotton fabric',
    seoTitle: 'Comprendre le grammage textile GSM et le coton | Kourawy',
    seoTitleEn: 'Understanding Textile GSM and Cotton Weights | Kourawy',
    metaDescription:
      'Qu’est-ce que le GSM dans le textile ? Comment choisir le grammage idéal pour concilier légèreté, respirabilité et durabilité sous un climat tropical.',
    metaDescriptionEn:
      'What is GSM in textiles? How to choose the perfect fabric weight to balance lightness, breathability, and durability in a tropical climate.',
    keyTakeaways: [
      'Le GSM mesure la masse surfacique du tissu (grammes par mètre carré).',
      'Un grammage trop lourd en climat chaud peut nuire à la respirabilité.',
      'Un tissu léger mais bien filé peut être plus durable qu’un tissu lourd de piètre composition.',
    ],
    keyTakeawaysEn: [
      'GSM measures the fabric density in grams per square meter.',
      'Extremely heavy fabric in warm weather can compromise breathability.',
      'A lightweight but finely spun fabric can be more durable than a heavy, poorly made fabric.',
    ],
    content: [
      'Dans le vocabulaire textile, l’acronyme GSM correspond à « Grams per Square Meter » (grammes par mètre carré). Cet indice indique la densité surfacique d’une étoffe. Dans l’imaginaire collectif, un chiffre élevé est souvent synonyme de solidité, mais la reality est plus nuancée.',
      'Pour un t-shirt du quotidien destiné à être porté à Conakry ou en Afrique de l’Ouest, où la chaleur et l’hygrométrie sont constantes, un grammage situé entre 170 et 200 GSM offre un équilibre optimal : la matière a suffisamment de tenue pour ne pas être transparente ou collante, tout en conservant une circulation d’air naturelle.',
      'Un grammage très lourd (240 GSM et plus) confère une silhouette très structurée, recherchée pour un style streetwear ou de mi-saison, mais peut s’avérer inconfortable en plein soleil. À l’inverse, un grammage inférieur à 140 GSM sera très aéré mais demandera un soin attentif au lavage.',
      'Chez Kourawy, notre démarche consiste à calibrer chaque type de pièce selon son usage réel : respirabilité immédiate pour nos polos et t-shirts quotidiens, robustesse accrue pour nos toiles de pantalons et nos denims.',
    ],
    contentEn: [
      'In textile terminology, GSM stands for "Grams per Square Meter." This metric defines the density and weight of a fabric. While a higher number is often thought to guarantee strength, the reality is far more nuanced.',
      'For an everyday t-shirt intended for Conakry or broader West Africa, where heat and humidity are constant, a fabric weight between 170 and 200 GSM offers the perfect balance: the material has enough drape to avoid being translucent or sticky, while allowing natural air circulation.',
      'A very heavy fabric (240 GSM and up) provides a highly structured silhouette favored for streetwear or cooler seasons, but can quickly become uncomfortable in full sunlight. On the other hand, fabric under 140 GSM is extremely airy but requires careful washing.',
      'At Kourawy, our approach is to calibrate every piece based on its real-world use: immediate breathability for our everyday polo shirts and t-shirts, and extra sturdiness for our trousers and denims.',
    ],
  },
  {
    id: '3',
    slug: 'entretenir-ses-vetements-en-climat-chaud-et-humide',
    title: 'Entretenir ses vêtements en climat chaud et humide : le guide pratique',
    titleEn: 'Caring for Clothing in Hot and Humid Climates: The Practical Guide',
    excerpt:
      'Lavage à l’eau tiède, séchage à l’ombre et aération : les gestes simples pour préserver l’éclat des couleurs et la souplesse de vos textiles.',
    excerptEn:
      'Warm water washing, shade drying, and proper aeration: simple habits to preserve color vibrancy and fabric softness.',
    category: 'Entretien & Durabilité',
    categoryEn: 'Care & Durability',
    publishedAt: '2026-02-12',
    publishedDateDisplay: '12 Février 2026',
    publishedDateDisplayEn: 'February 12, 2026',
    author: {
      name: 'Équipe Éditoriale Kourawy',
      role: 'Conseil Soin Vêtements',
      roleEn: 'Clothing Care Advisor',
    },
    readTime: '3 min de lecture',
    readTimeEn: '3 min read',
    image:
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Vêtements propres séchant à l’air libre',
    imageAltEn: 'Clean clothing air-drying in a gentle breeze',
    seoTitle: 'Entretenir ses vêtements en climat tropical et humide | Kourawy',
    seoTitleEn: 'Caring for Clothing in Tropical and Humid Climates | Kourawy',
    metaDescription:
      'Conseils pratiques pour laver, sécher et entretenir vos vêtements en coton en Guinée : préservez les fibres, évitez le rétrécissement et gardez les couleurs intactes.',
    metaDescriptionEn:
      'Practical tips to wash, dry, and maintain your cotton clothes in Guinea: protect fibers, prevent shrinkage, and keep colors deep and intact.',
    keyTakeaways: [
      'Lavez sur l’envers pour protéger les fibres extérieures des frottements.',
      'Évitez le séchage en plein zénith : privilégiez un endroit ombragé et ventilé.',
      'Suspendez vos pièces sur des cintres adaptés pour conserver le galbe des épaules.',
    ],
    keyTakeawaysEn: [
      'Always wash garments inside-out to protect external fibers from friction.',
      'Avoid drying under direct mid-day sun: favor a shaded, well-ventilated spot.',
      'Hang your pieces on proper hangers to keep the natural shoulder shape.',
    ],
    content: [
      'Un vêtement bien entretenu prolonge sa durée de vie de plusieurs années. Sous un climat tropical comme celui de Conakry, la sueur, l’humidité ambiante et la puissance des rayons UV sollicitent fortement les pigments de teinture et la cohésion des fils.',
      'Le premier réflexe consiste à toujours retourner ses t-shirts, polos et chemises sur l’envers avant de les immerger. Cela préserve la face visible des frottements contre les parois du tambour ou lors du brossage manuel.',
      'Pour le séchage, le soleil direct est un désinfectant naturel efficace, mais une exposition prolongée aux heures les plus chaudes peut délaver les teintes foncées (notamment le noir et le vert profond). Le séchage à l’ombre dans un espace ventilé préserve la saturation originelle des teintes.',
      'Concernant le repassage, réglez le fer à température modérée lorsque le tissu est encore légèrement humide : la vapeur naturelle détend les plis du coton sans brûler la fibre.',
    ],
    contentEn: [
      'A well-maintained garment extends its lifespan by several years. In a tropical climate like Conakry’s, perspiration, high ambient humidity, and powerful UV rays place great strain on dye pigments and stitching thread cohesion.',
      'The first habit to form is turning t-shirts, polos, and shirts inside-out before washing. This shields the outer, visible face of the fabric from friction against the washing machine drum or during hand washing.',
      'While direct sunlight is an effective natural disinfectant, prolonged exposure during peak hours can bleach dark hues (especially black and deep forest green). Drying in the shade in a breezy area preserves the original rich color saturation.',
      'When ironing, set the iron to moderate heat while the fabric is still slightly damp: the natural steam relaxes cotton creases easily without burning the fibers.',
    ],
  },
  {
    id: '4',
    slug: 'bien-choisir-sa-coupe-et-sa-taille',
    title: 'Bien choisir sa coupe et sa taille pour un confort optimal',
    titleEn: 'Choosing the Right Cut and Size for Optimal Comfort',
    excerpt:
      'Ligne d’épaules, longueur de torse et aisance : nos repères pour choisir des pièces valorisantes qui ne compriment jamais le corps.',
    excerptEn:
      'Shoulder lines, body length, and breathing room: our guide to choosing flattering pieces that never compress your body.',
    category: 'Morphologie & Style',
    categoryEn: 'Fit & Style',
    publishedAt: '2026-01-28',
    publishedDateDisplay: '28 Janvier 2026',
    publishedDateDisplayEn: 'January 28, 2026',
    author: {
      name: 'Équipe Éditoriale Kourawy',
      role: 'Stylisme & Ergonomie',
      roleEn: 'Styling & Ergonomics',
    },
    readTime: '4 min de lecture',
    readTimeEn: '4 min read',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Homme portant des vêtements à la coupe adaptée et moderne',
    imageAltEn: 'Man wearing a well-fitted and modern classic outfit',
    seoTitle: 'Guide des tailles et coupes de vêtements au quotidien | Kourawy',
    seoTitleEn: 'Everyday Clothing Size and Cut Guide | Kourawy',
    metaDescription:
      'Comment trouver la bonne taille de t-shirt ou de pantalon ? Guide Kourawy pour identifier sa coupe idéale sans serrer ni flotter.',
    metaDescriptionEn:
      'How to find the right t-shirt or trousers size? The Kourawy guide to identifying your ideal fit without feeling squeezed or swimming in fabric.',
    keyTakeaways: [
      'La couture d’épaule doit coïncider avec l’os acromion pour une coupe classique.',
      'Une coupe bien pensée laisse 2 à 3 cm d’aisance au niveau du torse.',
      'Sur l’application mobile Kourawy, chaque article dispose de son guide morphologique dédié.',
    ],
    keyTakeawaysEn: [
      'The shoulder seam should sit perfectly on the acromion bone for a classic fit.',
      'A well-designed pattern leaves 2 to 3 cm of breathing room around the chest.',
      'On the Kourawy mobile app, every single article includes its own dedicated sizing chart.',
    ],
    content: [
      'Le confort d’un vêtement ne dépend pas uniquement de la matière : il découle avant tout de l’adéquation entre la silhouette corporelle et le patronage de la pièce.',
      'Pour les hauts (t-shirts, polos, chemises), le repère fondamental est la ligne de carrure. Lorsque la couture d’emmanchure repose exactement au point de cassure de l’épaule, le vêtement tombe naturellement sans tirer dans le dos. Pour un style relaxé ou contemporain, une épaule tombante apporte du volume sans négliger la structure.',
      'Au niveau de la longueur, un basique bien proportionné doit couvrir la ceinture d’environ 5 à 7 centimètres lorsque vous levez les bras, évitant ainsi d’avoir à le réajuster constamment dans la journée.',
      'Pour vos futures commandes sur l’application Kourawy, vous retrouverez des tableaux de mesures exacts en centimètres pour choisir avec certitude la taille qui vous correspond.',
    ],
    contentEn: [
      'The comfort of a garment does not depend solely on its fabric; it stems first and foremost from how well the pattern fits the lines of your body.',
      'For tops (t-shirts, polos, shirts), the primary reference is the shoulder width. When the sleeve seam rests exactly at the edge of your shoulder, the garment falls naturally without pulling across your back. For a relaxed or contemporary style, a slightly dropped shoulder adds comfort without losing structure.',
      'In terms of length, a well-proportioned basic should cover the beltline by about 5 to 7 centimeters when raising your arms, ensuring you don’t have to constantly readjust it throughout the day.',
      'For all future orders on the Kourawy app, you will find precise measurement tables in centimeters to select your matching size with absolute confidence.',
    ],
  },
  {
    id: '5',
    slug: 'pourquoi-kourawy-privilegie-le-design-intemporel',
    title: 'L’approche Kourawy : pourquoi nous privilégions le vêtement intemporel',
    titleEn: 'The Kourawy Approach: Why We Build Timeless Garments',
    excerpt:
      'Face à la fast-fashion éphémère et aux tendances jetables, Kourawy fait le choix de pièces durables, sobres et faciles à associer au quotidien.',
    excerptEn:
      'Faced with fleeting fast-fashion and disposable trends, Kourawy chooses durable, sober, and easy-to-style daily pieces.',
    category: 'Notre Vision',
    categoryEn: 'Our Vision',
    publishedAt: '2026-01-15',
    publishedDateDisplay: '15 Janvier 2026',
    publishedDateDisplayEn: 'January 15, 2026',
    author: {
      name: 'Équipe Éditoriale Kourawy',
      role: 'Fondation & Philosophie',
      roleEn: 'Foundations & Philosophy',
    },
    readTime: '4 min de lecture',
    readTimeEn: '4 min read',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Style intemporel et sobre en lumière naturelle',
    imageAltEn: 'Timeless and elegant style in bright natural light',
    seoTitle: 'Notre vision du vêtement intemporel en Guinée | Kourawy',
    seoTitleEn: 'Our Vision of Timeless Clothing in Guinea | Kourawy',
    metaDescription:
      'Pourquoi concevoir des vêtements durables et intemporels en Guinée ? Découvrez la vision Kourawy pour une mode accessible et pérenne à Conakry.',
    metaDescriptionEn:
      'Why design durable and timeless clothing in Guinea? Discover the Kourawy vision for accessible, long-lasting fashion in Conakry.',
    keyTakeaways: [
      'Une pièce intemporelle se combine sans effort avec le reste du vestiaire.',
      'La simplicité met en valeur la qualité de la matière et des finitions.',
      'Réduire le renouvellement forcé est un choix économique et écologique sensé.',
    ],
    keyTakeawaysEn: [
      'A timeless piece pairs effortlessly with the rest of your wardrobe.',
      'Simplicity shines a spotlight on the quality of fabric and finishes.',
      'Reducing forced wardrobe renewal is a smart economic and environmental choice.',
    ],
    content: [
      'Dans un monde saturé de tendances micro-saisonnières destinées à devenir obsolètes en quelques semaines, posséder des vêtements fiables est un gage de sérénité.',
      'Chez Kourawy, notre ambition en Guinée est de redéfinir la notion d’accessibilité. Être accessible ne signifie pas rogner sur les coutures ou proposer des tissus synthétiques jetables ; cela signifie au contraire proposer des pièces solides, coupées avec justesse, vendues à leur juste valeur sans intermédiaire superflu.',
      'Une palette de couleurs sobres — écru, vert forêt, noir profond, beige sable — permet de combiner chaque pièce les yeux fermés. Le matin, s’habiller redevient un plaisir simple.',
      'En choisissant l’épure plutôt que la surcharge visuelle, nous laissons la personnalité de celui ou celle qui porte le vêtement s’exprimer pleinement.',
    ],
    contentEn: [
      'In a world saturated with micro-seasonal trends destined for obsolescence within weeks, owning reliable clothing brings real peace of mind.',
      'At Kourawy, our ambition in Guinea is to redefine accessibility. Being accessible does not mean cutting corners on stitching or offering disposable synthetic fabrics; on the contrary, it means providing solid, precisely cut pieces sold at their fair value without unnecessary middlemen.',
      'A sober color palette — ecru, forest green, deep black, sand beige — makes pairing garments effortless. In the morning, getting dressed becomes a simple pleasure once again.',
      'By choosing minimalism over visual clutter, we allow the unique personality of the person wearing the garment to take center stage.',
    ],
  },
];

export function getLocalizedArticle(a: JournalArticle, lang: string): JournalArticle {
  return {
    ...a,
    title: lang === 'en' && a.titleEn ? a.titleEn : a.title,
    excerpt: lang === 'en' && a.excerptEn ? a.excerptEn : a.excerpt,
    category: lang === 'en' && a.categoryEn ? a.categoryEn : a.category,
    publishedDateDisplay: lang === 'en' && a.publishedDateDisplayEn ? a.publishedDateDisplayEn : a.publishedDateDisplay,
    readTime: lang === 'en' && a.readTimeEn ? a.readTimeEn : a.readTime,
    seoTitle: lang === 'en' && a.seoTitleEn ? a.seoTitleEn : a.seoTitle,
    metaDescription: lang === 'en' && a.metaDescriptionEn ? a.metaDescriptionEn : a.metaDescription,
    content: lang === 'en' && a.contentEn ? a.contentEn : a.content,
    keyTakeaways: lang === 'en' && a.keyTakeawaysEn ? a.keyTakeawaysEn : a.keyTakeaways,
    imageAlt: lang === 'en' && a.imageAltEn ? a.imageAltEn : a.imageAlt,
    author: {
      ...a.author,
      role: lang === 'en' && a.author.roleEn ? a.author.roleEn : a.author.role,
    }
  };
}

export function getLocalizedArticles(lang: string): JournalArticle[] {
  return journalArticles.map((a) => getLocalizedArticle(a, lang));
}

export function getArticleBySlug(slug: string, lang: string = 'fr'): JournalArticle | undefined {
  const article = journalArticles.find((a) => a.slug === slug);
  return article ? getLocalizedArticle(article, lang) : undefined;
}

export function getRelatedArticles(currentSlug: string, lang: string = 'fr'): JournalArticle[] {
  const filtered = journalArticles.filter((a) => a.slug !== currentSlug).slice(0, 2);
  return filtered.map((a) => getLocalizedArticle(a, lang));
}
