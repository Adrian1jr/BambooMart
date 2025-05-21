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
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import { useFavoritesStore } from '../../store/favorites-store';
import ProductGrid from '../../components/product-grid';

const FavoritesPage: React.FC = () => {
  const { favoriteIds, toggleFavorite } = useFavoritesStore();
  const [sortOption, setSortOption] = React.useState("newest");
  
  // Filter products by favorites
  const favoriteProducts = React.useMemo(() => {
    return products.filter(product => favoriteIds.includes(product.id));
  }, [favoriteIds]);
  
  // Sort products based on selected option
  const sortedProducts = React.useMemo(() => {
    const productsToSort = [...favoriteProducts];
    
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
  }, [favoriteProducts, sortOption]);

  const clearAllFavorites = () => {
    // Remove all favorites one by one with visual feedback
    favoriteProducts.forEach(product => {
      toggleFavorite(product.id, product.name);
    });
  };
  
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <Breadcrumbs className="mb-6">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem>My Favorites</BreadcrumbItem>
        </Breadcrumbs>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-3xl font-bold">My Favorites</h1>
            <p className="text-default-500 mt-1">{favoriteProducts.length} items saved</p>
          </motion.div>
          
          <div className="flex flex-wrap gap-3">
            {favoriteProducts.length > 0 && (
              <Button 
                variant="flat" 
                color="danger" 
                startContent={<Icon icon="lucide:trash-2" />}
                onPress={clearAllFavorites}
              >
                Clear All
              </Button>
            )}
            
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
          {favoriteProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl text-default-300 mb-4">
                <Icon icon="lucide:heart" className="mx-auto" />
              </div>
              <h2 className="text-2xl font-medium mb-4">Your favorites list is empty</h2>
              <p className="text-default-500 mb-8">
                Save items you love by clicking the heart icon on any product.
              </p>
              <Button 
                as={Link} 
                to="/categories" 
                color="primary" 
                size="lg"
                endContent={<Icon icon="lucide:arrow-right" />}
              >
                Browse Products
              </Button>
            </div>
          ) : (
            <ProductGrid products={sortedProducts} />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default FavoritesPage;