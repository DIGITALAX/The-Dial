import { AppLocale } from "./i18n";

const DEFAULT_SITE_URL = "https://thedial.xyz";

export const getSiteUrl = (): string => {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const base = fromEnv && fromEnv.length > 0 ? fromEnv : DEFAULT_SITE_URL;
  return base.replace(/\/+$/, "");
};

export const getLocalePath = (locale: AppLocale, pathname = "/"): string => {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `/${locale}${normalizedPath === "/" ? "" : normalizedPath}`;
};

export const toAbsoluteUrl = (pathname: string): string => {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${getSiteUrl()}${normalizedPath}`;
};
