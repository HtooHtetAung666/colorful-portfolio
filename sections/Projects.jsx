import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import chatBot from '../public/assets/projects/chatBot.jpg'
import { ProjectItem } from '../components/ProjectItem'

export const Projects = () => {
  return (
    <div id='projects' className='w-full px-2 py-10 md:mt-64 lg:mt-0 lg:min-h-screen'>
      <h1 className='text-center tracking-widest dark:text-indigo-400 text-[#8cadd3] text-xl uppercase md:text-2xl lg:text-3xl'>Projects</h1>
      <div className='grid md:grid-cols-2 gap-8 mt-10 p-2 lg:p-20'>

        <ProjectItem title='chatbot' backgroundImg={chatBot} projectUrl='/chatbot'/>

        <ProjectItem title='blog' backgroundImg={chatBot} projectUrl='/blog'/>

      </div>
    </div>
  )
}
