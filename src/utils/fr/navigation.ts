// src/utils/fr/navigation.ts

const navBarLinks = [
  { name: "Accueil", url: "/fr" },
  { name: "Produits", url: "/fr/products" },
  { name: "À propos", url: "/fr/about" },
  { name: "Blog", url: "/fr/blog" },
  { name: "Contact", url: "/fr/contact" },
];

const footerLinks = [
  {
    section: "Écosystème",
    links: [
      { name: "Produits", url: "/fr/products" },
    ],
  },
  {
    section: "Société",
    links: [
      { name: "À propos de nous", url: "/fr/about" },
      { name: "Blog", url: "/fr/blog" },
      { name: "Contact", url: "/fr/contact" }, // URL'yi doğru formatta güncelledim.
      { name: "Politique de Confidentialité", url: "/fr/privacy-policy" }, // <-- EKLENEN SATIR
    ],
  },
];

const socialLinks = {
  facebook: "https://www.facebook.com/krafferoasters",
  x: "#", // Bu linkleri kendinize göre güncelleyebilirsiniz.
  github: "#",
  google: "#",
  slack: "#",
  instagram: "https://www.instagram.com/krafferoasters/" // Instagram linki buraya da eklendi.
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
