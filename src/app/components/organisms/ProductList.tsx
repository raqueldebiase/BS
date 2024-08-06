import React from 'react';
import Image from 'next/image'; // Importar Image do Next.js
import { Artwork } from '../../../context/GalleryContext'; // Atualize o caminho conforme necessário

interface ProductListProps {
  artworks: Artwork[];
  addToCart: (artwork: Artwork) => void;
}

const ProductList: React.FC<ProductListProps> = ({ artworks, addToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {artworks.map((artwork) => (
        <div key={artwork.id} className="border p-4 rounded-lg shadow-md">
          <Image
            src={artwork.src}
            alt={artwork.title}
            width={artwork.width} // Usar a largura da imagem
            height={artwork.height} // Usar a altura da imagem
            className="w-full h-48 object-cover rounded-lg"
          />
          <h2 className="text-xl font-semibold mt-2">{artwork.title}</h2>
          <p className="mt-1">{artwork.description}</p>
          <p className="mt-2 font-bold">${artwork.price.toFixed(2)}</p>
          <button
            onClick={() => addToCart(artwork)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
