import React from 'react';
import Link from 'next/link';

interface NotificationProps {
  message: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, onClose }) => {
  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg flex items-center space-x-4">
      <span>{message}</span>
      <Link href="/cart" className="text-blue-400 underline ml-2">
        View Cart
      </Link>
      <button onClick={onClose} className="ml-auto text-gray-400 hover:text-white">
        &times;
      </button>
    </div>
  );
};

export default Notification;
