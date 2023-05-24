import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import star from '../assets/images/star.svg'
import UsersCountry from './countries/country2'


const CountryServices = ({title}) => {
  return (
    <div className="country py-4 flex flex-col">
      <div className="flex flex-col items-start px-4 md:flex-row md:items-center md:space-x-8">
        <div className="flex justify-start items-center space-x-2">
          <Image src={star} alt="" className="-mt-1" />
          <h3 className="font-extrabold text-xs sm:text-base">{title}</h3>
        </div>
        <form className="flex items-center text-[#aec3f9] mb-4 space-x-2 border-b-2 border-[#aec3f9] px-2 pb-1 mt-2">
          <button>
            <MagnifyingGlassIcon className="w-5" />
          </button>
          <input type="text" placeholder="Search by country" className="italic text-xs focus:outline-none text-[#aec3f9] placeholder:text-[#aec3f9] px-4 sm:text-base" /> 
        </form>
      </div>
      <div className="country body">
          <UsersCountry />
      </div>
    </div>
  )
}

export default CountryServices
