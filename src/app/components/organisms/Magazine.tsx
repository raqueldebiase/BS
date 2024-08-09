import React from 'react';
import ImageCard from '../atoms/ImageCard';
import Upcoming from '../molecules/Upcoming';
import News1 from '../../../../public/magazine/steven-su-kbZkBKrYBAk-unsplash.jpg';
import News2 from '../../../../public/magazine/mcgill-library--xleXxEcvX8-unsplash.jpg';
import News3 from '../../../../public/magazine/boston-public-library-CfeRsl6jVGQ-unsplash.jpg';
import News4 from '../../../../public/magazine/ajeet-mestry-UBhpOIHnazM-unsplash.jpg';

const Magazine = () => {
  const images = [
    { src: News1, title: 'Street Feast', description: 'A vibrant street scene where culinary tradition meets the energy of the urban environment.' },
    { src: News2, title: 'Vintage Beach Escape', description: 'Discover the Charm of 1930s Swedish Travel Posters in Our Nostalgic Exhibition.' },
    { src: News3, title: 'Sunlit Memories', description: 'Relive the Golden Age of Coastal Travel.' },
    { src: News4, title: 'Echoes of Innovation', description: 'The Museum of Everyday Obsolescence.' },
    // Adicione mais imagens conforme necessário
  ];

  return (
    <div className="max-w-7xl mx-auto pt-10 md:pb-20" id='magazine'>
      <h2 className="text-2xl py-5 mb-4">Magazine</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-6">
        <div className="">
          <h3 className="text-lg mb-4">Upcoming</h3>
          <Upcoming />
        </div>
        <div className="">
          <h3 className="text-lg mb-4">Talking about</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div key={index} className=" md:h-48 mb-4 md:mb-0 relative overflow-hidden ">
                <ImageCard
                  src={image.src}
                  title={image.title}
                  description={image.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magazine;
