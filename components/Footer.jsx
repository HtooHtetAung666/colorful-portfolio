import React from 'react'
import Link from 'next/link'
import { AiFillHeart } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className='mt-16 rounded-tl-3xl lg:rounded-tl-full bg-gradient-to-r from-[#84329b] to-[#8b60ed] items-center justify-center py-2 lg:space-y-4'>
        <div className='flex items-center justify-center'>
            <p className='text-center text-md px-4 pt-4 pb-1 text-[#dcf2ff] tracking-wide md:pt-4 md:text-lg'>Code with</p>
            <div className='pt-4 pb-1'>
                <AiFillHeart className='w-6 h-6 md:w-7 md:h-7 text-[#fc8eac]'/>
            </div>
        </div>
        <p className='text-center text-md text-[#dcf2ff] px-4 pt-3 pb-4 mt-1 md:pb-4 md:text-lg lg:pt-0'>
            Built with
            <Link href='https://nextjs.org/'>
                <a target='_blank' className='inline-block rotate-2 bg-[#ecf0f3]/25 px-1 md:px-2 pt-1 mx-1 md:mx-2 hover:rotate-0 text-sm md:text-lg'>
                    Next Js
                </a>
            </Link>
            and 
            <Link href='https://tailwindcss.com/'>
                <a target='_blank' className='inline-block -rotate-3 bg-[#ecf0f3]/25 px-1 md:px-2 pt-1 mx-1 md:mx-2 hover:rotate-0 text-sm md:text-lg '>
                    Tailwind Css
                </a>
            </Link>    
        </p>
    </div>
  )
}
