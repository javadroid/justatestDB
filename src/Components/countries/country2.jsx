import Image from "next/image";
import UK from "../../assets/flags/UK.svg";
import star from "../../assets/images/star.svg";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import axios from "axios";

const UsersCountry = ({ searchTerm }) => {
  const [showMore, setShowMore] = useState(false);
  const maxNameLength = 11;
  const [activeIndex, setActiveIndex] = useState(0);
  const url = process.env.NEXT_PUBLIC_BASE_URL + "/countries";
  const handleGetCountryName= (name) => {
    localStorage.setItem("countryName", name)
    console.log(countryName);
  }

  function handleClick(index) {
    setActiveIndex(index === activeIndex ? -1 : index);
  }

  const toggleMore = () => {
    setShowMore(!showMore);
  };

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
      return (<div>
        {error}
      </div>);
    }
  };

  useEffect(() => {
    fetchData();
  });

  if (data.length === 0) {
    return <div>Please wait...</div>;
  }

  return (
    <div className="dashboard mx-1">
      <div
        className={`boxes roll mx-1 flex flex-col justify-between space-y-2 overflow-hidden scrollbar-thin scrollbar-thumb-color-bg_primary-500 md:grid md:grid-cols-2 md:flex-wrap md:gap-5 md:space-y-0 md:px-4 ${
          showMore ? "max-h-80 overflow-y-auto" : "h-40"
        }`}
      >
        {data
          .filter((country) => {
            if (searchTerm == "") {
              return country;
            } else if (
              country.country_name
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            ) {
              return country;
            } else {
              return null;
            }
          })
          .map((country, index) => (
            <div
              key={country.id}
              onClick={() => {handleClick(index)
              handleGetCountryName(country.country_name)}}
              className={activeIndex === index ? "mb-1 flex rounded-lg border border-color-primary bg-color-bg_primary-500 cursor-pointer" : "mb-1 flex rounded-lg bg-color-bg_primary-500 cursor-pointer"}
            >
              <div className="flex w-full items-center p-4 text-xs sm:justify-between md:text-base">
                <Image src={star} alt="" className="-mt-1" />
                <div className="flex w-full items-center">
                  <span>
                    <Image src={UK} alt="" width={20} className="mr-2" />
                  </span>
                  <span>
                    {country.country_name.length > maxNameLength
                      ? `${country.country_name.substring(0, maxNameLength)}...`
                      : country.country_name}
                  </span>
                </div>
                <span className="text-[#aec3f9]">{country.apps_pieces}</span>
              </div>
            </div>
          ))}
        {searchTerm !== "" &&
          data.filter((country) => {
            return country.country_name
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
          }).length === 0 && (
            <div className="text-center">No results found</div>
          )}
      </div>
      <div
        className="ml-8 mt-4 flex space-x-2 text-xs text-color-primary md:text-lg"
        onClick={toggleMore}
      >
        {showMore ? (
          <>
            <span>Collapse</span>
            <ChevronUpIcon width={16} />
          </>
        ) : (
          <>
            <span>Available countries - 182</span>
            <ChevronDownIcon width={16} />
          </>
        )}
      </div>
    </div>
  );
};
export default UsersCountry;
