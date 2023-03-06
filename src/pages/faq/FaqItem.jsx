import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import add from "../../assets/images/add.png";
import remove from "../../assets/images/remove.png";

const FaqItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    initial: {
      rotate: isOpen ? -180 : 180,
    },
    animate: {
      zIndex: 1,
      rotate: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "circOut",
      },
    },
  };
  const variants2 = {
    initial: {
      height: 0,
      opacity: 0,
    },
    animate: {
      height: "auto",
      opacity: 1,
      transition: {
        height: {
          duration: 0.4,
        },
        opacity: {
          duration: 0.25,
          delay: 0.15,
        },
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        height: {
          duration: 0.4,
        },
        opacity: {
          duration: 0.25,
        },
      },
    },
  };

  return (
    <div className="flex flex-col w-full rounded-lg">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center w-full relative py-5 text-2xl uppercase text-left text-black border-b border-gray-200 cursor-pointer"
      >
        <h4 className="w-11/12 text-2xl font-semibold">{item.headline}</h4>
        <div className="w-1/12 flex justify-end items-center select-none">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={isOpen ? "open" : "closed"}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {isOpen ? <img src={remove} alt="" /> : <img src={add} alt="" />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            variants={variants2}
            key="test"
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div
              dangerouslySetInnerHTML={{
                __html: `<div class="py-4">${item.description}</div>`,
              }}
            ></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqItem;
