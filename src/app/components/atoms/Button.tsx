import React from 'react';

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => (
  <button
    className="mt-4 px-4 py-2 bg-black bg-opacity-50 text-white rounded hover:bg-opacity-90"
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
