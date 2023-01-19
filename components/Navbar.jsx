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

    // useEffect(() => {
    //     if (nav) 
    //         document.body.style.overflow = 'hidden';
    //     else 
    //         document.body.style.overflow = 'visible';
    // }, [nav]);

    const {systemTheme,theme,setTheme} = useTheme();

    const renderThemeChanger = () => {
        if(!mounted) return null;

        const currentTheme = theme === 'system' ? systemTheme : theme;
        if(currentTheme === 'dark') {
            return (
                <div className='p-1' onClick={ () => setTheme('light') }>
                    <HiOutlineMoon className='w-5 h-5 lg:w-7 lg:h-7 text-[#483d8b] cursor-pointer' />
                </div>    
            )
        }
        else {
            return (
                <div className='p-1' onClick={ () => setTheme('dark') }>
                    <HiOutlineSun className='w-5 h-5 lg:w-7 lg:h-7 text-[#f48037] cursor-pointer' />
                </div>
            )
        }
    }

  return (
    <div className='w-full h-16 bg-gradient-to-r from-[#5651e5] to-[#a65fec]'>
        <div className='flex justify-between items-center w-full h-full px-2 pt-4 md:px-4 lg:pr-16 lg:pl-8 lg:py-12'>
            
            {/* logo */}
            <div className='text-[#5C30bd]'>
                <WiAlien size={100} className='hidden lg:block p-1'/>
                <WiAlien size={90} className='lg:hidden p-2 md:p-1 '/>
            </div>
                
            

            {/* Navigation */}
            <div className='flex items-center space-x-3 mr-4 md:space-x-6 md:mr-5 lg:mr-0 lg:space-x-0'>
                {renderThemeChanger()}
                <ul className='hidden lg:flex items-center p-2 lg:py-4 lg:px-4'>
                    <Link activeClass='active' to='hobbies' spy={true} smooth={true} offset={0} duration={600}>
                        <li className='text-md p-3 lg:p-6 text-white hover:text-black lg:text-lg'>Hobbies</li>
                    </Link>
                    <Link activeClass='active' to='projects' spy={true} smooth={true} offset={0} duration={600}>
                        <li className='text-md p-3 lg:p-6 text-white hover:text-black lg:text-lg'>Projects</li>
                    </Link>
                    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={0} duration={600}>
                        <li className='text-md p-3 lg:p-6 text-white hover:text-black lg:text-lg'>Skills</li>
                    </Link>
                    <Link activeClass='active' to='contact' spy={true} smooth={true} offset={0} duration={600}>
                        <li className='text-md p-3 lg:p-6 text-white hover:text-black lg:text-lg'>Contact</li>
                    </Link>
                </ul>
                <div className='flex items-center mr-6 p-2 lg:hidden'>
                    <AiOutlineMenu size={25} className='text-white' onClick={handleNav} />
                </div>
            </div>
        </div>

        {/* Mobile Menu */}

        {/* 1st style mobile nav */}
        <div className={nav ? 'lg:hidden fixed z-[100] left-0 top-0 w-full min-h-screen bg-slate-800/60' : ''}>
            <div className={
                nav ? 'fixed left-0 top-0 w-[80%] md:w-[60%] z-[100] min-h-screen bg-white py-5 px-6 ease-in duration-500'
                    : 'fixed left-[-100%] z-[100] min-h-screen top-0 py-5 px-6 ease-in duration-500'                
            }>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <div className='text-black'>
                            <WiAlien size={85}/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-1 cursor-pointer' onClick={handleNav}>
                            <AiOutlineClose size={25} className='text-black'/>
                        </div>
                    </div>
                    <div className='border-b border-[#a65fec] my-4'>
                        <p className='w-[85%] md:w-[90%] py-4 text-black'>Always eager to build something new</p>
                    </div>
                </div>
                <div className='py-4 flex-col'>
                    <ul> 
                        <Link activeClass='active' to='hobbies' spy={true} smooth={true} offset={0} duration={600}>
                            <li onClick={()=>setNav(false)} className='py-4 text-sm text-black'>Hobbies</li>
                        </Link> 
                        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={0} duration={600}>
                            <li onClick={()=>setNav(false)} className='py-4 text-sm text-black'>Projects</li>
                        </Link> 
                        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={0} duration={600}>
                            <li onClick={()=>setNav(false)} className='py-4 text-sm text-black'>Skills</li>
                        </Link> 
                        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={0} duration={600}>
                            <li onClick={()=>setNav(false)} className='py-4 text-sm text-black'>Contact</li>
                        </Link> 
                    </ul>
                    <div className='mt-10'>
                        <p className='text-purple-700 text-center'>&copy; Copyright 2022 htoohtet</p>
                    </div>
                </div>
            </div>
        </div>

        {/* 2nd style mobile nav */}
        
        
    </div>
  )
}
