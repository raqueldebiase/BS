import React from 'react';

interface ButtonCartProps {
  onClick: () => void;
}

const ButtonCart: React.FC<ButtonCartProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className='py-3 px-6 ml-2 bg-black bg-opacity-70 text-white hover:bg-opacity-90 transition duration-300 ease-in-out rounded'
    >
      Add to Cart
    </button>
  );
};

export default ButtonCart;
