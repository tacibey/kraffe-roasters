// src/utils/navigation.ts

const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Products", url: "/products" },
  { name: "About Us", url: "/about" },
  { name: "Events", url: "/events" },
  { name: "Blog", url: "/blog" },
  { name: "Dealers", url: "/dealers" }, // YENİ EKLENDİ
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
      { name: "Events", url: "/events" },
      { name: "Blog", url: "/blog" },
      { name: "Dealers", url: "/dealers" }, // YENİ EKLENDİ
      { name: "Privacy Policy & Terms", url: "/privacy-policy-and-terms" },
      { name: "Contact Us", url: "/contact" },
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
