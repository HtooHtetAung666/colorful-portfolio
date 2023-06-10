import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
// import { SlideUp } from '../components/SlideUp'

export const Projects = () => {
  const projects = [
    {
      name: "Chat Room",
      description: "Web app built with vue js and firebase where you can chat with friends.",
      image: "/assets/projects/chatRoom.jpg",
      github: "https://github.com/HtooHtetAung666/chat-room",
      link: "",
    },
    {
      name: "Technical Blog",
      description: "Web app built with laravel and bootstrap where you can read blogs about information technology",
      image: "/assets/projects/technicalBlog.png",
      github: "https://github.com/HtooHtetAung666/technical-blog",
      link: "",
    }
  ]
  return (
    <div id='projects' className='w-full p-10 md:p-8 lg:p-16 md:mt-64 md:mb-24 lg:mt-0 lg:mb-0 lg:min-h-screen'>

      <h1 className='text-center tracking-widest text-slate-800 dark:text-[#ecf0f3] text-xl md:text-2xl lg:text-3xl font-bold'>Projects</h1>

      <div className='flex flex-col space-y-12 md:space-y-16 lg:space-y-28 mt-16 md:mt-24 lg:mt-30'> 
        {projects.map((project,idx)=>{
          return (
              <div key={idx}>
                {/* <SlideUp offset="-300px 0px -300px 0px"> */}
                  <div className='flex flex-col animate-slideUpCub animation-delay-2 md:flex-row md:space-x-12'>
                    <div className='md:w-1/2'>
                      <div className=''>
                        <Image
                          src={project.image}
                          width={800}
                          height={400}
                          className='rounded-xl shadow-xl hover:opacity-70'
                        />
                      </div>
                    </div>
                    <div className='mt-4 text-center md:text-left md:mt-0 md:w-1/2'>
                      <h1 className='text-lg md:text-xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#84329b] to-[#a65fec]'>{project.name}</h1>
                      <p className='mt-3 mb-3 md:mt-4 md:mb-4 lg:mt-6 text-sm md:text-md lg:text-lg leading-7 lg:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#84329b] to-[#a65fec]'>{project.description}</p>
                      <div className='flex flex-row justify-center md:justify-start align-bottom space-x-4'>
                        <Link href={project.github}>
                          <a target='_blank'>
                            <BsGithub
                              size={28}
                              className='hover:-translate-y-1 transition-transform cursor-pointer text-[#ff7e5f]'
                            />
                          </a>
                        </Link>
                        <Link href={project.link} target='_blank'>
                        <a target='_blank'>
                            <BsArrowUpRightSquare
                              size={28}
                              className='hover:-translate-y-1 transition-transform cursor-pointer text-[#ff7e5f]'
                            />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                {/* </SlideUp> */}
              </div>
          )
        })}
      </div>

    </div>
  )
}
