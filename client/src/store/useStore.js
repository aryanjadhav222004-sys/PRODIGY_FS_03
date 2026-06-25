import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Auth Store
export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      
      setAuth: (user, token) => set({
        user,
        token,
        isAuthenticated: !!token,
      }),
      
      logout: () => set({
        user: null,
        token: null,
        isAuthenticated: false,
      }),
    }),
    {
      name: 'auth-store',
    }
  )
);

// Cart Store
export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      totalPrice: 0,
      totalItems: 0,
      
      addToCart: (product, quantity = 1) => {
        const { items } = get();
        const existingItem = items.find(item => item.id === product.id);
        
        let updatedItems;
        if (existingItem) {
          updatedItems = items.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          updatedItems = [...items, { ...product, quantity }];
        }
        
        set((state) => ({
          items: updatedItems,
          totalItems: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
          totalPrice: updatedItems.reduce(
            (sum, item) => sum + (item.discount_price || item.price) * item.quantity,
            0
          ),
        }));
      },
      
      removeFromCart: (productId) => {
        const updatedItems = get().items.filter(item => item.id !== productId);
        set((state) => ({
          items: updatedItems,
          totalItems: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
          totalPrice: updatedItems.reduce(
            (sum, item) => sum + (item.discount_price || item.price) * item.quantity,
            0
          ),
        }));
      },
      
      updateQuantity: (productId, quantity) => {
        const updatedItems = get().items.map(item =>
          item.id === productId ? { ...item, quantity } : item
        );
        
        set((state) => ({
          items: updatedItems,
          totalItems: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
          totalPrice: updatedItems.reduce(
            (sum, item) => sum + (item.discount_price || item.price) * item.quantity,
            0
          ),
        }));
      },
      
      clearCart: () => set({
        items: [],
        totalPrice: 0,
        totalItems: 0,
      }),
    }),
    {
      name: 'cart-store',
    }
  )
);

// Wishlist Store
export const useWishlistStore = create(
  persist(
    (set, get) => ({
      items: [],
      
      addToWishlist: (product) => {
        const { items } = get();
        if (!items.find(item => item.id === product.id)) {
          set({ items: [...items, product] });
        }
      },
      
      removeFromWishlist: (productId) => {
        set((state) => ({
          items: state.items.filter(item => item.id !== productId),
        }));
      },
      
      isInWishlist: (productId) => {
        return get().items.some(item => item.id === productId);
      },
    }),
    {
      name: 'wishlist-store',
    }
  )
);
