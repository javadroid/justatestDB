import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import service from "../../assets/socials/Amazon.svg"

const ServiceQty = () => {
  return (
<div className="m-4 mt-10 rounded-t-2xl shadow-xl bg-color-bg_light px-7 py-4 lg:mx-0">
        <div>
          <h1 className="md:text-xl font-extrabold ">1. Select service</h1>
          <div className="flex w-full items-center space-x-1 border-b border-blue-300 text-color-primary">
            <MagnifyingGlassIcon className="h-6 w-6" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent py-1 text-sm md:text-lg font-medium italic placeholder:text-color-primary outline-none"
            />
          </div>
          <ul className="pt-2 width-full height-10 overflow-y-scroll">
            <li className="p-2 flex justify-between text-xs items-center md:text-lg">
              <div className="flex items-center space-x-2">
                <Image className="h-6 w-6" src={service} alt="service" />
                <span>Amazon</span>
              </div>
              <span className="text-color-text_light lg:text-sm">234657 pcs</span>
            </li>
            <li className="p-2">📸 Fake service</li>
            <li className="p-2">📸 Fake service</li>
            <li className="p-2">📸 Fake service</li>
            <li className="p-2">📸 Fake service</li>
            <li className="p-2">📸 Fake service</li>
            <li className="p-2">📸 Fake service</li>
            <li className="p-2">📸 Fake service</li>
            <li className="p-2">📸 Fake service</li>
            <li className="p-2">📸 Fake service</li>
          </ul>
          <p className="pt-4 text-lg font-normal text-color-text_light">
            Available Services- 300
          </p>
        </div>
      </div>
  )
}

export default ServiceQty
