// src/app/components/organisms/Search.test.tsx

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from '@/app/components/organisms/Search';
import { Artworks } from '../src/data/artworks';

// Mock de dados
const mockArtworks: Artworks[] = [
  {
    id: '1',
    src: '/spotlight/meninaSemBrinco.jpeg',
    title: 'Absence of the Essential',
    description: 'Description 1',
    width: 800,
    height: 600,
    price: 200,
  },
  {
    id: '2',
    src: '/gallery/atemporal.png',
    title: 'Atemporal',
    description: 'Description 2',
    width: 750,
    height: 550,
    price: 250,
  },
];

// Função simulada para o onSearch
const mockOnSearch = jest.fn();

test('should filter artworks based on search term', () => {
  render(<Search onSearch={mockOnSearch} artworks={mockArtworks} />);

  // Verifica se o título inicial está no documento
  expect(screen.getByText(/Looking for something\?/)).toBeInTheDocument();

  // Digita o termo de busca
  fireEvent.change(screen.getByPlaceholderText('Search...'), {
    target: { value: 'Atemporal' },
  });

  // Clica no botão de busca
  fireEvent.click(screen.getByText('Search'));

  // Verifica se o resultado esperado está no documento
  expect(screen.getByText('Atemporal')).toBeInTheDocument();

  // Verifica se o resultado não esperado não está no documento
  expect(screen.queryByText('Absence of the Essential')).toBeNull();
});

test('should display no results when search term is empty', () => {
  render(<Search onSearch={mockOnSearch} artworks={mockArtworks} />);

  // Digita um termo de busca e clica no botão
  fireEvent.change(screen.getByPlaceholderText('Search...'), {
    target: { value: '' },
  });
  fireEvent.click(screen.getByText('Search'));

  // Verifica se todos os resultados são exibidos
  expect(screen.getByText('Absence of the Essential')).toBeInTheDocument();
  expect(screen.getByText('Atemporal')).toBeInTheDocument();
});
