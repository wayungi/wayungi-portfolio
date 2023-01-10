import React from 'react';

const About = () => (
  <div name="about" className="w-full h-screen bg-[#08192f] text-gray-300">
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
        <div className="sm:text-right pb-8 pl-4">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
        </div>
        <div>
          blank
        </div>
      </div>

      <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
        <div className="sm:text-right text-4xl font-bold">
          <p>Hi, I am Francis, nice to meet you. please take a look around</p>
        </div>
        <div>
          <p>I love building software all day long</p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
