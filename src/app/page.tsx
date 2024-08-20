// src/app/page.tsx (ou o arquivo da página específica)
'use client';

import React, { useState } from 'react';
import { useGallery } from '../context/GalleryContext';
import { Artwork } from '../context/GalleryContext';
import HomeTemplate from './components/templates/HomeTemplate';
import Notification from './components/atoms/Notification';
import Head from 'next/head';

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
      <Head>
        <meta property="og:title" content="Black Square - Home Page" />
        <meta property="og:description" content="Discover unique digital art in our e-commerce platform." />
        <meta property="og:image" content="https://blacksquare.vercel.app/backgrounds/hero.jpeg" />
        <meta property="og:url" content="https://blacksquare.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Black Square - Home Page" />
        <meta name="twitter:description" content="Discover unique digital art in our e-commerce platform." />
        <meta name="twitter:image" content="https://blacksquare.vercel.app/backgrounds/hero.jpeg" />
      </Head>
      {notification && (
        <Notification message={notification} onClose={() => setNotification(null)} />
      )}
      <HomeTemplate artworks={galleryItems} cart={cart} addToCart={addToCart} />
    </>
  );
};

export default Home;
