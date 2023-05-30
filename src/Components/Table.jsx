import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import country from "../assets/flags/Croatia.svg"
import Image from "next/image";

const Table = () => {
  return (
    <div className="lg:flex lg:h-[631px] lg:justify-center lg:self-center lg:drop-shadow-xl xl:w-[1110px]">
      <div className="m-4 mt-10 rounded-t-2xl shadow-xl bg-color-bg_light px-7 py-4 lg:mx-0">
        <div>
          <h1 className="md:text-xl font-extrabold ">1. Select Country</h1>
          <div className="flex w-full items-center space-x-1 border-b border-blue-300 text-color-primary">
            <MagnifyingGlassIcon className="h-6 w-6" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent py-1 text-sm md:text-lg font-medium italic placeholder:text-color-primary outline-none"
            />
          </div>
          <ul className="pt-2 width-full height-10 overflow-y-scroll">
            <li className="p-2 flex justify-between text-xs items-center md:text-lg">
              <div className="flex items-center space-x-2">
                <Image className="h-6 w-6" src={country} alt="country" />
                <span>Croatia</span>
              </div>
              <span className="text-color-text_light">130034657 pcs</span>
            </li>
            <li className="p-2">📸 Fake Country</li>
            <li className="p-2">📸 Fake Country</li>
            <li className="p-2">📸 Fake Country</li>
            <li className="p-2">📸 Fake Country</li>
            <li className="p-2">📸 Fake Country</li>
            <li className="p-2">📸 Fake Country</li>
            <li className="p-2">📸 Fake Country</li>
            <li className="p-2">📸 Fake Country</li>
            <li className="p-2">📸 Fake Country</li>
          </ul>
          <p className="pt-4 text-lg font-normal text-color-text_light">
            Available Countries- 128
          </p>
        </div>
      </div>
      <div className="m-4 mt-10 bg-white px-2 md:px-7 py-2 drop-shadow-xl lg:mx-0 lg:w-full">
        <div className=" ">
          <div className="lg:flex lg:items-center lg:justify-between lg:gap-10">
            <h1 className="md:text-xl font-extrabold lg:w-full">
              2. Select a service
            </h1>
            <div className="flex w-full items-center space-x-1 border-b border-blue-300 text-color-primary lg:w-3/4">
              <MagnifyingGlassIcon className="h-6 w-6" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent py-1 text-sm md:text-lg font-medium italic placeholder:text-color-primary outline-none"
              />
            </div>
          </div>
          <ul className="pt-2">
            <li className="p-2">📸 Fake Country</li>
            <li className="p-2">📸 Fake Country</li>
            <li className="p-2">📸 Fake Country</li>
            <li className="p-2">📸 Fake Country</li>
            <li className="p-2">📸 Fake Country</li>
            <li className="p-2">📸 Fake Country</li>
            <li className="p-2">📸 Fake Country</li>
            <li className="p-2">📸 Fake Country</li>
            <li className="p-2">📸 Fake Country</li>
            <li className="p-2">📸 Fake Country</li>
          </ul>
          <div className="flex items-baseline md:space-x-10 lg:justify-between">
            <p className="pt-4 md:text-lg text-color-text_light">
              Available services- 2312
            </p>
            <Link href={"/user/receive-sms"} className="rounded-xl text-sm md:text-base bg-color-primary px-11 py-2 font-medium text-center text-white group relative overflow-hidden">
            <span className="absolute left-0 top-0 mt-16 h-20 w-full bg-color-primary_black transition-all duration-300 ease-in-out rounded-3xl group-hover:-mt-4"></span>
            <button className="relative">
              Receive SMS
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;