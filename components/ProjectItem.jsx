import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const ProjectItem = ({title, backgroundImg, projectUrl, buildWith}) => {
  return (
    <>
        <div className='relative flex items-center justify-center h-full w-full shadow-xl shadow-gray-600 dark:shadow-gray-900 rounded-xl p-4 group hover:bg-pink-500'>
            <Image className='object-fill rounded-lg group-hover:opacity-30' src={backgroundImg} alt='/'/>
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-lg text-[#ecf0f3] tracking-wider text-center uppercase lg:text-2xl'>{title}</h3>
                <p className='text-sm text-[#ecf0f3] text-center lg:text-lg'>{buildWith}</p>
                {projectUrl
                  ?  <Link href={projectUrl}>
                        <a target='_blank'>
                          <p className='text-center p-2 rounded-lg bg-[#ecf0f3] text-gray-700 font-bold text-md cursor-pointer mt-5 md:text-lg'>Live Demo</p>
                        </a>
                     </Link>
                  :   <p className='text-center p-2 rounded-lg bg-[#ecf0f3] text-gray-700 font-bold text-md cursor-not-allowed mt-5 md:text-lg'>Coming Soon</p>
                }
            </div>
        </div>
    </>
  )
}
