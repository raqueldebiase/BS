'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Search from './Search';
import { Artwork } from '@/context/GalleryContext';
import Image from 'next/image';
import Link from 'next/link';

interface GalleryPageProps {
  artworks: Artwork[];
}

const GalleryPage: React.FC<GalleryPageProps> = ({ artworks }) => {
  const [filteredArtworks, setFilteredArtworks] = React.useState<Artwork[]>(artworks);
  const searchParams = useSearchParams();

  React.useEffect(() => {
    const query = searchParams.get('search') || '';
    const lowercasedQuery = query.toLowerCase();
    const results = artworks.filter((artwork) =>
      artwork.title.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredArtworks(results);
  }, [searchParams, artworks]);

  const handleSearch = (query: string) => {
    const encodedQuery = encodeURIComponent(query);
    window.history.pushState({}, '', `/gallery?search=${encodedQuery}`);
    const lowercasedQuery = query.toLowerCase();
    const results = artworks.filter((artwork) =>
      artwork.title.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredArtworks(results);
  };

  const handleClearSearch = () => {
    window.history.pushState({}, '', '/gallery');
    setFilteredArtworks(artworks);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        {/* Search Component */}
        <div className="py-4 px-4 bg-gray-100">
          <Search onSearch={handleSearch} artworks={artworks} />
        </div>

        {/* Gallery Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {filteredArtworks.map((artwork) => (
            <Link
              key={artwork.id}
              href={`/artwork/${artwork.id}`} // Atualizar o link para a página de detalhes
              className="p-4 bg-white shadow-md rounded-sm"
            >
              <div className="relative">
                <Image
                  src={artwork.src}
                  alt={artwork.title}
                  width={artwork.width}
                  height={artwork.height}
                  className="w-full h-48 object-cover rounded-t-sm"
                />
                <h3 className="text-xl mt-2">{artwork.title}</h3>
                <p>${artwork.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Clear Search Button */}
        {filteredArtworks.length < artworks.length && (
          <div className="py-4 px-4 flex justify-end">
            <button
              className="py-3 px-6 ml-2 bg-black bg-opacity-70 text-white hover:bg-opacity-90 transition duration-300 ease-in-out rounded-sm"
              onClick={handleClearSearch}
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </Suspense>
  );
};

export default GalleryPage;
