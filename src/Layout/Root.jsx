import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Navbar/Footer";
import { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import ScrollUpButton from "react-scroll-up-button";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Root = () => {
  const location = useLocation();
  const [init, setInit] = useState(false);
  const noNavFooter =
    location.pathname.includes("signIn") ||
    location.pathname.includes("signUp") ||
    location.pathname.includes("dashboard");

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div>
      {!init && (
        <div className="absolute inset-0 bg-blue-300 z-20">
          <div className="absolute inset-0 top-52 flex justify-center">
            <ThreeCircles
              visible={true}
              height="100"
              width="100"
              color="#2200ff"
              ariaLabel="three-circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        </div>
      )}
      <div className="relative z-10">
        {noNavFooter || <Navbar />}
        <div className="min-h-screen pt-14 px-4">
          <Outlet />
        </div>
        {noNavFooter || <Footer />}

        {/* "Go to top" button */}
        <ScrollUpButton
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            padding: "0.25rem",
            width: "2rem",
            height: "2rem",
            color: "#000",
            borderRadius: "50%",
            cursor: "pointer",
            border: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </div>
    </div>
  );
};

export default Root;
