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
