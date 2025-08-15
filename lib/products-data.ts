export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  brand: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
  isNew?: boolean;
  isSale?: boolean;
  description: string;
  features: string[];
  specifications: Record<string, string>;
}

export const products: Product[] = [
  {
    id: "moleskine-classic-notebook",
    name: "Deli Leather Cover Notebook 7949 Black",
    price: 35000,
    originalPrice: 40000,
    image:
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/deli-leather-notebook-7949.jpg",
    images: [
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/deli-leather-notebook-7949.jpg",
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/deli-leather-notebook-7949-dimensions.jpg",
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/deli-leather-notebook-7949-lined.jpg",
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/deli-leather-notebook-7949-black.jpg",
    ],
    category: "Notebooks",
    brand: "Deli",
    rating: 4.8,
    reviewCount: 2847,
    inStock: true,
    stockCount: 45,
    isNew: false,
    isSale: true,
    description:
      "Deli Leather Notebook 7949 is designed to meet everyday note-taking needs and helps you keep track of special meetings. This stylish notebook includes 82 lined pages and has designated areas for meeting details such as the name of the meeting, date, time, and location.",
    features: [
      "Hard cover with rounded corners",
      "240 dotted pages (120 sheets)",
      "Elastic closure band",
      "Ribbon bookmark",
      "Expandable inner pocket",
      "Ivory-colored 70gsm paper",
      "Stickers for labeling and archiving",
    ],
    specifications: {
      Dimensions: "25 x 17.5 (cm)",
      Pages: "240 pages",
      "Paper Weight": "70gsm",
      "Paper Color": "Ivory",
      Binding: "Thread-bound",
      "Cover Material": "Cardboard with PU coating",
      "Page Layout": "Dotted",
    },
  },
  {
    id: "pilot-metropolitan-fountain-pen",
    name: "Pilot Disposal Fountain Pen Gray Color",
    price: 15000,
    image:
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/PENRPISVP4MBL.webp",
    images: [
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/PENRPISVP4MBL.webp",
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/PENRPISVP4MBK-1_ITeCWzm.webp",
    ],
    category: "Pens",
    brand: "Pilot",
    rating: 4.7,
    reviewCount: 1923,
    inStock: true,
    stockCount: 28,
    isNew: false,
    isSale: false,
    description:
      "An exceptional fountain pen that combines contemporary design with reliable performance. Features a stainless steel nib and comes with one black ink cartridge. Perfect for everyday writing and calligraphy practice.",
    features: [
      "Disposable fountain pen with a sleek modern designb",
      "Contemporary barrel design",
      "Comfortable grip section",
      "Includes one black ink cartridge",
      "Refillable with standard cartridges",
      "Premium gift box packaging",
      "Excellent for beginners and experienced users",
    ],
    specifications: {
      Length: "5.4 inches (13.7 cm)",
      Weight: "0.8 oz (23g)",
      "Nib Material": "Stainless Steel",
      "Nib Size": "Medium",
      "Filling System": "Cartridge/Converter",
      "Body Material": "Brass with lacquer finish",
      Trim: "Gold-plated",
    },
  },
  {
    id: "rhodia-dotpad-notebook",
    name: "U-Grade Ring Notebook A4 AX-RBA4",
    price: 36000,
    image:
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/NOTBUGAXRBA5-1a_sq.jpg",
    images: [
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/NOTBUGAXRBA5-1a_sq.jpg",
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/NOTBUGAXRBA5-1a_sq.jpg",
    ],
    category: "Notebooks",
    brand: "U-Grade",
    rating: 4.9,
    reviewCount: 856,
    inStock: true,
    stockCount: 67,
    isNew: true,
    isSale: false,
    description:
      "Premium French-made notebook featuring Rhodia's legendary Clairefontaine paper. The dot grid layout is perfect for bullet journaling, technical drawing, and organized note-taking. Iconic orange cover design.",
    features: [
      "Premium Clairefontaine paper",
      "5mm dot grid layout",
      "Microperforated pages",
      "Staple-bound construction",
      "Cardboard backing for writing support",
      "Acid-free, pH neutral paper",
      "Fountain pen friendly",
    ],
    specifications: {
      Dimensions: "5.8 × 8.3 inches (14.8 × 21 cm)",
      Pages: "80 pages",
      "Paper Weight": "80gsm",
      "Paper Color": "White",
      Grid: "5mm dot grid",
      Binding: "Staple-bound",
      Cover: "Orange cardboard",
    },
  },
  {
    id: "lamy-safari-ballpoint-pen",
    name: "Pilot Rexgrip Ballpen 0.7mm BRG-10F",
    price: 20000,
    image:
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/BALPPIBRG10F_sq.jpg",
    images: [
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/BALPPIBRG10F0_sq.jpg",
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/BALPPIBRG10F2_sq.jpg",
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/BALPPIBRG10F3_sq.jpg",
    ],
    category: "Pens",
    brand: "Pilot",
    rating: 20000,
    reviewCount: 1247,
    inStock: true,
    stockCount: 34,
    isNew: false,
    isSale: false,
    description:
      "Rexgrip is a attractively designed ball point pen. Revolutionary rubberized finger grip ensures smooth, consistent writing from first to last stroke. Retractable ball point pen is convenient for carrying in a pocket.",
    features: [
      "Distinctive triangular grip",
      "Sturdy ABS plastic construction",
      "Chrome-plated steel clip",
      "Ergonomic design",
      "Refillable with LAMY M16 refills",
      "Available in multiple colors",
      "Made in Germany",
    ],
    specifications: {
      Length: "5.5 inches (14 cm)",
      Weight: "0.6 oz (17g)",
      "Body Material": "ABS Plastic",
      "Clip Material": "Chrome-plated steel",
      "Refill Type": "LAMY M16",
      "Point Size": "Medium",
      Origin: "Germany",
    },
  },
  {
    id: "leuchtturm1917-medium-notebook",
    name: "Deli Spiral Note Book B5 Size LB560-01",
    price: 13000,
    image:
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/NOTBDELB56001_sq.jpg",
    images: [
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/deli-spiral-note-book-b5-size-dimensions_sq.jpg",
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/deli-spiral-note-book-b5-size_sq.jpg",
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/deli-spiral-note-book-b5-ruled_sq.jpg",
    ],
    category: "Notebooks",
    brand: "Deli",
    rating: 4.8,
    reviewCount: 1654,
    inStock: true,
    stockCount: 52,
    isNew: false,
    isSale: false,
    description:
      "Premium German-made notebook with numbered pages and index. Features high-quality paper that works well with fountain pens and markers. Perfect for bullet journaling and professional note-taking.",
    features: [
      "Numbered pages with index",
      "High-quality 80gsm paper",
      "Ink-proof paper",
      "8 perforated sheets",
      "Blank table of contents",
      "Page marker stickers",
      "Elastic enclosure band",
      "Two ribbon bookmarks",
    ],
    specifications: {
      Dimensions: "5.7 × 8.3 inches (14.5 × 21 cm)",
      Pages: "249 pages",
      "Paper Weight": "80gsm",
      "Paper Color": "White",
      "Page Layout": "Dotted",
      Binding: "Thread-bound",
      Cover: "Hard cover with fabric finish",
    },
  },
  {
    id: "bamboo-desk-organizer-set",
    name: "Deli Desk Organizer 7 Compartments E906",
    price: 25000,
    originalPrice: 30000,
    image:
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/deli-desk-organizer-7-compartments-e906.jpg",
    images: [
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/E3E906_sq.jpg",
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/1E906_HTP_sq.jpg",
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/E5E906_sq.jpg",
      // "/placeholder.svg?height=600&width=600",
    ],
    category: "Accessories",
    brand: "Deli",
    rating: 4.5,
    reviewCount: 743,
    inStock: true,
    stockCount: 23,
    isNew: false,
    isSale: true,
    description:
      "Sustainable desk organizer set that keeps your workspace tidy and organized. Includes multiple compartments for pens, pencils, paper clips, and other office supplies. Eco-friendly and stylish.",
    features: [
      "100% natural bamboo construction",
      "6-piece modular design",
      "Multiple compartment sizes",
      "Smooth, splinter-free finish",
      "Eco-friendly and sustainable",
      "Easy to clean and maintain",
      "Fits standard desk drawers",
    ],
    specifications: {
      Material: "Natural Bamboo",
      Pieces: "6 organizers",
      "Largest Piece": "8 × 4 × 2 inches",
      "Smallest Piece": "3 × 2 × 2 inches",
      Finish: "Natural bamboo oil",
      Weight: "1.2 lbs (544g)",
      Care: "Wipe clean with damp cloth",
    },
  },
  {
    id: "sakura-pigma-micron-set",
    name: "STABILO Point 88 Fineliner Color Parade Set of 20",
    price: 100000,
    image:
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/SIGPST88X20_sq.jpg",
    images: [
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/SIGPST88X201_sq.jpg",
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/SIGPST88X20_sq.jpg",
    ],
    category: "Pens",
    brand: "STABILO",
    rating: 4.9,
    reviewCount: 2156,
    inStock: true,
    stockCount: 89,
    isNew: false,
    isSale: false,
    description:
      "Professional-grade archival ink pens perfect for drawing, illustration, and detailed work. Pigma ink is waterproof, fade-resistant, and won't bleed through most papers. Essential for artists and designers.",
    features: [
      "Archival quality pigma ink",
      "Waterproof and fade-resistant",
      "No smearing or bleeding",
      // "8 different nib sizes",
      "Perfect for technical drawing",
      "Acid-free and non-toxic",
      "Professional artist quality",
    ],
    specifications: {
      "Ink Type": "Pigma archival ink",
      Colors: "Black",
      "Nib Sizes": "005, 01, 02, 03, 05, 08, Brush, PN",
      "Line Widths": "0.20mm to 0.50mm",
      Waterproof: "Yes",
      "Fade Resistant": "Yes",
      "Acid Free": "Yes",
    },
  },
  {
    id: "field-notes-memo-books",
    name: "Field Notes U-Grade Memo Pad A5",
    price: 7500,
    image: "https://df3k2q0k3bu2n.cloudfront.net/static/images/MEMPGEA5_sq.jpg",
    images: [
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/MEMPGEA5_sq.jpg",
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/MEMPGEA5_sq.jpg",
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/MEMPGEA5_sq.jpg",
    ],
    category: "Notebooks",
    brand: "U-Grade",
    rating: 4.7,
    reviewCount: 1432,
    inStock: true,
    stockCount: 76,
    isNew: false,
    isSale: false,
    description:
      "Compact, portable memo books inspired by the agricultural memo books used by farmers. Perfect for jotting down quick notes, ideas, and observations. Made in the USA with quality materials.",
    features: [
      "Vintage-inspired design",
      "Compact pocket size",
      "Ruled pages for neat writing",
      "Durable kraft paper covers",
      "Saddle-stitched binding",
      "Made in the USA",
      "Perfect for everyday carry",
    ],
    specifications: {
      Dimensions: "3.5 × 5.5 inches (8.9 × 14 cm)",
      Pages: "48 pages per book",
      Paper: "50# Finch Paper",
      Cover: "100# French Kraft",
      Ruling: "Narrow ruled",
      Binding: "Saddle-stitched",
      Quantity: "3 memo books",
    },
  },
  {
    id: "staedtler-colored-pencils",
    name: "Deli Colour Kids 12 Jumbo Colour Pencils EC00600",
    price: 31500,
    image: "https://df3k2q0k3bu2n.cloudfront.net/static/images/EC00600.jpg",
    images: [
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/E4EC00600_sq.jpg",
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/EC006001.jpg",
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/EC006002.jpg",
      // "/placeholder.svg?height=600&width=600",
    ],
    category: "Art Supplies",
    brand: "Deli",
    rating: 4.6,
    reviewCount: 987,
    inStock: true,
    stockCount: 41,
    isNew: false,
    isSale: false,
    description:
      "High-quality colored pencils with vibrant, long-lasting colors. Perfect for artists, students, and hobbyists. Features break-resistant leads and smooth color application. Comes in a convenient metal tin.",
    features: [
      "24 vibrant colors",
      "Break-resistant leads",
      "Smooth color application",
      "Excellent lightfastness",
      "Easy to sharpen",
      "Metal tin storage box",
      "Non-toxic and safe",
    ],
    specifications: {
      Colors: "24 assorted colors",
      "Lead Diameter": "3mm",
      "Pencil Length": "7 inches (17.5 cm)",
      Casing: "Cedar wood",
      Packaging: "Metal tin box",
      "Age Range": "3+ years",
      Certification: "CE, ASTM D-4236",
    },
  },
  {
    id: "leather-portfolio-folder",
    name: "Deli PU Leather Clip Board A4 64506 Black",
    price: 50000,
    originalPrice: 60000,
    image:
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/CLIBDE64506_sq.jpg",
    images: [
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/deli-pu-leather-clip-board-black-magnetic_sq.jpg",
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/deli-pu-leather-clip-board_sq.jpg",
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/deli-pu-leather-clip-board-black-writing_sq.jpg",
      "https://df3k2q0k3bu2n.cloudfront.net/static/images/deli-pu-leather-clip-board-holder-black_sq.jpg",
    ],
    category: "Accessories",
    brand: "Professional Plus",
    rating: 4.4,
    reviewCount: 567,
    inStock: true,
    stockCount: 18,
    isNew: false,
    isSale: true,
    description:
      "Premium Style PU Leather clipboard provides a classy, professional modern look for your business interview or presentation. The high-quality PU leather has soft, smooth touch and provides a good writing experience.",
    features: [
      "Genuine leather construction",
      "Multiple document pockets",
      "Business card slots",
      "Pen holder loop",
      "Includes lined notepad",
      "Professional appearance",
      "Durable construction",
    ],
    specifications: {
      Dimensions: "9.5 × 12.5 inches (24 × 32 cm)",
      Material: "Genuine leather",
      Color: "Rich brown",
      Pockets: "4 document pockets",
      "Card Slots": "2 business card slots",
      Notepad: "50 sheets included",
      Closure: "None (open design)",
    },
  },
];

