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
      <div>
        <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 py-4">Experience</p>
        <p>I have worked with te following technologies</p>
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
        {/* shadow-md shadow-[#040c16] hover:scale-110 duration-500" */}
        <div className="flex flex-col items-center">
          <DiPostgresql className="w-3/5 h-4/5 text-[#00a7e5]" />
          <p className="text-white font-bold">PostgreSQL</p>
        </div>
        <div className="flex flex-col items-center">
          <DiRuby className="w-3/5 h-4/5 text-[#cc0000]" />
          <p className="text-white font-bold">Ruby</p>
        </div>
        <div className="flex flex-col items-center">
          <SiJavascript className="w-3/5 h-4/5 text-[#F0DB4F]" />
          <p className="text-white font-bold">JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <SiRubyonrails className="w-3/5 h-4/5 text-[#cc0000]" />
          <p className="text-white font-bold">Ruby on Rails</p>
        </div>
        <div className="flex flex-col items-center">
          <SiCss3 className="w-3/5 h-4/5 text-[#264de4]" />
          <p className="text-white font-bold">CSS3</p>
        </div>
        <div className="flex flex-col items-center">
          <SiTailwindcss className="w-3/5 h-4/5 text-[#008DD5]" />
          <p className="text-white font-bold">TailWind</p>
        </div>
        <div className="flex flex-col items-center">
          <FaReact className="w-3/5 h-4/5 text-[#008DD5]" />
          <p className="text-white font-bold">React</p>
        </div>
        <div className="flex flex-col items-center">
          <AiOutlineHtml5 className="w-3/5 h-4/5 text-[#e34c26]" />
          <p className="text-white font-bold">HTML5</p>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
