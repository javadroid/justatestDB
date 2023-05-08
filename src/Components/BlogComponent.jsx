import React from "react";
import Media from "@/assets/Media.png";
import { UserCircleIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Icon } from "@iconify/react";

const BlogComponent = () => {
  return (
    <div className="mt-10 pt-4 border-b border-gray-400/20 md:flex md:items-start md:gap-10">
      <div>
        <Image src={Media} alt="Media" className="w-50 h-50  object-contain" />
      </div>
      <div className="flex flex-grow flex-col px-4 md:justify-between">
        <h2 className="mb-5 text-xl font-medium">
          How to use Lazada App without a Phone Number
        </h2>
        <div className="mb-3 flex flex-wrap gap-3">
          <div className="flex items-center">
            <UserCircleIcon className="h-3 w-3" />
            <p className="text-xs">Vyacheslav</p>
          </div>
          <div className="flex items-center">
            <UserCircleIcon className="h-3 w-3" />
            <p className="text-xs">Vyacheslav</p>
          </div>
          <div className="flex items-center">
            <UserCircleIcon className="h-3 w-3" />
            <p className="text-xs">Vyacheslav</p>
          </div>
          <div className="flex items-center">
            <UserCircleIcon className="h-3 w-3" />
            <p className="text-xs">Vyacheslav</p>
          </div>
        </div>
        <p className="mb-5 text-justify lg:w-[400px]">
          The Lazada application is a top marketplace service in Southeast Asia.
          It offers outstanding capabilities for both the purchase and sale of
          goods. With 7…
        </p>
        <div className="flex flex-wrap gap-1">
          <button className="rounded-md bg-color-primary px-8 py-1 text-white">
            <Icon
              icon="simple-icons:facebook"
              className="h-4 w-4  transition duration-200 ease-in-out hover:opacity-75"
            />
          </button>
          <button className="rounded-md bg-color-primary px-8 py-1 text-white">
            <Icon
              icon="simple-icons:twitter"
              className="h-4 w-4  transition duration-200 ease-in-out hover:opacity-75"
            />
          </button>
          <button className="rounded-md bg-color-primary px-8 py-1 text-white">
            <Icon
              icon="simple-icons:instagram"
              className="h-4 w-4  transition duration-200 ease-in-out hover:opacity-75"
            />
          </button>
          <button className="rounded-md bg-color-primary px-8 py-1 text-white">
            <Icon
              icon="simple-icons:telegram"
              className="h-4 w-4  transition duration-200 ease-in-out hover:opacity-75"
            />
          </button>
          <button className="rounded-md bg-color-primary px-8 py-1 text-white">
            <Icon
              icon="simple-icons:reddit"
              className="h-4 w-4  transition duration-200 ease-in-out hover:opacity-75"
            />
          </button>
          <button className="rounded-md bg-color-primary px-8 py-1 text-white">
            <Icon
              icon="simple-icons:pinterest"
              className="h-4 w-4  transition duration-200 ease-in-out hover:opacity-75"
            />
          </button>
        </div>
        <div className="mb-7 mt-5 flex w-[140px] items-center space-x-2 border border-color-primary_darken px-3 py-2 text-color-primary_darken">
          <button>Read More</button>
          <ArrowRightIcon className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
