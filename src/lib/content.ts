// All site copy and product data in one place, so it can be edited without touching layout code.

export const company = {
  name: "Al Wahda Trading WLL",
  email: "info@alwahdatradingwll.com",
  phones: [
    { label: "+974 4414 3691", href: "tel:+97444143691" },
    { label: "+974 5077 8464", href: "tel:+97450778464" },
    { label: "+974 6633 3515", href: "tel:+97466333515" },
  ],
  address: ["Aziziya Shopping Complex, Building 97, Office 25", "Aziziya Street, Doha, Qatar"],
  mapQuery: "Aziziya Shopping Complex, Doha, Qatar",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const heroTiles = [
  { src: "/images/site/cat-1-1.jpg", alt: "French fries, crinkle fries, potato wedges and potato bites", label: "Fries & potato" },
  { src: "/images/site/cat-4-2.jpg", alt: "Mango, custard apple and sapota", label: "Fruit & pulp" },
  { src: "/images/site/cat-3-1.jpg", alt: "Cuts of beef, lamb and chicken", label: "Meat & poultry" },
  { src: "/images/site/cat-2-1.jpg", alt: "Burger with chicken nuggets", label: "Burgers & nuggets" },
];

export const categories: { title: string; text: string; brand?: string }[] = [
  { title: "French fries", text: "Thin, straight-cut, crinkle and wedge fries, plus potato bites, from Maestro.", brand: "maestro" },
  { title: "Fruit pulp & slices", text: "Frozen mango, guava, strawberry, passion fruit, tender coconut and more, from Fruitco.", brand: "fruitco" },
  { title: "Frozen meat & poultry", text: "Beef, lamb and chicken cuts, portioned and ready for the kitchen." },
  { title: "Burger products", text: "Beef and chicken patties, chicken burgers and nuggets.", brand: "golden-fresh" },
  { title: "Frozen wraps", text: "Wheat flour tortillas from American Classic, for shawarma, wraps and rolls.", brand: "american-classic" },
  { title: "Mayonnaise & ketchup", text: "Heavy-duty mayonnaise and ketchup in catering sizes, from The Recipe.", brand: "recipe" },
];

export type Brand = {
  id: string;
  name: string;
  note: string;
  images: { src: string; alt: string }[];
};

function numbered(dir: string, alt: string, from: number, to: number, ext: string) {
  return Array.from({ length: to - from + 1 }, (_, i) => ({
    src: `/images/${dir}/${from + i}.${ext}`,
    alt,
  }));
}

const fruits = [
  ["mango", "mango"],
  ["guava", "guava"],
  ["strawberry", "strawberry"],
  ["passion-fruit", "passion fruit"],
  ["pineapple", "pineapple"],
  ["tender-coconut", "tender coconut"],
  ["avocado", "avocado"],
  ["castard-apple", "custard apple"],
  ["grapes", "grapes"],
  ["muskmelon", "muskmelon"],
  ["sapota", "sapota"],
];

export const brands: Brand[] = [
  {
    id: "fruitco",
    name: "Fruitco",
    note: "Freshly frozen fruit and pulp: mango, guava, strawberry, passion fruit, pineapple, tender coconut, avocado, custard apple, grapes, muskmelon and sapota.",
    images: fruits.map(([file, name]) => ({ src: `/images/fruitco/${file}.jpg`, alt: `Fruitco frozen ${name}` })),
  },
  {
    id: "maestro",
    name: "Maestro",
    note: "French fries and potato products in several cuts, for restaurants and quick-service kitchens.",
    images: numbered("maestro", "Maestro potato product", 1, 27, "jpg"),
  },
  {
    id: "golden-fresh",
    name: "Golden Fresh",
    note: "Frozen vegetables such as American sweet corn, plus burger patties and ready-to-cook items.",
    images: [
      ...numbered("golden-fresh", "Golden Fresh frozen product", 1, 14, "png"),
      ...numbered("golden-fresh", "Golden Fresh frozen product", 15, 21, "jpg"),
    ],
  },
  {
    id: "american-classic",
    name: "American Classic",
    note: "Wheat flour tortilla wraps for shawarma, wraps and rolls.",
    images: numbered("american-classic", "American Classic tortilla wraps", 1, 3, "jpg"),
  },
  {
    id: "recipe",
    name: "The Recipe",
    note: "Heavy-duty mayonnaise and sauces in catering sizes.",
    images: numbered("recipe", "The Recipe mayonnaise", 1, 4, "jpg"),
  },
];

export const reasons = [
  {
    title: "Checked quality",
    text: "Every product is screened before it reaches our shelves, so what arrives in your kitchen meets the standard you ordered.",
  },
  {
    title: "Fast, reliable delivery",
    text: "Orders are delivered quickly and consistently, so your menu is never waiting on stock.",
  },
  {
    title: "A wide range in one order",
    text: "Fries, fruit, meat, wraps and sauces from one supplier means fewer invoices and fewer deliveries.",
  },
  {
    title: "Support when you need it",
    text: "A local team you can call directly for orders, product advice and anything else.",
  },
];

export const testimonials = [
  {
    quote:
      "Al Wahda Trading WLL has truly elevated my culinary experience. Their mango pulp is a game-changer for my desserts. The freshness is unparalleled!",
    name: "Ahmed Al-Mansoori",
  },
  {
    quote:
      "I rely on Al Wahda for my restaurant’s supplies. Their sweet corn is consistently top-notch, and their commitment to quality is evident in every delivery.",
    name: "Layla Hasan, restaurant owner",
  },
  {
    quote:
      "The frozen fruits from Al Wahda are a staple in my family’s diet. Knowing they’re sourced sustainably adds an extra layer of satisfaction.",
    name: "Nasser Ahmed",
  },
];

export function getBrand(id: string) {
  return brands.find((b) => b.id === id);
}
