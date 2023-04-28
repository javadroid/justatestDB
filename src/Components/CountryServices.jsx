import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'
import rus from '../assets/flags/Russia.svg'
import star from '../assets/images/star.svg'


const CountryServices = () => {
  return (
    <div className="country py-4 flex flex-col">
      <div className="flex flex-col items-start px-4 md:flex-row md:items-center md:space-x-8">
        <div className="flex justify-start items-center space-x-2">
          <Image src={star} alt="" className="-mt-1" />
          <h3 className="font-extrabold text-xs sm:text-base">1. Select country</h3>
        </div>
        <form className="flex items-center text-[#aec3f9] mb-4 space-x-2 border-b-2 border-[#aec3f9] px-2 pb-1 mt-2">
          <button>
            <MagnifyingGlassIcon className="w-5" />
          </button>
          <input type="text" placeholder="Search by country" className="italic text-xs focus:outline-none text-[#aec3f9] placeholder:text-[#aec3f9] px-4 sm:text-base" /> 
        </form>
      </div>
      <div className="country body">
        <div className="dashboard h-36 overflow-hidden ">
          <div className="boxes flex flex-col justify-between px-2 space-y-2 md:grid md:grid-cols-2 md:flex-wrap md:space-y-0 md:gap-5 md:px-4">
            <div className="mb-1 flex bg-color-bg_primary-500 border border-color-primary rounded-lg">
              <div className="flex items-center p-4 text-xs sm:justify-between w-full md:text-base">
                <Image src={star} alt="" className="-mt-1" />
                <div className="flex items-center w-full">
                  <span>
                    <Image src={rus} alt="" width={20} className="mr-2" />
                  </span>
                  <span>Russian Fed...</span>
                </div>
                <span className="text-[#aec3f9]">381329</span>
              </div>
            </div>                   
            <div className="mb-1 flex bg-color-bg_primary-500 border border-color-primary rounded-lg">
              <div className="flex items-center p-4 text-xs sm:justify-between w-full md:text-base">
                <Image src={star} alt="" className="-mt-1" />
                <div className="flex items-center w-full">
                  <span>
                    <Image src={rus} alt="" width={20} className="mr-2" />
                  </span>
                  <span>Russian Fed...</span>
                </div>
                <span className="text-[#aec3f9]">381329</span>
              </div>
            </div>                   
            <div className="mb-1 flex bg-color-bg_primary-500 border border-color-primary rounded-lg">
              <div className="flex items-center p-4 text-xs sm:justify-between w-full md:text-base">
                <Image src={star} alt="" className="-mt-1" />
                <div className="flex items-center w-full">
                  <span>
                    <Image src={rus} alt="" width={20} className="mr-2" />
                  </span>
                  <span>Russian Fed...</span>
                </div>
                <span className="text-[#aec3f9]">381329</span>
              </div>
            </div>                   
            <div className="mb-1 flex bg-color-bg_primary-500 border border-color-primary rounded-lg">
              <div className="flex items-center p-4 text-xs sm:justify-between w-full md:text-base">
                <Image src={star} alt="" className="-mt-1" />
                <div className="flex items-center w-full">
                  <span>
                    <Image src={rus} alt="" width={20} className="mr-2" />
                  </span>
                  <span>Russian Fed...</span>
                </div>
                <span className="text-[#aec3f9]">381329</span>
              </div>
            </div>                   
          </div>
        </div>
        <div className="flex text-color-primary text-xs space-x-2 mt-4 ml-8 md:text-lg">
          <span>Available countries - 182</span>
            <ChevronDownIcon width={16} />
        </div>
      </div>
    </div>
  )
}

export default CountryServices
