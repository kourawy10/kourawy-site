'use client';

import React, { useState } from 'react';
import { appConfig } from '@/config/apps';
import { siteConfig } from '@/config/site';
import { KourawyTreeSymbol } from './KourawyLogo';
import { Smartphone, Download, ExternalLink, X, QrCode, CheckCircle2 } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

interface AppDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  productContext?: string;
}

export function AppDownloadModal({ isOpen, onClose, productContext }: AppDownloadModalProps) {
  if (!isOpen) return null;

  const hasIos = Boolean(appConfig.CLIENT_APP_IOS_URL);
  const hasAndroid = Boolean(appConfig.CLIENT_APP_ANDROID_URL);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="app-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#122118]/70 backdrop-blur-xs transition-opacity duration-200"
    >
      <div
        className="relative w-full max-w-lg bg-[#FAF9F5] border border-[#E5E1D8] shadow-2xl p-6 sm:p-8 rounded-sm text-[#19201C] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#5E6861] hover:text-[#19201C] transition-colors p-1"
          aria-label="Fermer la boîte de dialogue"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-[#1C3326]/10 text-[#1C3326] flex items-center justify-center">
            <KourawyTreeSymbol className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#1C3326]">
              Expérience Officielle
            </span>
            <h3 id="app-modal-title" className="text-xl font-serif font-semibold text-[#19201C]">
              Application Mobile Kourawy
            </h3>
          </div>
        </div>

        {productContext && (
          <div className="mb-4 p-3 bg-[#EFECE6]/70 border-l-2 border-[#1C3326] text-xs text-[#5E6861]">
            Vous vous intéressez à : <strong className="text-[#19201C]">{productContext}</strong>.
            L’achat, le choix des tailles et la livraison s’effectuent sur notre application.
          </div>
        )}

        <p className="text-sm text-[#5E6861] mb-6 leading-relaxed">
          Kourawy centralise l’ensemble de ses commandes, suivis de colis et catalogues dynamiques au sein de ses applications mobiles dédiées pour garantir une expérience fluide à Conakry et en Afrique de l’Ouest.
        </p>

        {/* Links or Coming Soon Banner */}
        {hasIos || hasAndroid ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {hasIos && (
              <a
                href={appConfig.CLIENT_APP_IOS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-[#1C3326] text-[#FAF9F5] text-sm font-medium hover:bg-[#284735] transition-colors"
              >
                <Download className="w-4 h-4" />
                App Store (iOS)
              </a>
            )}
            {hasAndroid && (
              <a
                href={appConfig.CLIENT_APP_ANDROID_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-[#1C3326] text-[#FAF9F5] text-sm font-medium hover:bg-[#284735] transition-colors"
              >
                <Download className="w-4 h-4" />
                Google Play (Android)
              </a>
            )}
          </div>
        ) : (
          <div className="mb-6 p-4 bg-[#EFECE6] border border-[#E5E1D8] rounded-xs">
            <div className="flex items-start gap-3">
              <Smartphone className="w-5 h-5 text-[#1C3326] shrink-0 mt-0.5" />
              <div>
                <span className="inline-block px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider bg-[#1C3326] text-[#FAF9F5] mb-1.5">
                  Lancement imminent
                </span>
                <p className="text-xs text-[#19201C] font-medium leading-normal mb-1">
                  Les applications iOS & Android sont en cours de finalisation sur les stores officiels.
                </p>
                <p className="text-xs text-[#5E6861]">
                  Pour toute commande directe prioritaire ou demande d’information à Conakry, notre service client vous répond directement par WhatsApp :
                </p>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-2.5 text-xs font-semibold text-[#1C3326] hover:underline"
                >
                  Contacter l’équipe sur WhatsApp ({siteConfig.contact.phoneDisplay})
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* QR Code Section */}
        <div className="pt-4 border-t border-[#E5E1D8] flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="p-2 bg-white border border-[#E5E1D8] rounded-xs shrink-0 shadow-xs">
            <QRCodeSVG
              value={appConfig.APP_LANDING_URL}
              size={80}
              fgColor="#1C3326"
              bgColor="#FFFFFF"
              level="M"
            />
          </div>
          <div>
            <p className="text-xs font-semibold text-[#19201C] uppercase tracking-wider mb-1 flex items-center justify-center sm:justify-start gap-1">
              <QrCode className="w-3.5 h-3.5 text-[#1C3326]" />
              Scanner depuis votre mobile
            </p>
            <p className="text-xs text-[#5E6861]">
              Pointez l’appareil photo de votre smartphone pour accéder directement à la plateforme mobile Kourawy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface AppCTAButtonProps {
  label?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
  productContext?: string;
  className?: string;
  showIcon?: boolean;
}

export function AppCTAButton({
  label = appConfig.ctaText,
  variant = 'primary',
  size = 'md',
  productContext,
  className = '',
  showIcon = true,
}: AppCTAButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1C3326]/30 cursor-pointer select-none';
  
  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 tracking-wide',
    md: 'text-sm px-5 py-2.5 tracking-wide',
    lg: 'text-base px-7 py-3.5 tracking-wide',
  }[size];

  const variantStyles = {
    primary: 'bg-[#1C3326] text-[#FAF9F5] hover:bg-[#284735] shadow-xs active:scale-[0.99]',
    secondary: 'bg-[#EFECE6] text-[#19201C] hover:bg-[#E5E1D8] active:scale-[0.99]',
    outline: 'border border-[#1C3326] text-[#1C3326] hover:bg-[#1C3326] hover:text-[#FAF9F5] active:scale-[0.99]',
    minimal: 'text-[#1C3326] hover:text-[#284735] underline underline-offset-4 p-0',
  }[variant];

  return (
    <>
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
        aria-haspopup="dialog"
      >
        <span>{label}</span>
        {showIcon && <Smartphone className="w-4 h-4 ml-2 opacity-85 shrink-0" aria-hidden="true" />}
      </button>

      <AppDownloadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productContext={productContext}
      />
    </>
  );
}
