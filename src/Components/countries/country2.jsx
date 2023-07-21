import Image from "next/image";
import star from "../../assets/images/star.svg";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const UsersCountry = ({ searchTerm }) => {
  const [showMore, setShowMore] = useState(false);

  const maxNameLength = 11;
  const [activeIndex, setActiveIndex] = useState(0);
  const url = process.env.NEXT_PUBLIC_BASE_URL + "/countries";
  const [data, setData] = useState([]);

  function handleClick(index) {
    setActiveIndex((prevIndex) => (prevIndex === index ? index : index));
  }
  
  const handleCountryClick = (countryName) => {
    localStorage.setItem("selectedCountry", countryName);
  };

  const toggleMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    localStorage.removeItem("selectedCountry")
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
        timeout: 30000,
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
          },
        });
        setData(response.data.countries);
    localStorage.setItem("defaultCountry", response.data.countries[0].country_name);

        // setDefaultCountry(localStorage.getItem("selectedCountry") || response.data.countries[0].country_name);
        // console.log(response.data.countries[0].country_name);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchData();
  }, [url]);

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
              onClick={() => {
                handleClick(index);
                handleCountryClick(country.country_name);
              }}
              className={
                activeIndex === index
                  ? "mb-1 flex cursor-pointer rounded-lg border border-color-primary bg-color-bg_primary-500"
                  : "mb-1 flex cursor-pointer rounded-lg bg-color-bg_primary-500"
              }
            >
              <div className="flex w-full items-center p-4 text-xs sm:justify-between md:text-base">
                <Image src={star} alt="" className="-mt-1" />
                <div className="flex w-full items-center">
                  <span>
                    <Image
                      src={`https://flagcdn.com/${country.country_code.toLowerCase()}.svg`}
                      width={20}
                      height={20}
                      alt={country.country_id}
                      className="mr-2"
                    />
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
            <span>Available countries - {data.length}</span>
            <ChevronDownIcon width={16} />
          </>
        )}
      </div>
    </div>
  );
};
export default UsersCountry;
