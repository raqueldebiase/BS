'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Artwork } from '../context/GalleryContext'; // Certifique-se de que esta interface está correta

interface CartContextType {
  cart: Artwork[];
  setCart: React.Dispatch<React.SetStateAction<Artwork[]>>;
  addToCart: (artwork: Artwork) => void;
  removeFromCart: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Artwork[]>([]);

  useEffect(() => {
    // Recupera o estado inicial do localStorage apenas no lado do cliente
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    // Salva o estado do carrinho no localStorage sempre que ele mudar
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (artwork: Artwork) => {
    setCart(prevCart => [...prevCart, artwork]);
  };

  const removeFromCart = (id: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
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
