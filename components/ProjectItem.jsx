import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const ProjectItem = ({title, backgroundImg, projectUrl}) => {
  return (
    <>
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-blue-500'>
            <Image className='rounded-lg group-hover:opacity-30' src={backgroundImg} alt='/'/>
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-lg text-[#ecf0f3] tracking-wider text-center uppercase lg:text-2xl'>{title}</h3>
                <Link href={projectUrl}>
                    <p className='text-center p-2 rounded-lg bg-[#ecf0f3] text-gray-700 font-bold text-md cursor-pointer mt-5 md:text-lg'>More Info</p>
                </Link>
            </div>
            </div>
    </>
  )
}
