import React from 'react';
import { 
  Breadcrumbs, 
  BreadcrumbItem,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { products } from '../../data/products';
import ProductGrid from '../../components/product-grid';

const BestsellersPage: React.FC = () => {
  const [sortOption, setSortOption] = React.useState("rating");
  
  // Get bestsellers - products with highest ratings
  const bestsellers = React.useMemo(() => {
    return products
      .sort((a, b) => {
        // Sort by rating first
        if (b.rating !== a.rating) {
          return b.rating - a.rating;
        }
        // Then by number of reviews
        return b.reviews - a.reviews;
      })
      .slice(0, 8);
  }, []);
  
  // Sort products based on selected option
  const sortedProducts = React.useMemo(() => {
    const productsToSort = [...bestsellers];
    
    switch (sortOption) {
      case "price-low":
        return productsToSort.sort((a, b) => {
          const priceA = a.sale ? (a.salePrice || a.price) : a.price;
          const priceB = b.sale ? (b.salePrice || b.price) : b.price;
          return priceA - priceB;
        });
      case "price-high":
        return productsToSort.sort((a, b) => {
          const priceA = a.sale ? (a.salePrice || a.price) : a.price;
          const priceB = b.sale ? (b.salePrice || b.price) : b.price;
          return priceB - priceA;
        });
      case "popularity":
        return productsToSort.sort((a, b) => b.reviews - a.reviews);
      case "rating":
      default:
        return productsToSort.sort((a, b) => b.rating - a.rating);
    }
  }, [bestsellers, sortOption]);
  
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <Breadcrumbs className="mb-6">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem>Bestsellers</BreadcrumbItem>
        </Breadcrumbs>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <motion.h1 
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Our Bestsellers
          </motion.h1>
          
          <div className="flex flex-wrap gap-3">
            <Dropdown>
              <DropdownTrigger>
                <Button 
                  variant="flat" 
                  endContent={<Icon icon="lucide:chevron-down" />}
                >
                  Sort By: {sortOption === "price-low" ? "Price: Low to High" : 
                           sortOption === "price-high" ? "Price: High to Low" :
                           sortOption === "popularity" ? "Most Popular" : "Top Rated"}
                </Button>
              </DropdownTrigger>
              <DropdownMenu 
                aria-label="Sort options"
                onAction={(key) => setSortOption(key as string)}
                selectedKeys={[sortOption]}
                selectionMode="single"
              >
                <DropdownItem key="rating">Top Rated</DropdownItem>
                <DropdownItem key="popularity">Most Popular</DropdownItem>
                <DropdownItem key="price-low">Price: Low to High</DropdownItem>
                <DropdownItem key="price-high">Price: High to Low</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-content2 rounded-lg p-6 mb-8">
            <p className="text-lg">
              Our bestsellers represent our most loved products, backed by excellent ratings and customer reviews. These sustainable fashion staples have earned their place as customer favorites through exceptional quality, comfort, and style.
            </p>
          </div>
          
          <ProductGrid products={sortedProducts} />
        </motion.div>
      </div>
    </div>
  );
};

export default BestsellersPage;