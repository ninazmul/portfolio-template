
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Services from "../Home/Services";
import video from "../../../public/video.mp4"
const About = () => {


  return (
    <div id="about">
      <div className="flex flex-col lg:flex-row items-center gap-4">
        <div className="md:w-1/2">
          <img src="../../../public/about me.webp" alt="" />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal text-start rounded-lg gradient-text uppercase py-2 md:py-4">
            About Me
          </h1>
          <p className="text-justify text-sm md:text-lg">
            As-salamu alaykum, I'm Nazmul Islam. But you can call me N.I.
            Nazmul. I'm not your run-of-the-mill professional, I'm a creative
            chameleon with a diverse skill set. You see, I wear many hats - I'm
            a web-weaving wizard, a voice virtuoso, a graphics guru, and a
            master of visual storytelling through photo and video editing.
          </p>
          <div className="py-1 flex flex-wrap gap-4">
            <button className="btn btn-outline border-blue-700 text-blue-700 btn-sm font-bold text-xs md:text-sm">
              HTML5
            </button>
            <button className="btn btn-outline border-blue-700 text-blue-700 btn-sm font-bold text-xs md:text-sm">
              CSS3
            </button>
            <button className="btn btn-outline border-blue-700 text-blue-700 btn-sm font-bold text-xs md:text-sm">
              JavaScript
            </button>
            <button className="btn btn-outline border-blue-700 text-blue-700 btn-sm font-bold text-xs md:text-sm">
              REact.js
            </button>
            <button className="btn btn-outline border-blue-700 text-blue-700 btn-sm font-bold text-xs md:text-sm">
              Node.js
            </button>
            <button className="btn btn-outline border-blue-700 text-blue-700 btn-sm font-bold text-xs md:text-sm">
              Express.js
            </button>
            <button className="btn btn-outline border-blue-700 text-blue-700 btn-sm font-bold text-xs md:text-sm">
              MongoDB
            </button>
            <button className="btn btn-outline border-blue-700 text-blue-700 btn-sm font-bold text-xs md:text-sm">
              Tailwind CSS
            </button>
            <button className="btn btn-outline border-blue-700 text-blue-700 btn-sm font-bold text-xs md:text-sm">
              Voice Over
            </button>
            <button className="btn btn-outline border-blue-700 text-blue-700 btn-sm font-bold text-xs md:text-sm">
              Dubbing
            </button>
            <button className="btn btn-outline border-blue-700 text-blue-700 btn-sm font-bold text-xs md:text-sm">
              Graphics Design
            </button>
            <button className="btn btn-outline border-blue-700 text-blue-700 btn-sm font-bold text-xs md:text-sm">
              Presentation
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-4">
        <iframe
          src={video}
          className="w-[300px] h-[170px] md:w-[530px] md:h-[300px] lg:w-[890px] lg:h-[500px] rounded-lg border-blue-500 border-2 card_glow"
        ></iframe>
        <div>
          <Link
            target="_blank"
            to="https://drive.google.com/file/d/1aihDBamIngdPD7HTmNsYOysAdE4E3ay4/view?usp=sharing"
            className="btn btn-primary rounded-full my-4 text-xl"
          >
            Download Resume <FaCloudDownloadAlt />
          </Link>
        </div>
      </div>
      <Services></Services>
    </div>
  );
};

export default About;
