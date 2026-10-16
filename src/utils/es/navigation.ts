// src/utils/es/navigation.ts

const navBarLinks = [
  { name: "Inicio", url: "/es" },
  { name: "Productos", url: "/es/products" },
  { name: "Sobre Nosotros", url: "/es/about" },
  { name: "Eventos", url: "/es/events" },
  { name: "Blog", url: "/es/blog" },
  { name: "Distribuidores", url: "/es/dealers" },
  { name: "Contacto", url: "/es/contact" },
];

const footerLinks = [
  {
    section: "Ecosistema",
    links: [
      { name: "Productos", url: "/es/products" },
      { name: "Equipamiento", url: "/es/products" },
    ],
  },
  {
    section: "Empresa",
    links: [
      { name: "Sobre Nosotros", url: "/es/about" },
      { name: "Eventos", url: "/es/events" },
      { name: "Blog", url: "/es/blog" },
      { name: "Distribuidores", url: "/es/dealers" },
      { name: "Política de Privacidad y Términos", url: "/privacy-policy-and-terms" },
      { name: "Contacto", url: "/es/contact" },
    ],
  },
];

const socialLinks = {
  facebook: "https://www.facebook.com/krafferoasters",
  x: "https://x.com/krafferoasters",
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
