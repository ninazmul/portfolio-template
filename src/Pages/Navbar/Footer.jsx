import { BsFacebook } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "../../../src/index.css";
import { Link } from "react-router-dom";
// import { TfiEmail } from "react-icons/tfi";
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";
import logo from "../../assets/Ac logo white text.webp";
const Footer = () => {
  return (
    <div>
      <footer className="footer flex flex-col items-center p-4 justify-between glass bg-blue-200 card_glow">
        <div className="flex flex-col md:flex-row justify-around w-full">
          <aside className="md:w-1/3 lg:w-auto">
            <h1 className="gradient-text text-4xl font-bold pt-4">Nazmul Islam</h1>
            <p className="py-2">
              Versatile artist with skills in programming, graphics, and voice!
            </p>
          </aside>
          <nav className="flex flex-col">
            <h6 className="footer-title">Company</h6>
            <a href="#about" className="link link-hover">
              About Me
            </a>
            <a to="#email" className="link link-hover">
              Contact Me
            </a>
          </nav>
          <nav>
            <h6 className="footer-title">Social</h6>
            <div className="flex justify-center items-center space-x-2">
              <Link
                href="https://www.facebook.com/nazmulsaw"
                className=" rounded-full glow p-2"
                target="_blank"
              >
                <BsFacebook className="text-[28px] text-blue-500"></BsFacebook>
              </Link>
              <Link
                href="https://github.com/artistycode-studio"
                className=" rounded-full glow p-2"
                target="_blank"
              >
                <AiFillGithub className="text-[28px]"></AiFillGithub>
              </Link>
              {/* <Link
              href="/email"
              className=" rounded-full glow p-2"
            >
              <TfiEmail className="text-[28px]"></TfiEmail>
            </Link> */}
              <Link
                href="https://www.linkedin.com/in/ninazmul"
                className=" rounded-full glow p-2"
                target="_blank"
              >
                <AiFillLinkedin className="text-[28px] rounded-full text-blue-800"></AiFillLinkedin>
              </Link>
              <Link
                href="https://www.fiverr.com/ninazmul"
                className=" rounded-full glow p-2"
                target="_blank"
              >
                <TbBrandFiverr className="text-[28px] rounded-full text-green-500"></TbBrandFiverr>
              </Link>
              <Link
                href="https://www.upwork.com/freelancers/~01369d0d10ed1780e4"
                className=" rounded-full glow p-2"
                target="_blank"
              >
                <SiUpwork className="text-[28px] rounded-full text-green-600" />
              </Link>
            </div>
          </nav>
        </div>
        <div className="flex items-center">
          <Link to="https://artistycode-studio.web.app" target="_blank">
            <img className="w-14" src={logo} alt="" />
          </Link>
          <p className="">
            Copyright © - All right reserved by
            <Link
              to="https://artistycode-studio.web.app"
              target="_blank"
              className="gradient-text"
            >
              {" "}
              ArtistyCode Studio
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
