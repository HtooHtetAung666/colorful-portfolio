import React from 'react'
import { MdOutlineWavingHand } from "react-icons/md";
import { AiOutlineMobile } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import TypeWriter from "typewriter-effect";

export const HeroSection = () => {
  return (
    <>
      <div id='herosection' className='w-full h-full text-center bg-gradient-to-r from-[#84329B] to-[#8b60ed]'>
          <div className='px-0 pt-16 pb-8 items-center space-y-10 md:space-y-0 md:flex md:px-10 md:pt-20 md:pb-10 md:justify-between lg:px-32 lg:py-36 xl:px-60'>
              <div className='space-y-8 xl:space-y-10'>
                <div className='flex items-center justify-center lg:justify-start'>
                  <h1 className='text-[#060606] text-xl mx-2 md:text-2xl lg:text-4xl'>
                    Hi 
                  </h1>
                  <MdOutlineWavingHand className='w-6 h-6 text-[#060606] mx-2 md:w-8 md:h-8 lg:w-10 lg:h-10 animate-handwiggle'/>
                </div>
                <h1 className='text-center bg-clip-text text-transparent bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] font-bold text-xl md:text-2xl lg:text-start lg:text-4xl'>
                  <TypeWriter
                    options={{
                      loop: true,
                    }}
                    onInit={(typewriter)=>{
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
                <div className='flex items-center justify-center md:justify-between space-x-5'>
                  <div className='flex items-center text-[#060606] space-x-1 lg:space-x-2'>
                    <BiWorld className='w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7'/>
                    <p className='md:text-lg lg:text-xl'>Web developer</p>
                  </div>
                  <div className='flex items-center text-[#060606] space-x-1 lg:space-x-2'>
                    <AiOutlineMobile className='w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7'/>
                    <p className='md:text-lg lg:text-xl'>App developer</p>
                  </div>
                </div>
              </div>    
              <img src="/assets/astronaut.svg" className="mx-auto w-72 h-72 md:w-80 md:h-80 mt-4 md:mx-0 md:mt-0 lg:w-5/12 lg:h-5/12 animate-up" alt="astronaut" />
          </div>
      </div>


      <div className='w-full h-24 skew-y-6 transform -mt-10 bg-gradient-to-r from-[#84329b] to-[#8b60ed] md:h-40 md:-mt-16 lg:-mt-20 lg:hidden'></div>
      <div className='w-full h-2 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] hidden lg:block 2xl:h-4'></div>

    </>
  )
}
