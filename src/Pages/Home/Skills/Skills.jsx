// import { useRef } from "react";

const Skills = () => {
  return (
    <div id="skills" className="py-4 md:py-10">
      <div className="flex flex-col md:flex-row justify-around gap-10 pb-4">
        <div className="">
          <div className="flex justify-center md:py-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-normal text-center rounded-lg gradient-text uppercase px-4">
              Technical Skills
            </h1>
          </div>
          <div className="flex flex-col space-y-4 md:space-y-10 p-4">
            <div>
              <div className="flex justify-between items-center text-xs md:text-sm">
                <p>Javascript</p>
                <p>86%</p>
              </div>
              <progress
                className="progress progress-primary md:w-80 lg:w-[500px] md:h-4"
                value={86}
                max="100"
              ></progress>
            </div>
            <div>
              <div className="flex justify-between items-center text-xs md:text-sm">
                <p>React</p>
                <p>90%</p>
              </div>
              <progress
                className="progress progress-primary md:w-80 lg:w-[500px] md:h-4"
                value={90}
                max="100"
              ></progress>
            </div>
            <div>
              <div className="flex justify-between items-center text-xs md:text-sm">
                <p>MongoDB</p>
                <p>70%</p>
              </div>
              <progress
                className="progress progress-primary md:w-80 lg:w-[500px] md:h-4"
                value={70}
                max="100"
              ></progress>
            </div>
            <div>
              <div className="flex justify-between items-center text-xs md:text-sm">
                <p>Express.Js</p>
                <p>86%</p>
              </div>
              <progress
                className="progress progress-primary md:w-80 lg:w-[500px] md:h-4"
                value={86}
                max="100"
              ></progress>
            </div>
            <div>
              <div className="flex justify-between items-center text-xs md:text-sm">
                <p>Node Js</p>
                <p>80%</p>
              </div>
              <progress
                className="progress progress-primary md:w-80 lg:w-[500px] md:h-4"
                value={80}
                max="100"
              ></progress>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center py-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-normal text-center rounded-lg gradient-text uppercase px-4">
              Professional Skills
            </h1>
          </div>
          <div className="hidden md:grid grid-cols-2 p-4 gap-10">
            <div className="flex flex-col items-center">
              <div
                className="radial-progress text-primary"
                style={{
                  "--value": "95",
                  "--size": "8rem",
                  "--thickness": "1rem",
                }}
                role="progressbar"
              >
                95%
              </div>
              <p className="text-sm">Communication</p>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="radial-progress text-primary"
                style={{
                  "--value": "70",
                  "--size": "8rem",
                  "--thickness": "1rem",
                }}
                role="progressbar"
              >
                70%
              </div>
              <p className="text-sm">Team Work</p>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="radial-progress text-primary"
                style={{
                  "--value": "86",
                  "--size": "8rem",
                  "--thickness": "1rem",
                }}
                role="progressbar"
              >
                86%
              </div>
              <p className="text-sm">Project Management</p>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="radial-progress text-primary"
                style={{
                  "--value": "99",
                  "--size": "8rem",
                  "--thickness": "1rem",
                }}
                role="progressbar"
              >
                99%
              </div>
              <p className="text-sm">Creativity</p>
            </div>
          </div>
          <div className="grid grid-cols-2 p-4 gap-10 md:hidden">
            <div className="flex flex-col items-center">
              <div
                className="radial-progress text-primary"
                style={{
                  "--value": "95",
                  "--size": "6rem",
                  "--thickness": "0.5rem",
                }}
                role="progressbar"
              >
                95%
              </div>
              <p className="text-xs py-1">Communication</p>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="radial-progress text-primary"
                style={{
                  "--value": "70",
                  "--size": "6rem",
                  "--thickness": "0.5rem",
                }}
                role="progressbar"
              >
                70%
              </div>
              <p className="text-xs py-1">Team Work</p>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="radial-progress text-primary"
                style={{
                  "--value": "86",
                  "--size": "6rem",
                  "--thickness": "0.5rem",
                }}
                role="progressbar"
              >
                86%
              </div>
              <p className="text-xs py-1">Project Management</p>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="radial-progress text-primary"
                style={{
                  "--value": "99",
                  "--size": "6rem",
                  "--thickness": "0.5rem",
                }}
                role="progressbar"
              >
                99%
              </div>
              <p className="text-xs py-1">Creativity</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around gap-10 pt-4">
        <div className="md:w-1/2">
          <div className="flex justify-center py-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-normal text-center rounded-lg gradient-text uppercase px-4">
              Education
            </h1>
          </div>
          <div className="flex flex-col gap-6">
            <div className="p-4 w-full glass card_glow h-56  lg:h-40">
              <div className="">
                <h2 className="font-bold text-xl py-1 gradient-text">
                  Bangladesh Computer Education Development Society (BCEDS)
                </h2>
                <p className="text-sm font-semibold py-1">2018</p>
                <p>Basic Computer and Office Software course.</p>
              </div>
            </div>
            <div className="p-4 w-full glass card_glow h-56  lg:h-40">
              <div className="">
                <h2 className="font-bold text-xl py-1 gradient-text">
                  Complete Web Development with Programming Hero
                </h2>
                <p className="text-sm font-semibold py-1">2023</p>
                <p>MERN Stack based complete web development course.</p>
              </div>
            </div>
            <div className="p-4 w-full glass card_glow h-56  lg:h-40">
              <div className="">
                <h2 className="font-bold text-xl py-1 gradient-text">
                  Voice Training with Professionals
                </h2>
                <p className="text-sm font-semibold py-1">2023</p>
                <p>Voice-Over and Dubbing related course with Professionals.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="flex justify-center py-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-normal text-center rounded-lg gradient-text uppercase px-4">
              Work Experience
            </h1>
          </div>
          <div className="flex flex-col gap-6">
            <div className="p-4 w-full glass card_glow h-56  lg:h-40">
              <div className="">
                <h2 className="font-bold text-xl py-1 gradient-text">
                  MERN Stack Developer
                </h2>
                <p className="text-sm font-semibold py-1">2023-Present</p>
                <p>
                  Work as a MERN Stack web developer in Freelance and local
                  marketplaces.
                </p>
              </div>
            </div>
            <div className="p-4 w-full glass card_glow h-56  lg:h-40">
              <div className="">
                <h2 className="font-bold text-xl py-1 gradient-text">
                  Graphics Designer
                </h2>
                <p className="text-sm font-semibold py-1">2020-Present</p>
                <p>
                  Work as a Graphics Designer in Freelance and local
                  marketplaces.
                </p>
              </div>
            </div>
            <div className="p-4 w-full glass card_glow h-56  lg:h-40">
              <div className="">
                <h2 className="font-bold text-xl py-1 gradient-text">
                  Voice-Over & Dubbing Artist
                </h2>
                <p className="text-sm font-semibold py-1">2023-Present</p>
                <p>
                  Work as a Bengali, Hindi and English Voice-Over and Dubbing
                  artist in Freelance and local marketplaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
