import React from 'react';
import ProductCard from './product-card';
import { Product } from '../data/products';

interface ProductGridProps {
  products: Product[];
  columns?: number;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, columns = 4 }) => {
  const getGridCols = () => {
    switch (columns) {
      case 2:
        return 'grid-cols-1 sm:grid-cols-2';
      case 3:
        return 'grid-cols-1 lg:grid-cols-3';
      case 4:
        return 'grid-cols-1 lg:grid-cols-4';
      default:
        return 'grid-cols-1 lg:grid-cols-4';
    }
  };

  return (
    <div className={`grid ${getGridCols()} gap-4 md:gap-6 w-full`}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;