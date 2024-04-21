import "../../../src/index.css";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";

import banner from "/src/assets/my/web.png";
import { IoSparklesSharp } from "react-icons/io5";

const Header = () => {
  return (
    <div id="top" className="flex flex-col md:flex-row items-center ">
      <div className="md:w-1/2">
        <p className="py-1 md:py-2 lg:mx-4 my-4 text-blue-700  flex items-center gap-2 text-xl md:text-2xl">
          <IoSparklesSharp />
          Hey, I'm ACS... !
        </p>
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold leading-normal text-center uppercase font-mono">
          Welcome To{" "}
          <span className="text-blue-700 gradient-text">My Portfolio</span>
        </h1>
        <p className=" py-2 md:py-4 text-center md:text-xl">
          Unleashing Creativity, Line by Line of Code, with
          <span className="text-blue-700 font-bold">
            <Typewriter
              options={{
                strings: ["", "Precision", "Innovation", "and Mastery!"],
                autoStart: true,
                loop: true,
              }}
            />{" "}
          </span>
        </p>
        <div className="flex justify-center lg:justify-end">
          <a
            href="#email"
            className="btn btn-outline m-2 md:m-4 border-t-1 border-x-1 border-b-4 neno-button shadow-xl hover:shadow-blue-800/50 border-2 hover:bg-blue-700 border-blue-700 rounded-lg bg-blue-500/20 uppercase relative overflow-hidden text-center font-extrabold text-black"
          >
            Contact Me!
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <img src={banner} className=" p-4 md:p-8 lg:p-20" />
      </div>
    </div>
  );
};

export default Header;
