import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import star from "../assets/images/star.svg";
import UsersCountry from "./countries/country2";
// import { useState } from "react";
// import axios from "axios";

const CountryServices = ({ title }) => {
  // const [input, setInput] = useState("");
  // const url = "http://161.35.218.95:3000/api/countries";
  // const fetchData = async (value) => {
  // await axios.get(url, {
  //       headers: {
  //         Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
  //       },
  //     })
  //     .then((response) => response.json())
  //     .then((json) => {
  //       const results = json.filter((country) => {
  //         return country && country.country_name && country.country_name.toLowerCase().includes(value)
  //       }); 
  //       console.log(results);
  //     });
  // }

  // const handleChange = (value) => {
  //   setInput(value);
  //   fetchData(value);
  // };

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
            // value={input}
            // onChange={(e) => handleChange(e.target.value)}
            className="text-xs italic text-[#aec3f9] placeholder:text-[#aec3f9] focus:outline-none sm:text-base"
          />
        </div>
      </div>
      <div className="country body">
        <UsersCountry />
      </div>
    </div>
  );
};

export default CountryServices;
