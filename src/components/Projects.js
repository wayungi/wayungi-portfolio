import React from 'react';
import spaceTravel from '../assets/space-travel.png';

const Projects = () => (
  <div name="projects" className="w-full md:h-screen text-gray-300 bg-[#08192f]">
    <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="tet-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Projects</p>
      </div>

      { /* Grid container */ }
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

        <div
          style={{ backgroundImage: `url(${spaceTravel})` }}
          className=" group container rounded-md flex justify-center items-center mx-auto content-div mb-4"
        >
          {/* hover effect */}
          <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-white tracking-wider">
              Space Travellers App
            </span>
            <div className="pt-8 text-center">
              <a href="/">
                <button type="button" className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Live</button>
              </a>
              <a href="/">
                <button type="button" className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
              </a>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${spaceTravel})` }}
          className=" group container rounded-md flex justify-center items-center mx-auto content-div mb-4"
        >
          {/* hover effect */}
          <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-white tracking-wider">
              Space Travellers App
            </span>
            <div className="pt-8 text-center">
              <a href="/">
                <button type="button" className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Live</button>
              </a>
              <a href="/">
                <button type="button" className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
              </a>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${spaceTravel})` }}
          className=" group container rounded-md flex justify-center items-center mx-auto content-div mb-4"
        >
          {/* hover effect */}
          <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-white tracking-wider">
              Space Travellers App
            </span>
            <div className="pt-8 text-center">
              <a href="/">
                <button type="button" className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Live</button>
              </a>
              <a href="/">
                <button type="button" className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
              </a>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${spaceTravel})` }}
          className=" group container rounded-md flex justify-center items-center mx-auto content-div mb-4"
        >
          {/* hover effect */}
          <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-white tracking-wider">
              Space Travellers App
            </span>
            <div className="pt-8 text-center">
              <a href="/">
                <button type="button" className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Live</button>
              </a>
              <a href="/">
                <button type="button" className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
              </a>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${spaceTravel})` }}
          className=" group container rounded-md flex justify-center items-center mx-auto content-div mb-4"
        >
          {/* hover effect */}
          <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-white tracking-wider">
              Space Travellers App
            </span>
            <div className="pt-8 text-center">
              <a href="/">
                <button type="button" className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Live</button>
              </a>
              <a href="/">
                <button type="button" className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
              </a>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${spaceTravel})` }}
          className=" group container rounded-md flex justify-center items-center mx-auto content-div mb-4"
        >
          {/* hover effect */}
          <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-white tracking-wider">
              Space Travellers App
            </span>
            <div className="pt-8 text-center">
              <a href="/">
                <button type="button" className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Live</button>
              </a>
              <a href="/">
                <button type="button" className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default Projects;
