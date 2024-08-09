// src/components/molecules/Hero.tsx
import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-hero min-h-[74vh] md:min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center space-y-4 px-4">
        <h1 className="text-white text-6xl md:text-8xl">Its all about ART.</h1>
        <p className="text-white tracking-wide text-lg md:text-xl">MAKE EVERYTHING AROUND YOU PART OF YOUR INSPIRATION</p>
      </div>
    </section>
  );
};

export default Hero;
