import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import netflix from '../public/assets/projects/netflix.jpg'
import { ProjectItem } from './ProjectItem'

export const Projects = () => {
  return (
    <>
      <div className='w-full px-2 py-10 md:h-screen'>
        <h1 className='text-center tracking-widest text-[#a65fec] text-xl uppercase md:text-2xl lg:text-3xl'>Projects</h1>
        <div className='grid md:grid-cols-2 gap-8 mt-10 p-2 lg:p-20'>

          <ProjectItem title='netflix' backgroundImg={netflix} projectUrl='/property'/>

          <ProjectItem title='netflix' backgroundImg={netflix} projectUrl='/property'/>

        </div>
      </div>
    </>
  )
}
