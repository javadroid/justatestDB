import React from 'react'
import { countries } from './countriesData'
import Image from 'next/image'

const Country = () => {
  return (
    <table className="ml-0 w-full pl-4">
      <tbody>
        {countries.map((country, index) =>(
        <tr key={index} className="bg-color-white hover:bg-color-bg_primary-500 active:bg-color-bg_primary-500 cursor-pointer  rounded-2xl">
          <td className="flex items-center justify-start px-6 py-1">
            <span>
              <Image
                src={country.flag}
                alt=""
                className="mr-2 flex w-8 items-center"
              />
            </span>
            <span className="text-sm font-medium md:text-base">{country.name}</span>
          </td>
          <td>
            <span className="text-base text-gray-500">
              {country.value}
            </span>
          </td>
        </tr>          
        ))}
      </tbody>
    </table>
  )
}

export default Country;