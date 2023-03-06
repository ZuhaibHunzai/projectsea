import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import english_m from "../../assets/home_images/1 English M.png";
import english from "../../assets/home_images/1 English.png";
import malay_m from "../../assets/home_images/2 Malay M.png";
import malay from "../../assets/home_images/2 Malay.png";
import chinese_m from "../../assets/home_images/3 Chinese M.png";
import chinese from "../../assets/home_images/3 Chinese.png";
import tamil_m from "../../assets/home_images/4 Tamil M.png";
import tamil from "../../assets/home_images/4 Tamil.png";
import english2 from "../../assets/home_images/5 English (repeat) (in the middle).png";
import english2_m from "../../assets/home_images/5 English Re M.png";
import thai_m from "../../assets/home_images/6 Thai M.png";
import thai from "../../assets/home_images/6 Thai.png";
import vietnamese_m from "../../assets/home_images/7 Vietnamese M.png";
import vietnamese from "../../assets/home_images/7 Vietnamese.png";
import philippines_m from "../../assets/home_images/8 Philippines M.png";
import philippines from "../../assets/home_images/8 Philippines.png";
import khumer_m from "../../assets/home_images/9 Khmer M.png";
import khumer from "../../assets/home_images/9 Khmer.png";
import homeMockup from "../../assets/images/HOMEPAGE-NFT.png";
import AnimatedPage from "../../components/AnimatedPage";

export default function Home() {
  // state
  const [count, setCount] = useState(0);
  const [md, setMd] = useState(
    window.matchMedia("(max-width:  767px)").matches
  );

  // home text images
  const textImages = [
    english,
    malay,
    chinese,
    tamil,
    english2,
    thai,
    vietnamese,
    philippines,
    khumer,
  ];

  // home text images for mobile
  const textImagesMobile = [
    english_m,
    malay_m,
    chinese_m,
    tamil_m,
    english2_m,
    thai_m,
    vietnamese_m,
    philippines_m,
    khumer_m,
  ];
  // use images array based on screen size
  const useImages = md ? textImagesMobile : textImages;

  // framer motion variants
  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // add event listener to screen size
  useEffect(() => {
    window
      .matchMedia("(max-width: 767px)")
      .addEventListener("change", (e) => setMd(e.matches));
  }, []);

  // change text image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (count === textImages.length - 1) {
        setCount(0);
      } else {
        setCount(count + 1);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <AnimatedPage>
      {/* Home components */}
      <div className="w-screen relative overflow-x-hidden bg-mainwhite">
        <div
          className={` w-screen h-screen overflow-hidden  relative bg-no-repeat bg-cover before:absolute before:right-0 before:top-0 before:content-[''] before:bg-[url('/src/assets/images/smoke-1.png')] before:w-full before:h-full before:bg-cover z-10 before:-z-10 before:opacity-100 after:absolute after:left-0 after:bottom-0 after:content-[''] after:bg-[url('/src/assets/images/smoke-2.png')] after:w-full after:h-full after:bg-cover after:opacity-100`}
        >
          <div className="w-full h-full flex justify-center md:items-center items-start md:pt-0 pt-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={count}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <img src={useImages[count]} alt="" />
              </motion.div>
            </AnimatePresence>

            <div className="w-full absolute bottom-0 flex justify-center items-end z-20">
              <img
                src={homeMockup}
                alt=""
                className="xl:w-1/3 lg:w-1/2 md:w-3/5 sm:w-4/5 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
