import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { EaseInLine } from "./EaseInLine";

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
          delay: 0.38,
          type: "spring",
          damping: 20,
          stiffness: 180,
        },
      }}
      className="h-screen w-screen absolute top-0 left-0 bg-primary-dark flex content-center items-center justify-center"
    >
      <motion.h1 className="text-center sm:text-6xl text-4xl font-bold text-white">WELCOME!</motion.h1>
    </motion.div>
  );
};
