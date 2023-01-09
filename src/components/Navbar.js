/** @format */

import React, { useState } from 'react';
import {
  FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaTwitter,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillpersoLinesFill} from 'react-icons/bs';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
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
        <li>About</li>
        <li>Skills</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Contact Me</li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} tabIndex={0} onKeyDown={handleClick} className="md:hidden z-10" role="button">
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile menu */}
      <ul className={nav ? 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center md:hidden' : 'hidden'}>
        <li className="py-2 text-4xl z-10">About</li>
        <li className="py-2 text-4xl z-10">Skills</li>
        <li className="py-2 text-4xl z-10">Experience</li>
        <li className="py-2 text-4xl z-10">Projects</li>
        <li className="py-2 text-4xl z-10">Contact Me</li>
      </ul>

      {/* social icons */}
      <div className="flex flex-col fixed top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a className="flex justify-between items-center w-full text-gray-300" href="/">
              Facebook
              <FaFacebook size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a className="flex justify-between items-center w-full text-gray-300" href="/">
              LinkedIn
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a className="flex justify-between items-center w-full text-gray-300" href="/">
              Twitter
              <FaTwitter size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a className="flex justify-between items-center w-full text-gray-300" href="/">
              GitHub
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a className="flex justify-between items-center w-full text-gray-300" href="/">
              Email
              <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default Navbar;
