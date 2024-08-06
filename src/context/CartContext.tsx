'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Artwork } from '../context/GalleryContext'; // Importar a interface Artwork

interface CartContextType {
  cart: Artwork[];
  addToCart: (artwork: Artwork) => void;
  removeFromCart: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Artwork[]>([]);

  const addToCart = (artwork: Artwork) => {
    setCart(prevCart => [...prevCart, artwork]);
  };

  const removeFromCart = (id: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
