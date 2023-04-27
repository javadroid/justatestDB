import React from 'react'
import Image from 'next/image';
import UserDashboardLayout from "@/Components/UserDashboardLayout";
import star from '../../assets/images/star.svg'
import rus from '../../assets/flags/Russia.svg'
import ama from '../../assets/socials/Amazon.svg'
import vib from '../../assets/socials/Viber.svg'
import { ArrowsUpDownIcon, ChevronDownIcon, ClipboardDocumentCheckIcon, MagnifyingGlassIcon} from '@heroicons/react/24/outline';

const ReceiveSms = () => {
  return (
    <div className="bg-color-bg_light w-full">
      <div className="px-2 pt-8 pb-20 w-full">
        <div>
          <h2 className="font-extrabold text-center sm:text-lg">New SMS</h2>
        </div>
        <div className="py-4 px-2">
          <div className="max-w-3xl mx-auto relative bg-color-white rounded-3xl shadow-[0px_4px_15px_rgba(37,39,86,0.15)] pt-6 mb-8  md:px-6 lg:max-w-4xl">
            <div>
              <button className="absolute bg-color-primary text-color-white w-8 p-2 rounded-xl right-9 cursor-pointer">
                <ArrowsUpDownIcon />
              </button>
            </div>
            <div>
              <div className="flex flex-col justify-between">
                <div className="country py-4 flex flex-col">
                  <div className="flex flex-col items-start px-4 md:flex-row md:items-center md:space-x-6">
                    <div className="flex justify-start items-center space-x-2">
                      <Image src={star} alt="" className="-mt-1" />
                      <h3 className="font-extrabold text-xs sm:text-base">1. Select country</h3>
                    </div>
                    <form className="flex items-center text-[#aec3f9] mb-4 space-x-2 border-b-2 border-[#aec3f9] mt-2">
                      <button>
                        <MagnifyingGlassIcon className="w-4" />
                      </button>
                      <input type="text" placeholder="Search by country" className="italic text-xs focus:outline-none sm:text-base" /> 
                    </form>
                  </div>
                  <div className="country body">
                    <div className="dashboard">
                      <div className="boxes flex flex-col justify-between px-2 space-y-2 md:grid md:grid-cols-2 md:flex-wrap md:space-y-0 md:gap-5 md:px-4">
                        <div className="mb-1 flex bg-color-bg_primary-500 border border-color-primary rounded-lg">
                          <div className="flex items-center p-4 text-xs sm:justify-between w-full">
                            <Image src={star} alt="" className="-mt-1" />
                            <div className="flex items-center w-full mr-14">
                              <span>
                                <Image src={rus} alt="" width={20} className="mr-2" />
                              </span>
                              <span>Russian Fed...</span>
                            </div>
                            <span>381329</span>
                          </div>
                        </div>                        
                        <div className="mb-1 flex bg-color-bg_primary-500 border border-color-primary rounded-lg">
                          <div className="flex items-center p-4 text-xs sm:justify-between w-full">
                            <Image src={star} alt="" className="-mt-1" />
                            <div className="flex items-center w-full mr-14">
                              <span>
                                <Image src={rus} alt="" width={20} className="mr-2" />
                              </span>
                              <span>Russian Fed...</span>
                            </div>
                            <span>381329</span>
                          </div>
                        </div>                    
                        <div className="mb-1 flex bg-color-bg_primary-500 border border-color-primary rounded-lg">
                          <div className="flex items-center p-4 text-xs sm:justify-between w-full">
                            <Image src={star} alt="" className="-mt-1" />
                            <div className="flex items-center w-full mr-14">
                              <span>
                                <Image src={rus} alt="" width={20} className="mr-2" />
                              </span>
                              <span>Russian Fed...</span>
                            </div>
                            <span>381329</span>
                          </div>
                        </div>                    
                        <div className="mb-1 flex bg-color-bg_primary-500 border border-color-primary rounded-lg">
                          <div className="flex items-center p-4 text-xs sm:justify-between w-full">
                            <Image src={star} alt="" className="-mt-1" />
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
                        <ChevronDownIcon width={16} />
                    </div>
                  </div>
                </div>
                <div className="service px-2 py-4 flex flex-col">
                <div className="flex flex-col items-start px-4 md:flex-row md:items-center md:space-x-6">
                    <div className="flex justify-start items-center space-x-2">
                      <Image src={star} alt="" className="-mt-1" />
                      <h3 className="font-extrabold text-xs sm:text-base">2. Select a service</h3>
                    </div>
                    <form className="flex items-center text-[#aec3f9] mb-4 space-x-2 border-b-2 border-[#aec3f9] mt-2">
                      <button>
                        <MagnifyingGlassIcon className="w-4" />
                      </button>
                      <input type="text" placeholder="Search by service" className="italic text-xs focus:outline-none sm:text-base" /> 
                    </form>
                  </div>
                  <div className="service body">
                    <div className="px-2">
                      <div className="boxes flex flex-col space-y-2 md:space-x-2 md:grid md:grid-cols-2 md:flex-wrap md:space-y-0 md:gap-5 md:px-4">
                        <div className="mb-1 bg-color-bg_primary-500 rounded-lg p-2">
                          <div className="flex flex-col space-y-3 text-xs font-medium p-2 lg:space-y-0 lg:flex-row lg:justify-between">
                            <div className="flex items-center lg:w-3/4">
                              <Image src={star} alt="" className="-mt-1" />
                              <Image src={ama} width={20} alt="" className="mx-1" />
                              <span>Amazon</span>
                              <span className="ml-auto text-[#aec3f9]">100</span>
                              <span className="ml-2">0.21$</span>
                            </div>
                            <button className="text-color-white bg-color-primary rounded-xl py-1 lg:p-2">Buy SMS</button>
                          </div>
                        </div>  
                        <div className="mb-1 bg-color-bg_primary-500 rounded-lg p-2">
                          <div className="flex flex-col space-y-3 text-xs font-medium p-2 lg:space-y-0 lg:flex-row lg:justify-between">
                            <div className="flex items-center lg:w-3/4">
                              <Image src={star} alt="" className="-mt-1" />
                              <Image src={ama} width={20} alt="" className="mx-1" />
                              <span>Amazon</span>
                              <span className="ml-auto text-[#aec3f9]">100</span>
                              <span className="ml-2">0.21$</span>
                            </div>
                            <button className="text-color-white bg-color-primary rounded-xl py-1 lg:p-2">Buy SMS</button>
                          </div>
                        </div>  
                        <div className="mb-1 bg-color-bg_primary-500 rounded-lg p-2">
                          <div className="flex flex-col space-y-3 text-xs font-medium p-2 lg:space-y-0 lg:flex-row lg:justify-between">
                            <div className="flex items-center lg:w-3/4">
                              <Image src={star} alt="" className="-mt-1" />
                              <Image src={ama} width={20} alt="" className="mx-1" />
                              <span>Amazon</span>
                              <span className="ml-auto text-[#aec3f9]">100</span>
                              <span className="ml-2">0.21$</span>
                            </div>
                            <button className="text-color-white bg-color-primary rounded-xl py-1 lg:p-2">Buy SMS</button>
                          </div>
                        </div>  
                        <div className="mb-1 bg-color-bg_primary-500 rounded-lg p-2">
                          <div className="flex flex-col space-y-3 text-xs font-medium p-2 lg:space-y-0 lg:flex-row lg:justify-between">
                            <div className="flex items-center lg:w-3/4">
                              <Image src={star} alt="" className="-mt-1" />
                              <Image src={ama} width={20} alt="" className="mx-1" />
                              <span>Amazon</span>
                              <span className="ml-auto text-[#aec3f9]">100</span>
                              <span className="ml-2">0.21$</span>
                            </div>
                            <button className="text-color-white bg-color-primary rounded-xl py-1 lg:p-2">Buy SMS</button>
                          </div>
                        </div> 
                      </div>
                    </div>
                    <div className="flex text-color-primary text-xs space-x-2 mt-4 ml-2">
                      <span>Available services - 2312</span>
                        <ChevronDownIcon width={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-center font-bold">History</h2>
        </div>
        <div className="px-2 pt-8">
          <div className="max-w-3xl mx-auto relative bg-color-white rounded-xl shadow-[0px_4px_15px_rgba(37,39,86,0.15)] pt-6 mb-8 lg:max-w-4xl">
            <div className="px-2">
              <div className="wrapper px-6 pb-10">
                <div className="table">
                  <div className="header-row">
                    <div className="th text-color-table_gray">
                    <p>Bought</p>
                    </div>
                    <div className="th text-color-table_gray">
                    <p>Service</p>
                    </div>
                    <div className="th text-color-table_gray">
                    <p>Country</p>
                    </div>
                    <div className="th text-color-table_gray">
                    <p>Phone</p>
                    </div>
                    <div className="th text-color-table_gray">
                    <p>Price</p>
                    </div>
                    <div className="th text-color-table_gray">
                    <p>Message</p>
                    </div>
                    </div>
                    <div className="table-body">
                      <div className="table-row drop-shadow-xl md:drop-shadow-none pb-4">
                        <div className="td bought md:py-2">
                            <h6 className="text-color-table_gray font-medium">Bought</h6>
                            <p>2025-07-15 12:23:48</p>
                        </div>
                        <div className="td service md:py-2">
                            <h6 className="text-color-table_gray font-medium">Service</h6>
                            <p className="flex">
                              <span><Image src={vib} alt="" className="mr-1" />
                                </span>Viber</p>
                        </div>
                        <div className="td country md:py-2">
                            <h6 className="text-color-table_gray font-medium">Country</h6>
                            <p className="flex">
                              <span>
                              <Image src={rus} alt="" width={20} className="mr-2" />
                              </span>Russia</p>
                        </div>
                        <div className="td phone md:py-2">
                            <h6 className="text-color-table_gray font-medium">Phone</h6>
                            <p className="flex">+134346088643<span>
                            <ClipboardDocumentCheckIcon width={20} className="text-color-primary ml-3" />
                              </span></p>
                        </div>
                        <div className="td price md:py-2">
                            <h6 className="text-color-table_gray font-medium">Price</h6>
                            <p>$0.19</p>
                        </div>
                        <div className="td message">
                            <h6 className="text-color-table_gray font-medium">Message</h6>
                            <p className="text-color-api-red bg-[rgba(255,67,130,.1)] py-2 rounded-md">SMS not recieved</p>
                        </div>
                      </div>
                      <div className="table-row drop-shadow-xl md:drop-shadow-none mb-4">
                        <div className="td bought md:py-2">
                            <h6 className="text-color-table_gray font-medium">Bought</h6>
                            <p>2025-07-15 12:23:48</p>
                        </div>
                        <div className="td service md:py-2">
                            <h6 className="text-color-table_gray font-medium">Service</h6>
                            <p className="flex">
                              <span><Image src={vib} alt="" className="mr-1" />
                                </span>Viber</p>
                        </div>
                        <div className="td country md:py-2">
                            <h6 className="text-color-table_gray font-medium">Country</h6>
                            <p className="flex">
                              <span>
                              <Image src={rus} alt="" width={20} className="mr-2" />
                              </span>Russia</p>
                        </div>
                        <div className="td phone md:py-2">
                            <h6 className="text-color-table_gray font-medium">Phone</h6>
                            <p className="flex">+134346088643<span>
                            <ClipboardDocumentCheckIcon width={20} className="text-color-primary ml-3" />
                              </span></p>
                        </div>
                        <div className="td price md:py-2">
                            <h6 className="text-color-table_gray font-medium">Price</h6>
                            <p>$0.19</p>
                        </div>
                        <div className="td message">
                            <h6 className="text-color-table_gray font-medium">Message</h6>
                            <p className="text-color-api-red bg-[rgba(255,67,130,.1)] py-2 rounded-md">SMS not recieved</p>
                        </div>
                      </div>
                      <div className="table-row drop-shadow-xl md:drop-shadow-none mb-4">
                        <div className="td bought md:py-2">
                            <h6 className="text-color-table_gray font-medium">Bought</h6>
                            <p>2025-07-15 12:23:48</p>
                        </div>
                        <div className="td service md:py-2">
                            <h6 className="text-color-table_gray font-medium">Service</h6>
                            <p className="flex">
                              <span><Image src={vib} alt="" className="mr-1" />
                                </span>Viber</p>
                        </div>
                        <div className="td country md:py-2">
                            <h6 className="text-color-table_gray font-medium">Country</h6>
                            <p className="flex">
                              <span>
                              <Image src={rus} alt="" width={20} className="mr-2" />
                              </span>Russia</p>
                        </div>
                        <div className="td phone md:py-2">
                            <h6 className="text-color-table_gray font-medium">Phone</h6>
                            <p className="flex">+134346088643<span>
                            <ClipboardDocumentCheckIcon width={20} className="text-color-primary ml-3" />
                              </span></p>
                        </div>
                        <div className="td price md:py-2">
                            <h6 className="text-color-table_gray font-medium">Price</h6>
                            <p>$0.19</p>
                        </div>
                        <div className="td message">
                            <h6 className="text-color-table_gray font-medium">Message</h6>
                            <p className="text-color-api-red bg-[rgba(255,67,130,.1)] py-2 rounded-md">SMS not recieved</p>
                        </div>
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

ReceiveSms.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};