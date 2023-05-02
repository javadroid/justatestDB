import React from 'react'
import UserDashboardLayout from "@/Components/UserDashboardLayout";
import Country from '@/Components/countries/country';
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline';


const Rent = () => {
  return (
    <div className="bg-color-bg_light w-full h-screen">
      <div className="dashboard-instruction max-w-5xl m-auto p-4">
        <h1 className="font-extrabold text-center  my-4">Rent new number</h1>
        <div className="dashboard-box shadow-[0px_4px_15px_rgba(37,39,86,0.15)] bg-color-white rounded-3xl px-2  pb-10 lg:px-8">
          <form>
            <ol className="mt-8 flex flex-col justify-between space-y-8 md:mt-12 md:grid md:grid-cols-2 md:flex-wrap md:gap-5 md:space-x-8 md:space-y-0 lg:grid-cols-3 lg:space-x-1">
              {/* step 1 */}
              <li className="h-48 w-auto md:mb-11">
                <div className="mr-4">
                  {/* title */}
                  <div className="flex items-center justify-center p-4">
                    <span className="font-bold text-xl">
                     1. Select your country
                    </span>
                  </div>
                  {/* countries */}
                  <div className="body">
                    <div className="country mb-4">
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
              <li className="h-48 w-auto rounded-3xl px-4 md:mb-11">
                <div className="flex flex-col items-center px-6 ">
                  {/* Heading */}
                  <div>
                    <div className="flex items-center justify-center">
                      <h3 className="my-2 px-4 text-base font-bold md:text-xl">
                        2. Set rent duration
                      </h3>
                    </div>
                  </div>
                  {/* Time */}
                  <div>
                    <div className=" flex flex-col items-center justify-between">
                      <div className="mb-2 flex flex-row items-center justify-center space-x-4">
                        <button className="bg-color-bg_primary-500 w-32 rounded-lg py-2 text-sm active:text-color-primary active:border md:text-base">
                          Hour
                        </button>
                        <button className="bg-color-bg_primary-500  w-32 rounded-lg py-2 text-sm active:text-color-primary active:border md:text-base">
                          Day
                        </button>
                      </div>
                      <div className="mb-2 flex flex-row items-center justify-center space-x-4">
                        <button className="bg-color-bg_primary-500  w-32 rounded-lg py-2 text-sm active:text-color-primary active:border md:text-base">
                          Week
                        </button>
                        <button className="bg-color-bg_primary-500  w-32 rounded-lg py-2 text-sm active:text-color-primary active:border md:text-base">
                          Month
                        </button>
                      </div>
                      <div className="bg-color-bg_primary-500  rounded-lg active:text-color-primary active:border mb-4 max-w-[270px] h-10 w-[270px] py-1 flex justify-between font-bold">
                        <PlusCircleIcon className="text-color-primary" />
                        <p className="text-xl">1</p>
                        <MinusCircleIcon className="text-color-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* step 3 */}
              <li className="h-48 w-auto rounded-3xl px-4 md:col-span-2 lg:col-span-1">
                <div className="flex flex-col items-center p-6 ">
                  {/* Heading */}
                  <div className="md:self-start lg:self-center">
                    <div className="md:ml-8 lg:pl-0">
                      <h3 className="text-base font-bold md:text-xl">3. Rent a number</h3>
                    </div>
                  </div>
                  {/* others */}
                  <div className="flex flex-col items-center justify-center p-4">
                    <button className="bg-bgPrimar mb-4 w-48 rounded-sm py-2 text-base md:text-xl">
                      It&apos;ll cost $0.06
                    </button>
                    <button className="w-48  rounded-xl bg-color-primary py-2 text-base font-bold text-white md:text-xl">
                      Rent
                    </button>
                  </div>
                </div>
              </li>
            </ol>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Rent

Rent.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};