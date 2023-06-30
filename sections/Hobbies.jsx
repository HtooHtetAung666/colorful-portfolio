import React from 'react'
import { IoGameControllerOutline, IoCodeSlash } from "react-icons/io5";
import { FaMusic } from "react-icons/fa";

const Hobbies = () => {
    return (
        <div className='relative'>
            <div id='hobbies' className='w-full h-full my-28 p-4 md:my-32 md:pt-28 lg:min-h-screen'>

                <img 
                    src='/assets/shapefest/Clay_White0011.png' 
                    alt='clay_white' 
                    className='absolute top-0 left-0 w-32 h-32 -mt-12 md:w-44 md:h-44 md:-mt-0 md:ml-5 lg:w-60 lg:h-60 lg:ml-16'
                />

                <h1 className='text-center tracking-widest text-black dark:text-white text-xl md:text-2xl lg:text-3xl font-bold'>Hobbies</h1>

                <div className='my-16 grid gap-12 md:mx-24 md:mt-24 md:grid-cols-3 lg:mt-32 lg:mx-30 xl:mx-60'>

                    <div className='mx-auto space-y-4'>
                        <div className='inline-flex w-14 h-14 flex-shrink-0 items-center justify-center rounded-full bg-indigo-200 md:w-16 md:h-16 3xl:w-20 3xl:h-20'>
                            <IoCodeSlash className='w-6 h-6 text-indigo-500 md:w-8 md:h-8 3xl:w-10 3xl:h-10'/>
                        </div>
                        <p className='text-indigo-500 text-center md:text-lg lg:text-xl'>Coding</p>
                    </div>

                    <div className='mx-auto space-y-4'>
                        <div className='inline-flex w-14 h-14 flex-shrink-0 items-center justify-center rounded-full bg-red-200 md:w-16 md:h-16 3xl:w-20 3xl:h-20'>
                            <IoGameControllerOutline className='w-6 h-6 text-red-500 md:w-8 md:h-8 3xl:w-10 3xl:h-10'/>
                        </div>
                        <p className='text-red-500 text-center text-md md:text-lg lg:text-xl'>Gaming</p>
                    </div>

                    <img 
                        className='absolute top-0 right-0 w-32 h-32 mt-44 md:mt-10 md:w-44 md:h-44 md:mr-4 lg:w-60 lg:h-60 lg:mr-8'
                        src='/assets/shapefest/Clay_Purple0005.png' 
                        alt='clay_purple'
                    />

                    <div className='mx-auto space-y-4'>
                        <div className='inline-flex flex-shrink-0 items-center justify-center rounded-full bg-gray-200 w-14 h-14 md:w-16 md:h-16 3xl:w-20 3xl:h-20'>
                            <FaMusic className='text-gray-500 w-6 h-6 md:w-8 md:h-8 3xl:w-10 3xl:h-10'/>
                        </div>
                        <p className='text-gray-500 text-center text-md md:text-lg lg:text-xl'>Music</p>
                    </div> 

                </div>

                <img 
                    className='absolute bottom-0 right-0 w-32 h-32 mb-16 md:-mb-28 md:mr-16 md:w-44 md:h-44 lg:w-60 lg:h-60 lg:-mb-12 lg:mr-44'
                    src='/assets/shapefest/Clay_Black0011.png' 
                    alt='clay_black' 
                />

                <img 
                    className='absolute left-0 w-32 h-32 -mt-12 md:w-44 md:h-44 md:mt-4 md:ml-48 lg:w-60 lg:h-60 lg:ml-80 lg:mt-16'
                    src='/assets/shapefest/Clay_Orange0024.png' 
                    alt='clay_orange' 
                />

            </div>
        </div>
    )
}

export default Hobbies