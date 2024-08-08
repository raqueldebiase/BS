import React, { Suspense } from 'react';
import GalleryPage from '../components/organisms/GalleryPage';
import { artworksData } from '../../data/artworks';

const sanitizedArtworks = artworksData.map((artwork) => ({
  ...artwork,
  src: artwork.src || '/my-ecommerce-app/public/search.jpg',
}));

const Gallery: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading gallery...</div>}>
      <GalleryPage artworks={sanitizedArtworks} />
    </Suspense>
  );
};

export default Gallery;
