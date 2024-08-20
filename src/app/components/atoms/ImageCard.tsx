import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface ImageCardProps {
  src: StaticImageData;
  title: string;
  description: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, title, description }) => {
  return (
    <div className="relative group overflow-hidden h-60">
      {/* Contêiner da imagem */}
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt={`Image of ${title}`}
          fill
          style={{ objectFit: 'cover' }}
          placeholder="blur"
          blurDataURL={src.src}
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      {/* Contêiner do texto */}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end justify-center">
        <div className="bg-black bg-opacity-60 text-white p-4 w-full">
          <h4 className="text-md font-light mb-2">{title}</h4>
          <p className="font-extralight tracking-wide text-sm truncate">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
