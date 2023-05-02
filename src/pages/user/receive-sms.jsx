import React from 'react'
import UserDashboardLayout from "@/Components/UserDashboardLayout";
import { ArrowsUpDownIcon } from '@heroicons/react/24/solid';
import History from '@/Components/History';
import CountryServices from '@/Components/CountryServices';
import ServicesComponent from '@/Components/ServicesComponent';

const ReceiveSms = () => {
  return (
    <div className="bg-color-bg_light w-full">
      <div className="px-2 pt-8 pb-20 w-full">
        <div>
          <h2 className="font-extrabold text-center sm:text-lg md:text-xl md:text-left md:pl-6">New SMS</h2>
        </div>
        <div className="py-4 px-2">
          <div className="max-w-3xl mx-auto relative bg-color-white rounded-3xl shadow-[0px_4px_15px_rgba(37,39,86,0.15)] pt-6 mb-8  md:px-6 lg:max-w-4xl">
            <div>
              <button className="absolute bg-color-primary text-color-white w-10 p-2 rounded-xl right-9 cursor-pointer">
                <ArrowsUpDownIcon />
              </button>
            </div>
            <div>
              <div className="flex flex-col justify-between">
                <CountryServices />
                <ServicesComponent />
              </div>
            </div>
          </div>
        </div>
        <History />
      </div>
    </div>
  )
}

export default ReceiveSms;

ReceiveSms.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};