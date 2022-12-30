import React, { useState, useEffect } from 'react'
import { WiAlien } from "react-icons/wi";
import { Link } from 'react-scroll/modules';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'
import { useTheme } from 'next-themes';    

export const Navbar = () => {
    const [nav,setNav] = useState(false);
    const [mounted,setMounted] = useState(false);
    
    useEffect(()=>{
        setMounted(true)
    },[]);
    
    const handleNav = () => {
        setNav(!nav);
    }

    const {systemTheme,theme,setTheme} = useTheme();

    const renderThemeChanger = () => {
        if(!mounted) return null;

        const currentTheme = theme === 'system' ? systemTheme : theme;
        if(currentTheme === 'dark') {
            return (
                <button className='p-1 rounded-md shadow-xl ring-2 ring-[#483d8b]' onClick={ () => setTheme('light') }>
                    <HiOutlineMoon className='w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-[#483d8b]' />
                </button>    
            )
        }
        else {
            return (
                <button className='p-1 rounded-md shadow-xl ring-2 ring-[#f48037]' onClick={ () => setTheme('dark') }>
                    <HiOutlineSun className='w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-[#f48037]' />
                </button>
            )
        }
    }

  return (
    <div className='w-full h-16 bg-gradient-to-r from-[#5651e5] to-[#a65fec]'>
        <div className='flex justify-between items-center w-full h-full px-2 pt-2 md:px-6 md:pt-4 lg:px-16 lg:pt-6'>
            
            {/* logo */}
            <div className='text-[#5C30bd]'>
                <WiAlien size={100} className='p-2 md:p-1'/>
            </div>
                
            {/* Dark Mode Switcher */}
            {renderThemeChanger()}

            {/* Navigation */}
            <div>
                <ul className='hidden md:flex md:p-2 lg:py-4 lg:px-4'>
                    <Link activeClass='active' to='hobbies' spy={true} smooth={true} offset={0} duration={600}>
                        <li className='text-md p-3 lg:p-6 text-white dark:text-slate-800  uppercase'>Hobbies</li>
                    </Link>
                    <Link activeClass='active' to='projects' spy={true} smooth={true} offset={0} duration={600}>
                        <li className='text-md p-3 lg:p-6 text-white dark:text-slate-800  uppercase'>Projects</li>
                    </Link>
                    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={0} duration={600}>
                        <li className='text-md p-3 lg:p-6 text-white dark:text-slate-800  uppercase'>Skills</li>
                    </Link>
                    <Link activeClass='active' to='contact' spy={true} smooth={true} offset={0} duration={600}>
                        <li className='text-md p-3 lg:p-6 text-white dark:text-slate-800  uppercase'>Contact</li>
                    </Link>
                </ul>
                <div className='md:hidden mr-5 text-[#1f2937]' onClick={handleNav}>
                    <AiOutlineMenu size={25} />
                </div>
            </div>
        </div>

        {/* Mobile Menu */}

        {/* 1st style mobile nav */}
        <div className={nav ? 'md:hidden fixed z-[100] left-0 top-0 w-full min-h-screen bg-slate-800/60' : ''}>
            <div className={
                nav ? 'fixed left-0 top-0 w-[80%] z-[100] h-screen bg-[#ecf0f3] py-5 px-6 ease-in duration-500'
                    : 'fixed left-[-100%] z-[100] h-screen top-0 py-5 px-6 ease-in duration-500'                
            }>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <div className='text-slate-800'>
                            <WiAlien size={100}/>
                        </div>   
                        <div className='rounded-full shadow-lg shadow-gray-400 p-1 cursor-pointer' onClick={handleNav}>
                            <AiOutlineClose size={25} className='text-slate-800'/>
                        </div>
                    </div>
                    <div className='border-b border-[#a65fec] my-4'>
                        <p className='w-[85%] md:w-[90%] py-4 text-slate-800'>Always eager to build something new</p>
                    </div>
                </div>
                <div className='py-4 flex-col'>
                    <ul> 
                        <Link activeClass='active' to='hobbies' spy={true} smooth={true} offset={0} duration={600}>
                            <li onClick={()=>setNav(false)} className='py-4 text-sm text-slate-800'>Hobbies</li>
                        </Link> 
                        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={0} duration={600}>
                            <li onClick={()=>setNav(false)} className='py-4 text-sm text-slate-800'>Projects</li>
                        </Link> 
                        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={0} duration={600}>
                            <li onClick={()=>setNav(false)} className='py-4 text-sm text-slate-800'>Skills</li>
                        </Link> 
                        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={0} duration={600}>
                            <li onClick={()=>setNav(false)} className='py-4 text-sm text-slate-800'>Contact</li>
                        </Link> 
                    </ul>
                    <div className='mt-10 pt-14'>
                        <p className='text-purple-700 text-center'>&copy; Copyright 2022 htoohtet</p>
                    </div>
                </div>
            </div>
        </div>

        {/* 2nd style mobile nav */}
        
        
    </div>
  )
}
