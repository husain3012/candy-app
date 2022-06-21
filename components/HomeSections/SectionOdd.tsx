import React, { useEffect } from "react";
import { motion, m, useViewportScroll } from "framer-motion";
import { ParallaxBanner } from "react-scroll-parallax";
import { Slide, Fade } from "react-awesome-reveal";

export const SectionOddSm = ({ background, heading, content, fallbackColor }: { background: string; heading: string; content: string, fallbackColor: string }) => {
  return (
    <ParallaxBanner
      layers={[
        {
          image: background,
          speed: 20,
        },
        {
          children: (
            <div className="flex flex-col items-start h-screen w-screen bg-black bg-opacity-40">
              <Slide direction="left" className="w-52 mt-16">
                <h1 className="text-7xl text-white leading-tight px-4 ">{heading}</h1>
              </Slide>
              <Fade className="mx-auto mt-auto mb-20">
                <div className="group  text-gray-400 p-3 text-lg max-w-sm text-justify bg-black bg-opacity-40">
                  <div className="m-3 group-hover:scale-110 transition-all border-[1px] border-gray-400 p-3">{content}</div>
                </div>
              </Fade>
            </div>
          ),
        },
      ]}
      className=" h-screen w-screen bg-cover "
    />
  );
};
