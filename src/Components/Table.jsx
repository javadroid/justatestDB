import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const Table = () => {
  return (
    <div className="lg:flex lg:h-[631px] lg:justify-center lg:self-center lg:drop-shadow-xl xl:w-[1110px]">
      <div className="m-4 mt-10 rounded-t-2xl bg-color-bg_light px-7 py-4 lg:mx-0">
        <div>
          <h1 className="text-xl font-extrabold ">1. Select Country</h1>
          <div className="flex w-full items-center space-x-1 border border-x-0 border-t-0 border-blue-300">
            <MagnifyingGlassIcon className="h-6 w-6" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent py-1 text-lg font-medium italic text-black outline-none"
            />
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
          <p className="pt-4 text-lg font-normal text-color-text_light">
            Available Countries- 128
          </p>
        </div>
      </div>
      <div className="m-4 mt-10 bg-white px-7 py-2 drop-shadow-xl lg:mx-0 lg:w-full">
        <div className=" ">
          <div className="lg:flex lg:items-center lg:justify-between lg:gap-10">
            <h1 className="text-xl font-extrabold lg:w-full">
              2. Select a service
            </h1>
            <div className="flex w-full items-center space-x-1 border border-x-0 border-t-0 border-blue-300 lg:w-3/4">
              <MagnifyingGlassIcon className="h-6 w-6" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent py-1 text-lg font-medium italic text-black outline-none"
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
          <div className="flex items-baseline space-x-10">
            <p className="pt-4 text-lg font-normal text-color-text_light">
              Available services- 2312
            </p>
            <Link href={"/login"} className="rounded-lg bg-color-primary px-11 py-2 font-medium text-center text-white">
            <button>
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
