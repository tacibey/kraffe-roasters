// src/utils/ru/navigation.ts

const navBarLinks = [
  { name: "Главная", url: "/ru" },
  { name: "Продукция", url: "/ru/products" },
  { name: "О нас", url: "/ru/about" },
  { name: "События", url: "/ru/events" },
  { name: "Блог", url: "/ru/blog" },
  { name: "Дилеры", url: "/ru/dealers" },
  { name: "Контакты", url: "/ru/contact" },
];

const footerLinks = [
  {
    section: "Экосистема",
    links: [
      { name: "Продукция", url: "/ru/products" },
      { name: "Оборудование", url: "/ru/products" },
    ],
  },
  {
    section: "Компания",
    links: [
      { name: "О нас", url: "/ru/about" },
      { name: "События", url: "/ru/events" },
      { name: "Блог", url: "/ru/blog" },
      { name: "Дилеры", url: "/ru/dealers" },
      { name: "Политика конфиденциальности и условия", url: "/privacy-policy-and-terms" },
      { name: "Контакты", url: "/ru/contact" },
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