export const categories = [
  {
    id: "notebooks",
    name: "Notebooks",
    description: "Premium journals and notebooks",
    image:
      "https://cdn.prod.website-files.com/634ae6ae4989d90059c9dca9/637301a38ef280de9bb2ad47_spiral%20notebook%20features.webp",
    itemCount: products.filter((p) => p.category === "Notebooks").length,
    link: "/products?category=notebooks",
  },
  {
    id: "pens",
    name: "Pens & Pencils",
    description: "Fine writing instruments and drawing tools",
    image:
      "https://www.gouletpens.com/cdn/shop/collections/Category-Pilot_279ede32-c30c-4598-90d7-fded882ce404_large.jpg?v=1651496066",
    itemCount: products.filter((p) => p.category === "Pens").length,
    link: "/products?category=pens",
  },
  {
    id: "accessories",
    name: "Desk Accessories",
    description: "Organizers, holders, and workspace",
    image:
      "https://www.hermanmiller.com/content/dam/hmicom/page_assets/products/categories/accessories/landing/it_prd_accessories_02.jpg.rendition.480.480.jpg",
    itemCount: products.filter((p) => p.category === "Accessories").length,
    link: "/products?category=accessories",
  },
  {
    id: "art-supplies",
    name: "Art Supplies",
    description: "Colored pencils, markers, and creative tools",
    image:
      "https://www.sheknows.com/wp-content/uploads/2020/03/best-art-supplies-for-kids-amazon.jpg",
    itemCount: products.filter((p) => p.category === "Art Supplies").length,
    link: "/products?category=art-supplies",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );
}

export function getFeaturedProducts(limit = 8): Product[] {
  return products.sort((a, b) => b.rating - a.rating).slice(0, limit);
}

export function getRelatedProducts(productId: string, limit = 3): Product[] {
  const product = getProductById(productId);
  if (!product) return [];

  return products
    .filter((p) => p.id !== productId && p.category === product.category)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}
