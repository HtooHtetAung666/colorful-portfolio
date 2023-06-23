import React, { useState, useEffect } from 'react'
import { WiAlien } from "react-icons/wi";
import { Link } from 'react-scroll/modules';
import { FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from 'next-themes';    

export const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();
    
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='w-full h-16 bg-gradient-to-r from-[#84329b] to-[#8b60ed]'>
            <div className='flex justify-between items-center w-full h-full px-2 pt-4 md:px-4 lg:pl-5 lg:pr-16 lg:py-12'>
                
                {/* logo */}
                <div className='text-[#fc8eac]'>
                    <WiAlien size={86} className='p-2 lg:p-1'/>
                </div>
                    
                {/* Navigation */}
                <div className='flex items-center space-x-5 mr-3 md:space-x-6 md:mr-5 lg:mr-0 lg:space-x-0'>
                    <ul className='hidden lg:flex items-center p-2 lg:py-4 lg:px-4'>
                        <Link activeClass='active' to='hobbies' spy={true} smooth={true} offset={0} duration={600}>
                            <li className='text-lg p-5 text-white hover:text-black'>Hobbies</li>
                        </Link>
                        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={0} duration={600}>
                            <li className='text-lg p-5 text-white hover:text-black'>Projects</li>
                        </Link>
                        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={0} duration={600}>
                            <li className='text-lg p-5 text-white hover:text-black'>Frameworks</li>
                        </Link>
                        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={0} duration={600}>
                            <li className='text-lg p-5 text-white hover:text-black'>Contact</li>
                        </Link>
                        <a href="https://docs.google.com/document/d/1jEGOgE3USzJMOL-9ATZ3C52BVVrlJTszrTAXkYnbmfU/edit?usp=sharing" target='_blank' rel='noreferrer'>
                            <li className='text-lg p-5 text-white hover:text-black'>
                                Resume
                            </li>
                        </a>
                    </ul>

                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" value={theme} onClick={()=>setTheme(theme === 'dark' ? 'light' : 'dark')} defaultChecked={theme==='dark'}/>
                        <div className="w-11 h-6 bg-[#ecf0f3] ring-2 ring-[#fc8eac] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#ecf0f3] after:white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-800"></div>
                    </label>
                    
                    <button className='rounded-sm lg:hidden' onClick={handleNav}>
                        <FaBars size={24} className='text-black'/>
                    </button>
                    
                </div>
            </div>

            {/* Mobile Menu */}

            <div className={nav ? 'lg:hidden fixed z-[100] left-0 top-0 w-full min-h-screen bg-slate-700/60' : ''}>
                <div className={
                    nav ? 'fixed left-0 top-0 w-[80%] md:w-[70%] z-[100] min-h-screen bg-[#ecf0f3] py-5 px-6 ease-in duration-500'
                        : 'fixed left-[-100%] z-[100] min-h-screen top-0 py-5 px-6 ease-in duration-500'                
                }>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <div className='text-[#fc8eac]'>
                                <WiAlien size={76}/>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-1 cursor-pointer' onClick={handleNav}>
                                <FaTimes size={24} className='text-slate-800'/>
                            </div>
                        </div>
                        <div className='border-b border-[#fc8eac] my-4'>
                            <p className='w-[85%] md:w-[90%] py-4 text-slate-800'>Always eager to build something new</p>
                        </div>
                    </div>
                    <div className='py-4 flex-col text-slate-800'>
                        <ul> 
                            <Link activeClass='active' to='hobbies' spy={true} smooth={true} offset={0} duration={600}>
                                <li onClick={()=>setNav(false)} className='py-4 text-sm'>Hobbies</li>
                            </Link> 
                            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={0} duration={600}>
                                <li onClick={()=>setNav(false)} className='py-4 text-sm'>Projects</li>
                            </Link> 
                            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={0} duration={600}>
                                <li onClick={()=>setNav(false)} className='py-4 text-sm'>Skills</li>
                            </Link> 
                            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={0} duration={600}>
                                <li onClick={()=>setNav(false)} className='py-4 text-sm'>Contact</li>
                            </Link> 
                            <a href="https://docs.google.com/document/d/1jEGOgE3USzJMOL-9ATZ3C52BVVrlJTszrTAXkYnbmfU/edit?usp=sharing" target='_blank' rel='noreferrer'>
                                <li onClick={()=>setNav(false)} className='py-4 text-sm'>Resume</li>
                            </a>    
                        </ul>
                        <div className='mt-5'>
                            <p className='bg-clip-text text-transparent bg-gradient-to-r from-[#84329B] to-[#a65fec] text-center uppercase'>2022 &copy; | htoohtet</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
