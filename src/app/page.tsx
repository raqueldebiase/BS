'use client';

import React, { useState } from 'react';
import { useGallery } from '../context/GalleryContext';
import { Artwork } from '../context/GalleryContext'; 
import HomeTemplate from './components/templates/HomeTemplate';
import Notification from './components/atoms/Notification';

const Home: React.FC = () => {
  const { galleryItems } = useGallery();
  const [cart, setCart] = useState<Artwork[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  const addToCart = (artwork: Artwork) => {
    setCart(prevCart => [...prevCart, artwork]);
    setNotification(`Added ${artwork.title} to cart!`);
    setTimeout(() => setNotification(null), 3000); 
  };

  return (
    <>
      {notification && (
        <Notification message={notification} onClose={() => setNotification(null)} />
      )}
      <HomeTemplate artworks={galleryItems} cart={cart} addToCart={addToCart} />
    </>
  );
};

export default Home;
