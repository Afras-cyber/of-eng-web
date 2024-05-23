import Image from 'next/image'
import React from 'react'

function Section3() {
  return (
    <div>
      <div className='grid grid-row-1 sm:grid-cols-2 grid-flow-row'>
        <div>
            <Image width={1000} height={1000} alt="project mangement" src="/ProjectMangement.jpg" className='hidden sm:flex h-[100%]'/>
        </div>
        <div className='flex w-full px-6 lg:px-10 flex-col py-8 lg:py-14'>
            <h1 className='font-subtitle font-bold text-2xl lg:text-4xl mb-3'>Projektmanagement</h1>
            <p className='md:text-sm lg:text-lg'>{`Durchführung sämtlicher Koordinierungs- und Steuerungsleistungen zur Durchführung von Altlastenerkundung und -sanierung sowie Rückbau- und Flächenrecyclingmaßnahmen von ehemaligen Militärliegenschaften, Industriebrachen oder innerstädtischen Freiflächen im Rahmen städtebaulicher Entwicklungsmaßnahmen`}</p>
            <button className='w-fit px-10 py-3 bg-primary text-white rounded animate-pulse mt-3'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Section3 
