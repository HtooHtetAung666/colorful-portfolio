import React from 'react'
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

export const Contact = () => {
  return (
    <div id='contact' className='w-full flex items-center justify-center my-40 px-16 md:my-52 lg:my-12 lg:min-h-screen'>
      <div className='relative w-full max-w-lg'>

        <div className='absolute top-0 -left-4 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:opacity-100 dark:blur-none hidden md:block md:w-72 md:h-72'></div>
        <div className='absolute top-0 -right-4 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:opacity-100 dark:blur-none hidden md:block md:w-72 md:h-72'></div>
        <div className='absolute -bottom-8 left-20 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 dark:opacity-100 dark:blur-none hidden md:block md:w-72 md:h-72'></div>


        <div className='relative space-y-4 md:m-7  lg:m-0'>

        <div className='p-5 bg-inherit rounded-lg flex items-center justify-center space-x-8 md:justify-between md:bg-[#e2dfd2]'>
          <h1 className='text-purple-400 tracking-widest text-xl md:tracking-normal md:text-2xl lg:text-3xl font-bold'>Contact Info</h1>
          <div className='hidden w-40 h-6 rounded-lg bg-purple-300 md:block'></div>
        </div>

        <div className='p-5 bg-[#e2dfd2] rounded-lg flex items-center justify-center space-x-8 md:justify-between'>
          <div className='flex items-center space-x-3 px-5 md:px-0'>
            <AiOutlinePhone className='h-6 w-6 text-yellow-400 md:w-8 md:h-8'/>
            <p className='text-yellow-400 text-md md:text-lg lg:text-xl'>09-43202950</p>
          </div>
          <div className='hidden w-36 h-6 rounded-lg bg-yellow-300 md:block'></div>
        </div>

        <div className='p-5 bg-[#e2dfd2] rounded-lg flex items-center justify-center space-x-8 md:justify-between'>
          <div className='flex items-center space-x-3 px-5 md:px-0'>
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
