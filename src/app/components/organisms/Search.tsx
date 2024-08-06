import React, { useState } from 'react';
import { Artworks } from '../../../data/artworks'; // Ajuste conforme necessário

interface SearchProps {
  onSearch: (query: string) => void;
  artworks: Artworks[];
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center py-20 mt-10 px-4 h-96 bg-search">
      <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
      <h2 className="text-3xl mb-6 text-white relative z-10">Looking for something?</h2>
      <div className="flex w-full max-w-md relative z-10">
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-3 px-4 border-gray-300 focus:outline-none focus:border-blue-500 bg-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="py-3 px-6 ml-2 bg-black bg-opacity-70 text-white hover:bg-opacity-90 transition duration-300 ease-in-out"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
