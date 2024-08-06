import React from 'react';
import { useRouter } from 'next/navigation';
import Hero from '../molecules/Hero';
import Banner from '../molecules/Banner';
import Spotlight from '../organisms/Spotlight';
import Gallery from '../organisms/Gallery';
import { Artwork } from '../../../context/GalleryContext'; // Importar a interface Artwork
import Magazine from '../organisms/Magazine';
import Search from '../organisms/Search';
import Footer from '../organisms/Footer';
import { Artworks } from '@/data/artworks';

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
      <main className="max-w-full lg:max-w-[1400px] mx-auto p-4">
        <Gallery />
        <Magazine />
      </main>
      <Search onSearch={handleSearch} artworks={artworks} />
      <Footer />
    </div>
  );
};

export default HomeTemplate;
