import React, { useState, useEffect } from 'react'
import { WiAlien } from "react-icons/wi";
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'
import { useTheme } from 'next-themes';    

export const Navbar = () => {
    const [nav,setNave] = useState(false);
    const [mounted,setMounted] = useState(false);
    
    useEffect(()=>{
        setMounted(true)
    },[]);
    
    const handleNav = () => {
        setNave(!nav);
    }

    const {systemTheme,theme,setTheme} = useTheme();

    const renderThemeChanger = () => {
        if(!mounted) return null;

        const currentTheme = theme === 'system' ? systemTheme : theme;
        if(currentTheme === 'dark') {
            return (
                <button className='p-1 rounded-md shadow-xl ring-2 ring-indigo-400' onClick={ () => setTheme('light') }>
                    <HiOutlineSun className='w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-indigo-400' />
                </button>    
            )
        }
        else {
            return (
                <button className='p-1 rounded-md shadow-xl ring-2 ring-orange-300' onClick={ () => setTheme('dark') }>
                    <HiOutlineMoon className='w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-orange-300' />
                </button>
            )
        }
    }

  return (
    <div className='w-full h-16 bg-gradient-to-r from-[#5651e5] to-[#a65fec]'>
        <div className='flex justify-between items-center w-full h-full px-2 lg:px-16'>
            
            {/* logo */}
            <div className='text-orange-300 dark:text-indigo-400 cursor-pointer'>
                <WiAlien size={100} className='p-1'/>
            </div>

            {/* Dark Mode Switcher */}
            {renderThemeChanger()}

            {/* Navigation */}
            <div>
                <ul className='hidden md:flex p-4'>
                    <Link href="/#herosection">
                        <li className='ml-10 text-md text-white dark:text-gray-700  uppercase'>Home</li>
                    </Link>
                    <Link href="/#hobbies">
                        <li className='ml-10 text-md text-white dark:text-gray-700  uppercase'>Hobbies</li>
                    </Link>
                    <Link href="/#skills">
                        <li className='ml-10 text-md text-white dark:text-gray-700  uppercase'>Skills</li>
                    </Link>
                    <Link href="/#projects">
                        <li className='ml-10 text-md text-white dark:text-gray-700  uppercase'>Projects</li>
                    </Link>
                    <Link href="/#contact">
                        <li className='ml-10 text-md text-white dark:text-gray-700  uppercase'>Contact</li>
                    </Link>
                </ul>
                <div className='md:hidden mr-5 text-[#1f2937] cursor-pointer' onClick={handleNav}>
                    <AiOutlineMenu size={25} />
                </div>
            </div>
        </div>

        {/* Mobile Menu */}
        <div className={nav ? 'md:hidden fixed z-[100] left-0 top-0 w-full h-screen bg-black/60' : ''}>
            <div className={
                nav ? 'fixed left-0 top-0 w-[80%] h-screen bg-[#ecf0f3] py-5 px-6 ease-in duration-500'
                    : 'fixed left-[-100%] top-0 py-5 px-6  ease-in duration-500'                
            }>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <div>
                            <WiAlien size={100}/>
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
