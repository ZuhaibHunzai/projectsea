import React from "react";
import aboutMockup from "../../assets/images/about-mockup.png";
import smoke3 from "../../assets/images/smoke-3.png";
import AnimatedPage from "../../components/AnimatedPage";
import Footer from "../../components/Footer";
import AboutLeft from "./AboutLeft";

export default function About() {
  return (
    <AnimatedPage>
      <div
        className={`w-screen h-screen overflow-y-scroll font-space-mon bg-basewhite bg-no-repeat bg-right-top bg-cover bg-[#F2EDD8] relative after:absolute after:left-0 after:bottom-0 after:content-[''] after:bg-[${smoke3}] after:w-full after:h-full after:bg-cover after:opacity-100`}
      >
        <div className="flex w-full relative">
          <div className="w-full h-full z-20">
            <div className="container mx-auto px-4 lg:pb-0 pb-10 lg:pt-20 sm:pt-32 pt-28">
              <div className=" lg:w-1/2 w-full">
                <AboutLeft />
              </div>
            </div>
            <Footer />
          </div>

          <img
            className="lg:block hidden z-10 w-1/2 fixed right-0 bottom-0"
            src={aboutMockup}
            alt="mockup"
          />
        </div>
      </div>
    </AnimatedPage>
  );
}
