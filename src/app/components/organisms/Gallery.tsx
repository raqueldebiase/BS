'use client';

import React, { useState } from 'react';
import GalleryItem from '../molecules/GalleryItem';
import { useGallery } from '../../../context/GalleryContext';
import Button from '../atoms/Button';
import Image1 from '../../../../public/spotlight/meninaSemBrinco.jpeg';
import Image2 from '../../../../public/gallery/atemporal.png';
import Image3 from '../../../../public/gallery/retratoModernoSerie2.png';
import Image4 from '../../../../public/gallery/latinos.png';
import Image5 from '../../../../public/gallery/a-captivating-pontilismo-painting-that-vividly-por-0fu9K2BsTKm8jIXUNZztZA-ehyxQo9JQ5qzNXSX2nQGuw.png';
import Image6 from '../../../../public/gallery/midsummer.png';
import Image7 from '../../../../public/gallery/silencio.png';
import Image8 from '../../../../public/gallery/psico.png';
import Image9 from '../../../../public/gallery/barcelona.png';
import Image10 from '../../../../public/gallery/renascence.png';
import Image11 from '../../../../public/gallery/retratoModerno.png';
import Image12 from '../../../../public/gallery/sad.png';
import Image13 from '../../../../public/gallery/tessla.png';
import Image14 from '../../../../public/spotlight/2.jpeg';

const initialImages = [
  { id: '1', src: Image1.src, title: 'Title 1', description: 'Description 1', width: Image1.width, height: Image1.height },
  { id: '2', src: Image2.src, title: 'Title 2', description: 'Description 2', width: Image2.width, height: Image2.height },
  { id: '3', src: Image3.src, title: 'Title 3', description: 'Description 3', width: Image3.width, height: Image3.height },
  { id: '4', src: Image5.src, title: 'Title 5', description: 'Description 5', width: Image5.width, height: Image5.height },
  { id: '5', src: Image12.src, title: 'Title 12', description: 'Description 12', width: Image12.width, height: Image12.height },
  { id: '6', src: Image14.src, title: 'Title 14', description: 'Description 14', width: Image14.width, height: Image14.height },
  { id: '7', src: Image4.src, title: 'Title 4', description: 'Description 4', width: Image4.width, height: Image4.height },
];

const moreImages = [
  { id: '8', src: Image6.src, title: 'Title 6', description: 'Description 6', width: Image6.width, height: Image6.height },
  { id: '9', src: Image7.src, title: 'Title 7', description: 'Description 7', width: Image7.width, height: Image7.height },
  { id: '10', src: Image8.src, title: 'Title 8', description: 'Description 8', width: Image8.width, height: Image8.height },
  { id: '11', src: Image9.src, title: 'Title 9', description: 'Description 9', width: Image9.width, height: Image9.height },
  { id: '12', src: Image10.src, title: 'Title 10', description: 'Description 10', width: Image10.width, height: Image10.height },
  { id: '13', src: Image11.src, title: 'Title 11', description: 'Description 11', width: Image11.width, height: Image11.height },
  { id: '14', src: Image13.src, title: 'Title 13', description: 'Description 13', width: Image13.width, height: Image13.height },
];

const Gallery: React.FC = () => {
  const { galleryItems } = useGallery();
  const [images, setImages] = useState(initialImages);
  const [showButton, setShowButton] = useState(true);

  const loadMoreImages = () => {
    setImages((prevImages) => [...prevImages, ...moreImages]);
    setShowButton(false); // Desativa o botão após carregar as imagens
  };

  return (
    <div className="max-w-7xl mx-auto py-10" id='preview'>
      <h2 className="text-2xl py-5 mb-4">Gallery</h2>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((image, index) => (
          <GalleryItem
            key={image.id} 
            id={image.id}
            src={image.src}
            title={image.title}
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
