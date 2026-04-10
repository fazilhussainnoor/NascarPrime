export interface NavItem {
  title: string;
  href: string;
  items?: NavItem[];
  isPromotion?: boolean;
}

export const navigationData: NavItem[] = [
  {
    title: "New Arrivals",
    href: "/new-arrivals",
    items: [
      { title: "Men", href: "/new-arrivals/men" },
      { title: "Women", href: "/new-arrivals/women" },
      { title: "Kids", href: "/new-arrivals/kids" },
      { title: "Bamboo Collection", href: "/new-arrivals/bamboo" },
    ],
  },
  {
    title: "Men",
    href: "/men",
    items: [
      { title: "Tops", href: "/men/tops" },
      { title: "Bottoms & Sleepwear", href: "/men/bottoms-sleepwear" },
      { title: "Activewear", href: "/men/activewear" },
      { title: "Footwear", href: "/men/footwear" },
      { title: "Accessories", href: "/men/accessories" },
    ],
  },
  {
    title: "Women",
    href: "/women",
    items: [
      { title: "Ready to Wear", href: "/women/ready-to-wear" },
      { title: "Activewear", href: "/women/activewear" },
      { title: "Underwear & Sleepwear", href: "/women/underwear-sleepwear" },
      { title: "Footwear", href: "/women/footwear" },
      { title: "Accessories", href: "/women/accessories" },
    ],
  },
  {
    title: "Kids",
    href: "/kids",
    items: [
      { title: "Baby", href: "/kids/baby" },
      { title: "Boys", href: "/kids/boys" },
      { title: "Girls", href: "/kids/girls" },
      { title: "Footwear", href: "/kids/footwear" },
      { title: "Accessories", href: "/kids/accessories" },
    ],
  },
  {
    title: "Home",
    href: "/home",
    items: [
      { title: "Bedding", href: "/home/bedding" },
      { title: "Decor", href: "/home/decor" },
      { title: "Essentials", href: "/home/essentials" },
      { title: "Electronics", href: "/home/electronics" },
    ],
  },
  {
    title: "Crazy Deals",
    href: "/crazy-deals",
    isPromotion: true,
  },
  {
    title: "Bundle Offers",
    href: "/bundle-offers",
    isPromotion: true,
  },
];
