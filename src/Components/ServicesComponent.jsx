import {
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import star from "../assets/images/star.svg";
import Services2 from "./services/Services2";

const ServicesComponent = ({title}) => {
  return (
    <div className="service flex flex-col px-2 py-4">
      <div className="flex flex-col items-start px-4 md:flex-row md:items-center md:space-x-8">
        <div className="flex items-center justify-start space-x-2">
          <Image src={star} alt="" className="-mt-1" />
          <h3 className="text-xs font-extrabold sm:text-base">
            {title}
          </h3>
        </div>
        <form className="mb-4 mt-2 flex items-center space-x-2 border-b-2 border-[#aec3f9] px-2 pb-1 text-[#aec3f9]">
          <button>
            <MagnifyingGlassIcon className="w-5" />
          </button>
          <input
            type="text"
            placeholder="Search by service"
            className="px-4 text-xs italic text-[#aec3f9] placeholder:text-[#aec3f9] focus:outline-none sm:text-base"
          />
        </form>
      </div>
      <div className="service body">
          <Services2 />
      </div>
    </div>
  );
};

export default ServicesComponent;
