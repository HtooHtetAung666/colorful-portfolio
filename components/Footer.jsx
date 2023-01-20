import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaGithub } from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className='mt-16 bg-slate-800 items-center justify-center md:py-2 lg:space-y-4'>
        <div className='items-center justify-center md:flex'>
            <p className='text-center text-md px-4 pt-4 pb-1 text-[#ecf0f3] tracking-wide md:pt-4 md:text-lg'>Reach me via</p>
            <div className='flex items-center justify-center p-1 space-x-5 md:pt-4 md:space-x-3'>
               <Link href='https://www.facebook.com/htoo.htet.771'>
                    <a target='_blank'>
                        <FaFacebook className='w-6 h-6 text-[#ecf0f3] cursor-pointer lg:w-8 lg:h-8'/>
                    </a>     
               </Link>
               <Link href='https://github.com/HtooHtetAung666'>
                    <a target='_blank'>
                        <FaGithub className='w-6 h-6 text-[#ecf0f3] cursor-pointer lg:w-8 lg:h-8'/>
                    </a>
               </Link> 
            </div>
        </div>
        <p className='text-center text-md text-white px-4 pt-3 pb-4 mt-2 md:pb-4 md:text-lg lg:pt-0'>
            Built with
            <Link href='https://nextjs.org/'>
                <a target='_blank' className='inline-block rotate-2 bg-[#ecf0f3]/25 px-2 pt-1 mx-2 hover:rotate-0'>
                    Next Js
                </a>
            </Link>
            and 
            <Link href='https://tailwindcss.com/'>
                <a target='_blank' className='inline-block -rotate-3 bg-[#ecf0f3]/25 px-2 pt-1 mx-2 hover:rotate-0'>
                    Tailwind Css
                </a>
            </Link>    
        </p>
    </div>
  )
}
