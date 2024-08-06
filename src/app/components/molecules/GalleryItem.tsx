import React from 'react';
import ImageItem from '../atoms/ImageItem';

interface GalleryItemProps {
  id: string; 
  src: string;
  title: string;
  description: string;
  width: number;
  height: number;
}

const GalleryItem: React.FC<GalleryItemProps> = (props) => {
  console.log('GalleryItem props:', props); // Log para verificar os props
  return (
    <ImageItem {...props} />
  );
};

export default GalleryItem;
