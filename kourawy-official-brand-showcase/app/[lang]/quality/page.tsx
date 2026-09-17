import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import AppDownloadBanner from '@/components/AppDownloadBanner';
import { siteConfig } from '@/config/site';
import {
  Layers,
  Scissors,
  CheckCircle2,
  RefreshCw,
  Eye,
  Package,
  Sparkles,
  ShieldCheck,
  Wind,
} from 'lucide-react';
import { getDictionary } from '@/lib/i18n';

interface QualityPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: QualityPageProps): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === 'en';
  return {
    title: isEn ? 'Quality & Craftsmanship — Our Manufacturing Standards' : 'Qualité & Confection — Nos standards de fabrication',
    description: isEn
      ? 'Discover Kourawy quality standards: rigorous fabric selection, reinforced seams, comfortable patterns, and high wash-resistance.'
      : 'Découvrez la démarche qualité de Kourawy : sélection rigoureuse des étoffes, coutures renforcées, patronages confortables et résistance aux lavages.',
    openGraph: {
      title: isEn ? 'Kourawy Quality & Craftsmanship — Standards of Excellence' : 'Qualité & Confection Kourawy — Nos critères d’exigence',
      description: isEn
        ? 'How Kourawy designs durable, breathable, and comfortable garments for everyday life in Conakry.'
        : 'Comment Kourawy conçoit des vêtements durables, respirants et confortables pour le quotidien à Conakry.',
      url: `${siteConfig.url}/${lang}/quality`,
    },
  };
}

