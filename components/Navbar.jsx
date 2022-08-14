import React, { useState} from 'react'
import { WiAlien } from "react-icons/wi";
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";    

export const Navbar = () => {
    const [nav,setNave] = useState(false);
    
    const handleNav = () => {
        setNave(!nav);
    }

  return (
    <div className='w-full h-28 bg-gradient-to-r from-purple-700 to-[#a65fec]'>
        <div className='flex justify-between items-center w-full h-full px-2 xl:px-16'>
            <div className='text-[#AB263A]'>
                <WiAlien size={100}/>
            </div>
            <div>
                <ul className='hidden md:flex'>
                    <Link href="/">
                        <li className='ml-10 text-sm text-[#ecf0f3] uppercase'>Home</li>
                    </Link>
                    <Link href="/">
                        <li className='ml-10 text-sm text-[#ecf0f3] uppercase'>Hobbies</li>
                    </Link>
                    <Link href="/">
                        <li className='ml-10 text-sm text-[#ecf0f3] uppercase'>Skills</li>
                    </Link>
                    <Link href="/">
                        <li className='ml-10 text-sm text-[#ecf0f3] uppercase'>Projects</li>
                    </Link>
                    <Link href="/">
                        <li className='ml-10 text-sm text-[#ecf0f3] uppercase'>Contact</li>
                    </Link>
                </ul>
                <div className='md:hidden mr-5 text-[#1f2937] cursor-pointer' onClick={handleNav}>
                    <AiOutlineMenu size={25} />
                </div>
            </div>
        </div>

        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/60' : ''}>
            <div className={
                nav ? 'fixed left-0 top-0 w-[70%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] py-5 px-6  ease-in duration-500'
                    : 'fixed left-[-100%] top-0 py-5 px-6  ease-in duration-500'                
            }>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <div>
                            <WiAlien size={90}/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-1 cursor-pointer' onClick={handleNav}>
                            <AiOutlineClose size={25} />
                        </div>
                    </div>
                    <div className='border-b border-[#a65fec] my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Always eager to build something new</p>
                    </div>
                </div>
                <div className='py-4 flex-col'>
                    <ul>
                        <Link href="/">
                            <li className='py-4 text-sm'>Home</li>
                        </Link> 
                        <Link href="/">
                            <li className='py-4 text-sm'>Hobbies</li>
                        </Link> 
                        <Link href="/">
                            <li className='py-4 text-sm'>Skills</li>
                        </Link> 
                        <Link href="/">
                            <li className='py-4 text-sm'>Projects</li>
                        </Link> 
                        <Link href="/">
                            <li className='py-4 text-sm'>Contact</li>
                        </Link> 
                    </ul>
                    <div className='pt-14'>
                        <p className='uppercase tracking-widest text-purple-700 text-center'>Find me on</p>
                        <div className='flex items-center justify-between px-8 py-6 w-full sm:w-[80%]'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in druation-300'>
                                <FaLinkedinIn />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in druation-300'>
                                <FaGithub />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in druation-300'>
                                <AiOutlineMail />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
