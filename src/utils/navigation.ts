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
    ],
  },
];

const socialLinks = {
  facebook: "https://www.facebook.com/krafferoasters",
  x: "https://x.com/krafferoasters",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "#",
  slack: "#",
  instagram: "https://www.instagram.com/kraffe.roasters/"
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
