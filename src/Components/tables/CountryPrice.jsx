import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import countryImg from "../../assets/flags/Croatia.svg"
import { useEffect, useState } from 'react'
import axios from 'axios'

const CountryPrice = () => {

  const url = "http://161.35.218.95:3000/api/countries";
  const maxNameLength = 11;
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
        },
      });
      setData(response.data.countries);
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="m-4 mt-10 bg-white px-2 md:px-7 py-2 drop-shadow-xl lg:mx-0 lg:w-full">
    <div className=" ">
      <div className="lg:flex lg:items-center lg:justify-between lg:gap-10">
        <h1 className="md:text-xl font-extrabold lg:w-full">
          2. Select a Country
        </h1>
        <div className="flex w-full items-center space-x-1 border-b border-blue-300 text-color-primary mb-4 lg:w-3/4">
          <MagnifyingGlassIcon className="h-6 w-6" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent py-1 text-sm md:text-lg font-medium italic placeholder:text-color-primary outline-none"
          />
        </div>
      </div>
      <ul className={`roll width-full height-10 overflow-hidden scrollbar-thin scrollbar-thumb-color-bg_primary-500 max-h-96 overflow-y-auto`}>
        {data.map((country, index) => (
          <li key={index} className="p-2 flex justify-between text-xs items-center md:text-lg">
          <div className="flex items-center space-x-2">
            <Image className="h-6 w-6" src={countryImg} alt="country" />
            <span>{country.country_name.length > maxNameLength ? `${country.country_name.substring(0, maxNameLength)}...` : country.country_name}</span>
          </div>
          <span className="lg:text-sm">{country.country_code}</span>
          </li>
        ))}
      </ul>
      <div className="w-full flex justify-between items-baseline">
        <p className="mb-4 mt-8 pt-4 text-color-text_light md:text-lg lg:mb-0">
          Available countries- 4312
        </p>
        <Link href={"/user/receive-sms"} className="rounded-xl text-sm md:text-base bg-color-primary px-11 py-2 font-medium text-center text-white group relative overflow-hidden">
        <span className="absolute left-0 top-0 mt-16 h-20 w-full bg-color-primary_black transition-all duration-300 ease-in-out rounded-3xl group-hover:-mt-4"></span>
        <button className="relative">
          Receive SMS
        </button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default CountryPrice
