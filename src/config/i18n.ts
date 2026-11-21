// src/config/i18n.ts

/**
 * Flag controlling Spanish (es) readiness.
 * - When false:
 *   - All /es/ pages get <meta name="robots" content="noindex, nofollow" />
 *   - /es/ is excluded from sitemap
 *   - /es/ is excluded from hreflang alternates
 * - Flip to true after Phase 3 translations are complete.
 */
export const ES_READY = true;

/**
 * Flag controlling Russian (ru) readiness. Same behaviour as ES_READY for /ru/.
 */
export const RU_READY = true;

/**
 * Countries (ISO 3166-1 alpha-2, uppercase) for regional hreflang variants.
 * For every language a page exists in, HreflangLinks also emits
 * `<lang>-<COUNTRY>` for each country below, pointing to the same URL as the
 * language-only tag. This targets e.g. English searchers living in France
 * (en-FR) or French searchers living in the UK (fr-GB).
 * Use "GB" for the United Kingdom ("UK" is not a valid code).
 */
export const HREFLANG_REGIONS = [
  // Western & Southern Europe
  "GB", "IE", "FR", "BE", "NL", "LU", "DE", "AT", "CH", "ES", "PT", "IT", "GR",
  // Nordics & Baltics
  "SE", "NO", "DK", "FI", "EE", "LV", "LT",
  // Central & Eastern Europe
  "PL", "CZ", "SK", "HU", "RO", "BG", "HR", "SI", "RS", "UA", "MD", "TR",
  // CIS & Caucasus
  "RU", "KZ", "BY", "UZ", "AZ", "GE",
  // Middle East
  "AE", "SA",
  // Americas
  "US", "CA", "MX", "BR", "AR", "CO", "CL",
] as const;
