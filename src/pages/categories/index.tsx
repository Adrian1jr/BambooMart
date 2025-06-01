import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Button, 
  Breadcrumbs, 
  BreadcrumbItem, 
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Card,
  CardBody,
  CardFooter
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { products } from '../../data/products';
import ProductGrid from '../../components/product-grid';
import SectionTitle from '../../components/section-title';
import { categories } from '../../data/category-utils';

interface CategoryParams {
  category?: string;
}

const CategoriesPage: React.FC = () => {
  const { category } = useParams<CategoryParams>();
  const [sortOption, setSortOption] = React.useState("featured");
  
  // Filter products by category if specified
  const filteredProducts = React.useMemo(() => {
    return products; // Show ALL products on the main categories page
  }, []);
  
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
          <BreadcrumbItem>All Categories</BreadcrumbItem>
        </Breadcrumbs>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <motion.h1 
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Shop By Category
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
        
        {/* Category Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-12">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <Card isPressable className="h-full product-card-hover w-full" disableRipple>
                <Link to={`/categories/${category.id}`} className="block h-full w-full">
                  <CardBody className="p-0 overflow-hidden w-full">
                    <div className="relative w-full">
                      <img
                        src={`https://img.heroui.chat/image/${category.image}`}
                        alt={category.name}
                        className="w-full h-[180px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                        <h3 className="text-xl font-bold text-white">{category.name}</h3>
                      </div>
                    </div>
                  </CardBody>
                  <CardFooter className="flex justify-between items-center w-full">
                    <p className="text-default-500">{category.productCount} Products</p>
                    <Icon icon="lucide:arrow-right" className="text-primary" />
                  </CardFooter>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mb-8">
          <SectionTitle 
            title="All Products" 
            subtitle="Explore our complete collection"
          />
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
                    className="block p-2 rounded hover:bg-content2 transition-colors bg-primary text-white"
                  >
                    All Products
                  </Link>
                </li>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <Link 
                      to={`/categories/${cat.id}`} 
                      className="block p-2 rounded hover:bg-content2 transition-colors"
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
            <ProductGrid products={sortedProducts} columns={3} />
            
            {sortedProducts.length > 12 && (
              <div className="flex justify-center mt-10">
                <Button>
                  <Button variant="flat">1</Button>
                  <Button variant="flat">2</Button>
                  <Button variant="flat">3</Button>
                  <Button variant="flat">
                    <Icon icon="lucide:more-horizontal" />
                  </Button>
                  <Button variant="flat">Next</Button>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;