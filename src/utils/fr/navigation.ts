// src/utils/fr/navigation.ts

const navBarLinks = [
  { name: "Accueil", url: "/fr" },
  { name: "Produits", url: "/fr/products" },
  { name: "À propos", url: "/fr/about" },
  { name: "Événements", url: "/fr/events" },
  { name: "Blog", url: "/fr/blog" },
  { name: "Revendeurs", url: "/fr/dealers" }, // YENİ EKLENDİ
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
      { name: "Événements", url: "/fr/events" },
      { name: "Blog", url: "/fr/blog" },
      { name: "Revendeurs", url: "/fr/dealers" }, // YENİ EKLENDİ
      { name: "Contact", url: "/fr/contact" },
    ],
  },
];

const socialLinks = {
  facebook: "https://www.facebook.com/krafferoasters",
  x: "#",
  github: "#",
  google: "#",
  slack: "#",
  instagram: "https://www.instagram.com/kraffe.roasters/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
