const navBarLinks = [
  { name: "Accueil", url: "/fr" },
  { name: "Produits", url: "/fr/products" },
  { name: "À propos", url: "/fr/about" },
  { name: "Événements", url: "/fr/events" }, // YENİ EKLENDİ
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
      { name: "Événements", url: "/fr/events" }, // YENİ EKLENDİ
      { name: "Blog", url: "/fr/blog" },
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
