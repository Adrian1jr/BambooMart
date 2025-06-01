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
  images?: string[]; // Add this property for multiple product images
}

// ... other interfaces ...