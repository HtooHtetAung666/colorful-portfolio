import React from 'react'
import { MdOutlineWavingHand } from "react-icons/md";
import { AiOutlineMobile } from "react-icons/ai";
import { FaFirefox } from "react-icons/fa";
import TypeWriter from "typewriter-effect";

export const HeroSection = () => {
  return (
    <>
      <div id='herosection' className='w-full h-full text-center bg-gradient-to-r from-[#a65fec] to-violet-500 dark:from-slate-600 dark:to-slate-600'>
          <div className='px-0 pt-16 pb-8 items-center space-y-14 md:space-y-0 md:flex md:px-8 md:pt-20 md:pb-10 md:justify-between lg:px-44 lg:py-36'>
              <div>
                <div className='flex items-center justify-center py-2 md:py-3 lg:py-4'>
                  <h1 className='text-white dark:text-black text-xl mx-2 md:text-2xl lg:text-4xl'>
                    Hi 
                  </h1>
                  <MdOutlineWavingHand className='w-6 h-6 text-white dark:text-black mx-2 md:w-8 md:h-8 lg:w-10 lg:h-10 animate-handwiggle'/>
                </div>
                <h1 className='text-center bg-clip-text text-transparent bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] font-bold text-xl py-2 md:py-3 md:text-2xl lg:text-4xl lg:py-4'>
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
                <div className='flex items-center justify-center md:justify-between space-x-5 py-2 lg:py-4'>
                  <div className='flex items-center text-white dark:text-black space-x-1 lg:space-x-2'>
                    <FaFirefox className='w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7'/>
                    <p className='md:text-lg lg:text-xl'>Web developer</p>
                  </div>
                  <div className='flex items-center text-white dark:text-black space-x-1 lg:space-x-2'>
                    <AiOutlineMobile className='w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7'/>
                    <p className='md:text-lg lg:text-xl'>App developer</p>
                  </div>
                </div>
              </div>    
              <img src="/mathematics.svg" className="text-slate-700 mx-auto w-56 h-56 md:w-80 md:h-80 mt-4 md:mx-0 md:mt-0 lg:w-6/12 lg:h-6/12" alt="freelancer" />
          </div>
      </div>
      <div className='w-full h-24 skew-y-6 transform -mt-10 bg-gradient-to-r from-[#a65fec] to-violet-500 dark:from-slate-600 dark:to-slate-600 md:h-40 md:-mt-16 lg:-mt-20 3xl:hidden'>
      </div>
    </>
  )
}
