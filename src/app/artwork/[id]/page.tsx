'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useGallery, Artwork } from '@/context/GalleryContext'; // Corrigir o caminho de importação
import { useCart } from '@/context/CartContext'; // Importar o contexto do carrinho
import Header from '@/app/components/organisms/Header'; // Ajuste o caminho conforme necessário
import ButtonCart from '@/app/components/atoms/ButtonCart';
import DetailTemplate from '@/app/components/templates/DetailTemplate';
import Notification from '@/app/components/atoms/Notification';

const DetailPage: React.FC = () => {
  const { id } = useParams();
  const { galleryItems } = useGallery();
  const { cart, addToCart } = useCart(); // Usar o contexto do carrinho

  const [notification, setNotification] = useState<string | null>(null);

  const artwork = galleryItems.find(item => item.id === id);

  if (!artwork) {
    return <p className="text-center text-red-500">Artwork not found</p>;
  }

  const handleAddToCart = () => {
    addToCart(artwork);
    setNotification(`Added ${artwork.title} to cart!`);
    setTimeout(() => setNotification(null), 3000); // Remove notification after 3 seconds
  };

  return (
    <>
      {notification && (
        <Notification message={notification} onClose={() => setNotification(null)} />
      )}
      <DetailTemplate>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
          <div className="flex flex-col">
            <Image
              src={artwork.src}
              alt={artwork.title}
              width={artwork.width}
              height={artwork.height}
              className="rounded-lg shadow-lg mb-6"
            />
            <h1 className="text-2xl font-extrabold text-gray-800 mb-4">{artwork.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{artwork.description}</p>
            <p className="text-2xl font-semibold text-gray-900 mb-6">${artwork.price.toFixed(2)}</p>
          </div>
          <div className="flex justify-end">
            <ButtonCart onClick={handleAddToCart} />
          </div>
        </div>
      </DetailTemplate>
    </>
  );
};

export default DetailPage;