export default async function QualityPage({ params }: QualityPageProps) {
  const { lang } = await params;
  const isEn = lang === 'en';
  const dict = getDictionary(lang);

  const getLocalizedSteps = () => {
    return [
      {
        icon: <Layers className="w-6 h-6 text-[#1C3326]" />,
        title: isEn ? '1. Thread & Fabric Sourcing' : '1. Sélection des tissus & fibres',
        subtitle: isEn ? 'Premium Raw Materials' : 'Matières premières',
        description: isEn
          ? 'We choose long-fiber combed cotton and breathable weaves. Threads are systematically tested for soft touch, color fastness, and thermal properties under high tropical heat.'
          : 'Nous privilégions le coton peigné aux fibres longues et des mélanges respirants. Les fils sont testés pour leur douceur, leur tenue de teinture et leur capacité à laisser respirer la peau sous de fortes chaleurs.',
        detail: isEn ? 'Strictly zero irritating or suffocating synthetic materials.' : 'Pas de matières synthétiques étouffantes ou irritantes.',
      },
      {
        icon: <Scissors className="w-6 h-6 text-[#1C3326]" />,
        title: isEn ? '2. Structural Architecture' : '2. Architecture & Construction',
        subtitle: isEn ? 'Balanced Drafting' : 'Patronage structuré',
        description: isEn
          ? 'Every single piece benefits from a carefully balanced pattern drafting. Shoulder lines, armholes, and collar depths are modeled to complement natural human movement without constraint.'
          : 'Chaque pièce fait l’objet d’un patronage équilibré. Les lignes d’épaules, l’emmanchure et la profondeur d’encolure sont calculées pour accompagner les mouvements naturels sans tiraillement.',
        detail: isEn ? 'Keeps a pristine, structured fall over weeks of wear.' : 'Tombé franc et maintien de la structure dans le temps.',
      },
      {
        icon: <ShieldCheck className="w-6 h-6 text-[#1C3326]" />,
        title: isEn ? '3. Reinforced Stitching' : '3. Coutures & Finitions',
        subtitle: isEn ? 'Reinforced Points' : 'Points de renfort',
        description: isEn
          ? 'Double topstitching on stress zones, reinforced back-neck tapes, and dense stitch counts. This level of precision completely blocks fraying, curling, and early seam slippage.'
          : 'Double surpiqûre aux points de tension, bandes de propreté renforcées sur l’encolure arrière et ourlets minutieux. Ce niveau de précision prévient l’effilochage et le gondolement.',
        detail: isEn ? 'Collars that maintain shape and never stretch out.' : 'Cols qui ne se détendent pas dès les premières utilisations.',
      },
      {
        icon: <Wind className="w-6 h-6 text-[#1C3326]" />,
        title: isEn ? '4. Airflow & Ergonomics' : '4. Coupe & Aisance corporelle',
        subtitle: isEn ? 'Body Heat Comfort' : 'Ergonomie au porté',
        description: isEn
          ? 'Designed for natural ease. Our regular-fit cuts provide exactly the right amount of micro-airspace so the garment never clings to the body while maintaining a sleek silhouette.'
          : 'Des silhouettes conçues pour être portées avec aisance. Nos coupes régulières offrent juste ce qu’il faut d’espace pour que le vêtement ne colle pas au corps tout en restant très net visuellement.',
        detail: isEn ? 'Calibrated for hot days in Conakry and West Africa.' : 'Calibré pour un port quotidien sans sensation de contrainte.',
      },
      {
        icon: <Sparkles className="w-6 h-6 text-[#1C3326]" />,
        title: isEn ? '5. Gentle Touch & Sensory Comfort' : '5. Confort tactile & thermique',
        subtitle: isEn ? 'Sensory Polish' : 'Sensation sur la peau',
        description: isEn
          ? 'Soft surface pre-treatments prevent any skin prickliness. Scratchy internal labels are removed and replaced by clean prints to avoid any friction from the first wear.'
          : 'Traitement doux de la surface du tissu pour éviter tout grattement. Pas d’étiquettes rigides cousues à même la peau : nous veillons à ce que chaque contact soit agréable dès le premier enfilage.',
        detail: isEn ? 'Pure comfort and breathability under high sun.' : 'Légèreté adaptée au climat guinéen et ouest-africain.',
      },
      {
        icon: <RefreshCw className="w-6 h-6 text-[#1C3326]" />,
        title: isEn ? '6. High Wash-Resistance' : '6. Résistance aux lavages répétés',
        subtitle: isEn ? 'Dimensional Testing' : 'Test de stabilité dimensionnelle',
        description: isEn
          ? 'Selected textiles undergo strict test washes to control shrinkage and maintain pigment vibrancy against standard West African washing powders.'
          : 'Les matières retenues sont soumises à des tests de prélavage pour limiter le rétrécissement et préserver la vivacité des pigments de couleur face aux lessives courantes.',
        detail: isEn ? 'Preserves side seams and avoids twisting.' : 'Tenue des formes et stabilité des coutures latérales.',
      },
      {
        icon: <Eye className="w-6 h-6 text-[#1C3326]" />,
        title: isEn ? '7. Individual Quality Control' : '7. Contrôle qualité unitaire',
        subtitle: isEn ? 'Meticulous Audits' : 'Vérification méticuleuse',
        description: isEn
          ? 'Manual visual and sizing inspections of every single batch before dispatch: strict alignment of seams, matching proportions, and zero loose threads.'
          : 'Inspection visuelle et dimensionnelle de chaque lot avant son expédition : vérification de l’alignement des coutures, de la conformité des tailles et de l’absence de fils pendants.',
        detail: isEn ? 'Extremely low tolerance on dimensional variations.' : 'Tolérance minimale sur les variations dimensionnelles.',
      },
      {
        icon: <Package className="w-6 h-6 text-[#1C3326]" />,
        title: isEn ? '8. Protective Packing' : '8. Emballage protecteur & soigné',
        subtitle: isEn ? 'Official Packaging' : 'Conditionnement officiel',
        description: isEn
          ? 'Each garment is cleanly folded and packaged in a secure, dustproof bag to protect it from humidity and dirt during transit right to your door.'
          : 'Chaque vêtement est plié et conditionné dans une housse protectrice étanche afin de le préserver de la poussière et de l’humidité durant le transport jusqu’à votre porte.',
        detail: isEn ? 'Professional layout with official Kourawy labelling.' : 'Présentation propre et étiquetage officiel Kourawy.',
      },
    ];
  };

  return (
    <div className="bg-[#FAF9F5] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: isEn ? 'Quality & Craft' : 'Qualité & Confection' }]} lang={lang} />

        {/* Header */}
        <div className="max-w-3xl my-8 sm:my-12">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#1C3326] block mb-2">
            {dict.quality_teaser.badge}
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-medium text-[#19201C] mb-6">
            {isEn ? 'Kourawy Quality & Sourcing standards' : 'L’approche Kourawy de la qualité'}
          </h1>
          <p className="text-sm sm:text-base text-[#5E6861] font-light leading-relaxed mb-6">
            {dict.quality_page.intro}
          </p>

          <div className="p-4 bg-[#EFECE6]/70 border-l-2 border-[#1C3326] text-xs text-[#5E6861]">
            <p className="font-medium text-[#19201C] mb-1">
              {isEn ? 'Continuous improvements in industrial partnerships:' : 'Évolution constante de nos partenariats industriels :'}
            </p>
            <p>
              {isEn
                ? 'Our quality specification book is updated continuously as Kourawy strengthens relationships with specialized textile workshops built to maintain rigorous standards.'
                : 'La charte de confection est actualisée au fur et à mesure que Kourawy renforce ses collaborations avec des ateliers spécialisés capables d’assurer un standard rigoureux.'}
            </p>
          </div>
        </div>

        {/* 8 Quality Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {getLocalizedSteps().map((step, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#FAF9F5] border border-[#E5E1D8] flex flex-col justify-between transition-all duration-200 hover:border-[#1C3326]/50"
            >
              <div>
                <div className="w-12 h-12 bg-[#EFECE6] rounded-xs flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <span className="text-[11px] uppercase tracking-wider text-[#1C3326] font-semibold block mb-1">
                  {step.subtitle}
                </span>
                <h2 className="text-lg font-serif font-medium text-[#19201C] mb-3">
                  {step.title}
                </h2>
                <p className="text-xs text-[#5E6861] leading-relaxed font-light mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E5E1D8]/70 text-[11px] text-[#19201C] font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1C3326] shrink-0" />
                <span>{step.detail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Focus sur le climat guinéen */}
        <div className="bg-[#1C3326] text-[#FAF9F5] p-8 sm:p-12 mb-20">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8FA597] block mb-2">
              {isEn ? 'Contextualized Design' : 'Conception Contextualisée'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-medium text-white mb-4">
              {isEn ? 'Designing textiles specifically for hot & humid climates' : 'Penser les textiles pour le climat chaud et humide'}
            </h2>
            <p className="text-xs sm:text-sm text-[#D1D9D3] leading-relaxed font-light mb-6">
              {isEn
                ? 'Under the intense sun and humidity of Conakry, weak fabrics or synthetic yarns deteriorate and feel suffocating. We select yarn specifications that maximize natural ventilation, keeping the skin fresh while ensuring total fabric opacity.'
                : 'Sous l’ensoleillement et l’humidité de Conakry, un tissu trop étouffant ou un fil de mauvaise qualité s’abîme très vite. Nous sélectionnons des titrages de fils qui maximisent la circulation de l’air et préviennent les odeurs tout en assurant une opacité totale.'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#284735] text-xs">
              <div>
                <strong className="block text-white font-medium mb-1">{isEn ? 'Natural ventilation' : 'Aération naturelle'}</strong>
                <span className="text-[#8FA597]">{isEn ? 'Fibers that speed up perspiration evaporation.' : 'Fibres favorisant l’évacuation de la transpiration.'}</span>
              </div>
              <div>
                <strong className="block text-white font-medium mb-1">{isEn ? 'Color fastness' : 'Stabilité des couleurs'}</strong>
                <span className="text-[#8FA597]">{isEn ? 'Durable resistance to solar rays and repetitive washes.' : 'Résistance accrue aux rayons solaires et aux lavages.'}</span>
              </div>
              <div>
                <strong className="block text-white font-medium mb-1">{isEn ? 'Long-lasting softness' : 'Douceur pérenne'}</strong>
                <span className="text-[#8FA597]">{isEn ? 'Maintains softness and shape after air drying.' : 'Pas d’effet cartonné après le séchage à l’air libre.'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AppDownloadBanner lang={lang} />
    </div>
  );
}
