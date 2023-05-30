import React from "react";
import { countries } from "./countriesData";
import Image from "next/image";

const Country = () => {
  return (
    <table className="ml-0 w-full pl-4">
      <tbody>
        {countries.map((country, index) => (
          <tr
            key={index}
            className="cursor-pointer rounded-2xl bg-color-white hover:bg-color-bg_primary-500  active:bg-color-bg_primary-500"
            onClick={() => console.log(country.name)}
          >
            <td className="flex w-full items-center justify-start py-1">
              <span>
                <Image
                  src={country.flag}
                  alt=""
                  className="ml-4 mr-2 flex w-8 items-center"
                />
              </span>
              <span className="text-xs font-medium md:text-base">
                {country.name}
              </span>
            </td>
            <td>
              <span className="text-xs text-gray-500">{country.value}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Country;
