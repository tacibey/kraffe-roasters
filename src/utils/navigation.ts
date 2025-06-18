// src/utils/navigation.ts

const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Products", url: "/products" },
  { name: "About Us", url: "/about" },
  { name: "Blog", url: "/blog" },
  { name: "Contact Us", url: "/contact" },
];

const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "Products", url: "/products" },
      { name: "Equipment", url: "/products" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "/about" },
      { name: "Blog", url: "/blog" },
      { name: "Contact Us", url: "/contact" },
      { name: "Privacy Policy", url: "/privacy-policy" }, // <-- EKLENEN SATIR
    ],
  },
];

const socialLinks = {
  facebook: "https://www.facebook.com/krafferoasters",
  google: "#",
  slack: "#",
  instagram: "https://www.instagram.com/krafferoasters/"
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
