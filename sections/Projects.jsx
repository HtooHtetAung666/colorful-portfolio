import React from 'react'
import chatRoom from '../public/assets/projects/chatRoom.jpg'
import technicalBlog from '../public/assets/projects/technicalBlog.png'
import { ProjectItem } from '../components/ProjectItem'

export const Projects = () => {
  return (
    <div id='projects' className='w-full px-2 py-10 md:mt-64 md:mb-52 lg:mt-0 lg:mb-0 lg:min-h-screen'>
      <h1 className='text-center tracking-widest text-indigo-400 text-xl md:text-2xl lg:text-3xl'>Projects</h1>
      <div className='grid md:grid-cols-2 gap-10 mt-10 p-5 md:p-8 lg:p-20'>

        <ProjectItem title='chatRoom' backgroundImg={chatRoom} projectUrl='https://chat-room-bce12.web.app/' buildWith='Vue Js / Firebase'/>

        <ProjectItem title='blog' backgroundImg={technicalBlog} projectUrl='' buildWith='Laravel / Bootstrap'/>

      </div>
    </div>
  )
}
