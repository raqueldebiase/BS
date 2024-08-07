import React from 'react';


const DetailTemplate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow mt-20">{children}</main>
    </div>
  );
};

export default DetailTemplate;
