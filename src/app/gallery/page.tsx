// app/gallery/page.tsx
import React from 'react';
import GalleryPage from '../components/organisms/GalleryPage';
import { artworksData } from '../../data/artworks'; 

const Gallery: React.FC = () => {
  return (
    <GalleryPage artworks={artworksData} />
  );
};

export default Gallery;
