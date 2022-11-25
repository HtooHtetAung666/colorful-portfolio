import React from 'react'
import { IoGameControllerOutline, IoCodeSlash } from "react-icons/io5";
import { FaMusic } from "react-icons/fa";


const Hobbies = () => {
  return (
    <div className='relative'>
        <div id='hobbies' className='w-full h-full mt-28 mb-16 p-4 md:my-32 md:pt-32 lg:min-h-screen'>

            <svg 
            className='absolute top-0 left-0 w-40 h-24 -mt-12 md:w-60 md:h-32 md:-mt-0 lg:ml-20 lg:w-80 lg:h-44'
            viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#6488EA" d="M33.7,-48.5C45.6,-44.9,58.3,-38.7,61.5,-28.9C64.6,-19.2,58.2,-5.9,52.7,5C47.2,15.9,42.6,24.4,37.4,35C32.3,45.6,26.5,58.2,15.7,68.2C4.8,78.1,-11.2,85.3,-22.9,80.7C-34.6,76,-42.1,59.5,-53.8,46.4C-65.5,33.3,-81.6,23.7,-85.3,11C-89,-1.6,-80.4,-17.2,-71.7,-31.3C-63,-45.4,-54.2,-58,-42.2,-61.5C-30.2,-65.1,-15.1,-59.6,-2.1,-56.4C10.9,-53.1,21.9,-52.1,33.7,-48.5Z" transform="translate(100 100)" />
            </svg>

            <h1 className='text-center tracking-widest dark:text-indigo-400 text-[#8cadd3] text-xl uppercase md:text-2xl lg:text-3xl'>Hobbies</h1>

            <div className='my-16 grid gap-12 md:mx-24 md:mt-32 md:grid-cols-3 lg:mx-60'>

                <div className='mx-auto space-y-4'>
                    <div className='inline-flex w-16 h-16 flex-shrink-0 items-center justify-center rounded-full bg-red-200 md:w-20 md:h-20'>
                        <IoGameControllerOutline className='w-8 h-8 text-red-500 md:w-10 md:h-10' />
                    </div>
                    <p className='text-red-500 font-bold text-center text-md md:text-lg lg:text-xl'>Gaming</p>
                </div>

                <div className='mx-auto space-y-4'>
                    <div className='inline-flex w-16 h-16 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 md:w-20 md:h-20'>
                        <FaMusic className='w-8 h-8 text-gray-500 md:w-10 md:h-10' />
                    </div>
                    <p className='text-gray-500 font-bold text-center text-md md:text-lg lg:text-xl'>Music</p>
                </div>

                <svg
                className='absolute top-0 right-0 w-44 h-28 mt-52 md:mt-16 md:w-60 md:h-32 lg:w-88 lg:h-44 lg:mr-20' 
                viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#00CED1" d="M52.6,-51.2C61.2,-44.1,56.3,-22,55.5,-0.8C54.7,20.5,58.1,40.9,49.5,47.3C40.9,53.6,20.5,45.8,5.1,40.7C-10.3,35.6,-20.6,33.2,-33.8,26.9C-47.1,20.6,-63.3,10.3,-68.3,-5C-73.4,-20.4,-67.3,-40.8,-54,-47.9C-40.8,-55.1,-20.4,-49.1,0.8,-49.9C22,-50.8,44.1,-58.4,52.6,-51.2Z" transform="translate(100 100)" />
                </svg>

                <div className='mx-auto space-y-4'>
                    <div className='inline-flex w-16 h-16 flex-shrink-0 items-center justify-center rounded-full bg-violet-200 md:w-20 md:h-20'>
                        <IoCodeSlash className='w-8 h-8 text-violet-500 md:w-10 md:h-10' />
                    </div>
                    <p className='text-violet-500 font-bold text-center md:text-lg lg:text-xl'>Coding</p>
                </div>

            </div>

            <svg
            className='absolute left-0 w-40 h-24 -mt-12 md:w-60 md:h-32 md:-mt-0 md:ml-48 lg:w-88 lg:h-44 lg:ml-96 lg:bottom-0' 
            viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#DDA0DD" d="M40.3,-50.2C55.6,-44.4,73.6,-37.1,73.3,-26.5C73,-15.9,54.4,-2.2,47.1,13.8C39.9,29.8,43.9,47.9,38,59.1C32,70.3,16,74.5,-0.8,75.6C-17.7,76.7,-35.3,74.8,-47,65.5C-58.8,56.2,-64.6,39.6,-63.9,24.8C-63.2,10,-56.1,-3,-53.7,-19.7C-51.4,-36.5,-53.9,-57.1,-45.8,-65.2C-37.6,-73.2,-18.8,-68.8,-3.1,-64.5C12.5,-60.2,25.1,-56,40.3,-50.2Z" transform="translate(100 100)" />
            </svg>

</div>
    </div>
  )
}

export default Hobbies