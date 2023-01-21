import React from 'react'
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

export const Contact = () => {
  return (
    <div id='contact' className='w-full flex items-center justify-center my-40 px-16 md:my-52 lg:my-12 lg:min-h-screen'>
      <div className='relative w-full max-w-lg'>
        <div className='absolute bottom-0 -left-0 w-40 h-40 bg-purple-400 md:bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-80 dark:blur-none dark:opacity-100 animate-blob md:w-72 md:h-72 lg:w-80 lg:h-80'></div>
        <div className='absolute bottom-0 -right-0 w-36 h-36 bg-yellow-400 md:bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-80 dark:blur-none dark:opacity-100 animate-blob animation-delay-2000 md:w-72 md:h-72 lg:w-80 lg:h-80'></div>
        <div className='absolute -bottom-8 left-28 w-36 h-36 bg-pink-400 md:bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-80 dark:blur-none dark:opacity-100 animate-blob animation-delay-4000 md:w-72 md:h-72 lg:w-80 lg:h-80'></div>

        <div className='relative space-y-4 md:m-7  lg:m-0'>

        <div className='p-5 bg-inherit rounded-lg flex items-center justify-center space-x-8 md:justify-between md:bg-[#ecf0f3]'>
          <h1 className='text-purple-400 tracking-widest text-xl md:tracking-normal md:text-2xl lg:text-3xl font-bold'>Contact Info</h1>
          <div className='hidden w-40 h-6 rounded-lg bg-purple-300 md:block'></div>
        </div>

        <div className='p-5 bg-[#ecf0f3] rounded-lg flex items-center justify-center space-x-8 md:justify-between'>
          <div className='flex items-center space-x-3'>
            <AiOutlinePhone className='h-6 w-6 text-yellow-400 md:w-8 md:h-8'/>
            <p className='text-yellow-400 text-lg lg:text-xl'>09-43202950</p>
          </div>
          <div className='hidden w-36 h-6 rounded-lg bg-yellow-300 md:block'></div>
        </div>

        <div className='p-5 bg-[#ecf0f3] rounded-lg flex items-center justify-center space-x-8 md:justify-between'>
          <div className='flex items-center space-x-3'>
            <AiOutlineMail className='h-6 w-6 text-pink-400 md:w-8 md:h-8'/>
            <p className='text-pink-400 text-lg lg:text-xl'>hhawork039@gmail</p>
          </div>
          <div className='hidden w-32 h-6 rounded-lg bg-pink-300 md:block'></div>
        </div>

        </div>
      </div>
    </div>
  )
}
