import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['fr', 'en'];
const defaultLocale = 'fr';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Vérifie si l'URL contient déjà une locale
  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname === `/${locale}` ||
      pathname.startsWith(`/${locale}/`)
  );

  // Si une locale est déjà présente, continuer normalement
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Sinon, rediriger vers la locale par défaut
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|favicon.svg|logo.svg|og-image.jpg|images|robots.txt|sitemap.xml|.*\\..*).*)',
  ],
};