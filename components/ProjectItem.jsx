import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const ProjectItem = ({title, backgroundImg, projectUrl, buildWith}) => {
  return (
    <>
        <div className='bg-[#ecf0f3] dark:bg-slate-800 relative flex items-center justify-center h-full w-full border-solid border-2  lg:border-4 shadow-xl shadow-[#f48037] dark:shadow-[#483d8b] rounded-xl p-4 group hover:bg-[#f48037] dark:hover:bg-[#483d8b]'>
            <Image className='rounded-lg group-hover:opacity-30' src={backgroundImg} alt='/'/>
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-lg text-white tracking-wider text-center uppercase lg:text-2xl'>{title}</h3>
                <p className='text-sm text-white text-center lg:text-lg'>{buildWith}</p>
                {projectUrl
                  ?  <Link href={projectUrl}>
                        <a target='_blank'>
                          <p className='text-center p-2 rounded-lg bg-white text-black font-bold text-md cursor-pointer mt-5 lg:text-lg'>Live Demo</p>
                        </a>
                     </Link>
                  :   <p className='text-center p-2 rounded-lg bg-white text-black font-bold text-md cursor-not-allowed mt-5 lg:text-lg'>Working On It</p>
                }
            </div>
        </div>
    </>
  )
}
