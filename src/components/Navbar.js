/** @format */

import React, { useState }from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => (
  <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#08192f] text-gray-300">
    <div>
      <img
        src={logo}
        alt="logo"
        style={{ width: '50px' }}
        className="rounded-xl"
      />
    </div>

    {/* menu */}
    <ul className="hidden md:flex">
      <li>Home</li>
      <li>About</li>
      <li>Skills</li>
      <li>Projects</li>
      <li>contact</li>
    </ul>

    {/* hamburger */}
    <div className="md:hidden">
      <FaBars />
    </div>

    {/* Mobile menu */}
    <ul className="hidden absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center">
      <li className="py-2 text-4xl z-10">Home</li>
      <li className="py-2 text-4xl z-10">About</li>
      <li className="py-2 text-4xl z-10">Skills</li>
      <li className="py-2 text-4xl z-10">Projects</li>
      <li className="py-2 text-4xl z-10">contact</li>
    </ul>

    {/* social icons */}
  </div>
);

export default Navbar;
