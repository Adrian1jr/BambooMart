import React from 'react';
import { 
  Breadcrumbs, 
  BreadcrumbItem,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Card,
  CardBody
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { products } from '../../data/products';
import ProductGrid from '../../components/product-grid';

const SalePage: React.FC = () => {
  const [sortOption, setSortOption] = React.useState("discount");
  
  // Filter sale products
  const saleProducts = React.useMemo(() => {
    return products.filter(product => product.sale);
  }, []);
  
  // Sort products based on selected option
  const sortedProducts = React.useMemo(() => {
    const productsToSort = [...saleProducts];
    
    switch (sortOption) {
      case "price-low":
        return productsToSort.sort((a, b) => {
          const priceA = a.salePrice || a.price;
          const priceB = b.salePrice || b.price;
          return priceA - priceB;
        });
      case "price-high":
        return productsToSort.sort((a, b) => {
          const priceA = a.salePrice || a.price;
          const priceB = b.salePrice || b.price;
          return priceB - priceA;
        });
      case "discount":
        return productsToSort.sort((a, b) => {
          const discountA = ((a.price - (a.salePrice || 0)) / a.price) * 100;
          const discountB = ((b.price - (b.salePrice || 0)) / b.price) * 100;
          return discountB - discountA;
        });
      default:
        return productsToSort;
    }
  }, [saleProducts, sortOption]);
  
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <Breadcrumbs className="mb-6">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem>Sale</BreadcrumbItem>
        </Breadcrumbs>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Card className="bg-danger/10 border-none">
            <CardBody className="text-center py-10">
              <h1 className="text-4xl font-bold mb-2">Special Offers</h1>
              <p className="text-xl text-default-600 mb-4">
                Limited time deals on selected items. Up to 50% off!
              </p>
              <p className="text-danger font-medium">
                Sale ends in: 3 days 14 hours 22 minutes
              </p>
            </CardBody>
          </Card>
        </motion.div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="text-2xl font-bold">Sale Items</h2>
          
          <div className="flex flex-wrap gap-3">
            <Dropdown>
              <DropdownTrigger>
                <Button 
                  variant="flat" 
                  endContent={<Icon icon="lucide:chevron-down" />}
                >
                  Sort By: {sortOption === "price-low" ? "Price: Low to High" : 
                           sortOption === "price-high" ? "Price: High to Low" : 
                           "Biggest Discount"}
                </Button>
              </DropdownTrigger>
              <DropdownMenu 
                aria-label="Sort options"
                onAction={(key) => setSortOption(key as string)}
                selectedKeys={[sortOption]}
                selectionMode="single"
              >
                <DropdownItem key="discount">Biggest Discount</DropdownItem>
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
          <ProductGrid products={sortedProducts} />
        </motion.div>
      </div>
    </div>
  );
};

export default SalePage;