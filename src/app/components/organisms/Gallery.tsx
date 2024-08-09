import React, { useState } from 'react';
import GalleryItem from '../molecules/GalleryItem';
import Button from '../atoms/Button';
import { artworksData, Artworks } from '../../../data/artworks'; // Atualize o caminho conforme a estrutura do seu projeto

const initialImages = artworksData.slice(0, 7); // Carregue as primeiras 7 imagens

const Gallery: React.FC = () => {
  const [images, setImages] = useState<Artworks[]>(initialImages);
  const [showButton, setShowButton] = useState(true);

  const loadMoreImages = () => {
    setImages((prevImages) => {
      const nextImages = artworksData.slice(prevImages.length, prevImages.length + 7);
      if (nextImages.length === 0) {
        setShowButton(false); 
      }
      return [...prevImages, ...nextImages];
    });
  };

  return (
    <div className="max-w-7xl mx-auto md:py-10" id='preview'>
      <h2 className="text-2xl py-5 mb-4">Gallery</h2>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((image) => (
          <GalleryItem
            key={image.id}
            id={image.id}
            src={image.src || '/my-ecommerce-app/public/search.jpg'}
            title={image.title}
            author={image.author}
            description={image.description}
            width={image.width}
            height={image.height}
          />
        ))}
      </div>
      {showButton && (
        <div className="flex justify-center mt-6">
          <Button
            onClick={loadMoreImages}
            label="View More"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
