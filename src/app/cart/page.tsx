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
      <h1 className="text-xl md:text-2xl font-bold text-gray-800 my-5 md:my-10">Your Bag</h1>
      
      {/* Table Container */}
      <div className="bg-white md:shadow-md rounded-lg overflow-hidden">
        {/* Table for larger screens */}
        <table className="hidden md:table min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr className='md:my-5'>
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
                    src={item.src}
                    alt={item.title}
                    width={150}
                    height={150}
                    className="rounded-sm"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.price.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${item.price.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400 cursor-pointer hover:text-red-600" onClick={() => removeFromCart(item.id)}>
                  Remove Item
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Flexbox for mobile screens */}
        <div className="md:hidden flex flex-col space-y-4">
          {cart.map(item => (
            <div key={item.id} className="flex flex-col p-4 bg-gray-50 rounded-sm shadow-md space-y-2">
              <div className="flex items-center justify-between">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="rounded-sm"
                />
                <span className="text-gray-900 text-sm font-medium ml-4">{item.title}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Price:</span>
                <span>${item.price.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Quantity:</span>
                <span>1</span>
              </div>
              <div className="flex justify-between text-sm font-medium text-gray-900">
                <span>Total:</span>
                <span>${item.price.toFixed(2)}</span>
              </div>
              <button 
                className="text-sm text-red-600 hover:text-red-800 self-end"
                onClick={() => removeFromCart(item.id)}
              >
                Remove Item
              </button>
            </div>
          ))}
        </div>
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
