import { motion } from "framer-motion";
import React from "react";
import { SplashScreen, EaseInLine } from "../components/SplashScreen";

const Home = () => {
  return (
    <div>
      <SplashScreen />
      <div className="h-screen w-screen flex flex-col items-center content-center ">
        <div className="m-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 1,
                type: "spring",
                damping: 10,
                stiffness: 100,
              },
            }}
            className="text-center text-4xl  sm:text-5xl font-bold text-primary-dark mb-4"
          >
            Coming Soon!
          </motion.h1>
          <EaseInLine />
        </div>

      </div>
    </div>
  );
};

export default Home;
