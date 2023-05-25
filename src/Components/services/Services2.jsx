import Image from 'next/image';
import { allServices } from './allServices';
import star from '../../assets/images/star.svg';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const Services2 = () => {
  const [showMore, setShowMore] = useState(false)
  const maxNameLength = 11;
  const toggleMore = () => {
    setShowMore(!showMore);
  }

  return (
    <div className="px-2">
      <div className={`boxes roll flex flex-col space-y-4 overflow-hidden scrollbar-thin scrollbar-thumb-color-bg_primary-500 md:grid md:grid-cols-2 md:flex-wrap md:space-y-0 md:gap-5 md:px-4 ${showMore ? 'max-h-80 overflow-y-auto' : 'h-40'}`}>
        {allServices.map((service, index) => (
          <div key={index} className="mb-1 bg-color-bg_primary-500 rounded-lg p-2">
          <div className="flex flex-col space-y-3 text-xs font-medium p-2 lg:space-y-0 lg:flex-row lg:justify-between lg:text-sm">
            <div className="flex items-center lg:w-3/4">
              <Image src={star} alt="" className="-mt-1" />
              <Image src={service.logo} width={20} alt="" className="mx-1" />
              <span className="lg:text-base">{service.name.length > maxNameLength ? `${service.name.substring(0, maxNameLength)}...` : service.name}</span>
              <span className="ml-auto text-[#aec3f9]">{service.quantity}</span>
              <span className="mx-2 xl:mr-0">{service.price}</span>
            </div>
            <button className="text-color-white bg-color-primary rounded-xl py-1 lg:px-1 xl:px-2 relative group overflow-hidden">
              <span className="absolute left-0 top-0 mt-16 h-20 w-full bg-color-primary_black transition-all duration-300 ease-in-out rounded-3xl group-hover:-mt-4"></span>
              <span className="relative">Buy SMS</span>
            </button>
          </div>
        </div>
        ))}
      </div>
      <div className="ml-8 mt-4 flex space-x-2 text-xs text-color-primary md:text-lg" onClick={toggleMore}>
        {showMore ? (
        <>
          <span>Collapse</span>
          <ChevronUpIcon width={16} />
        </>) : 
        (<>
          <span>Available services - 2312</span>
          <ChevronDownIcon width={16} />
        </>)}
        </div>
    </div>
  )
}

export default Services2;
