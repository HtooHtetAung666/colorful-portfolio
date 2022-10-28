import React from 'react'
import Image from 'next/image'
import chatBot from '../public/assets/projects/chatBot.jpg'

const chatbot = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10'/>
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={chatBot} alt='/'/>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <h2 className='py-2 text-white'>Chat Bot</h2>
              <h3 className='text-white'>Vue Js / Firebase </h3>
            </div>
        </div>
    </div>
  )
}

export default chatbot