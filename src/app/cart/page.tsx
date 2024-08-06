'use client';

import React from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext'; 
import CartSummary from '../components/organisms/CartSummary';
import ButtonToPay from '../components/atoms/ButtonToPay';

const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCart(); 

  return (
    <div className="container mx-auto p-6 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 my-10">Your bag resume</h1>
      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cart.map(item => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <Image
                    src={item.src} // Certifique-se de que `src` está disponível
                    alt={item.title}
                    width={150} // Tamanho menor para a imagem
                    height={150} // Tamanho menor para a imagem
                    className="rounded-sm"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.price.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${item.price.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400 cursor-pointer hover:text-red-600" onClick={() => removeFromCart(item.id)}>
                  Remove item
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6">
        <CartSummary cart={cart} />
        
      </div>
      <div className="flex justify-end mt-10">
        <ButtonToPay />
      </div>
    </div>
  );
};

export default Cart;
