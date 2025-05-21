import React from 'react';
import { 
  Modal,
  ModalContent,
  Button,
  Image,
  Chip
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { Link, useHistory } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchCommand } from '../hooks/use-search-command';
import { Product } from '../data/products';
import { categories } from '../data/category-utils';
import { useSearch } from '../context/search-context';

const KEYBOARD_SHORTCUT = 'K';

export type SearchResult = {
  id: number | string;
  name: string;
  image?: string;
  category?: string;
  price?: number;
  salePrice?: number;
  sale?: boolean;
  url: string;
  description?: string;
  type: 'product' | 'category' | 'page';
};

export const SearchCommandMenu: React.FC = () => {
  const { 
    isOpen, 
    setIsOpen, 
    searchTerm, 
    setSearchTerm,
    results,
    selectedIndex,
    setSelectedIndex,
    handleKeyDown,
    searchInputRef
  } = useSearchCommand();
  
  // Use the search context
  const { isSearchOpen, closeSearch } = useSearch();

  const history = useHistory();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === KEYBOARD_SHORTCUT && (e.metaKey || e.ctrlKey)) || e.key === '/') {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [setIsOpen]);

  // Update the local state when the context changes
  React.useEffect(() => {
    setIsOpen(isSearchOpen);
  }, [isSearchOpen, setIsOpen]);

  const handleSelect = (result: SearchResult) => {
    setIsOpen(false);
    closeSearch(); // Close the search when selecting a result
    history.push(result.url);
  };

  // Handle close to update both local and context state
  const handleClose = () => {
    setIsOpen(false);
    closeSearch();
  };

  const groupedResults = React.useMemo(() => {
    const groups: Record<string, SearchResult[]> = {
      products: [],
      categories: [],
      pages: []
    };

    results.forEach(result => {
      switch (result.type) {
        case 'product':
          groups.products.push(result);
          break;
        case 'category':
          groups.categories.push(result);
          break;
        case 'page':
          groups.pages.push(result);
          break;
      }
    });

    return groups;
  }, [results]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      placement="center"
      backdrop="blur"
      hideCloseButton
      classNames={{
        base: "max-w-3xl w-full",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <div className="bg-content1 rounded-large overflow-hidden">
            <div className="p-2 flex items-center border-b border-divider">
              <Icon icon="lucide:search" className="ml-2 text-default-400" />
              <input
                ref={searchInputRef}
                className="w-full p-2 bg-transparent border-none outline-none text-foreground"
                placeholder="Search products, categories, pages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
              />
              <div className="bg-content3 text-default-500 text-xs px-2 py-1 rounded">
                ESC
              </div>
            </div>
            
            <div className="h-[60vh] max-h-[500px] overflow-y-auto">
              {/* Categories sidebar removed */}
              
              {/* Results */}
              <div className="p-3 space-y-6">
                <AnimatePresence>
                  {/* Products */}
                  {groupedResults.products.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="flex items-center justify-between px-2 py-1">
                        <h3 className="text-sm font-medium text-default-500">Products</h3>
                        <Button
                          variant="light"
                          size="sm"
                          as={Link}
                          to="/categories"
                          className="text-xs"
                          onClick={onClose}
                        >
                          View All
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {groupedResults.products.map((result, index) => (
                          <div
                            key={result.id}
                            className={`rounded-medium overflow-hidden border cursor-pointer transition-all ${
                              selectedIndex === index 
                                ? 'border-primary ring-2 ring-primary/20' 
                                : 'border-divider hover:border-primary'
                            }`}
                            onClick={() => handleSelect(result)}
                          >
                            <div className="relative">
                              <Image
                                removeWrapper
                                src={`https://img.heroui.chat/image/${result.image}`}
                                className="w-full h-[140px] object-cover"
                                alt={result.name}
                              />
                              {result.sale && (
                                <Chip 
                                  color="danger" 
                                  size="sm" 
                                  className="absolute top-2 right-2"
                                >
                                  SALE
                                </Chip>
                              )}
                            </div>
                            <div className="p-2">
                              <p className="font-medium text-sm line-clamp-1">{result.name}</p>
                              <div className="flex items-center justify-between mt-1">
                                <div className="flex items-center gap-1">
                                  {result.sale ? (
                                    <>
                                      <span className="text-danger font-medium text-sm">${result.salePrice?.toFixed(2)}</span>
                                      <span className="text-default-400 text-xs line-through">${result.price?.toFixed(2)}</span>
                                    </>
                                  ) : (
                                    <span className="font-medium text-sm">${result.price?.toFixed(2)}</span>
                                  )}
                                </div>
                                <span className="text-xs text-default-400 capitalize">{result.category}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Categories */}
                  {groupedResults.categories.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="flex items-center justify-between px-2 py-1">
                        <h3 className="text-sm font-medium text-default-500">Categories</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {groupedResults.categories.map((result) => (
                          <div
                            key={result.id}
                            className="rounded-medium overflow-hidden border border-divider hover:border-primary cursor-pointer"
                            onClick={() => handleSelect(result)}
                          >
                            <div className="flex items-center p-2 gap-3">
                              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <Icon icon="lucide:layout-grid" className="text-primary" />
                              </div>
                              <div>
                                <p className="font-medium">{result.name}</p>
                                <p className="text-xs text-default-500">{result.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Pages */}
                  {groupedResults.pages.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="flex items-center justify-between px-2 py-1">
                        <h3 className="text-sm font-medium text-default-500">Pages</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {groupedResults.pages.map((result) => (
                          <div
                            key={result.id}
                            className="rounded-medium overflow-hidden border border-divider hover:border-primary cursor-pointer"
                            onClick={() => handleSelect(result)}
                          >
                            <div className="flex items-center p-2 gap-3">
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <Icon icon="lucide:file" className="text-primary" />
                              </div>
                              <p className="font-medium">{result.name}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Empty State */}
                  {results.length === 0 && searchTerm && (
                    <div className="flex flex-col items-center justify-center py-12">
                      <Icon icon="lucide:search-x" className="text-default-300 text-4xl mb-4" />
                      <p className="text-default-500">No results found for "{searchTerm}"</p>
                      <p className="text-default-400 text-sm mt-1">Try searching for something else</p>
                    </div>
                  )}

                  {/* Initial State */}
                  {results.length === 0 && !searchTerm && (
                    <div className="space-y-6 px-2">
                      <div>
                        <h3 className="text-sm font-medium text-default-500 mb-2">Recent Searches</h3>
                        <div className="flex flex-wrap gap-2">
                          {["bamboo t-shirt", "organic hoodie", "sustainable"].map((term) => (
                            <Chip 
                              key={term} 
                              variant="flat" 
                              onClick={() => setSearchTerm(term)}
                              className="cursor-pointer"
                            >
                              {term}
                            </Chip>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium text-default-500 mb-2">Popular Categories</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {categories.slice(0, 4).map((category) => (
                            <Button
                              key={category.id}
                              variant="flat"
                              className="justify-start"
                              startContent={<Icon icon="lucide:layout-grid" className="text-primary" />}
                              as={Link}
                              to={`/categories/${category.id}`}
                              onClick={onClose}
                            >
                              {category.name}
                            </Button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium text-default-500 mb-2">Quick Links</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { name: "My Account", icon: "lucide:user", url: "/profile" },
                            { name: "Orders", icon: "lucide:package", url: "/profile/orders" },
                            { name: "Wishlist", icon: "lucide:heart", url: "/favorites" },
                            { name: "Cart", icon: "lucide:shopping-bag", url: "/cart" },
                          ].map((link) => (
                            <Button
                              key={link.name}
                              variant="flat"
                              className="justify-start"
                              startContent={<Icon icon={link.icon} className="text-primary" />}
                              as={Link}
                              to={link.url}
                              onClick={onClose}
                            >
                              {link.name}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            <div className="p-3 border-t border-divider text-xs text-default-500 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span>
                  <span className="bg-content3 text-default-500 px-1 rounded">↓</span>{' '}
                  <span className="bg-content3 text-default-500 px-1 rounded">↑</span> to navigate
                </span>
                <span>
                  <span className="bg-content3 text-default-500 px-1 rounded">Enter</span> to select
                </span>
              </div>
              <div>
                <span>
                  Press{' '}
                  <span className="bg-content3 text-default-500 px-1 rounded">⌘</span>
                  <span className="bg-content3 text-default-500 px-1 rounded">K</span> to search
                </span>
              </div>
            </div>
          </div>
        )}
      </ModalContent>
    </Modal>
  );
};

export default SearchCommandMenu;