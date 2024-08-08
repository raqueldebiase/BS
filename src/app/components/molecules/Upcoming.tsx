
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Image1 from '../../../../public/magazine/phil-hearing-7xvN2q2ce-k-unsplash.jpg';
import Image2 from '../../../../public/magazine/redd-f-y3MNRXtUaUs-unsplash.jpg';
import Image3 from '../../../../public/magazine/platforma-za-drustveni-centar-cakovec-JKSXxal-UAI-unsplash.jpg';

const Upcoming = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { src: Image1, title: 'Silence on the Canvas', description: 'Where the absence of color and form transforms emptiness into a collective contemplation.' },
    { src: Image2, title: 'Van Gogh Reimagined: Digital Echoes', description: 'Exploring the timeless brilliance of Van Gogh through the lens of modern digital art.' },
    { src: Image3, title: 'Alexander Moreau: The Art of Piano', description: 'Capturing the intimacy and passion of a private piano recital.' },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const currentImage = images[activeIndex];

  return (
    <div className="relative overflow-hidden h-[25rem]">
      <div className="absolute inset-0 flex">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full h-full bg-cover bg-center absolute top-0 left-0 transition-opacity duration-500 ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={`Slide ${index}`}
              className=""
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-end">
        <div className="bg-black bg-opacity-50 text-white p-4 w-full">
          <h4 className="text-md font-light mb-2">{currentImage.title}</h4>
          <p className='font-extralight tracking-wide text-sm'>{currentImage.description}</p>
        </div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-4 cursor-pointer flex items-center justify-center" onClick={prevSlide}>
        <svg
          className="h-12 w-12 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer flex items-center justify-center" onClick={nextSlide}>
        <svg
          className="h-12 w-12 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default Upcoming;
