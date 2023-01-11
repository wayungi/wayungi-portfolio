import React from 'react';
import { DiPostgresql, DiRuby } from 'react-icons/di';
import {
  SiJavascript, SiRubyonrails, SiCss3, SiTailwindcss,
} from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { AiOutlineHtml5 } from 'react-icons/ai';

const Skills = () => (
  <div name="skills" className="bg-[#0a192f]">

    {/* skills container */}
    <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
      <div className="text-center sm:text-left sm:ml-8 lg:ml-20 pb-2">
        <p className="text-4xl font-bold inline text-gray-300">Experience</p>
        {/* <p>I have worked with te following technologies</p> */}
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
        <div className="flex flex-col items-center">
          <DiPostgresql className="w-2/5 h-2/5 text-[#00a7e5] hover:scale-110 duration-500" />
          <p className="text-white font-bold my-4">PostgreSQL</p>
        </div>
        <div className="flex flex-col items-center">
          <DiRuby className="w-2/5 h-2/5 text-[#cc0000] hover:scale-110 duration-500" />
          <p className="text-white font-bold my-4">Ruby</p>
        </div>
        <div className="flex flex-col items-center">
          <SiJavascript className="w-2/5 h-2/5 text-[#F0DB4F] hover:scale-110 duration-500" />
          <p className="text-white font-bold my-4">JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <SiRubyonrails className="w-2/5 h-2/5 text-[#cc0000] hover:scale-110 duration-500" />
          <p className="text-white font-bold my-4">Ruby on Rails</p>
        </div>
        <div className="flex flex-col items-center">
          <SiCss3 className="w-2/5 h-2/5 text-[#264de4] hover:scale-110 duration-500" />
          <p className="text-white font-bold my-4">CSS3</p>
        </div>
        <div className="flex flex-col items-center">
          <SiTailwindcss className="w-2/5 h-2/5 text-[#008DD5] hover:scale-110 duration-500" />
          <p className="text-white font-bold my-4">TailWind</p>
        </div>
        <div className="flex flex-col items-center">
          <FaReact className="w-2/5 h-2/5 text-[#008DD5] hover:scale-110 duration-500" />
          <p className="text-white font-bold my-4">React</p>
        </div>
        <div className="flex flex-col items-center">
          <AiOutlineHtml5 className="w-2/5 h-2/5 text-[#e34c26] hover:scale-110 duration-500" />
          <p className="text-white font-bold my-4">HTML5</p>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
