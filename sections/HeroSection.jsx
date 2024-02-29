import React from "react";
import { AiOutlineMobile } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import TypeWriter from "typewriter-effect";

export const HeroSection = () => {
  return (
    <>
      <div
        id="herosection"
        className="w-full h-full bg-gradient-to-r from-purple-dark dark:from-rhino-dark to-purple-light dark:to-rhino-light text-center"
      >
        <div className="px-0 pt-16 pb-8 items-center space-y-10 md:space-y-0 md:flex md:px-10 md:pt-20 md:pb-10 md:justify-between lg:px-32 lg:py-36 xl:px-56 3xl:px-0 3xl:py-40 3xl:max-w-7xl 3xl:mx-auto">
          <div className="space-y-8 xl:space-y-10">
            <div className="flex items-center space-x-2 justify-center lg:space-x-4 lg:justify-start">
              <h1 className="dark:text-cursed-black text-creator-light font-bold text-xl md:text-2xl lg:text-5xl">
                Hi
              </h1>
              <img
                className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 animate-handwiggle"
                src="/assets/waving-hand-svgrepo-com.svg"
                alt="handwave"
              />
            </div>
            <h1 className="text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-dark to-orange-light font-bold text-xl md:text-2xl lg:text-start lg:text-3xl 3xl:text-4xl">
              <TypeWriter
                options={{
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("I'm ")
                    .pauseFor(1000)
                    .typeString("Htoo Htet Aung")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Love to code!")
                    .pauseFor(3000)
                    .start();
                }}
              />
            </h1>
            <div className="flex items-center justify-center md:justify-between space-x-4 md:space-x-5">
              <div className="flex items-center text-cursed-black dark:text-creator-light space-x-1 lg:space-x-2">
                <BiWorld className="w-5 h-5 md:w-6 md:h-6 3xl:w-7 3xl:h-7" />
                <p className="text-sm md:text-lg 3xl:text-xl">Web developer</p>
              </div>
              <div className="flex items-center text-cursed-black dark:text-creator-light space-x-1 lg:space-x-2">
                <AiOutlineMobile className="w-5 h-5 md:w-6 md:h-6 3xl:w-7 3xl:h-7" />
                <p className="text-sm md:text-lg 3xl:text-xl">App developer</p>
              </div>
            </div>
          </div>
          <img
            src="/assets/astronaut.svg"
            className="mx-auto w-72 h-72 md:w-80 md:h-80 mt-4 md:mx-0 md:mt-0 lg:w-5/12 lg:h-5/12 3xl:w-96"
            alt="astronaut"
          />
        </div>
      </div>

      <div className="w-full h-24 skew-y-6 transform -mt-10 bg-gradient-to-r from-purple-dark dark:from-rhino-dark to-purple-light dark:to-rhino-light md:h-40 md:-mt-20 3xl:hidden"></div>
      <div className="w-full h-2 hidden 3xl:block bg-gradient-to-r from-purple-dark dark:from-rhino-dark via-purple-dark dark:via-red-laracast to-purple-light dark:to-rhino-light"></div>
    </>
  );
};
