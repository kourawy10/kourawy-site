/**
 * Questions Fréquemment Posées (FAQ) Kourawy
 * Répond avec transparence et précision aux questions courantes des clients, partenaires et curieux.
 */
export interface FAQItem {
  id: string;
  category: 'marque' | 'achats' | 'produits' | 'contact';
  question: string;
  questionEn?: string;
  answer: string;
  answerEn?: string;
}

export const faqData: FAQItem[] = [
  {
    id: 'quest-ce-que-kourawy',
    category: 'marque',
    question: 'Qu’est-ce que Kourawy ?',
    questionEn: 'What is Kourawy?',
    answer:
      'Kourawy est une marque de vêtements développée en Guinée avec l’ambition d’offrir des pièces de qualité, confortables, durables et intemporelles à des prix accessibles. Notre signature « La qualité au quotidien » résume notre engagement à rendre le vêtement bien fait accessible à tous.',
    answerEn:
      'Kourawy is a clothing brand developed in Guinea with the ambition of offering high-quality, comfortable, durable, and timeless pieces at accessible prices. Our signature "Quality for everyday life" summarizes our commitment to making well-made clothing accessible to everyone.'
  },
  {
    id: 'ou-est-basee-kourawy',
    category: 'marque',
    question: 'Où est basée Kourawy ?',
    questionEn: 'Where is Kourawy based?',
    answer:
      'La marque Kourawy est basée à Conakry, en République de Guinée. Nos équipes de conception, de direction et de service client sont ancrées localement pour répondre aux attentes et aux réalités climatiques de notre marché.',
    answerEn:
      'The Kourawy brand is based in Conakry, Republic of Guinea. Our design, management, and customer support teams are locally rooted to meet the expectations and climatic realities of our market.'
  },
  {
    id: 'ou-acheter-les-produits',
    category: 'achats',
    question: 'Où puis-je acheter les produits Kourawy ?',
    questionEn: 'Where can I purchase Kourawy products?',
    answer:
      'L’expérience d’achat complète — consultation des disponibilités, sélection des tailles et des couleurs, commande, paiement et suivi de livraison — s’effectue exclusivement à travers les applications mobiles officielles Kourawy (iOS et Android). Ce site web officiel constitue notre vitrine institutionnelle et le canal de présentation de notre univers de marque.',
    answerEn:
      'The complete shopping experience — checking product availability, choosing sizes and colors, placing orders, processing payments, and tracking deliveries — takes place exclusively through the official Kourawy mobile applications (iOS and Android). This official website serves as our institutional showcase and the primary portal for presenting our brand universe.'
  },
  {
    id: 'comment-commander',
    category: 'achats',
    question: 'Comment commander un vêtement Kourawy ?',
    questionEn: 'How do I order a Kourawy garment?',
    answer:
      'Pour commander, téléchargez simplement l’application mobile officielle Kourawy sur votre smartphone, créez votre profil en quelques secondes, parcourez les collections et validez votre panier. Vous recevrez une confirmation immédiate ainsi qu’un suivi précis de l’acheminement de votre colis.',
    answerEn:
      'To order, simply download the official Kourawy mobile app onto your smartphone, create your profile in seconds, browse the collections, and place your order. You will receive an immediate confirmation along with accurate tracking of your delivery.'
  },
  {
    id: 'comment-connaitre-ma-taille',
    category: 'produits',
    question: 'Comment connaître ma taille avant de commander ?',
    questionEn: 'How do I find my size before ordering?',
    answer:
      'Chaque fiche produit disponible dans l’application mobile Kourawy intègre un guide morphologique précis avec les mesures détaillées en centimètres (tour de poitrine, longueur de dos, tour de taille). Nos coupes régulières sont calibrées pour respecter les standards d’aisance au quotidien.',
    answerEn:
      'Each product page in the Kourawy mobile app features a precise sizing guide with detailed measurements in centimeters (chest, back length, waist). Our regular cuts are carefully calibrated to ensure everyday comfort and movement.'
  },
  {
    id: 'ou-sont-fabriques-les-vetements',
    category: 'produits',
    question: 'Où sont fabriqués les vêtements Kourawy ?',
    questionEn: 'Where are Kourawy clothes manufactured?',
    answer:
      'Kourawy sélectionne rigoureusement ses ateliers de confection et ses fournisseurs selon des critères stricts de qualité de tissage, de solidité des coutures et de respect des normes de fabrication. Nous établissons des partenariats industriels fiables avec des ateliers spécialisés pour chaque typologie de pièce (mailles pour les t-shirts et polos, tissage pour les chemises et denims).',
    answerEn:
      'Kourawy rigorously selects its manufacturing workshops and suppliers based on strict criteria for weaving quality, stitching strength, and ethical manufacturing standards. We establish reliable industrial partnerships with specialized facilities for each product type (knits for t-shirts and polo shirts, weaving for woven shirts and denim).'
  },
  {
    id: 'selection-des-matieres',
    category: 'produits',
    question: 'Comment Kourawy sélectionne-t-elle ses matières ?',
    questionEn: 'How does Kourawy select its fabrics?',
    answer:
      'Nous privilégions les fibres naturelles, principalement le coton peigné et les mélanges aérés, reconnus pour leur respirabilité et leur douceur sous climat chaud. Chaque matière fait l’objet de tests préalables de résistance aux lavages répétés et de tenue des couleurs avant son intégration dans nos collections.',
    answerEn:
      'We favor natural fibers, mainly combed cotton and airy blends, renowned for their breathability and softness in warm climates. Every fabric undergoes prior testing for washing resistance and color retention before being introduced into our collections.'
  },
  {
    id: 'comment-contacter-kourawy',
    category: 'contact',
    question: 'Comment contacter le service client Kourawy ?',
    questionEn: 'How do I contact Kourawy customer support?',
    answer:
      'Vous pouvez joindre notre équipe par email à contact@kourawy.store ou directement par messagerie instantanée sur notre compte WhatsApp officiel au +224 628 275 389. Pour les échanges avec les fabricants et fournisseurs, écrivez à sourcing@kourawy.store.',
    answerEn:
      'You can reach our team by email at contact@kourawy.store or directly via instant messaging on our official WhatsApp account at +224 628 275 389. For inquiries from manufacturers and suppliers, please write to sourcing@kourawy.store.'
  }
];

export function getLocalizedFaq(lang: string) {
  return faqData.map((item) => ({
    id: item.id,
    category: item.category,
    question: lang === 'en' && item.questionEn ? item.questionEn : item.question,
    answer: lang === 'en' && item.answerEn ? item.answerEn : item.answer,
  }));
}
