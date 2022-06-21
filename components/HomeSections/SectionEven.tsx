import React, { useEffect } from "react";
import { motion, m, useViewportScroll } from "framer-motion";
import { ParallaxBanner } from "react-scroll-parallax";
import { Fade, Slide } from "react-awesome-reveal";
import { useMediaQuery } from "react-responsive";

export const SectionEvenSm = ({ background, heading, content, fallbackColor }: { background: string; heading: string; content: string; fallbackColor: string }) => {
  return (
    <ParallaxBanner
      layers={[
        {
          image: background,
          speed: -20,
        },
        {
          children: (
            <div className="flex flex-col items-start h-screen w-screen bg-black bg-opacity-40">
              <Slide direction="right" className="ml-auto mt-16  mr-6 w-52">
                <h1 className="text-7xl text-white  leading-tight   text-right ">{heading}</h1>
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

export const SectionEvenLg = ({ background, heading, content, fallbackColor }: { background: string; heading: string; content: string; fallbackColor: string }) => {
  return (
    <div className="w-full h-screen flex " style={{ backgroundColor: fallbackColor }}>
      <ParallaxBanner
        layers={[
          {
            image: background,
            speed: 20,
          },
        ]}
      />
      <div className="w-full ">
        <div className="w-full h-full flex justify-center items-center">
          <Fade triggerOnce>
            <Slide direction="down">
              <h1 className="text-5xl text-white ">{heading}</h1>
            </Slide>
          </Fade>
        </div>
      </div>
    </div>
  );
};

const EvenSection = ({ background, heading, content, fallbackColor }: { background: string; heading: string; content: string; fallbackColor: string }) => {
  // if mobile or tablet
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  return isMobileOrTablet ? <SectionEvenSm {...{ background, heading, content, fallbackColor }} /> : <SectionEvenLg {...{ background, heading, content, fallbackColor }} />;
};

export default EvenSection;
