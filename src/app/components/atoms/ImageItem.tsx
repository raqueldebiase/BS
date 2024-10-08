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
  author: string;
}

const ImageItem: React.FC<ImageItemProps> = ({ id, src, title, description, width, height, author }) => {
  const [hasError, setHasError] = React.useState(false);
  return (
    <div className="relative break-inside-avoid group overflow-hidden">
      <Image
        src={src}
        alt={title}
        className="w-full h-auto rounded-sm shadow-md"
        style={{ objectFit: 'cover' }}
        layout="responsive"
        width={width}
        height={height}
        onError={() => setHasError(true)}
        loading="lazy"
      />
      {hasError && <p className="text-red-500">Failed to load image</p>}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out">
        <h2 className="text-md italic">{title}</h2>
        <p className='font-extralight text-sm'>{author}</p>
        <Link href={`/artwork/${id}`} aria-label={`View more about ${title}`} className="block mt-2 text-white text-sm font-extralight hover:underline">
          Ver Mais
        </Link>
      </div>
    </div>
  );
};

export default ImageItem;
