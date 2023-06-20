import React, { useEffect } from 'react'
import Link from "next/link"
import Image from 'next/image'
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Projects = () => {
  const projects = [
    {
      name: "Chat Room",
      description: "Web app built with vue js and firebase where you can chat with friends.",
      image: "/assets/projects/chatRoom.jpg",
      github: "https://github.com/HtooHtetAung666/chat-room",
      link: "https://chat-room-bce12.web.app/",
    },
    {
      name: "Technical Blog",
      description: "Web app built with laravel and bootstrap where you can read blogs about information technology",
      image: "/assets/projects/technicalBlog.png",
      github: "https://github.com/HtooHtetAung666/technical-blog",
      link: "",
    }
  ]

  useEffect(()=>{
    AOS.init();
  }, [])

  return (
    <div id='projects' className='w-full p-10 md:p-8 lg:p-16 md:mt-64 md:mb-24 lg:mt-0 lg:mb-0 lg:min-h-screen'>

      <h1 className='text-center tracking-widest text-slate-800 dark:text-[#ecf0f3] text-xl md:text-2xl lg:text-3xl font-bold'>Projects</h1>

      <div className='flex flex-col space-y-12 md:space-y-16 lg:space-y-28 mt-16 md:mt-24 lg:mt-30'> 
        {projects.map((project,idx)=>{
          return (
              <div key={idx}>
                <div className='flex flex-col md:flex-row md:space-x-12 lg:px-16'>
                      <div className='md:w-1/2' data-aos="flip-left" data-aos-duration="3000">
                        <div className='p-4 md:p-0'>
                          <Image
                            src={project.image}
                            width={800}
                            height={400}
                            className='rounded-xl shadow-xl hover:opacity-70'                          
                          />
                        </div>
                      </div>
                      <div 
                        className='mt-4 text-center md:text-left md:mt-0 md:w-1/2' 
                        data-aos="zoom-in-up"
                        data-aos-duration="3000"
                      >
                        <h1 className='text-lg md:text-xl lg:text-2xl 3xl:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#84329b] to-[#b372bd]'>{project.name}</h1>
                        <p className='mt-3 mb-3 md:mt-4 md:mb-4 lg:mt-6 text-sm md:text-md lg:text-lg leading-7 lg:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#84329b] to-[#b372bd]'>{project.description}</p>
                        <div className='flex flex-row justify-center md:justify-start align-bottom space-x-4'>
                          <Link href={project.github}>
                            <a target='_blank'>
                              <BsGithub
                                size={28}
                                className='hover:-translate-y-1 transition-transform cursor-pointer text-[#060606]'
                              />
                            </a>
                          </Link>
                          <Link href={project.link ? project.link : '404'} target='_blank'>
                          <a target='_blank'>
                              <BsArrowUpRightSquare
                                size={28}
                                className='hover:-translate-y-1 transition-transform cursor-pointer text-[#060606]'
                              />
                            </a>
                          </Link>
                        </div>
                      </div>
                </div>
              </div>
          )
        })}
      </div>

    </div>
  )
}
