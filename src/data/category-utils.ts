export interface Category {
  id: string;
  name: string;
  productCount: number;
  image: string;
}

export const categories: Category[] = [
  {
    id: 't-shirts',
    name: 'T-Shirts',
    productCount: 12,
    image: 'clothing?w=400&h=500&u=t-shirts'
  },
  {
    id: 'hoodies',
    name: 'Hoodies',
    productCount: 8,
    image: 'clothing?w=400&h=500&u=hoodies'
  },
  {
    id: 'jeans',
    name: 'Jeans',
    productCount: 10,
    image: 'clothing?w=400&h=500&u=jeans'
  },
  {
    id: 'pants',
    name: 'Pants',
    productCount: 9,
    image: 'clothing?w=400&h=500&u=pants'
  },
  {
    id: 'jackets',
    name: 'Jackets',
    productCount: 7,
    image: 'clothing?w=400&h=500&u=jackets'
  },
  {
    id: 'sweaters',
    name: 'Sweaters',
    productCount: 6,
    image: 'clothing?w=400&h=500&u=sweaters'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    productCount: 15,
    image: 'clothing?w=400&h=500&u=accessories'
  },
  {
    id: 'dresses',
    name: 'Dresses',
    productCount: 11,
    image: 'clothing?w=400&h=500&u=dresses'
  },
  {
    id: 'activewear',
    name: 'Activewear',
    productCount: 9,
    image: 'clothing?w=400&h=500&u=activewear'
  },
  {
    id: 'loungewear',
    name: 'Loungewear',
    productCount: 7,
    image: 'clothing?w=400&h=500&u=loungewear'
  }
];