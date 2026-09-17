import React from 'react';
import { appConfig } from '@/config/apps';
import { siteConfig } from '@/config/site';
import { KourawyTreeSymbol } from './KourawyLogo';
import { QRCodeSVG } from 'qrcode.react';
import { Smartphone, Download, CheckCircle, ExternalLink, QrCode } from 'lucide-react';

interface AppDownloadBannerProps {
  compact?: boolean;
  lang?: string;
}

export default function AppDownloadBanner({ compact = false, lang = 'fr' }: AppDownloadBannerProps) {
  const hasIos = Boolean(appConfig.CLIENT_APP_IOS_URL);
  const hasAndroid = Boolean(appConfig.CLIENT_APP_ANDROID_URL);
  const isEn = lang === 'en';

  return (
    <section
      id="telecharger-application"
      className={`bg-[#1C3326] text-[#FAF9F5] relative overflow-hidden ${
        compact ? 'py-12 sm:py-16' : 'py-16 sm:py-20'
      }`}
    >
      {/* Subtle organic watermark */}
      <div className="absolute -right-16 -bottom-16 opacity-5 pointer-events-none text-white">
        <KourawyTreeSymbol className="w-96 h-96" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Information */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#284735] text-[#FAF9F5] text-xs font-semibold uppercase tracking-wider rounded-xs mb-4">
              <Smartphone className="w-3.5 h-3.5 text-[#8FA597]" />
              {isEn ? 'Mobile Shopping Experience' : 'Expérience Shopping Mobile'}
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white mb-4 leading-tight">
              {isEn ? 'Kourawy App' : appConfig.bannerHeadline}
            </h2>

            <p className="text-sm sm:text-base text-[#D1D9D3] max-w-xl leading-relaxed mb-6 font-light">
              {isEn
                ? 'Our catalog is entirely accessible in your pocket. Enjoy a fast interface, a real-time updated collection, and premium local delivery in Conakry and across Guinea.'
                : `${appConfig.bannerSubline} Profitez d’une interface rapide, d’un catalogue actualisé en temps réel et d’un service de livraison soigné à Conakry et en Guinée.`}
            </p>

            {/* Key feature pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-xs text-[#FAF9F5]">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#8FA597] shrink-0" />
                <span>{isEn ? 'Quick selection of sizes & colors' : 'Sélection rapide des tailles & coloris'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#8FA597] shrink-0" />
                <span>{isEn ? 'Secure local mobile payments' : 'Paiements locaux sécurisés'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#8FA597] shrink-0" />
                <span>{isEn ? 'Live order & transit tracking' : 'Suivi d’acheminement en direct'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#8FA597] shrink-0" />
                <span>{isEn ? 'Responsive local customer service' : 'Service client réactif sur place'}</span>
              </div>
            </div>

            {/* Store buttons or transparent coming-soon message */}
            <div className="flex flex-wrap items-center gap-4">
              {hasIos ? (
                <a
                  href={appConfig.CLIENT_APP_IOS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-[#FAF9F5] text-[#1C3326] font-medium text-sm hover:bg-white transition-colors flex items-center gap-2 shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  {isEn ? 'Download on the App Store' : 'Télécharger sur l’App Store'}
                </a>
              ) : null}

              {hasAndroid ? (
                <a
                  href={appConfig.CLIENT_APP_ANDROID_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-[#284735] text-white font-medium text-sm hover:bg-[#345943] transition-colors flex items-center gap-2 shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  {isEn ? 'Download on Google Play' : 'Télécharger sur Google Play'}
                </a>
              ) : null}

              {!hasIos && !hasAndroid && (
                <div className="p-4 bg-[#284735]/80 border border-[#3A5F48] rounded-xs max-w-lg">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A9BEB0] block mb-1">
                    {isEn ? 'Official Launch Coming Soon' : appConfig.soonBadgeText}
                  </span>
                  <p className="text-xs text-[#FAF9F5] leading-relaxed">
                    {isEn
                      ? 'Official iOS and Android application releases are undergoing final store validation. In the meantime, our dedicated WhatsApp team handles all reservations and secure home deliveries in Conakry:'
                      : 'Les versions officielles iOS et Android sont en cours de validation finale. En attendant l’ouverture des stores, notre service WhatsApp dédié prend en charge vos réservations à Conakry :'}
                  </p>
                  <a
                    href={siteConfig.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2.5 text-xs font-semibold text-white underline underline-offset-4 hover:text-[#D1D9D3]"
                  >
                    {isEn ? 'Contact Kourawy on WhatsApp' : 'Contacter Kourawy sur WhatsApp'} ({siteConfig.contact.phoneDisplay})
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Desktop QR Code & Mobile Preview */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="bg-[#FAF9F5] p-6 sm:p-8 rounded-sm text-[#19201C] max-w-xs w-full shadow-xl border border-[#E5E1D8]">
              <div className="flex items-center gap-2 mb-3">
                <QrCode className="w-4 h-4 text-[#1C3326]" />
                <span className="text-xs uppercase tracking-widest font-semibold text-[#1C3326]">
                  {isEn ? 'Instant Scan' : 'Scan Immédiat'}
                </span>
              </div>

              <div className="p-3 bg-white border border-[#E5E1D8] flex items-center justify-center my-4 rounded-xs shadow-2xs">
                <QRCodeSVG
                  value={appConfig.APP_LANDING_URL}
                  size={170}
                  fgColor="#1C3326"
                  bgColor="#FFFFFF"
                  level="M"
                />
              </div>

              <p className="text-xs text-center text-[#5E6861] leading-relaxed font-light">
                {isEn
                  ? 'Scan this QR Code with your smartphone to open the official download and configuration page.'
                  : 'Scannez ce QR Code avec votre téléphone portable pour ouvrir la page officielle de téléchargement.'}
              </p>

              <div className="mt-4 pt-3 border-t border-[#E5E1D8] text-center">
                <span className="text-[11px] text-[#19201C] font-mono">
                  kourawy.store
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
