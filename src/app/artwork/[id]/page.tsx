'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useGallery } from '@/context/GalleryContext';
import { useCart } from '@/context/CartContext'; 
import ButtonCart from '@/app/components/atoms/ButtonCart';
import DetailTemplate from '@/app/components/templates/DetailTemplate';
import Notification from '@/app/components/atoms/Notification';

const DetailPage: React.FC = () => {
  const { id } = useParams();
  const { galleryItems } = useGallery();
  const { addToCart } = useCart();

  const [notification, setNotification] = useState<string | null>(null);

  const artwork = galleryItems.find(item => item.id === id);

  if (!artwork) {
    return <p className="text-center text-red-500">Artwork not found</p>;
  }

  const handleAddToCart = () => {
    addToCart(artwork);
    setNotification(`Added ${artwork.title} to cart!`);
    setTimeout(() => setNotification(null), 3000); 
  };

  const fallbackImage = '/my-ecommerce-app/public/search.jpg';

  return (
    <>
      {notification && (
        <Notification message={notification} onClose={() => setNotification(null)} />
      )}
      <DetailTemplate>
        <div className="max-w-4xl mx-auto p-6 rounded-lg flex flex-col">
          <div className="flex flex-col md:flex-row">
            {/* Imagem principal */}
            <div className="flex-shrink-0 w-full md:w-1/2 mb-6 md:mb-0">
              {artwork.src && (
                <Image
                  src={artwork.src || fallbackImage}
                  alt={artwork.title}
                  width={artwork.width}
                  height={artwork.height}
                  className="w-full h-auto object-cover rounded-sm shadow-lg"
                />
              )}
              {artwork.additionalImage && (
                <Image
                  src={artwork.additionalImage || fallbackImage}
                  alt={`${artwork.title} additional`}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover rounded-sm shadow-lg"
                />
              )}
            </div>
            {/* Conteúdo */}
            <div className="flex-grow md:w-1/2 pl-6">
              <h1 className="text-2xl text-gray-800 mb-2">
                <span className="text-base text-gray-500">Title:</span> {artwork.title}
              </h1>
              <h3 className="text-base text-gray-500 mb-4">
                <span className="text-base text-gray-500">Author:</span> {artwork.author}
              </h3>
              <p className="text-sm text-gray-700 mb-6">{artwork.description}</p>
              <h4 className='text-sm text-gray-500 mb-6'>Curatorial Comment: {artwork.curatorialComment}</h4>
            </div>
          </div>
          <div className="info">
            <div className="price flex justify-end bg-gray-100 p-2 mt-10">
              <p className="text-1xl font-semibold text-gray-900">${artwork.price.toFixed(2)}</p>
            </div>
            <div className="border-t border-gray-300 pt-4 mt-6">
              <h4 className="text-md font-semibold text-gray-800 mb-2">Technical Details:</h4>
              <ul className="list-disc list-inside text-gray-600">
                <li><strong>Medium:</strong> {artwork.medium || 'Not specified'}</li>
                <li><strong>Dimensions:</strong> {artwork.width} x {artwork.height} cm</li>
                <li><strong>Date Created:</strong> {artwork.dateCreated || 'Not specified'}</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-end my-6">
            <ButtonCart onClick={handleAddToCart} />
          </div>
        </div>
      </DetailTemplate>
    </>
  );
};

export default DetailPage;
