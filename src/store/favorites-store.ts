import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { addToast } from '@heroui/react';

interface FavoritesState {
  favoriteIds: number[];
  addFavorite: (productId: number) => void;
  removeFavorite: (productId: number) => void;
  toggleFavorite: (productId: number, productName: string) => void;
  isFavorite: (productId: number) => boolean;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favoriteIds: [],
      
      addFavorite: (productId: number) => {
        set((state) => ({
          favoriteIds: [...state.favoriteIds, productId]
        }));
      },
      
      removeFavorite: (productId: number) => {
        set((state) => ({
          favoriteIds: state.favoriteIds.filter(id => id !== productId)
        }));
      },
      
      toggleFavorite: (productId: number, productName: string) => {
        const isFavorite = get().isFavorite(productId);
        
        if (isFavorite) {
          get().removeFavorite(productId);
          
          addToast({
            title: "Removed from favorites",
            description: `${productName} has been removed from your favorites`,
            color: "default",
            timeout: 3000
          });
        } else {
          get().addFavorite(productId);
          
          addToast({
            title: "Added to favorites",
            description: `${productName} has been added to your favorites`,
            color: "primary",
            timeout: 3000
          });
        }
      },
      
      isFavorite: (productId: number) => {
        return get().favoriteIds.includes(productId);
      }
    }),
    {
      name: 'bamboo-chic-favorites',
    }
  )
);
