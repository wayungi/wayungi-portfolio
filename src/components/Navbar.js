/** @format */

import React from 'react';
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

    {/* largre screen menu */}
    <div>
      <ul className="flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>contact</li>
      </ul>
    </div>

    {/* hamburger */}
    <div className="hidden">
      <FaBars />
    </div>

    {/* Mobile menu */}
    <ul className="hidden">
      <li>Home</li>
      <li>About</li>
      <li>Skills</li>
      <li>Projects</li>
      <li>contact</li>
    </ul>

    {/* social icons */}
  </div>
);

export default Navbar;
