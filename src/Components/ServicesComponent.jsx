import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'
import star from '../assets/images/star.svg'
import ama from '../assets/socials/Amazon.svg'
import Services2 from './services/Services2'

const ServicesComponent = () => {
  return (
    <div className="service px-2 py-4 flex flex-col">
      <div className="flex flex-col items-start px-4 md:flex-row md:items-center md:space-x-8">
        <div className="flex justify-start items-center space-x-2">
          <Image src={star} alt="" className="-mt-1" />
          <h3 className="font-extrabold text-xs sm:text-base">2. Select a service</h3>
        </div>
        <form className="flex items-center text-[#aec3f9] mb-4 space-x-2 border-b-2 border-[#aec3f9] px-2 pb-1 mt-2">
          <button>
            <MagnifyingGlassIcon className="w-5" />
          </button>
          <input type="text" placeholder="Search by service" className="italic text-xs focus:outline-none text-[#aec3f9] placeholder:text-[#aec3f9] px-4 sm:text-base" /> 
        </form>
      </div>
      <div className="service body">
        <div className="px-2">
          <Services2 />
        </div>
        <div className="flex text-color-primary text-xs space-x-2 mt-4 ml-8 md:text-lg">
          <span>Available services - 2312</span>
            <ChevronDownIcon width={16} />
        </div>
      </div>
    </div>
  )
}

export default ServicesComponent
