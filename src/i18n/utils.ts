import { en } from "./en";
import { es } from "./es";
import type { TranslationKeys } from "./en";

export const languages = {
  en: "English",
  es: "Español",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

const translations: Record<Lang, TranslationKeys> = {
  en,
  es,
};

/**
 * Detecta el idioma actual desde la URL.
 * Usa pathname relativo al BASE_URL para funcionar
 * tanto en desarrollo como en producción.
 */
export function getLang(url: URL, base: string): Lang {
  const path = url.pathname.replace(base, "");
  if (path.startsWith("es/") || path === "es") return "es";
  return "en";
}

/**
 * Devuelve el objeto de traducciones para el idioma dado.
 */
export function useTranslations(lang: Lang): TranslationKeys {
  return translations[lang];
}

/**
 * Dado un URL actual, devuelve la ruta equivalente
 * en el otro idioma.
 *
 * Ejemplos:
 *   / (en)  →  /es/
 *   /es/    →  /
 */
export function getAlternatePath(url: URL, base: string): string {
  const path = url.pathname.replace(base, "");
  if (path.startsWith("es/") || path === "es") {
    const withoutEs = path.replace(/^es\/?/, "") || "";
    return `${base}${withoutEs}`;
  }
  return `${base}es/${path}`;
}