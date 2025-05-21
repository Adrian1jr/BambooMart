import React from 'react';
import { products } from '../data/products';
import { categories } from '../data/category-utils';
import { SearchResult } from '../components/search-command-menu';
import { useSearch } from '../context/search-context';

const staticPages = [
  { id: 'home', name: 'Home', url: '/' },
  { id: 'new-arrivals', name: 'New Arrivals', url: '/new-arrivals' },
  { id: 'sale', name: 'Sale', url: '/sale' },
  { id: 'sustainability', name: 'Sustainability', url: '/sustainability' },
  { id: 'about', name: 'About Us', url: '/about' },
  { id: 'contact', name: 'Contact Us', url: '/contact' },
  { id: 'faq', name: 'FAQs', url: '/faq' },
  { id: 'track-order', name: 'Track Order', url: '/track-order' },
];

export const useSearchCommand = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  
  // Get the search context
  const { isSearchOpen, closeSearch } = useSearch();

  // Update local state when context changes
  React.useEffect(() => {
    setIsOpen(isSearchOpen);
  }, [isSearchOpen]);

  // Prepare search data
  const searchData = React.useMemo(() => {
    const productResults: SearchResult[] = products.map(product => ({
      id: product.id,
      name: product.name,
      image: product.image,
      category: product.category,
      price: product.price,
      salePrice: product.salePrice,
      sale: product.sale,
      url: `/product/${product.id}`,
      description: product.description,
      type: 'product'
    }));

    const categoryResults: SearchResult[] = categories.map(category => ({
      id: category.id,
      name: category.name,
      image: category.image,
      url: `/categories/${category.id}`,
      description: `${category.productCount} Products`,
      type: 'category'
    }));

    const pageResults: SearchResult[] = staticPages.map(page => ({
      id: page.id,
      name: page.name,
      url: page.url,
      type: 'page'
    }));

    return [...productResults, ...categoryResults, ...pageResults];
  }, []);

  // Filter results based on search term
  const results = React.useMemo(() => {
    if (!searchTerm) return [];

    const normalizedSearchTerm = searchTerm.toLowerCase().trim();

    return searchData.filter(item => {
      // Search in name
      if (item.name.toLowerCase().includes(normalizedSearchTerm)) return true;
      
      // Search in category for products
      if (item.type === 'product' && item.category?.toLowerCase().includes(normalizedSearchTerm)) return true;
      
      // Search in description
      if (item.description?.toLowerCase().includes(normalizedSearchTerm)) return true;

      return false;
    }).slice(0, 15); // Limit results for performance
  }, [searchTerm, searchData]);

  // Reset selected index when results change
  React.useEffect(() => {
    setSelectedIndex(0);
  }, [results]);

  // Focus input when modal opens
  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    } else {
      setSearchTerm('');
    }
  }, [isOpen]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => Math.max(prev - 1, 0));
        break;
      case 'Enter':
        e.preventDefault();
        if (results[selectedIndex]) {
          window.location.href = results[selectedIndex].url;
          setIsOpen(false);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        closeSearch(); // Also update the context
        break;
    }
  };

  return {
    isOpen,
    setIsOpen,
    searchTerm,
    setSearchTerm,
    results,
    selectedIndex,
    setSelectedIndex,
    handleKeyDown,
    searchInputRef
  };
};