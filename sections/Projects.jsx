import React from 'react'
import chatRoom from '../public/assets/projects/chatRoom.jpg'
import technicalBlog from '../public/assets/projects/technicalBlog.png'
import { ProjectItem } from '../components/ProjectItem'

//copycat
// import Link from "next/link"
// import Image from 'next/image'
// import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

export const Projects = () => {
  const projects = [
    {
      title: "chatRoom",
      image: "/assets/projects/chatRoom.jpg",
      description: "lorem",
      github: "https://github.com/HtooHtetAung666/chat-room",
      link: "https://chat-room-bce12.web.app/",
    },
    {
      title: "technicalBlog",
      image: "/assets/projects/technicalBlog.png",
      description: "lorem",
      github: "https://github.com/HtooHtetAung666/technical-blog",
      link: "",
    }
  ]
  return (
    <div id='projects' className='w-full px-2 py-10 md:mt-64 md:mb-52 lg:mt-0 lg:mb-0'>
      <h1 className='text-center tracking-widest text-slate-700 dark:text-[#ecf0f3] text-xl md:text-2xl lg:text-3xl font-bold'>Projects</h1>
      <div className='grid md:grid-cols-2 gap-10 mt-10 p-5 md:mt-24 md:px-8 lg:px-4 lg:mt-32 xl:px-20'>

        <ProjectItem title='chatRoom' backgroundImg={chatRoom} projectUrl='https://chat-room-bce12.web.app/' buildWith='Vue Js / Firebase'/>

        <ProjectItem title='blog' backgroundImg={technicalBlog} projectUrl='' buildWith='Laravel / Bootstrap'/>

      </div>

      {/* <div className='flex flex-col space-y-28'>
      {projects.map((project,idx)=>{
        return (
          <div key={idx}>
            <div className='flex flex-col'>
              <div className='md:w-1/2'>
                <Link href={project.link}>
                  <Image
                    src={project.image}
                    alt=""
                    width={1000}
                    height={1000}
                    className="rounded-xl shadow-xl hover:opacity-70"
                  />
                </Link>
              </div>
              <div className="mt-8 md:w-1/2">
                <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                  {project.description}
                </p>
                <div className="flex flex-row align-bottom space-x-4">
                  <Link href={project.github} target="_blank">
                    <BsGithub
                      size={30}
                      className="hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>
                  <Link href={project.link} target="_blank">
                    <BsArrowUpRightSquare
                      size={30}
                      className="hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
      })}
      </div> */}
    </div>
  )
}
