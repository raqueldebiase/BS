import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ImageItemProps {
  id: string;
  src: string;
  title: string;
  description: string;
  width: number;
  height: number;
}

const ImageItem: React.FC<ImageItemProps> = ({ id, src, title, description, width, height }) => {
  // Adicione o console.log fora do JSX
  console.log('ImageItem link id:', id);

  return (
    <div className="relative break-inside-avoid group overflow-hidden">
      <Image
        src={src}
        alt={title}
        className="w-full h-auto rounded-lg shadow-md"
        style={{ objectFit: 'cover' }}
        width={width}
        height={height}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p>{description}</p>
        <Link href={`/artwork/${id}`} className="block mt-2 text-blue-400 hover:underline">
          Ver Mais
        </Link>
      </div>
    </div>
  );
};

export default ImageItem;
