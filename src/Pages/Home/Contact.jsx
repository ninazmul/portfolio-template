import Email from "../Home/Email"
import { FaLocationDot } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";


import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoCodeSlash } from "react-icons/io5";
import { SiTaichigraphics } from "react-icons/si";
import { FaPhotoVideo } from "react-icons/fa";
import { MdOutlineSettingsVoice } from "react-icons/md";
const Contact = () => {

  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    swipeToSlide: true,
    focusOnSelect: true,
    slidesToShow: slidesToShow,
  };

  const updateSlidesToShow = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1024) {
      setSlidesToShow(0);
    } else if (windowWidth >= 768) {
      setSlidesToShow(0);
    } else {
      setSlidesToShow(1);
    }
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  useEffect(() => {
    updateSlidesToShow(); // Initial calculation

    // Update slidesToShow on window resize
    window.addEventListener("resize", updateSlidesToShow);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

    return (
      <div id="email">
        <div className="flex justify-start py-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal text-start rounded-lg gradient-text uppercase px-4">
            Contact Details
          </h1>
        </div>
        <div className="flex justify-around items-center">
          <div className="hidden md:flex p-4 w-52 lg:w-72 h-52 justify-center items-center glass card_glow ">
            <div className="flex flex-col justify-center items-center">
              <FaLocationDot className="text-2xl md:text-5xl text-primary m-1" />

              <h2 className="font-bold text-sm md:text-xl md:py-1 gradient-text ">
                Location:
              </h2>
              <p className="text-xs md:text-sm font-semibold md:py-1">
                Dhaka, Bangladesh
              </p>
            </div>
          </div>
          <div className="hidden md:flex p-4 w-52 lg:w-72 h-52 justify-center items-center glass card_glow ">
            <div className="flex flex-col justify-center items-center">
              <MdAlternateEmail className="text-2xl md:text-5xl text-primary m-1" />

              <h2 className="font-bold text-sm md:text-xl md:py-1 gradient-text ">
                Email:
              </h2>
              <p className="text-xs md:text-sm font-semibold md:py-1">
                nazmulsaw@ gmail.com
              </p>
            </div>
          </div>
          <div className="hidden md:flex p-4 w-52 lg:w-72 h-52 justify-center items-center glass card_glow ">
            <div className="flex flex-col justify-center items-center">
              <FaPhoneVolume className="text-2xl md:text-5xl text-primary m-1" />

              <h2 className="font-bold text-sm md:text-xl md:py-1 gradient-text ">
                Mobile:
              </h2>
              <p className="text-xs md:text-sm font-semibold md:py-1">
                +880 1580845746
              </p>
            </div>
          </div>
        </div>
        <div className="relative md:hidden">
          <Slider ref={sliderRef} {...settings}>
            <div className="flex p-4 w-40 md:w-52 lg:w-72 h-52 justify-center items-center glass card_glow ">
              <div className="flex flex-col justify-center items-center">
                <FaLocationDot className="text-5xl text-primary m-1" />

                <h2 className="font-bold text-xl py-1 gradient-text ">
                  Location:
                </h2>
                <p className="text-sm font-semibold py-1">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
            <div className="flex p-4 w-40 md:w-52 lg:w-72 h-52 justify-center items-center glass card_glow ">
              <div className="flex flex-col justify-center items-center">
                <MdAlternateEmail className="text-5xl text-primary m-1" />

                <h2 className="font-bold text-xl py-1 gradient-text ">
                  Email:
                </h2>
                <p className="text-sm font-semibold py-1">
                  nazmulsaw@ gmail.com
                </p>
              </div>
            </div>
            <div className="flex p-4 w-40 md:w-52 lg:w-72 h-52 justify-center items-center glass card_glow ">
              <div className="flex flex-col justify-center items-center">
                <FaPhoneVolume className="text-5xl text-primary m-1" />

                <h2 className="font-bold text-xl py-1 gradient-text ">
                  Mobile:
                </h2>
                <p className="text-sm font-semibold py-1">
                  +880 1580845746
                </p>
              </div>
            </div>
          </Slider>
          <div className="absolute top-1/2 left-5 transform -translate-y-1/2 flex space-x-4 z-10">
            <button
              className=" hover:text-black text-blue-500 p-2 text-2xl glass rounded-lg"
              onClick={goToPrev}
            >
              <IoIosArrowBack />
            </button>
          </div>
          <div className="absolute top-1/2 right-5 transform -translate-y-1/2 flex space-x-4 z-10">
            <button
              className=" hover:text-black text-blue-500 p-2 text-2xl glass rounded-lg"
              onClick={goToNext}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <Email></Email>
      </div>
    );
};

export default Contact;