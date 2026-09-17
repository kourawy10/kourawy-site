'use client';

import React, { useState, useEffect } from 'react';
import { Share2, Copy, Check, MessageSquare, Facebook, Twitter } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  slug: string;
  lang?: string;
}

export default function ShareButtons({ title, slug, lang = 'fr' }: ShareButtonsProps) {
  const isEn = lang === 'en';
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    let active = true;
    const getUrlAsync = async () => {
      // Keep setState out of the synchronous effect body to satisfy ESLint
      if (active && typeof window !== 'undefined') {
        setCurrentUrl(`${window.location.origin}/${lang}/journal/${slug}`);
      }
    };
    getUrlAsync();
    return () => {
      active = false;
    };
  }, [slug, lang]);

  const handleCopy = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(currentUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const shareText = encodeURIComponent(
    isEn 
      ? `Read "${title}" on the Kourawy Journal: ${currentUrl}`
      : `À lire : "${title}" sur le Journal Kourawy : ${currentUrl}`
  );

  const whatsappUrl = `https://api.whatsapp.com/send?text=${shareText}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const xUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 py-4 px-5 bg-white border border-[#E5E1D8] rounded-xs">
      <span className="text-xs uppercase tracking-[0.15em] font-semibold text-[#5E6861] flex items-center gap-1.5">
        <Share2 className="w-3.5 h-3.5 text-[#1C3326]" />
        {isEn ? 'Share Article' : 'Partager l’article'}
      </span>

      <div className="flex flex-wrap gap-2.5">
        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] text-xs font-semibold rounded-xs transition-colors"
          title="Share on WhatsApp"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Facebook */}
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2] text-xs font-semibold rounded-xs transition-colors"
          title="Share on Facebook"
        >
          <Facebook className="w-3.5 h-3.5" />
          <span>Facebook</span>
        </a>

        {/* X */}
        <a
          href={xUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/5 hover:bg-black/10 text-black text-xs font-semibold rounded-xs transition-colors"
          title="Share on X"
        >
          <Twitter className="w-3.5 h-3.5" />
          <span>X</span>
        </a>

        {/* Copy Link */}
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#E5E1D8] hover:bg-[#FAF9F5] text-[#19201C] text-xs font-semibold rounded-xs transition-all relative"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#2E7D32]" />
              <span className="text-[#2E7D32]">{isEn ? 'Link Copied' : 'Lien copié'}</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-[#5E6861]" />
              <span>{isEn ? 'Copy Link' : 'Copier le lien'}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
