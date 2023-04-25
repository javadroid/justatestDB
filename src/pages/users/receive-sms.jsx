import React from 'react'
import star from '../../assets/images/star.svg'
import rus from '../../assets/flags/Russia.svg'
import ama from '../../assets/socials/Amazon.svg'
import { ArrowsUpDownIcon, ChevronDownIcon, MagnifyingGlassIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';

const ReceiveSms = () => {
  return (
    <div className="bg-color-bg_light">
      <div className="px-2 pt-8">
        <div>
          <h2 className="font-bold text-center">New SMS</h2>
        </div>
        <div className="py-4 px-2">
          <div className="max-w-3xl mx-auto relative bg-color-white rounded-xl shadow-[0px_4px_15px_rgba(37,39,86,0.15)] pt-6">
            <div>
              <button className="absolute bg-color-primary text-color-white w-8 p-2 rounded-xl right-9 cursor-pointer">
                <ArrowsUpDownIcon />
              </button>
            </div>
            <div>
              <div className="flex flex-col justify-between">
                <div className="country py-4 flex flex-col">
                  <div className="flex flex-col justify-start items-start px-4">
                    <div className="flex justify-start items-center space-x-2">
                      <Image src={star} alt="" className="-mt-1" />
                      <h3 className="font-bold text-xs">1. Select country</h3>
                    </div>
                    <form className="flex items-center text-[#aec3f9] mb-4 space-x-2 border-b-2 border-[#aec3f9]">
                      <button>
                        <MagnifyingGlassIcon className="text-sm w-4" />
                      </button>
                      <input type="text" placeholder="Search by country" className="italic text-xs focus:outline-none" /> 
                    </form>
                  </div>
                  <div className="country body">
                    <div className="dashboard">
                      <div className="boxes flex flex-col justify-center px-2 space-y-2">
                        <div className="mb-1 flex bg-color-bg_primary-500 border border-color-primary rounded-lg">
                          <div className="flex items-center p-4 text-xs">
                            {/* <button> */}
                            <Image src={star} alt="" className="-mt-1" />
                            {/* </button> */}
                            <div className="flex items-center w-full mr-14">
                              <span>
                                <Image src={rus} alt="" width={20} className="mr-2" />
                              </span>
                              <span>Russian Fed...</span>
                            </div>
                            <span>381329</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex text-color-primary text-xs space-x-2 mt-4 ml-2">
                      <span>Available countries - 182</span>
                      {/* <span> */}
                        <ChevronDownIcon width={16} />
                      {/* </span> */}
                    </div>
                  </div>
                </div>
                <div className="service px-2 py-4 flex flex-col">
                  <div className="flex flex-col justify-start items-start px-4">
                    <div className="flex justify-start items-center space-x-2">
                      <Image src={star} alt="" className="-mt-1" />
                      <h3 className="font-bold text-xs">2. Select a service</h3>
                    </div>
                    <form className="flex items-center text-[#aec3f9] mb-4 space-x-2 border-b-2 border-[#aec3f9]">
                      <button>
                        <MagnifyingGlassIcon className="w-4" />
                      </button>
                      <input type="text" placeholder="Search by service" className="italic text-xs focus:outline-none" /> 
                    </form>
                  </div>
                  <div className="service body">
                    <div className="px-2">
                      <div className="flex flex-col space-y-2">
                        <div className="mb-1 bg-color-bg_primary-500 rounded-lg p-2">
                          <div className="flex flex-col space-y-3 text-xs font-medium p-2">
                            <div className="flex items-center">
                              <Image src={star} alt="" className="-mt-1" />
                              <Image src={ama} width={20} alt="" className="mx-1" />
                              <span>Amazon</span>
                              <span className="ml-auto text-[#aec3f9]">100</span>
                              <span className="ml-2">0.21$</span>
                            </div>
                            <button className="text-color-white bg-color-primary rounded-xl py-1">Buy SMS</button>
                          </div>
                        </div>  
                      </div>
                    </div>
                    <div className="flex text-color-primary text-xs space-x-2 mt-4 ml-2">
                      <span>Available services - 2312</span>
                      {/* <span> */}
                        <ChevronDownIcon width={16} />
                      {/* </span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReceiveSms;