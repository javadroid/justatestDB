import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import UsersCountry from "./countries/country2";
import UK from "../assets/flags/UK.svg";
import star from "../assets/images/star.svg";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import axios from "axios";

 export const countryName = "Nigeria and some texts";
const CountryServices = ({ title }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const url = process.env.NEXT_PUBLIC_BASE_URL + "/countries";
  const [showMore, setShowMore] = useState(false);
  const maxNameLength = 11;
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
      return <div>{error}</div>;
    }
  };

  useEffect(() => {
    fetchData();
  });

  if (data.length === 0) {
    return <div>Please wait...</div>;
  }

  return (
    <div className="country flex flex-col py-4">
      <div className="flex flex-col items-start md:flex-row md:items-center md:space-x-8">
        <div className="ml-1 flex items-center justify-start space-x-2 md:ml-0">
          <Image src={star} alt="" className="-mt-1" />
          <h3 className="text-xs font-extrabold sm:text-base">{title}</h3>
        </div>
        <div className="mb-4 ml-2 mt-2 flex items-center space-x-2 border-b-2 border-[#aec3f9] pb-1 text-[#aec3f9] md:ml-0">
          <MagnifyingGlassIcon className="w-5" />
          <input
            type="text"
            placeholder="Search by country"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-xs italic text-[#aec3f9] placeholder:text-[#aec3f9] focus:outline-none sm:text-base"
          />
        </div>
      </div>
      <div className="country body">
        <UsersCountry  searchTerm={searchTerm} />
        {/* <div className="dashboard mx-1">
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
              .map((country) => (
                <div
                  key={country.id}
                  className="mb-1 flex rounded-lg border border-color-primary bg-color-bg_primary-500"
                >
                  <div className="flex w-full items-center p-4 text-xs sm:justify-between md:text-base">
                    <Image src={star} alt="" className="-mt-1" />
                    <div className="flex w-full items-center">
                      <span>
                        <Image src={UK} alt="" width={20} className="mr-2" />
                      </span>
                      <span>
                        {country.country_name.length > maxNameLength
                          ? `${country.country_name.substring(
                              0,
                              maxNameLength
                            )}...`
                          : country.country_name}
                      </span>
                    </div>
                    <span className="text-[#aec3f9]">
                      {country.apps_pieces}
                    </span>
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
        </div> */}
      </div>
    </div>
  );
};

export default CountryServices;
