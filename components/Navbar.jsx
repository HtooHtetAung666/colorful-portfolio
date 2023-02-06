import React, { useState, useEffect } from 'react'
import { WiAlien } from "react-icons/wi";
import { Link } from 'react-scroll/modules';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useTheme } from 'next-themes';    

export const Navbar = () => {
    const [nav,setNav] = useState(false);
    const [mounted,setMounted] = useState(false);
    
    useEffect(()=>{
        setMounted(true)
    },[]);

    if(!mounted) {
        return null;
    }

    const {theme,setTheme} = useTheme();

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='w-full h-16 bg-gradient-to-r from-[#a65fec] to-violet-500 dark:from-slate-600 dark:to-slate-600'>
            <div className='flex justify-between items-center w-full h-full px-2 pt-4 md:px-4 lg:pl-5 lg:pr-16 lg:py-12'>
                
                {/* logo */}
                <div className='text-[#483d8b]'>
                    <WiAlien size={86} className='p-2 lg:p-1'/>
                </div>
                    
                {/* Navigation */}
                <div className='flex items-center space-x-5 mr-4 md:space-x-6 md:mr-5 lg:mr-0 lg:space-x-0'>
                    <ul className='hidden lg:flex items-center p-2 lg:py-4 lg:px-4'>
                        <Link activeClass='active' to='hobbies' spy={true} smooth={true} offset={0} duration={600}>
                            <li className='text-lg p-6 text-white hover:text-black'>Hobbies</li>
                        </Link>
                        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={0} duration={600}>
                            <li className='text-lg p-6 text-white hover:text-black'>Projects</li>
                        </Link>
                        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={0} duration={600}>
                            <li className='text-lg p-6 text-white hover:text-black'>Skills</li>
                        </Link>
                        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={0} duration={600}>
                            <li className='text-lg p-6 text-white hover:text-black'>Contact</li>
                        </Link>
                    </ul>

                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" onClick={()=>setTheme(theme === 'dark' ? 'light' : 'dark')}/>
                        <div className="w-11 h-6 bg-[#ecf0f3] ring-2 ring-white dark:ring-black rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-slate-800"></div>
                    </label>

                    <button className='rounded-sm lg:hidden' onClick={handleNav}>
                        <AiOutlineMenu size={25} className='text-white'/>
                    </button>
                        
                </div>
            </div>

            {/* Mobile Menu */}

            <div className={nav ? 'lg:hidden fixed z-[100] left-0 top-0 w-full min-h-screen bg-slate-800/60' : ''}>
                <div className={
                    nav ? 'fixed left-0 top-0 w-[80%] md:w-[60%] z-[100] min-h-screen bg-white py-5 px-6 ease-in duration-500'
                        : 'fixed left-[-100%] z-[100] min-h-screen top-0 py-5 px-6 ease-in duration-500'                
                }>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <div className='text-black'>
                                <WiAlien size={80}/>
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

        </div>
    )
}
