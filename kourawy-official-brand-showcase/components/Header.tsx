'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import KourawyLogo from './KourawyLogo';
import { AppCTAButton } from './CTA';
import { siteConfig } from '@/config/site';
import { Menu, X, Smartphone, ArrowUpRight, Globe } from 'lucide-react';
import { getDictionary } from '@/lib/i18n';

interface HeaderProps {
  lang?: string;
}

export default function Header({ lang = 'fr' }: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dict = getDictionary(lang);

  const NAV_LINKS = [
    { href: '/', label: dict.nav.home },
    { href: '/collections', label: dict.nav.collections },
    { href: '/about', label: dict.nav.about },
    { href: '/quality', label: dict.nav.quality },
    { href: '/journal', label: dict.nav.journal },
    { href: '/contact', label: dict.nav.contact },
  ];

  // Check if current route is the homepage to allow transparency state over the dark cinematic hero background
  const isHome = pathname === `/${lang}` || pathname === `/${lang}/`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial scroll state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync navigation drawer status on path changes
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  // Prevent background scroll when navigation drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const getLocalizedHref = (path: string) => {
    if (path === '/') return `/${lang}`;
    return `/${lang}${path}`;
  };

  const getSwitchLocaleHref = (targetLang: string) => {
    if (!pathname) return `/${targetLang}`;
    const segments = pathname.split('/');
    segments[1] = targetLang;
    return segments.join('/') || `/${targetLang}`;
  };

  const headerTextWhite = isHome && !isScrolled;

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          headerTextWhite
            ? 'bg-transparent border-b border-white/5 py-5'
            : 'bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#E5E1D8]/80 py-3.5 shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo: Inverted color if transparent background on home hero */}
            <div className="flex items-center shrink-0">
              <KourawyLogo
                size="md"
                lang={lang}
                color={headerTextWhite ? 'inverted' : 'default'}
              />
            </div>

            {/* Centered Desktop Navigation Menu */}
            <nav
              aria-label="Navigation principale"
              className="hidden lg:flex items-center justify-center space-x-8 xl:space-x-10"
            >
              {NAV_LINKS.map((link) => {
                const localizedHref = getLocalizedHref(link.href);
                const isActive =
                  link.href === '/'
                    ? pathname === `/${lang}` || pathname === `/${lang}/`
                    : pathname.startsWith(localizedHref);
                return (
                  <Link
                    key={link.href}
                    href={localizedHref}
                    className={`text-xs uppercase tracking-widest font-semibold transition-all duration-300 py-1.5 relative group ${
                      isActive
                        ? headerTextWhite
                          ? 'text-white'
                          : 'text-[#1C3326]'
                        : headerTextWhite
                        ? 'text-white/70 hover:text-white'
                        : 'text-[#5E6861] hover:text-[#19201C]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[1.5px] transition-transform duration-300 origin-left ${
                        isActive
                          ? headerTextWhite
                            ? 'bg-white scale-x-100'
                            : 'bg-[#1C3326] scale-x-100'
                          : headerTextWhite
                          ? 'bg-white scale-x-0 group-hover:scale-x-50'
                          : 'bg-[#1C3326] scale-x-0 group-hover:scale-x-50'
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right Side Tools: Lang Switcher (FR | EN) + App CTA */}
            <div className="hidden lg:flex items-center gap-6">
              
              {/* Direct Elegantly Framed Language Selector: FR | EN */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest">
                <Link
                  href={getSwitchLocaleHref('fr')}
                  className={`transition-colors py-1 ${
                    lang === 'fr'
                      ? headerTextWhite
                        ? 'text-white'
                        : 'text-[#1C3326] font-bold'
                      : headerTextWhite
                      ? 'text-white/45 hover:text-white/80'
                      : 'text-[#5E6861]/60 hover:text-[#19201C]'
                  }`}
                >
                  FR
                </Link>
                <span className={headerTextWhite ? 'text-white/20' : 'text-[#E5E1D8]'} role="separator">|</span>
                <Link
                  href={getSwitchLocaleHref('en')}
                  className={`transition-colors py-1 ${
                    lang === 'en'
                      ? headerTextWhite
                        ? 'text-white'
                        : 'text-[#1C3326] font-bold'
                      : headerTextWhite
                      ? 'text-white/45 hover:text-white/80'
                      : 'text-[#5E6861]/60 hover:text-[#19201C]'
                  }`}
                >
                  EN
                </Link>
              </div>

              {/* Dynamic Styled Header CTA */}
              <AppCTAButton
                variant={headerTextWhite ? 'outline' : 'primary'}
                size="sm"
                className={
                  headerTextWhite
                    ? 'border-white/20 text-white hover:bg-white hover:text-[#19201C] transition-all duration-300'
                    : 'bg-[#1C3326] hover:bg-[#284735] text-white transition-all duration-300 shadow-xs'
                }
                label={lang === 'en' ? 'Get the App' : "Acheter sur l'application"}
              />
            </div>

            {/* Mobile Header Interactive Buttons */}
            <div className="flex items-center lg:hidden gap-3.5">
              
              {/* Simple Mobile Lang Swap Button */}
              <Link
                href={getSwitchLocaleHref(lang === 'fr' ? 'en' : 'fr')}
                className={`px-2.5 py-1.5 border text-[10px] font-bold tracking-widest rounded-xs ${
                  headerTextWhite
                    ? 'border-white/10 text-white bg-white/5 hover:bg-white/10'
                    : 'border-[#E5E1D8] text-[#5E6861] bg-[#FAF9F5] hover:bg-[#EFECE6]'
                }`}
              >
                {lang === 'fr' ? 'EN 🇬🇧' : 'FR 🇫🇷'}
              </Link>

              {/* Drawer Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-xs focus:outline-none transition-colors ${
                  headerTextWhite ? 'text-white hover:text-white/80' : 'text-[#19201C] hover:text-[#1C3326]'
                }`}
                aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Full-screen Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="fixed inset-0 z-50 bg-[#FAF9F5] flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto lg:hidden"
        >
          {/* Drawer Top Header */}
          <div className="flex justify-between items-center pb-6 border-b border-[#E5E1D8]">
            <KourawyLogo size="md" lang={lang} />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#19201C] hover:text-[#1C3326] transition-colors"
              aria-label="Fermer le menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Luxury-branded Mobile Links */}
          <nav className="flex flex-col space-y-4 my-8">
            <Link
              href={getLocalizedHref('/')}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-serif py-1 flex items-center justify-between border-b border-[#E5E1D8]/20 ${
                pathname === `/${lang}` || pathname === `/${lang}/` ? 'text-[#1C3326] font-semibold' : 'text-[#19201C]'
              }`}
            >
              <span>{dict.nav.home}</span>
              <ArrowUpRight className="w-5 h-5 text-[#5E6861] opacity-60" />
            </Link>

            <Link
              href={getLocalizedHref('/collections')}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-serif py-1 flex items-center justify-between border-b border-[#E5E1D8]/20 ${
                pathname.startsWith(getLocalizedHref('/collections')) ? 'text-[#1C3326] font-semibold' : 'text-[#19201C]'
              }`}
            >
              <span>{dict.nav.collections}</span>
              <ArrowUpRight className="w-5 h-5 text-[#5E6861] opacity-60" />
            </Link>

            <Link
              href={getLocalizedHref('/about')}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-serif py-1 flex items-center justify-between border-b border-[#E5E1D8]/20 ${
                pathname.startsWith(getLocalizedHref('/about')) ? 'text-[#1C3326] font-semibold' : 'text-[#19201C]'
              }`}
            >
              <span>{dict.nav.about}</span>
              <ArrowUpRight className="w-5 h-5 text-[#5E6861] opacity-60" />
            </Link>

            <Link
              href={getLocalizedHref('/quality')}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-serif py-1 flex items-center justify-between border-b border-[#E5E1D8]/20 ${
                pathname.startsWith(getLocalizedHref('/quality')) ? 'text-[#1C3326] font-semibold' : 'text-[#19201C]'
              }`}
            >
              <span>{dict.nav.quality}</span>
              <ArrowUpRight className="w-5 h-5 text-[#5E6861] opacity-60" />
            </Link>

            <Link
              href={getLocalizedHref('/journal')}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-serif py-1 flex items-center justify-between border-b border-[#E5E1D8]/20 ${
                pathname.startsWith(getLocalizedHref('/journal')) ? 'text-[#1C3326] font-semibold' : 'text-[#19201C]'
              }`}
            >
              <span>{dict.nav.journal}</span>
              <ArrowUpRight className="w-5 h-5 text-[#5E6861] opacity-60" />
            </Link>

            <Link
              href={getLocalizedHref('/faq')}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-xl font-serif py-1 text-[#5E6861] hover:text-[#1C3326] flex items-center justify-between`}
            >
              <span>{dict.nav.faq}</span>
            </Link>

            <Link
              href={getLocalizedHref('/partners')}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-xl font-serif py-1 text-[#5E6861] hover:text-[#1C3326] flex items-center justify-between`}
            >
              <span>{dict.nav.partners}</span>
            </Link>

            <Link
              href={getLocalizedHref('/contact')}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-xl font-serif py-1 text-[#5E6861] hover:text-[#1C3326] flex items-center justify-between`}
            >
              <span>{dict.nav.contact}</span>
            </Link>
          </nav>

          {/* Drawer Footer Actions */}
          <div className="space-y-4 pt-6 border-t border-[#E5E1D8]">
            <div className="flex items-center justify-between px-3 py-1.5 border border-[#E5E1D8] rounded-xs bg-[#FAF9F5]">
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#5E6861]">{lang === 'fr' ? 'Langue active' : 'Active Language'}</span>
              <div className="flex gap-2">
                <Link
                  href={getSwitchLocaleHref('fr')}
                  className={`px-3 py-1 text-[10px] tracking-widest uppercase font-bold rounded-xs ${
                    lang === 'fr' ? 'bg-[#1C3326] text-white' : 'text-[#5E6861] hover:text-[#19201C]'
                  }`}
                >
                  FR
                </Link>
                <Link
                  href={getSwitchLocaleHref('en')}
                  className={`px-3 py-1 text-[10px] tracking-widest uppercase font-bold rounded-xs ${
                    lang === 'en' ? 'bg-[#1C3326] text-white' : 'text-[#5E6861] hover:text-[#19201C]'
                  }`}
                >
                  EN
                </Link>
              </div>
            </div>

            {/* Direct App Link Button */}
            <AppCTAButton
              variant="primary"
              size="lg"
              className="w-full justify-center text-center font-bold text-xs uppercase tracking-widest py-4.5"
              label={dict.common.appButton}
            />

            <p className="text-center text-[10px] uppercase tracking-widest font-semibold text-[#5E6861] pt-2">
              Kourawy — Conakry, République de Guinée
            </p>
          </div>
        </div>
      )}

      {/* Spacer for fixed header on scroll, hidden if home transparent top */}
      <div className={`h-16 lg:h-18 transition-all ${isHome ? 'hidden' : 'block'}`} aria-hidden="true" />
    </>
  );
}
