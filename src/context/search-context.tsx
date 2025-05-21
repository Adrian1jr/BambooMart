import React from 'react';

type SearchContextType = {
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  toggleSearch: () => void;
};

const SearchContext = React.createContext<SearchContextType>({
  isSearchOpen: false,
  openSearch: () => {},
  closeSearch: () => {},
  toggleSearch: () => {},
});

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  
  const openSearch = React.useCallback(() => {
    setIsSearchOpen(true);
  }, []);
  
  const closeSearch = React.useCallback(() => {
    setIsSearchOpen(false);
  }, []);
  
  const toggleSearch = React.useCallback(() => {
    setIsSearchOpen(prev => !prev);
  }, []);
  
  const value = React.useMemo(() => ({
    isSearchOpen,
    openSearch,
    closeSearch,
    toggleSearch
  }), [isSearchOpen, openSearch, closeSearch, toggleSearch]);
  
  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = React.useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};