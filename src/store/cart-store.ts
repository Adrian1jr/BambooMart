import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '../data/products';
import { addToast } from '@heroui/react';

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      itemCount: 0,
      subtotal: 0,
      
      addItem: (product: Product, quantity = 1) => {
        set((state) => {
          const existingItem = state.items.find(item => item.id === product.id);
          
          let newItems;
          if (existingItem) {
            newItems = state.items.map(item => 
              item.id === product.id 
                ? { ...item, quantity: item.quantity + quantity } 
                : item
            );
          } else {
            newItems = [...state.items, { ...product, quantity }];
          }
          
          const newItemCount = newItems.reduce((total, item) => total + item.quantity, 0);
          const newSubtotal = newItems.reduce((total, item) => {
            const price = item.sale ? (item.salePrice || item.price) : item.price;
            return total + (price * item.quantity);
          }, 0);
          
          // Show toast notification
          addToast({
            title: "Added to cart",
            description: `${product.name} has been added to your cart`,
            color: "success",
            timeout: 3000
          });
          
          return { 
            items: newItems,
            itemCount: newItemCount,
            subtotal: newSubtotal
          };
        });
      },
      
      removeItem: (productId: number) => {
        set((state) => {
          const newItems = state.items.filter(item => item.id !== productId);
          
          const newItemCount = newItems.reduce((total, item) => total + item.quantity, 0);
          const newSubtotal = newItems.reduce((total, item) => {
            const price = item.sale ? (item.salePrice || item.price) : item.price;
            return total + (price * item.quantity);
          }, 0);
          
          return { 
            items: newItems,
            itemCount: newItemCount,
            subtotal: newSubtotal
          };
        });
      },
      
      updateQuantity: (productId: number, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        
        set((state) => {
          const newItems = state.items.map(item => 
            item.id === productId ? { ...item, quantity } : item
          );
          
          const newItemCount = newItems.reduce((total, item) => total + item.quantity, 0);
          const newSubtotal = newItems.reduce((total, item) => {
            const price = item.sale ? (item.salePrice || item.price) : item.price;
            return total + (price * item.quantity);
          }, 0);
          
          return { 
            items: newItems,
            itemCount: newItemCount,
            subtotal: newSubtotal
          };
        });
      },
      
      clearCart: () => {
        set({ items: [], itemCount: 0, subtotal: 0 });
      },
    }),
    {
      name: 'bamboo-chic-cart',
    }
  )
);
