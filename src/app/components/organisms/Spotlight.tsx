'use client';

import React, { useState, useEffect } from 'react';
import Image1 from '../../../../public/spotlight/1.webp';
import Image2 from '../../../../public/spotlight/tessla.webp';
import Image3 from '../../../../public/gallery/retratoModerno.webp';

const Spotlight = () => {
  // Array com as informações das imagens
  const imageInfos = [
    {
      src: Image1,
      title: 'Harvesting Time',
      description: 'Elias Valtieri'
    },
    {
      src: Image2,
      title: 'Blooming Field',
      description: 'Johannes Vermmer'
    },
    {
      src: Image3,
      title: 'Retrato Moderno: série 01',
      description: 'B. Motta'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % imageInfos.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + imageInfos.length) % imageInfos.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % imageInfos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden h-screen" id='spotlight'>
      <div className="absolute inset-0 flex">
        {imageInfos.map((imageInfo, index) => (
          <div
            key={index}
            className={`w-full h-full bg-cover bg-center absolute top-0 left-0 transition-opacity duration-500 ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${imageInfo.src.src})` }} 
          >
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white p-4 rounded-sm ">
              <h2 className="text-lg italic">{imageInfo.title}</h2>
              <p className='text-sm font-light my-2'>{imageInfo.description}</p>
              {/* <ButtonMore /> */}
            </div>
          </div>
        ))}
      </div>
      <div
        className="absolute top-0 bottom-0 left-0 cursor-pointer flex items-center justify-center"
        onClick={prevSlide}
      >
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
      <div
        className="absolute top-0 bottom-0 right-0 cursor-pointer flex items-center justify-center"
        onClick={nextSlide}
      >
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

export default Spotlight;
