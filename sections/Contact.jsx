import React from 'react'
import { AiOutlinePhone, AiOutlineMail, AiOutlineInfoCircle } from "react-icons/ai";

export const Contact = () => {
  return (
    <div id='contact' className='w-full flex items-center justify-center my-40 px-16 md:my-52 lg:my-12 lg:min-h-screen'>
      <div className='relative w-full max-w-lg'>

        <div className='absolute top-0 -left-4 bg-purple-300 rounded-full mix-blend-multiply filter blur-lg opacity-80 animate-blob dark:opacity-100 dark:blur-none hidden md:block md:w-72 md:h-72'></div>
        <div className='absolute top-0 -right-4 bg-yellow-300 rounded-full mix-blend-multiply filter blur-lg opacity-80 animate-blob animation-delay-2000 dark:opacity-100 dark:blur-none hidden md:block md:w-72 md:h-72'></div>
        <div className='absolute -bottom-8 left-20 bg-pink-300 rounded-full mix-blend-multiply filter blur-lg opacity-80 animate-blob animation-delay-4000 dark:opacity-100 dark:blur-none hidden md:block md:w-72 md:h-72'></div>


        <div className='relative space-y-4 md:m-7 lg:m-0'>

          <div className='py-5 px-4 bg-[#dcf2ff] shadow-md shadow-purple-300 md:shadow-none rounded-lg flex items-center justify-start space-x-8 md:justify-between'>
            <div className='flex items-center space-x-2'>
              <AiOutlineInfoCircle className='w-6 h-6 text-purple-400 md:w-8 md:h-8'/>
              <p className='text-purple-400 text-md md:text-lg lg:text-xl'>Contact Info</p>
            </div>
            <div className='hidden w-40 h-6 rounded-lg bg-purple-300 md:block'></div>
          </div>

          <div className='py-5 px-4 bg-[#dcf2ff] shadow-md shadow-yellow-300 md:shadow-none rounded-lg flex items-center justify-start space-x-8 md:justify-between'>
            <div className='flex items-center space-x-2'>
              <AiOutlinePhone className='h-6 w-6 text-yellow-400 md:w-8 md:h-8'/>
              <p className='text-yellow-400 text-md md:text-lg lg:text-xl'>09-43202950</p>
            </div>
            <div className='hidden w-36 h-6 rounded-lg bg-yellow-300 md:block'></div>
          </div>

          <div className='py-5 px-4 bg-[#dcf2ff] shadow-md shadow-pink-300 md:shadow-none rounded-lg flex items-center justify-start space-x-8 md:justify-between'>
            <div className='flex items-center space-x-2'>
              <AiOutlineMail className='h-6 w-6 text-pink-400 md:w-8 md:h-8'/>
              <p className='text-pink-400 text-md md:text-lg lg:text-xl'>hhawork039@gmail</p>
            </div>
            <div className='hidden w-32 h-6 rounded-lg bg-pink-300 md:block'></div>
          </div>

        </div>
      </div>
    </div>
  )
}
