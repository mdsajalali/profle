interface NavItem {
  name: string;
  link: string;
  subItems?: NavItem[];
}

export const navItemsOne: NavItem[] = [
  {
    name: "Home",
    link: "/home",
    subItems: [
      { name: "View Demo", link: "/" },
      { name: "Designer", link: "/designer" },
      { name: "Photography", link: "/photography" },
      { name: "Fitness", link: "/fitness" },
      { name: "Freelancer", link: "/freelancer" },
      { name: "Lawyer", link: "/lawyer" },
    ],
  },
  { name: "About", link: "#about" },
  { name: "Work", link: "#work" },
  { name: "Testimonial", link: "#testimonial" },
  { name: "Contact Us", link: "#contact" },
];

export const navItemsViewDemoNav: NavItem[] = [
  {
    name: "View Demo",
    link: "/",
    subItems: [
      { name: "Home", link: "/home" },
      { name: "Designer", link: "/designer" },
      { name: "Photography", link: "/photography" },
      { name: "Fitness", link: "/fitness" },
      { name: "Freelancer", link: "/freelancer" },
      { name: "Lawyer", link: "/lawyer" },
    ],
  },
  { name: "Feature", link: "#feature" },
  { name: "FAQ", link: "#faq" },
];
