import React from 'react'
import { FaReact, FaVuejs, FaLaravel } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";

export const Skills = () => {
  return (
    <div className='w-full h-full my-16 p-4 md:my-32 md:pt-32 lg:min-h-screen'>
        <div className='mx-auto flex flex-col justify-center'>

            <h1 className='text-center tracking-widest text-indigo-400 text-xl uppercase md:text-2xl lg:text-3xl'>Skills</h1>

            <ul className='mt-10 p-4 grid gap-14 md:grid-cols-4 md:mt-32 md:mx-16 lg:mx-32'>

                <li className='mx-auto space-y-4'>
                    <FaReact className='w-16 h-16 lg:w-20 lg:h-20 text-[#61DBFB] hover:scale-110 ease-in duration-300'/>
                    <p className='text-[#61DBFB] font-bold text-center md:text-lg lg:text-xl'>React</p>
                </li>

                <li className='mx-auto space-y-4'>
                    <FaVuejs className='w-16 h-16 lg:w-20 lg:h-20 text-[#41B883] hover:scale-110 ease-in duration-300'/>
                    <p className='text-[#41B883] font-bold text-center md:text-lg lg:text-xl'>Vue</p>
                </li>

                <li className='mx-auto space-y-4'>
                    <FaLaravel className='w-16 h-16 lg:w-20 lg:h-20 text-[#F05340] hover:scale-110 ease-in duration-300'/>
                    <p className='text-[#F05340] font-bold text-center md:text-lg lg:text-xl'>Laravel</p>
                </li>

                <li className='mx-auto space-y-4'>
                    <SiFlutter className='w-16 h-16 lg:w-20 lg:h-20 text-[#027DFD] hover:scale-110 ease-in duration-300'/>
                    <p className='text-[#027DFD] font-bold text-center md:text-lg lg:text-xl'>Flutter</p>
                </li>
            </ul>
        </div>
    </div>
  )
}
