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
              <div className="text-6xl md:text-9xl font-bold">doesnt</div>
              <div className="text-5xl md:text-8xl font-bold">exist.</div>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="text-CaramelExtraLight flex items-center justify-center leading-loose tracking-wide">
          <p className='text-base md:text-xl font-medium'>
            This website is an example of an e-commerce platform built with Next.js. It is the second version of my first project as a frontend developer, originally created with HTML, CSS, and JavaScript (with a touch of desperation). Three years later, I decided to revamp it using new technologies and the knowledge I have acquired over time. In addition to Next.js, I used Tailwind, Vercel, Git, Auth.js, among other tools.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
