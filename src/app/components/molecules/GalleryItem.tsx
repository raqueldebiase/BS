import React from 'react';
import ImageItem from '../atoms/ImageItem';

interface GalleryItemProps {
  id: string; 
  src: string;
  title: string;
  description: string;
  width: number;
  height: number;
  author: string;
}

const GalleryItem: React.FC<GalleryItemProps> = (props) => {
  
  return (
    <ImageItem {...props} />
  );
};

export default GalleryItem;
