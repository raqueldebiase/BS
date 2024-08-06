'use client';

import React, { useState } from 'react';

const ButtonToPay: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className='py-3 px-6 ml-2 bg-black bg-opacity-70 text-white hover:bg-opacity-90 transition duration-300 ease-in-out rounded'
      >
        Payment
      </button>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg max-w-sm mx-auto glass-effect">
            <h2 className="text-lg font-semibold mb-4">Information</h2>
            <p className="text-gray-800 mb-4">
              This website is a prototype and does not offer payment functionality.
            </p>
            <button
              onClick={handleClose}
              className="py-3 px-6 ml-2 bg-black bg-opacity-70 text-white hover:bg-opacity-90 transition duration-300 ease-in-out rounded-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonToPay;
