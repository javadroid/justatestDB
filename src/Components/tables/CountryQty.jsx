import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import countryImg from "../../assets/flags/Croatia.svg"
import { useEffect, useState } from 'react';
import axios from 'axios';

const CountryQty = () => {

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
    <div className="m-4 mt-10 rounded-t-2xl shadow-xl bg-color-bg_light px-7 py-4 lg:mx-0">
        <div>
          <h1 className="md:text-xl font-extrabold ">1. Select Country</h1>
          <div className="flex w-full items-center space-x-1 border-b border-blue-300 mb-4 text-color-primary">
            <MagnifyingGlassIcon className="h-6 w-6" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent py-1 text-sm md:text-lg font-medium italic placeholder:text-color-primary outline-none"
            />
          </div>
          <ul className={`roll pt-2 width-full height-10 overflow-hidden scrollbar-thin scrollbar-thumb-color-bg_primary-500 max-h-96 overflow-y-auto`}>
            {data.map((country, index) => (
              <li key={index} className="p-2 flex justify-between text-xs items-center md:text-lg">
                <div className="flex items-center space-x-2">
                  <Image className="h-6 w-6" src={countryImg} alt="country" />
                  <span>{country.country_name.length > maxNameLength ? `${country.country_name.substring(0, maxNameLength)}...` : country.country_name}</span>
                </div>
                <span className="text-color-text_light lg:text-sm">{country.id}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 pt-4 text-lg font-normal text-color-text_light">
            Available Countries- 128
          </p>
        </div>
      </div>
  )
}

export default CountryQty
