import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'
import star from '../assets/images/star.svg'
import ama from '../assets/socials/Amazon.svg'

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
          <div className="boxes flex flex-col space-y-4 h-50 overflow-hidden overflow-y-scroll md:space-x-2 md:grid md:grid-cols-2 md:flex-wrap md:space-y-0 md:gap-5 md:px-4">
            <div className="mb-1 bg-color-bg_primary-500 rounded-lg p-2">
              <div className="flex flex-col space-y-3 text-xs font-medium p-2 lg:space-y-0 lg:flex-row lg:justify-between">
                <div className="flex items-center lg:w-3/4">
                  <Image src={star} alt="" className="-mt-1" />
                  <Image src={ama} width={20} alt="" className="mx-1" />
                  <span>Amazon</span>
                  <span className="ml-auto text-[#aec3f9]">100</span>
                  <span className="mx-2 xl:mr-0">0.21$</span>
                </div>
                <button className="text-color-white bg-color-primary rounded-xl py-2 lg:p-2">Buy SMS</button>
              </div>
            </div>
            <div className="mb-1 bg-color-bg_primary-500 rounded-lg p-2">
              <div className="flex flex-col space-y-3 text-xs font-medium p-2 lg:space-y-0 lg:flex-row lg:justify-between">
                <div className="flex items-center lg:w-3/4">
                  <Image src={star} alt="" className="-mt-1" />
                  <Image src={ama} width={20} alt="" className="mx-1" />
                  <span>Amazon</span>
                  <span className="ml-auto text-[#aec3f9]">100</span>
                  <span className="mx-2 xl:mr-0">0.21$</span>
                </div>
                <button className="text-color-white bg-color-primary rounded-xl py-2 lg:p-2">Buy SMS</button>
              </div>
            </div>
            <div className="mb-1 bg-color-bg_primary-500 rounded-lg p-2">
              <div className="flex flex-col space-y-3 text-xs font-medium p-2 lg:space-y-0 lg:flex-row lg:justify-between">
                <div className="flex items-center lg:w-3/4">
                  <Image src={star} alt="" className="-mt-1" />
                  <Image src={ama} width={20} alt="" className="mx-1" />
                  <span>Amazon</span>
                  <span className="ml-auto text-[#aec3f9]">100</span>
                  <span className="mx-2 xl:mr-0">0.21$</span>
                </div>
                <button className="text-color-white bg-color-primary rounded-xl py-2 lg:p-2">Buy SMS</button>
              </div>
            </div>
            <div className="mb-1 bg-color-bg_primary-500 rounded-lg p-2">
              <div className="flex flex-col space-y-3 text-xs font-medium p-2 lg:space-y-0 lg:flex-row lg:justify-between">
                <div className="flex items-center lg:w-3/4">
                  <Image src={star} alt="" className="-mt-1" />
                  <Image src={ama} width={20} alt="" className="mx-1" />
                  <span>Amazon</span>
                  <span className="ml-auto text-[#aec3f9]">100</span>
                  <span className="mx-2 xl:mr-0">0.21$</span>
                </div>
                <button className="text-color-white bg-color-primary rounded-xl py-2 lg:p-2">Buy SMS</button>
              </div>
            </div>
          </div>
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
