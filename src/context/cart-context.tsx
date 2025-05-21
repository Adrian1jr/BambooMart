import React from 'react';
import { useCartStore, CartItem } from '../store/cart-store';
import { Product } from '../data/products';

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
}

const CartContext = React.createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  itemCount: 0,
  subtotal: 0,
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Use the Zustand store instead of React state
  const { 
    items, 
    itemCount, 
    subtotal, 
    addItem, 
    removeItem, 
    updateQuantity, 
    clearCart 
  } = useCartStore();
  
  return (
    <CartContext.Provider 
      value={{ 
        items, 
        addItem, 
        removeItem, 
        updateQuantity, 
        clearCart, 
        itemCount,
        subtotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => React.useContext(CartContext);