import React, { useEffect, useState } from 'react'
import Link from "next/link"
import Image from 'next/image'
import { BsGithub, BsArrowUpRightSquare, BsThreeDotsVertical } from "react-icons/bs"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Projects = () => {
  let [projects] = useState({
    Web : [
      {
        id: 1,
        name: "Chat Room",
        description: "Web app built with vue js and firebase where you can chat with friends.",
        image: "/assets/projects/chatRoom.jpg",
        github: "https://github.com/HtooHtetAung666/chat-room",
        link: "https://chat-room-bce12.web.app/",
      },
      {
        id:2,
        name: "Technical Blog",
        description: "Web app built with laravel and bootstrap where you can read blogs about information technology",
        image: "/assets/projects/technicalBlog.png",
        github: "https://github.com/HtooHtetAung666/technical-blog",
        link: "",
      }
    ],
    Mobile : [
      {
        id: 1,
        name: "Not Yet xD",
        description: "Comming soon.",
        image: "/assets/projects/404.png",
        github: "",
        link: "",
      }
    ],
  })

  useEffect(()=>{
    AOS.init();
  }, [])

  return (
    <div id='projects' className='w-full p-10 md:p-8 lg:p-16 md:mt-64 md:mb-24 lg:mt-0 lg:mb-0 lg:min-h-screen'>

      <h1 className='text-center tracking-widest text-black dark:text-white text-xl md:text-2xl lg:text-3xl font-bold'>Projects</h1>

      <Tab.Group>
        <Tab.List className='w-full max-w-sm mx-auto lg:space-x-1 flex rounded-xl bg-[#060606]/20 p-1 mt-6 md:mt-10 lg:mt-14 mb-10 md:mb-14 lg:mb-16'>
          {Object.keys(projects).map((project) => (
            <Tab
              key={project}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-3 text-sm font-medium leading-5 text-[#060606] dark:text-[#dcf2ff]',
                  'text-sm md:text-md lg:text-lg',
                  'ring-[#a65fec] ring-opacity-60 ring-offset-2 ring-offset-[#a65fec] focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-[#feb47b] shadow'
                    : 'text-[#a65fec]/50 hover:bg-[#ff7e5f]/[0.12] hover:text-[#a65fec]'
                )
              }
            >
              {project}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {Object.values(projects).map((products, idx) => (
              <Tab.Panel
                key={idx}
              >
                <div className='flex flex-col mt-5 space-y-12 md:space-y-16 lg:space-y-28'>
                  {products.map((product, idx) => (
                    <div key={idx}>
                      <div className='flex flex-col lg:flex-row lg:space-x-12 lg:px-14'>
                            <div className='lg:w-1/2' data-aos="flip-left" data-aos-duration="3000">
                              <div className='md:px-20 md:py-0 lg:p-0'>
                                <Image
                                  src={product.image}
                                  width={800}
                                  height={400}
                                  className='rounded-xl shadow-xl hover:opacity-70'                          
                                />
                              </div>
                            </div>
                            <div 
                              className='mt-4 text-center lg:text-left lg:mt-0 lg:w-1/2' 
                              data-aos='zoom-in-up'
                              data-aos-duration='3000'
                            >

                              <h1 className='text-lg md:text-xl lg:text-2xl font-bold text-[#a65fec]'>{product.name}</h1>
                              <p className='mt-3 mb-3 md:mt-4 md:mb-4 lg:mt-6 text-sm md:text-md lg:text-lg leading-7 lg:mb-6 text-[#a65fec]'>{product.description}</p>

                              <div className='flex flex-row justify-center lg:justify-start align-bottom space-x-4'>
                                <Link href={product.github}>
                                  <a target='_blank'>
                                    <BsGithub 
                                      size={28}
                                      className='hover:-translate-y-1 transition-transform cursor-pointer dark:contrast-110 text-[#a65fec]'
                                    />
                                  </a>
                                </Link>
                                <Link href={product.link ? product.link : '404'} target='_blank'>
                                  <a target='_blank'>
                                    <BsArrowUpRightSquare
                                      size={28}
                                      className='hover:-translate-y-1 transition-transform cursor-pointer dark:contrast-110 text-[#a65fec]'
                                    />
                                  </a>
                                </Link>
                              </div>
                            </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>

    </div>
  )
}
