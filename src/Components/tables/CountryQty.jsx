import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const CountryQty = () => {
  const url = process.env.NEXT_PUBLIC_BASE_URL + "/countries";
  const [searchTerm, setSearchTerm] = useState("");
  const maxNameLength = 11;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
        timeout: 30000,
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
          },
        });
        setData(response.data.countries);
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
    <div className="m-4 mt-10 rounded-t-2xl bg-color-bg_light px-7 py-4 shadow-xl lg:mx-0">
      <div>
        <h1 className="font-extrabold md:text-xl ">1. Select Country</h1>
        <div className="mb-4 flex w-full items-center space-x-1 border-b border-blue-300 text-color-primary">
          <MagnifyingGlassIcon className="h-6 w-6" />
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent py-1 text-sm font-medium italic outline-none placeholder:text-color-primary md:text-lg"
          />
        </div>
        <ul
          className={`roll width-full height-10 max-h-96 overflow-hidden overflow-y-auto pt-2 scrollbar-thin scrollbar-thumb-color-bg_primary-500`}
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
              <li
                key={index}
                className="flex items-center justify-between p-2 text-xs md:text-lg"
              >
                <div className="flex items-center space-x-2">
                  <Image
                    className="h-6 w-6"
                    src={`https://flagcdn.com/${country.country_code.toLowerCase()}.svg`}
                    width={20}
                    height={20}
                    alt={country.country_id}
                  />
                  <span>
                    {country.country_name.length > maxNameLength
                      ? `${country.country_name.substring(0, maxNameLength)}...`
                      : country.country_name}
                  </span>
                </div>
                <span className="text-color-text_light lg:text-sm">
                  {country.apps_pieces}
                </span>
              </li>
            ))}
          {searchTerm !== "" &&
            data.filter((country) => {
              return country.country_name
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            }).length === 0 && (
              <li className="flex items-center justify-between p-2 text-xs md:text-lg">
                No results found
              </li>
            )}
        </ul>
        <p className="mt-4 pt-4 text-lg font-normal text-color-text_light">
          Available Countries- 128
        </p>
      </div>
    </div>
  );
};

export default CountryQty;
