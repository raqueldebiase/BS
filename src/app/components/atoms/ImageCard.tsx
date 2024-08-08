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
    <div className="relative h-full group">
      <div className="relative h-full">
        <Image
          src={src}
          alt={`Image - ${title}`}
          className=""
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end justify-center">
        <div className="bg-black bg-opacity-50 text-white p-2 w-full">
          <h4 className="text-md font-light mb-2">{title}</h4>
          <p className='font-extralight tracking-wide text-sm truncate'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
