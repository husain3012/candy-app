import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { EaseInLine } from "./EaseInLine";
import { Reveal } from "react-awesome-reveal";

export const SplashScreen = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(Math.max(window.innerWidth, window.outerWidth));
    return () => {
      setWindowWidth(0);
    };
  }, []);

  return (
    <motion.div
      animate={{
        // scale: 0,
        x: 0 - windowWidth,
        transition: {
          delay: 2,
          type: "spring",
          damping: 20,
          stiffness: 180,
        },
      }}
      className="h-screen w-screen absolute top-0 left-0 bg-pink-700 flex content-center items-center justify-center z-[100]"
    >
      <Reveal >
        <h1 className="text-center sm:text-6xl text-4xl font-bold text-white">WELCOME!</h1>
      </Reveal>
    </motion.div>
  );
};
