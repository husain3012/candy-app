import { motion, LazyMotion, domAnimation, useViewportScroll } from "framer-motion";
import React from "react";
import EvenSection from "../components/HomeSections/SectionEven";
import OddSection from "../components/HomeSections/SectionOdd";
import Navbar from "../components/Navbar";
import { SplashScreen } from "../components/SplashScreen";
import SmoothScroll from "../components/Layout/SmoothScroll";
import { useMediaQuery } from "react-responsive";
const Home = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  return (
    <div>
      <SplashScreen>
        <Navbar />
        <SmoothScroll active={isBigScreen}>
          <OddSection
            fallbackColor="#94073d"
            background="https://images.unsplash.com/photo-1575224300306-1b8da36134ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuZHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            heading="Lorem Ipsum Dolor Sit"
            content="lorem ipsum aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <EvenSection
            fallbackColor="#5c6560"
            background="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
            heading="Lorem Ipsum Dolor Sit"
            content="lorem ipsum aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <OddSection
            fallbackColor="#844840"
            background="https://images.unsplash.com/photo-1600359756098-8bc52195bbf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
            heading="Lorem Ipsum Dolor Sit"
            content="lorem ipsum aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </SmoothScroll>
      </SplashScreen>
    </div>
  );
};

export default Home;
