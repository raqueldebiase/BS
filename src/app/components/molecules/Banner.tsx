/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const Presentation = () => {
  return (
    <div className='h-auto md:h-[50vh] bg-Navy flex items-center justify-center py-20 md:py-0'>
      <div className="max-w-7xl w-full px-5 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Title Section */}
        <div className="title-presentation text-CaramelExtraLight">
          <h2 className="text-5xl md:text-8xl font-bold mb-1">This</h2>
          <div className="flex md:justify-end flex-col md:flex-row">
            <div className="text-4xl md:text-6xl font-bold md:transform md:rotate-90">website</div>
            <div className="text-start">
              <div className="text-6xl md:text-9xl font-bold">doesn't</div>
              <div className="text-5xl md:text-8xl font-bold">exist.</div>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="text-CaramelExtraLight flex items-center justify-center leading-loose tracking-wide">
          <p className='text-base md:text-xl font-medium'>
          Welcome to my e-commerce platform, a modern reimagining of my first frontend project. Originally crafted with HTML, CSS, and JavaScript (and a bit of trial and error), this second iteration represents how far I've come as a developer over the past three years. Now built with the power of Next.js, this site also leverages Tailwind for responsive design, Vercel for seamless deployment, and Git for version control. All reflecting the new skills and technologies I’ve embraced along my journey.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
