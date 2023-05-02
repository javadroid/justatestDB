import React from 'react'
import UserDashboardLayout from "@/Components/UserDashboardLayout";
import Country from '@/Components/countries/country';
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline';


const Rent = () => {
  return (
    <div className="bg-color-bg_light w-full h-full">
      <div className="dashboard-instruction max-w-5xl mx-auto px-4 pt-4 pb-8">
        <h1 className="font-extrabold text-center mb-4 md:text-left">Rent new number</h1>
        <div className="dashboard-box shadow-[0px_4px_15px_rgba(37,39,86,0.15)] bg-color-white rounded-3xl px-2 pb-10 lg:px-4">
          <form>
            <ol className="flex flex-col justify-between space-y-8 md:grid md:grid-cols-2 md:flex-wrap md:gap-5 md:space-y-0 lg:grid-cols-3 lg:space-x-1">
              {/* step 1 */}
              <li className="">
                <div className="mr-4">
                  {/* title */}
                  <div className="pl-4 py-6">
                    <span className="font-extrabold">
                     1. Select your country
                    </span>
                  </div>
                  {/* countries */}
                  <div className="body">
                    <div className="country mb-4 px-2">
                      <div className="roll scrollbar-thin scrollbar-thumb-color-decor_blue scrollbar-track-[#0187ff1a] h-32 w-full overflow-hidden overflow-y-scroll">
                        <div className="h-32 w-full pr-2">
                          <Country />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* step 2 */}
              <li className="px-4">
                <div className="flex flex-col">
                  {/* Heading */}
                  <div>
                    <div className="">
                      <h3 className="my-2 py-3 font-extrabold">
                        2. Set rent duration
                      </h3>
                    </div>
                  </div>
                  {/* Time */}
                  <div>
                    <div className=" flex flex-col justify-between">
                      <div className="mb-2 flex justify-evenly space-x-4 w-full">
                        <button className="bg-color-bg_primary-500 w-1/2 rounded-lg py-2 text-sm active:text-color-primary active:border md:text-base">
                          Hour
                        </button>
                        <button className="bg-color-bg_primary-500  w-1/2 rounded-lg py-2 text-sm active:text-color-primary active:border md:text-base">
                          Day
                        </button>
                      </div>
                      <div className="mb-2 flex justify-evenly space-x-4 w-full">
                        <button className="bg-color-bg_primary-500  w-1/2 rounded-lg py-2 text-sm active:text-color-primary active:border md:text-base">
                          Week
                        </button>
                        <button className="bg-color-bg_primary-500  w-1/2 rounded-lg py-2 text-sm active:text-color-primary active:border md:text-base">
                          Month
                        </button>
                      </div>
                      <div className="bg-color-bg_primary-500  rounded-lg active:text-color-primary active:border mb-4 h-10 w-full p-1 flex justify-between font-bold">
                        <MinusCircleIcon className="text-color-primary" />
                        <p className="text-xl">1</p>
                        <PlusCircleIcon className="text-color-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* step 3 */}
              <li className="px-4 md:col-span-2 lg:col-span-1">
                <div className="flex flex-col items-center py-6 ">
                  {/* Heading */}
                  <div className="md:self-start lg:self-center">
                    <div className="lg:pl-0">
                      <h3 className="font-extrabold">3. Rent a number</h3>
                    </div>
                  </div>
                  {/* others */}
                  <div className="flex flex-col items-center justify-center mt-4 w-full">
                    <button className="bg-color-bg_primary-500 mb-4 rounded-xl px-4 py-2 text-sm w-full md:text-base md:w-48 lg:w-full">
                      It will cost $0.06
                    </button>
                    <button className="px-12 rounded-xl bg-color-primary py-2 text-base font-bold text-white md:text-xl md:px-16 md:32 w-full md:w-48 lg:w-full">
                      Rent
                    </button>
                  </div>
                </div>
              </li>
            </ol>
          </form>
        </div>
        <div className="mt-8">
          <h1 className="font-extrabold text-center mb-4 md:text-left">My Numbers and SMS</h1>
          <p className="text-center">Nothing Found</p>
        </div>
      </div>
    </div>
  )
}

export default Rent

Rent.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};