// src/utils/i18n.ts
import { getCollection } from "astro:content";
import { ES_READY } from "@/config/i18n";

export { ES_READY };

export const EN_ONLY_PATHS = [
  "/privacy-policy-and-terms",
  "/privacy-policy-and-terms/",
  "/cookie-policy",
  "/cookie-policy/",
  "/offer",
  "/offer/",
  "/thanks",
  "/thanks/",
  "/contact-form",
  "/contact-form/",
];

export interface AlternatesResult {
  hreflang: {
    en?: string;
    fr?: string;
    es?: string;
    "x-default"?: string;
  };
  picker: {
    en: string;
    fr: string;
    es: string;
  };
}

function ensureTrailingSlash(path: string): string {
  if (!path.endsWith("/")) {
    return path + "/";
  }
  return path;
}

function normalizePath(pathname: string): string {
  let path = pathname.replace(/\/+/g, "/");
  if (path !== "/" && path.endsWith("/")) {
    path = path.slice(0, -1);
  }
  return path;
}

export async function getLanguageAlternates(
  pathname: string,
  customAlternates?: { en?: string; fr?: string; es?: string }
): Promise<AlternatesResult> {
  const normalized = normalizePath(pathname);

  // 1. If custom alternates are provided, use them
  if (customAlternates) {
    const enUrl = customAlternates.en ? ensureTrailingSlash(customAlternates.en) : undefined;
    const frUrl = customAlternates.fr ? ensureTrailingSlash(customAlternates.fr) : undefined;
    const esUrl = customAlternates.es ? ensureTrailingSlash(customAlternates.es) : undefined;

    return {
      hreflang: {
        ...(enUrl ? { en: enUrl, "x-default": enUrl } : {}),
        ...(frUrl ? { fr: frUrl } : {}),
        ...(esUrl && ES_READY ? { es: esUrl } : {}),
      },
      picker: {
        en: enUrl || "/",
        fr: frUrl || "/fr/",
        es: esUrl || "/es/",
      },
    };
  }

  // 2. Check if this is an English-only page
  const isEnOnly = EN_ONLY_PATHS.some(
    (p) => normalizePath(p) === normalized
  );

  if (isEnOnly) {
    const enPath = ensureTrailingSlash(pathname);
    return {
      hreflang: {
        en: enPath,
        "x-default": enPath,
      },
      picker: {
        en: enPath,
        fr: "/fr/",
        es: "/es/",
      },
    };
  }

  // 3. Check for Blog detail page
  const blogMatch = pathname.match(/^\/(?:fr\/|es\/)?blog\/([^\/]+)\/?$/);
  if (blogMatch && blogMatch[1] && blogMatch[1] !== "index") {
    const currentSlug = blogMatch[1];
    const allBlogPosts = await getCollection("blog");
    
    // Find current post by slug
    const currentPost = allBlogPosts.find((p) => {
      const slugWithoutLang = p.id.replace(/^(en|fr|es)\//, "");
      return slugWithoutLang === currentSlug;
    });

    if (currentPost && currentPost.data.translationKey) {
      const key = currentPost.data.translationKey;
      const enPost = allBlogPosts.find(
        (p) => p.id.startsWith("en/") && p.data.translationKey === key
      );
      const frPost = allBlogPosts.find(
        (p) => p.id.startsWith("fr/") && p.data.translationKey === key
      );
      const esPost = allBlogPosts.find(
        (p) => p.id.startsWith("es/") && p.data.translationKey === key
      );

      const enHref = enPost ? ensureTrailingSlash(`/blog/${enPost.id.replace(/^en\//, "")}`) : undefined;
      const frHref = frPost ? ensureTrailingSlash(`/fr/blog/${frPost.id.replace(/^fr\//, "")}`) : undefined;
      const esHref = esPost ? ensureTrailingSlash(`/es/blog/${esPost.id.replace(/^es\//, "")}`) : undefined;

      return {
        hreflang: {
          ...(enHref ? { en: enHref, "x-default": enHref } : {}),
          ...(frHref ? { fr: frHref } : {}),
          ...(esHref && ES_READY ? { es: esHref } : {}),
        },
        picker: {
          en: enHref || "/blog/",
          fr: frHref || "/fr/blog/",
          es: esHref || "/es/blog/",
        },
      };
    }
  }

  // 4. Check for Insights detail page
  const insightMatch = pathname.match(/^\/(?:fr\/|es\/)?insights\/([^\/]+)\/?$/);
  if (insightMatch && insightMatch[1]) {
    const currentSlug = insightMatch[1];
    const allInsights = await getCollection("insights");

    const currentInsight = allInsights.find((p) => {
      const slugWithoutLang = p.id.replace(/^(en|fr|es)\//, "");
      return slugWithoutLang === currentSlug;
    });

    if (currentInsight && currentInsight.data.translationKey) {
      const key = currentInsight.data.translationKey;
      const enPost = allInsights.find(
        (p) => p.id.startsWith("en/") && p.data.translationKey === key
      );
      const frPost = allInsights.find(
        (p) => p.id.startsWith("fr/") && p.data.translationKey === key
      );
      const esPost = allInsights.find(
        (p) => p.id.startsWith("es/") && p.data.translationKey === key
      );

      const enHref = enPost ? ensureTrailingSlash(`/insights/${enPost.id.replace(/^en\//, "")}`) : undefined;
      const frHref = frPost ? ensureTrailingSlash(`/fr/insights/${frPost.id.replace(/^fr\//, "")}`) : undefined;
      const esHref = esPost ? ensureTrailingSlash(`/es/insights/${esPost.id.replace(/^es\//, "")}`) : undefined;

      return {
        hreflang: {
          ...(enHref ? { en: enHref, "x-default": enHref } : {}),
          ...(frHref ? { fr: frHref } : {}),
          ...(esHref && ES_READY ? { es: esHref } : {}),
        },
        picker: {
          en: enHref || "/blog/",
          fr: frHref || "/fr/blog/",
          es: esHref || "/es/blog/",
        },
      };
    }
  }

  // 5. Default: Identical slug pages (products, static pages, home, index listings)
  let basePath = pathname;
  if (basePath.startsWith("/fr/")) {
    basePath = basePath.substring(3);
  } else if (basePath === "/fr") {
    basePath = "/";
  } else if (basePath.startsWith("/es/")) {
    basePath = basePath.substring(3);
  } else if (basePath === "/es") {
    basePath = "/";
  }

  if (!basePath.startsWith("/")) {
    basePath = "/" + basePath;
  }
  basePath = ensureTrailingSlash(basePath);

  const enUrl = basePath;
  const frUrl = basePath === "/" ? "/fr/" : `/fr${basePath}`;
  const esUrl = basePath === "/" ? "/es/" : `/es${basePath}`;

  return {
    hreflang: {
      en: enUrl,
      fr: frUrl,
      ...(ES_READY ? { es: esUrl } : {}),
      "x-default": enUrl,
    },
    picker: {
      en: enUrl,
      fr: frUrl,
      es: esUrl,
    },
  };
}
