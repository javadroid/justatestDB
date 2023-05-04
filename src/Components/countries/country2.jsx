import Image from "next/image"
import { countries } from "./countriesData"
import star from "../../assets/images/star.svg"

const UsersCountry = () => {
  return (
    <div className="boxes flex flex-col justify-between px-2 space-y-2 md:grid md:grid-cols-2 md:flex-wrap md:space-y-0 md:gap-5 md:px-4">
      {countries.map((country, index) => (
        <div key={index} className="mb-1 flex bg-color-bg_primary-500 border border-color-primary rounded-lg">
         <div className="flex items-center p-4 text-xs sm:justify-between w-full md:text-base">
            <Image src={star} alt="" className="-mt-1" />
            <div className="flex items-center w-full">
              <span>
                <Image src={country.flag} alt="" width={20} className="mr-2" />
              </span>
              <span>{country.name}</span>
            </div>
            <span className="text-[#aec3f9]">{country.value}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default UsersCountry
