import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => (
  <div name="home" className="bg-[#0a192f] w-full h-screen">
    <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
      <p className="text-3xl text-blue-600 py-2">Hello, my name is </p>
      <h1 className="text-2xl sm:text-5xl font-bold text-gray-300 py-2">Francis Wayungi</h1>
      <p className="text-3xl text-[#FBBC05] py-2">I am a Full Stack Engineer</p>
      <p className="text-2xl text-[#333] py-2">I love solving complex problems with code </p>
      <div>
        <button type="button" className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FBBC05] hover:border-[#FBBC05] duration-300">
          View Work
          <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3" />
          </span>
        </button>
      </div>
    </div>
  </div>
);

export default Home;
