import React from 'react';
import { Artwork } from '../../../context/GalleryContext'; // Importar a interface Artwork

interface CartSummaryProps {
  cart: Artwork[];
}

const CartSummary: React.FC<CartSummaryProps> = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Cart Summary</h2>
      {cart.length > 0 ? (
        <>
          <ul className="space-y-2 mb-4">
            {cart.map(item => (
              <li key={item.id} className="flex justify-between items-center py-2 px-4 border-b border-gray-200">
                <span className="text-gray-700 font-medium">{item.title}</span>
                <span className="text-gray-600">${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between font-semibold text-gray-800">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </>
      ) : (
        <p className="text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartSummary;
