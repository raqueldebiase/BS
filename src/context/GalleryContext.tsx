'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import artworksData from '@/data/artworks.json';

export interface Artwork {
  id: string;
  src: string;
  title: string;
  description: string;
  width: number;
  height: number;
  price: number;
  author: string;
  dateCreated?: string; // Novo campo
  medium?: string; // Novo campo
  curatorialComment?: string; // Novo campo
  additionalImage?: string; // Novo campo
}

interface GalleryContextType {
  galleryItems: Artwork[];
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

export const GalleryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [galleryItems, setGalleryItems] = useState<Artwork[]>([]);

  useEffect(() => {
    setGalleryItems(artworksData);
  }, []);

  return (
    <GalleryContext.Provider value={{ galleryItems }}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGallery = () => {
  const context = useContext(GalleryContext);
  if (context === undefined) {
    throw new Error('useGallery must be used within a GalleryProvider');
  }
  return context;
};
