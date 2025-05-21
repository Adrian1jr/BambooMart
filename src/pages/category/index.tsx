import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Button, 
  Breadcrumbs, 
  BreadcrumbItem, 
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { products } from '../../data/products';
import ProductGrid from '../../components/product-grid';

interface CategoryParams {
  category: string;
}

const categories = [
  { id: 't-shirts', name: 'T-Shirts' },
  { id: 'hoodies', name: 'Hoodies' },
  { id: 'jeans', name: 'Jeans' },
  { id: 'pants', name: 'Pants' },
  { id: 'jackets', name: 'Jackets' },
  { id: 'sweaters', name: 'Sweaters' },
  { id: 'accessories', name: 'Accessories' },
  { id: 'dresses', name: 'Dresses' },
  { id: 'activewear', name: 'Activewear' },
  { id: 'loungewear', name: 'Loungewear' }
];

const CategoryPage: React.FC = () => {
  const { category } = useParams<CategoryParams>();
  const [sortOption, setSortOption] = React.useState("featured");
  
  // Get the current category name
  const currentCategory = categories.find(c => c.id === category)?.name || 'Products';
  
  // Filter products by category
  const filteredProducts = React.useMemo(() => {
    return products.filter(product => product.category === category);
  }, [category]);
  
  // Sort products based on selected option
  const sortedProducts = React.useMemo(() => {
    const productsToSort = [...filteredProducts];
    
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
        return productsToSort.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
      case "featured":
      default:
        return productsToSort.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
  }, [filteredProducts, sortOption]);
  
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <Breadcrumbs className="mb-6">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/categories">Categories</BreadcrumbItem>
          <BreadcrumbItem>{currentCategory}</BreadcrumbItem>
        </Breadcrumbs>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <motion.h1 
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {currentCategory}
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
                           sortOption === "rating" ? "Top Rated" :
                           sortOption === "newest" ? "Newest" : "Featured"}
                </Button>
              </DropdownTrigger>
              <DropdownMenu 
                aria-label="Sort options"
                onAction={(key) => setSortOption(key as string)}
                selectedKeys={[sortOption]}
                selectionMode="single"
              >
                <DropdownItem key="featured">Featured</DropdownItem>
                <DropdownItem key="price-low">Price: Low to High</DropdownItem>
                <DropdownItem key="price-high">Price: High to Low</DropdownItem>
                <DropdownItem key="rating">Top Rated</DropdownItem>
                <DropdownItem key="newest">Newest</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Categories Sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Categories</h2>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/categories" 
                    className="block p-2 rounded hover:bg-content2 transition-colors"
                  >
                    All Products
                  </Link>
                </li>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <Link 
                      to={`/categories/${cat.id}`} 
                      className={`block p-2 rounded hover:bg-content2 transition-colors ${category === cat.id ? 'bg-primary text-white' : ''}`}
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="md:col-span-3">
            {sortedProducts.length === 0 ? (
              <div className="text-center py-16">
                <Icon icon="lucide:package" className="mx-auto text-6xl text-default-300 mb-4" />
                <h2 className="text-2xl font-medium mb-2">No products found</h2>
                <p className="text-default-500 mb-6">
                  We couldn't find any products in this category.
                </p>
                <Button 
                  as={Link} 
                  to="/categories" 
                  color="primary"
                >
                  View All Products
                </Button>
              </div>
            ) : (
              <>
                <ProductGrid products={sortedProducts} columns={3} />
                
                {sortedProducts.length > 12 && (
                  <div className="flex justify-center mt-10">
                    <Button.Group>
                      <Button variant="flat">1</Button>
                      <Button variant="flat">2</Button>
                      <Button variant="flat">
                        <Icon icon="lucide:more-horizontal" />
                      </Button>
                      <Button variant="flat">Next</Button>
                    </Button.Group>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;