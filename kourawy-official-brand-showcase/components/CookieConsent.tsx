'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, Settings2 } from 'lucide-react';
import { getDictionary } from '@/lib/i18n';

interface CookieConsentProps {
  lang?: string;
}

export default function CookieConsent({ lang = 'fr' }: CookieConsentProps) {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Always true
    analytics: false,
    marketing: false,
  });

  const dict = getDictionary(lang);
  const isEn = lang === 'en';

  useEffect(() => {
    const saved = localStorage.getItem('kourawy_cookie_consent');
    if (!saved) {
      // Delay display slightly for smooth page entry
      const timer = setTimeout(() => setShowBanner(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = { essential: true, analytics: true, marketing: true, timestamp: Date.now() };
    localStorage.setItem('kourawy_cookie_consent', JSON.stringify(consent));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleRejectAll = () => {
    const consent = { essential: true, analytics: false, marketing: false, timestamp: Date.now() };
    localStorage.setItem('kourawy_cookie_consent', JSON.stringify(consent));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleSavePreferences = () => {
    const consent = { ...preferences, timestamp: Date.now() };
    localStorage.setItem('kourawy_cookie_consent', JSON.stringify(consent));
    setShowBanner(false);
    setShowPreferences(false);
  };

  if (!showBanner) return null;

  return (
    <div
      role="region"
      aria-label={isEn ? 'Cookie consent banner' : 'Consentement aux cookies'}
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-[#FAF9F5]/98 backdrop-blur-md border-t border-[#E5E1D8] shadow-2xl"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1C3326] mb-1.5">
            <Shield className="w-4 h-4" />
            <span>{isEn ? 'Respect for your privacy' : 'Respect de votre vie privée'}</span>
          </div>
          <p className="text-xs sm:text-sm text-[#5E6861] leading-relaxed font-light">
            {dict.cookie.text}{' '}
            <Link href={`/${lang}/cookies`} className="underline underline-offset-2 text-[#19201C] hover:text-[#1C3326]">
              {dict.cookie.policy}
            </Link>
            .
          </p>

          {showPreferences && (
            <div className="mt-4 pt-4 border-t border-[#E5E1D8] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <label className="flex items-center gap-2 p-2 bg-[#EFECE6]/60 rounded-xs cursor-not-allowed">
                <input type="checkbox" checked disabled className="accent-[#1C3326]" />
                <span className="font-medium text-[#19201C]">
                  {isEn ? 'Necessary Cookies (Required)' : 'Cookies nécessaires (Requis)'}
                </span>
              </label>

              <label className="flex items-center gap-2 p-2 bg-[#EFECE6]/60 rounded-xs cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="accent-[#1C3326]"
                />
                <span className="text-[#19201C]">
                  {isEn ? 'Audience Measurement (Anonymous)' : 'Mesure d’audience (Anonyme)'}
                </span>
              </label>

              <label className="flex items-center gap-2 p-2 bg-[#EFECE6]/60 rounded-xs cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  className="accent-[#1C3326]"
                />
                <span className="text-[#19201C]">
                  {isEn ? 'Networks & Sharing' : 'Réseaux & Partages'}
                </span>
              </label>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          {showPreferences ? (
            <button
              onClick={handleSavePreferences}
              className="px-4 py-2 bg-[#1C3326] text-white text-xs font-medium hover:bg-[#284735] transition-colors"
            >
              {isEn ? 'Save Preferences' : 'Enregistrer mes préférences'}
            </button>
          ) : (
            <>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 bg-[#1C3326] text-white text-xs font-medium hover:bg-[#284735] transition-colors"
              >
                {dict.cookie.accept}
              </button>
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 bg-[#EFECE6] text-[#19201C] text-xs font-medium hover:bg-[#E5E1D8] transition-colors"
              >
                {dict.cookie.decline}
              </button>
              <button
                onClick={() => setShowPreferences(!showPreferences)}
                className="px-3 py-2 border border-[#E5E1D8] text-[#5E6861] hover:text-[#19201C] text-xs flex items-center gap-1.5 transition-colors"
              >
                <Settings2 className="w-3.5 h-3.5" />
                <span>{isEn ? 'Manage' : 'Gérer'}</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
