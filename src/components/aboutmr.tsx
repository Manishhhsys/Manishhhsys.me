import React from 'react'
import { GlowLine } from './ui/glow-line'
import Image from 'next/image'
import { Locate } from 'lucide-react'
import { SiExpress, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPrisma, SiReact, SiTypescript } from 'react-icons/si'

export const Aboutme=()=> {
  return (
    <div>
      <GlowLine></GlowLine>
      <div className='w-full h-full ml-7'>
        <div className='sm:text-lg font-medium pb-4 ' >
         About Me
        </div>
          <div className='mt-8 flex flex-col gap-4 md:flex-row w-[80%]'>
            <Image src={"/Generated Image August 31, 2025 - 8_22PM.jpeg"} alt="profile" width={250} height={250} className='rounded-lg'></Image>
            <div className='flex flex-col'>
              <h3 className='text-2xl font-bold mt-3'>Manish Kumar</h3>
              <p className='text-primary mt-4'>I'm a Full Stack Web Developer with a love for open source and problem-solving. My specialty is creating lean, impactful MVPs that lay the foundation for successful products</p>
              <p className='text-primary mt-8 font-bold'>Skills</p>
              <div className='flex flex-wrap gap-2'>
                  <SiReact size={24} className='mt-4'></SiReact>
                  <SiNextdotjs size={24} className='mt-4'></SiNextdotjs>
                  <SiJavascript size={24} className='mt-4'></SiJavascript>
                  <SiTypescript size={24} className='mt-4'></SiTypescript>
                  <SiPrisma size={24} className='mt-4'></SiPrisma>
                  <SiMongodb size={24} className='mt-4'></SiMongodb>
                  <SiExpress size={24} className='mt-4'></SiExpress>
                  <SiNodedotjs size={24} className='mt-4'></SiNodedotjs>
                  <SiPostgresql size={24} className='mt-4'></SiPostgresql>
              </div>
            </div>
          </div>
          
        </div>
    </div>
  )
}

