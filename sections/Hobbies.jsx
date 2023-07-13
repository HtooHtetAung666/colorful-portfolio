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
        <img
          src="/assets/shapefest/Clay_Purple0005.png"
          alt="clay_purple"
          className="absolute top-0 left-0 w-32 h-32 mt-6 md:w-44 md:h-44 md:-mt-0 md:ml-5 lg:w-56 lg:h-56 lg:ml-16"
        />

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

          <img
            className="absolute top-0 right-0 w-32 h-32 mt-48 md:mt-10 md:w-44 md:h-44 md:mr-4 lg:w-56 lg:h-56 lg:mr-8"
            src="/assets/shapefest/Clay_Black0029.png"
            alt="clay_black"
          />

          <div className="mx-auto space-y-4">
            <div className="inline-flex flex-shrink-0 items-center justify-center rounded-full bg-gray-200 w-14 h-14 lg:w-16 lg:h-16">
              <FaMusic className="text-gray-500 w-6 h-6 lg:w-8 lg:h-8" />
            </div>
            <p className="text-gray-500 text-center text-md md:text-lg lg:text-xl">
              Music
            </p>
          </div>
        </div>

        <img
          className="absolute left-0 -mt-20 w-32 h-32 md:w-44 md:h-44 md:mt-4 md:ml-48 lg:w-56 lg:h-56 lg:ml-96 lg:mt-16"
          src="/assets/shapefest/Clay_Orange0024.png"
          alt="clay_orange"
        />
      </div>
    </div>
  );
};

export default Hobbies;
