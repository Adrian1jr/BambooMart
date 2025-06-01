export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  colors: string[];
  sizes: string[];
  rating: number;
  reviews: number;
  featured?: boolean;
  new?: boolean;
  sale?: boolean;
  salePrice?: number;
  images?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Bamboo Blend Tee",
    price: 39.99,
    description: "Ultra-soft bamboo blend t-shirt with a relaxed fit. Breathable and eco-friendly fabric perfect for everyday wear.",
    category: "t-shirts",
    image: "clothing?w=600&h=800&u=1",
    colors: ["Black", "White", "Green", "Blue"],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.8,
    reviews: 124,
    featured: true,
    images: [
      "clothing?w=600&h=800&u=1",
      "clothing?w=600&h=800&u=1a",
      "clothing?w=600&h=800&u=1b",
      "clothing?w=600&h=800&u=1c"
    ]
  },
  {
    id: 2,
    name: "Panda Graphic Hoodie",
    price: 69.99,
    description: "Cozy hoodie featuring our signature panda design. Made from organic cotton with a soft brushed interior.",
    category: "hoodies",
    image: "clothing?w=600&h=800&u=2",
    colors: ["Black", "Gray", "Green"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.9,
    reviews: 86,
    featured: true,
    new: true,
    images: [
      "clothing?w=600&h=800&u=2",
      "clothing?w=600&h=800&u=2a",
      "clothing?w=600&h=800&u=2b",
      "clothing?w=600&h=800&u=2c"
    ]
  },
  {
    id: 3,
    name: "Relaxed Fit Jeans",
    price: 79.99,
    description: "Classic relaxed fit jeans with a touch of stretch for all-day comfort. Features sustainable washing techniques.",
    category: "jeans",
    image: "clothing?w=600&h=800&u=3",
    colors: ["Blue", "Black", "Light Blue"],
    sizes: ["28", "30", "32", "34", "36", "38"],
    rating: 4.6,
    reviews: 58,
    images: [
      "clothing?w=600&h=800&u=3",
      "clothing?w=600&h=800&u=3a",
      "clothing?w=600&h=800&u=3b",
      "clothing?w=600&h=800&u=3c"
    ]
  },
  {
    id: 4,
    name: "Bamboo Lounge Pants",
    price: 59.99,
    description: "Lightweight lounge pants made from bamboo-derived fabric. Features an elastic waistband and drawstring.",
    category: "pants",
    image: "clothing?w=600&h=800&u=4",
    colors: ["Gray", "Black", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.7,
    reviews: 42,
    new: true,
    images: [
      "clothing?w=600&h=800&u=4",
      "clothing?w=600&h=800&u=4a",
      "clothing?w=600&h=800&u=4b",
      "clothing?w=600&h=800&u=4c"
    ]
  },
  {
    id: 5,
    name: "Eco Puffer Jacket",
    price: 129.99,
    description: "Lightweight puffer jacket made from recycled materials. Water-resistant and perfect for transitional weather.",
    category: "jackets",
    image: "clothing?w=600&h=800&u=5",
    colors: ["Green", "Black", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.9,
    reviews: 37,
    featured: true,
    images: [
      "clothing?w=600&h=800&u=5",
      "clothing?w=600&h=800&u=5a",
      "clothing?w=600&h=800&u=5b",
      "clothing?w=600&h=800&u=5c"
    ]
  },
  {
    id: 6,
    name: "Organic Cotton Shirt",
    price: 49.99,
    description: "Button-up shirt made from 100% organic cotton. Versatile design suitable for casual and semi-formal occasions.",
    category: "shirts",
    image: "clothing?w=600&h=800&u=6",
    colors: ["White", "Light Blue", "Striped"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.5,
    reviews: 63,
    images: [
      "clothing?w=600&h=800&u=6",
      "clothing?w=600&h=800&u=6a",
      "clothing?w=600&h=800&u=6b",
      "clothing?w=600&h=800&u=6c"
    ]
  },
  {
    id: 7,
    name: "Bamboo Blend Socks",
    price: 12.99,
    description: "Pack of 3 bamboo blend socks. Moisture-wicking, anti-bacterial, and incredibly soft on your feet.",
    category: "accessories",
    image: "clothing?w=600&h=800&u=7",
    colors: ["Mixed Pack", "Black Pack", "Neutral Pack"],
    sizes: ["One Size"],
    rating: 4.8,
    reviews: 129
  },
  {
    id: 8,
    name: "Slim Fit Chinos",
    price: 69.99,
    description: "Modern slim fit chinos made from stretch cotton twill. Features a clean design and versatile style.",
    category: "pants",
    image: "clothing?w=600&h=800&u=8",
    colors: ["Khaki", "Navy", "Olive", "Black"],
    sizes: ["28", "30", "32", "34", "36"],
    rating: 4.7,
    reviews: 84,
    sale: true,
    salePrice: 49.99
  },
  {
    id: 9,
    name: "Panda Print T-shirt",
    price: 34.99,
    description: "Fun and playful t-shirt featuring our signature panda design. Made from 100% organic cotton.",
    category: "t-shirts",
    image: "clothing?w=600&h=800&u=9",
    colors: ["White", "Gray", "Light Blue"],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.6,
    reviews: 47,
    new: true
  },
  {
    id: 10,
    name: "Bamboo Blend Sweater",
    price: 79.99,
    description: "Luxuriously soft sweater made from bamboo and wool blend. Perfect for cooler days with excellent temperature regulation.",
    category: "sweaters",
    image: "clothing?w=600&h=800&u=10",
    colors: ["Cream", "Gray", "Black", "Green"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.9,
    reviews: 32,
    sale: true,
    salePrice: 59.99
  },
  {
    id: 11,
    name: "Recycled Denim Jacket",
    price: 89.99,
    description: "Classic denim jacket made from recycled cotton. Features a timeless design with modern sustainable practices.",
    category: "jackets",
    image: "clothing?w=600&h=800&u=11",
    colors: ["Blue", "Light Blue", "Black"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviews: 53
  },
  {
    id: 12,
    name: "Bamboo Blend Dress",
    price: 79.99,
    description: "Elegant yet casual dress made from bamboo-derived fabric. Features a flattering silhouette and breathable material.",
    category: "dresses",
    image: "clothing?w=600&h=800&u=12",
    colors: ["Black", "Green", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.8,
    reviews: 29,
    featured: true
  },
  {
    id: 13,
    name: "Bamboo Yoga Set",
    price: 89.99,
    description: "Comfortable and sustainable yoga set made from bamboo-derived fabric. Includes top and leggings.",
    category: "activewear",
    image: "clothing?w=600&h=800&u=13",
    colors: ["Black", "Navy", "Sage"],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.9,
    reviews: 42,
    new: true
  },
  {
    id: 14,
    name: "Eco-Friendly Scarf",
    price: 29.99,
    description: "Lightweight bamboo blend scarf perfect for all seasons. Sustainably produced with natural dyes.",
    category: "accessories",
    image: "clothing?w=600&h=800&u=14",
    colors: ["Cream", "Terracotta", "Sage"],
    sizes: ["One Size"],
    rating: 4.7,
    reviews: 38
  },
  {
    id: 15,
    name: "Bamboo Lounge Set",
    price: 99.99,
    description: "Ultra-soft matching set for lounging at home. Features a relaxed fit top and pants.",
    category: "loungewear",
    image: "clothing?w=600&h=800&u=15",
    colors: ["Gray", "Oatmeal", "Dusty Rose"],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.8,
    reviews: 56,
    featured: true
  },
  {
    id: 16,
    name: "Sustainable Bomber Jacket",
    price: 119.99,
    description: "Stylish bomber jacket made from recycled materials with bamboo blend lining.",
    category: "jackets",
    image: "clothing?w=600&h=800&u=16",
    colors: ["Olive", "Black", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    reviews: 29,
    sale: true,
    salePrice: 89.99
  },
  {
    id: 17,
    name: "Bamboo Blend Cardigan",
    price: 69.99,
    description: "Versatile cardigan perfect for layering. Made from a sustainable bamboo and cotton blend.",
    category: "sweaters",
    image: "clothing?w=600&h=800&u=17",
    colors: ["Cream", "Gray", "Black"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviews: 41
  },
  {
    id: 18,
    name: "Eco-Friendly Beanie",
    price: 24.99,
    description: "Cozy beanie made from bamboo-derived yarn. Soft, breathable, and perfect for all seasons.",
    category: "accessories",
    image: "clothing?w=600&h=800&u=18",
    colors: ["Black", "Gray", "Green", "Blue"],
    sizes: ["One Size"],
    rating: 4.8,
    reviews: 67,
    sale: true,
    salePrice: 19.99
  },
  {
    id: 19,
    name: "Bamboo Blend Shorts",
    price: 49.99,
    description: "Comfortable and breathable shorts made from our signature bamboo blend fabric.",
    category: "pants",
    image: "clothing?w=600&h=800&u=19",
    colors: ["Navy", "Black", "Khaki"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    reviews: 28,
    sale: true,
    salePrice: 34.99
  },
  {
    id: 20,
    name: "Eco-Friendly Tote Bag",
    price: 39.99,
    description: "Stylish and sustainable tote bag made from recycled materials.",
    category: "accessories",
    image: "clothing?w=600&h=800&u=20",
    colors: ["Natural", "Black", "Green"],
    sizes: ["One Size"],
    rating: 4.9,
    reviews: 52,
    sale: true,
    salePrice: 29.99
  },
  {
    id: 21,
    name: "Bamboo Blend Tank Top",
    price: 29.99,
    description: "Lightweight and breathable tank top perfect for warm weather or layering.",
    category: "t-shirts",
    image: "clothing?w=600&h=800&u=21",
    colors: ["White", "Black", "Blue", "Pink"],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.7,
    reviews: 36,
    sale: true,
    salePrice: 19.99
  },
  {
    id: 22,
    name: "Sustainable Linen Shirt",
    price: 69.99,
    description: "Breathable linen shirt made with sustainable practices. Perfect for warm weather.",
    category: "shirts",
    image: "clothing?w=600&h=800&u=22",
    colors: ["White", "Blue", "Beige"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8,
    reviews: 45,
    sale: true,
    salePrice: 49.99
  },
  {
    id: 23,
    name: "Bamboo Silk Sleep Mask",
    price: 24.99,
    description: "Luxuriously soft sleep mask made from our signature bamboo silk fabric. Helps block light completely while feeling weightless on your face. Perfect for travel or getting quality rest at home.",
    category: "accessories",
    image: "clothing?w=600&h=900&u=2323",
    colors: ["Black", "Navy", "Blush"],
    sizes: ["One Size"],
    rating: 4.9,
    reviews: 62,
    new: true,
    images: [
      "clothing?w=600&h=900&u=2323",
      "clothing?w=600&h=900&u=2323a",
      "clothing?w=600&h=900&u=2323b",
      "clothing?w=600&h=900&u=2323c"
    ]
  },
  {
    id: 24,
    name: "Recycled Denim Backpack",
    price: 89.99,
    description: "Stylish backpack crafted from recycled denim with bamboo fiber lining. Features multiple compartments including a padded laptop sleeve. Water-resistant and durable for daily use.",
    category: "accessories",
    image: "clothing?w=600&h=900&u=2424",
    colors: ["Denim Blue", "Black Denim", "Light Wash"],
    sizes: ["One Size"],
    rating: 4.7,
    reviews: 28,
    sale: true,
    salePrice: 69.99,
    images: [
      "clothing?w=600&h=900&u=2424",
      "clothing?w=600&h=900&u=2424a",
      "clothing?w=600&h=900&u=2424b",
      "clothing?w=600&h=900&u=2424c"
    ]
  },
  {
    id: 25,
    name: "Bamboo Blend Activewear Set",
    price: 119.99,
    description: "Complete activewear set made from our performance bamboo blend. Includes a moisture-wicking top and high-waisted leggings with 4-way stretch. Perfect for yoga, running, or high-intensity workouts.",
    category: "activewear",
    image: "clothing?w=600&h=900&u=2525",
    colors: ["Black", "Olive", "Burgundy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.8,
    reviews: 47,
    featured: true,
    images: [
      "clothing?w=600&h=900&u=2525",
      "clothing?w=600&h=900&u=2525a",
      "clothing?w=600&h=900&u=2525b",
      "clothing?w=600&h=900&u=2525c"
    ]
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (product: Product, limit = 4): Product[] => {
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
};

export const getFeaturedProducts = (limit = 8): Product[] => {
  // Only return products that are explicitly marked as featured
  return products
    .filter(product => product.featured)
    .slice(0, limit);
};

export const getNewArrivals = (limit = 8): Product[] => {
  // Only return products that are explicitly marked as new
  return products
    .filter(product => product.new)
    .slice(0, limit);
};

export const getSaleProducts = (limit = 8): Product[] => {
  // Only return products that are explicitly marked as on sale
  return products
    .filter(product => product.sale)
    .slice(0, limit);
};