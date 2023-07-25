import React from "react";
import { IoGameControllerOutline, IoCodeSlash } from "react-icons/io5";
import { FaMusic } from "react-icons/fa";

const Hobbies = () => {
  return (
    <div className="relative">
      <div
        id="hobbies"
        className="w-full h-full my-28 p-4 md:my-32 md:pt-28 lg:min-h-screen"
      >
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 w-24 h-24 mt-6 ml-2 md:w-28 md:h-28 md:-mt-0 md:ml-10 lg:w-44 lg:h-44 lg:ml-16"
        >
          <path
            fill="#60a5fa"
            d="M57.1,-46.6C72,-26.9,80.8,-3.2,74.9,14.9C69,33,48.5,45.5,27.1,55.6C5.7,65.6,-16.6,73.1,-34.4,66.5C-52.3,59.8,-65.8,38.9,-69.2,17.7C-72.5,-3.6,-65.7,-25.3,-52.5,-44.6C-39.3,-64,-19.7,-80.9,0.7,-81.5C21.1,-82.1,42.2,-66.3,57.1,-46.6Z"
            transform="translate(100 100)"
          />
        </svg>

        <h1 className="text-center tracking-widest text-black dark:text-white text-xl md:text-2xl lg:text-3xl font-bold">
          Hobbies
        </h1>

        <div className="my-16 grid gap-12 md:mx-24 md:mt-24 md:grid-cols-3 lg:mt-32 lg:mx-30 xl:mx-60">
          <div className="mx-auto space-y-4">
            <div className="inline-flex w-14 h-14 flex-shrink-0 items-center justify-center rounded-full bg-indigo-200 lg:w-16 lg:h-16">
              <IoCodeSlash className="w-6 h-6 text-indigo-500 lg:w-8 lg:h-8" />
            </div>
            <p className="text-indigo-500 text-center md:text-lg lg:text-xl">
              Coding
            </p>
          </div>

          <div className="mx-auto space-y-4">
            <div className="inline-flex w-14 h-14 flex-shrink-0 items-center justify-center rounded-full bg-red-200 lg:w-16 lg:h-16">
              <IoGameControllerOutline className="w-6 h-6 text-red-500 lg:w-8 lg:h-8" />
            </div>
            <p className="text-red-500 text-center text-md md:text-lg lg:text-xl">
              Gaming
            </p>
          </div>

          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 right-0 w-24 h-24 mt-48 mr-2 md:mt-10 md:w-28 md:h-28 md:mr-10 lg:w-44 lg:h-44 lg:mr-8"
          >
            <path
              fill="#9ca3af"
              d="M44.7,-65.8C57.8,-61,68.3,-48.5,70.6,-34.8C73,-21,67.3,-6.1,62,6.7C56.7,19.5,51.9,30.1,44.2,37.6C36.6,45,26.2,49.3,14.7,54.6C3.3,60,-9.1,66.6,-21.5,66.2C-33.9,65.7,-46.4,58.3,-55.7,48C-65,37.7,-71.2,24.4,-76.2,9.2C-81.1,-6,-84.7,-23.2,-78.3,-35.1C-71.9,-47.1,-55.4,-53.8,-40.7,-57.8C-25.9,-61.8,-13,-63,1.4,-65.2C15.8,-67.4,31.5,-70.5,44.7,-65.8Z"
              transform="translate(100 100)"
            />
          </svg>

          <div className="mx-auto space-y-4">
            <div className="inline-flex flex-shrink-0 items-center justify-center rounded-full bg-gray-200 w-14 h-14 lg:w-16 lg:h-16">
              <FaMusic className="text-gray-500 w-6 h-6 lg:w-8 lg:h-8" />
            </div>
            <p className="text-gray-500 text-center text-md md:text-lg lg:text-xl">
              Music
            </p>
          </div>
        </div>

        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-0 -mt-20 w-24 h-24 ml-3 md:w-32 md:h-32 md:mt-10 md:ml-44 lg:w-44 lg:h-48 lg:ml-96 lg:mt-16"
        >
          <path
            fill="#fb7185"
            d="M36.8,-60.7C42,-46.8,36.8,-28.5,44.3,-12.7C51.9,3.2,72.3,16.7,74.5,28.7C76.7,40.6,60.8,51.2,45.3,61C29.9,70.8,15,80,3,75.8C-8.9,71.6,-17.8,54.1,-31.1,43.6C-44.5,33.1,-62.3,29.6,-73.1,18.5C-83.8,7.5,-87.4,-11,-78.7,-21.8C-70,-32.5,-48.9,-35.5,-33.8,-46.1C-18.6,-56.7,-9.3,-75,3.2,-79.4C15.8,-83.9,31.5,-74.5,36.8,-60.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hobbies;
