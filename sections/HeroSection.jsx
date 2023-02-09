import React from 'react'
import { MdOutlineWavingHand } from "react-icons/md";
import { AiOutlineMobile } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import TypeWriter from "typewriter-effect";

export const HeroSection = () => {
  return (
    <>
      <div id='herosection' className='w-full h-full text-center bg-gradient-to-r from-[#9d50bb] to-[#6e48aa] dark:from-slate-800 dark:to-gray-800'>
          <div className='px-0 pt-16 pb-8 items-center space-y-10 md:space-y-0 md:flex md:px-10 md:pt-20 md:pb-10 md:justify-between lg:px-44 lg:py-36'>
              <div>
                <div className='flex items-center justify-center py-2 md:py-3 lg:justify-start lg:py-6'>
                  <h1 className='text-black dark:text-white text-xl mx-2 md:text-2xl lg:text-4xl'>
                    Hi 
                  </h1>
                  <MdOutlineWavingHand className='w-6 h-6 text-black dark:text-white mx-2 md:w-8 md:h-8 lg:w-10 lg:h-10 animate-handwiggle'/>
                </div>
                <h1 className='text-center bg-clip-text text-transparent bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] font-bold text-xl py-2 md:py-3 md:text-2xl lg:text-start lg:text-4xl lg:py-4'>
                  <TypeWriter
                    options={{
                      loop: true,
                    }}
                    onInit={(typewriter)=>{
                      typewriter
                        .typeString("I'm ")
                        .pauseFor(1000)
                        .typeString("Htoo Htet")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Love to code!")
                        .pauseFor(3000)
                        .start();
                    }}
                  />
                </h1>
                <div className='flex items-center justify-center md:justify-between space-x-5 py-2 lg:py-6'>
                  <div className='flex items-center text-black dark:text-white space-x-1 lg:space-x-2'>
                    <BiWorld className='w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7'/>
                    <p className='md:text-lg lg:text-xl'>Web developer</p>
                  </div>
                  <div className='flex items-center text-black dark:text-white space-x-1 lg:space-x-2'>
                    <AiOutlineMobile className='w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7'/>
                    <p className='md:text-lg lg:text-xl'>App developer</p>
                  </div>
                </div>
              </div>    
              <img src="/assets/coding_2.svg" className="mx-auto w-72 h-72 md:w-80 md:h-80 mt-4 md:mx-0 md:mt-0 lg:w-5/12 lg:h-5/12" alt="coding" />
          </div>
      </div>
      <div className='w-full h-24 skew-y-6 transform -mt-10 bg-gradient-to-r from-[#9d50bb] to-[#6e48aa] dark:from-slate-800 dark:to-gray-800 md:h-40 md:-mt-16 lg:-mt-20 3xl:hidden'>
      </div>
    </>
  )
}
