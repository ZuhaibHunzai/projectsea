import { motion } from "framer-motion";
import React, { useState } from "react";

export default function Box({ bg, title, text, number }) {
  // State
  const [isHovered, setIsHovered] = useState(false);
  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  const parmanentTextAnim1 = {
    beforeHover: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2 },
    },
    onHover: {
      y: -100,
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };
  const parmanentTextAnim2 = {
    beforeHover: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    onHover: {
      y: -100,
      opacity: 0,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };
  const hoverTextAnim = {
    onHover: {
      opacity: 1,
      transition: { duration: 0.5, delay: 0.5 },
    },
    beforeHover: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundImage: `url(${bg})` }}
      className={`w-full h-full relative group overflow-hidden rounded-3xl shadow-xl cursor-pointer flex justify-center bg-cover transition-all duration-500 items-center text-white 
`}
    >
      {/* Parmanent Text */}
      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden p-10 z-10">
        <motion.h4
          variants={parmanentTextAnim1}
          animate={isHovered ? "onHover" : "beforeHover"}
          className="text-6xl mb-2 uppercase text-gray-400"
        >
          {number ? number : "00"}
        </motion.h4>
        <motion.h4
          variants={parmanentTextAnim2}
          animate={isHovered ? "onHover" : "beforeHover"}
          className="text-3xl uppercase"
        >
          {title ? title : "Title"}
        </motion.h4>
      </div>
      {/* Hover text */}
      <motion.div
        variants={hoverTextAnim}
        animate={isHovered ? "onHover" : "beforeHover"}
        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden flex flex-col gap-2 justify-center items-center p-5 z-20"
      >
        <h6>{number ? number : "00"}</h6>
        <h4 className="text-3xl uppercase">{title ? title : "Title"}</h4>
        <p className="lg:text-base text-sm lg:leading-normal md:leading-none text-center">
          {text}
        </p>
      </motion.div>

      {/* Black layer */}
      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-gradient-to-t from-transparent to-black opacity-50 z-0 transition-all duration-500 group-hover:bg-black"></div>
    </div>
  );
}
