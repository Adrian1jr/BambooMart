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

const NewArrivalsPage: React.FC = () => {
  const [sortOption, setSortOption] = React.useState("newest");
  
  // Filter new arrivals
  const newArrivals = React.useMemo(() => {
    return products.filter(product => product.new || Math.random() > 0.6); // Include some random products to ensure we have enough
  }, []);
  
  // Sort products based on selected option
  const sortedProducts = React.useMemo(() => {
    const productsToSort = [...newArrivals];
    
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
      case "rating":
        return productsToSort.sort((a, b) => b.rating - a.rating);
      case "newest":
      default:
        return productsToSort;
    }
  }, [newArrivals, sortOption]);
  
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <Breadcrumbs className="mb-6">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem>New Arrivals</BreadcrumbItem>
        </Breadcrumbs>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <motion.h1 
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            New Arrivals
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
                           sortOption === "rating" ? "Top Rated" : "Newest"}
                </Button>
              </DropdownTrigger>
              <DropdownMenu 
                aria-label="Sort options"
                onAction={(key) => setSortOption(key as string)}
                selectedKeys={[sortOption]}
                selectionMode="single"
              >
                <DropdownItem key="newest">Newest</DropdownItem>
                <DropdownItem key="price-low">Price: Low to High</DropdownItem>
                <DropdownItem key="price-high">Price: High to Low</DropdownItem>
                <DropdownItem key="rating">Top Rated</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ProductGrid products={sortedProducts} />
        </motion.div>
      </div>
    </div>
  );
};

export default NewArrivalsPage;