import Image from "next/image"
import UK from '../../assets/flags/UK.svg'
import star from "../../assets/images/star.svg"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"
import axios from "axios";


const url = "http://161.35.218.95:3000/api/countries";
const UsersCountry = () => {
  const [showMore, setShowMore] = useState(false)
  const maxNameLength = 11;
  const toggleMore = () => {
    setShowMore(!showMore);
  }

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

  if (data.length === 0) {
    return <div>Loading...</div>
  };

  return (
    <div className="dashboard mx-1">
      <div className={`boxes roll flex flex-col justify-between mx-1 space-y-2 overflow-hidden scrollbar-thin scrollbar-thumb-color-bg_primary-500 md:grid md:grid-cols-2 md:flex-wrap md:space-y-0 md:gap-5 md:px-4 ${showMore ? 'max-h-80 overflow-y-auto' : 'h-40'}`}>
        {data.map((country) => (
          <div key={country.id} className="mb-1 flex bg-color-bg_primary-500 border border-color-primary rounded-lg">
          <div className="flex items-center p-4 text-xs sm:justify-between w-full md:text-base">
              <Image src={star} alt="" className="-mt-1" />
              <div className="flex items-center w-full">
                <span>
                  <Image src={UK} alt="" width={20} className="mr-2" />
                </span>
                <span>{country.country_name.length > maxNameLength ? `${country.country_name.substring(0, maxNameLength)}...` : country.country_name}</span>
              </div>
              <span className="text-[#aec3f9]">{country.country_code}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex text-color-primary text-xs space-x-2 mt-4 ml-8 md:text-lg" onClick={toggleMore}>
        {showMore ? (
          <>
  <span>Collapse</span>
    <ChevronUpIcon width={16} />

          </>
        ) :
        (<>
        <span>Available countries - 182</span>
          <ChevronDownIcon width={16} />
        </>)}
      </div>

    </div>
  )
}

export default UsersCountry;
