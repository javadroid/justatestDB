import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import UsersCountry from "./countries/country2";
import star from "../assets/images/star.svg";
import { useState } from "react";

const CountryServices = ({ title }) => {
  const [searchTerm, setSearchTerm] = useState("");

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
        <UsersCountry searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default CountryServices;
