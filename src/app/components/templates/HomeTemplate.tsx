import React from 'react';
import { useRouter } from 'next/navigation';
import Hero from '../molecules/Hero';
import Banner from '../molecules/Banner';
import Spotlight from '../organisms/Spotlight';
import Gallery from '../organisms/Gallery';
import { Artwork } from '../../../context/GalleryContext'; // Importar a interface Artwork
import Magazine from '../organisms/Magazine';
import Search from '../organisms/Search';


interface HomeTemplateProps {
  artworks: Artwork[];
  cart: Artwork[];
  addToCart: (artwork: Artwork) => void;
}

const HomeTemplate: React.FC<HomeTemplateProps> = ({ artworks, cart, addToCart }) => {
  const router = useRouter();

  const handleSearch = (query: string) => {
    router.push(`/gallery?search=${encodeURIComponent(query)}`);
  };

  return (
    <div>
      <Hero />
      <Banner />
      <Spotlight />
      <div className="max-w-full lg:max-w-[1400px] mx-auto p-4">
        <Gallery />
        <Magazine />
      </div>
      <Search onSearch={handleSearch} artworks={artworks} />
    </div>
  );
};

export default HomeTemplate;
