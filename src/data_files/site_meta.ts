// src/data_files/site_meta.ts

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Kraffe Roasters",
  "url": "https://krafferoasters.com",
  "logo": "https://krafferoasters.com/kraffe-logo.png", // Sitenin tam logo URL'si, bunu kontrol et
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+90-533-566-7061", // Uluslararası formatta telefon
    "contactType": "customer service"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Adalet, Manas Blv. No:39, Folkart Towers A Kule, Kat:34, D:3408",
    "addressLocality": "Bayraklı",
    "addressRegion": "İzmir",
    "postalCode": "35530",
    "addressCountry": "TR"
  },
  "sameAs": [
    "https://www.instagram.com/kraffe.roasters/", // Instagram URL'nizi buraya yazın
    "https://www.facebook.com/krafferoasters/", // Facebook URL'nizi buraya yazın
    // "https://www.linkedin.com/company/krafferoasters/" // Varsa diğer sosyal medya linkleri
  ]
};
