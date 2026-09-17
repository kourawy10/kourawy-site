import React from 'react';
import { Layers, Wind, ShieldCheck, Sparkles } from 'lucide-react';

export interface QualityPillar {
  id: string;
  title: string;
  tag: string;
  description: string;
  icon: React.ReactNode;
}

export const getLocalizedQualityPillars = (lang: string): QualityPillar[] => {
  const isEn = lang === 'en';
  return [
    {
      id: 'matieres',
      title: isEn ? 'Selected Materials' : 'Matières sélectionnées',
      tag: isEn ? 'Natural Fibres' : 'Fibres Naturelles',
      description: isEn
        ? 'Rigorous selection of premium, breathable cotton fabrics chosen specifically for their excellent drape, soft feel, and performance in hot climates.'
        : 'Sélection rigoureuse d’étoffes et de cotons respirants, choisis spécifiquement pour leur tenue, leur toucher doux et leur comportement sous un climat chaud.',
      icon: <Layers className="w-6 h-6 text-[#1C3326]" />,
    },
    {
      id: 'confort',
      title: isEn ? 'Daily Comfort' : 'Confort quotidien',
      tag: isEn ? 'Ergonomics & Climate' : 'Ergonomie & Climat',
      description: isEn
        ? 'Tailored patterns designed to offer total freedom of movement all day long, specifically optimized for the heat and humidity of Conakry.'
        : 'Patronages étudiés pour offrir une liberté de mouvement totale tout au long de la journée sans serrer, parfaitement adaptés aux réalités de Conakry.',
      icon: <Wind className="w-6 h-6 text-[#1C3326]" />,
    },
    {
      id: 'durabilite',
      title: isEn ? 'Proven Durability' : 'Durabilité éprouvée',
      tag: isEn ? 'Strength & Shape' : 'Solidité & Tenue',
      description: isEn
        ? 'Meticulous double stitching on tension areas and high-quality thread tension to ensure colors, necklines, and knits survive countless washes.'
        : 'Attention constante portée aux coutures renforcées, à la rectitude des surjets et à la résistance des cols et mailles aux lavages répétés.',
      icon: <ShieldCheck className="w-6 h-6 text-[#1C3326]" />,
    },
    {
      id: 'simplicite',
      title: isEn ? 'Timeless Simplicity' : 'Simplicité intemporelle',
      tag: isEn ? 'Permanent Design' : 'Design Permanent',
      description: isEn
        ? 'Minimalist cuts and highly versatile neutral tones. Wardrobe essentials that effortlessly stand the test of time, free from passing hype.'
        : 'Des coupes épurées et des tons neutres faciles à assortir. Des vêtements qui traversent les saisons sans subir les aléas des tendances éphémères.',
      icon: <Sparkles className="w-6 h-6 text-[#1C3326]" />,
    },
  ];
};

interface QualityFeatureProps {
  pillar: QualityPillar;
  lang?: string;
}

export default function QualityFeature({ pillar, lang = 'fr' }: QualityFeatureProps) {
  const isEn = lang === 'en';

  return (
    <div
      id={`quality-pillar-${pillar.id}`}
      className="p-6 sm:p-8 bg-[#FAF9F5] border border-[#E5E1D8] flex flex-col justify-between transition-all duration-300 hover:border-[#1C3326]/50"
    >
      <div>
        <div className="w-12 h-12 bg-[#EFECE6] rounded-xs flex items-center justify-center mb-6">
          {pillar.icon}
        </div>
        <span className="text-[11px] uppercase tracking-widest text-[#5E6861] font-semibold block mb-1">
          {pillar.tag}
        </span>
        <h3 className="text-xl font-serif font-medium text-[#19201C] mb-3">
          {pillar.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#5E6861] leading-relaxed font-light">
          {pillar.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-[#E5E1D8]/60 text-[11px] text-[#1C3326] font-medium tracking-wide">
        {isEn ? 'Verified Kourawy Standard' : 'Standard Kourawy vérifié'}
      </div>
    </div>
  );
}
