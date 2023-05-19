import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import Main from "@/assets/main.png";
import Link from "@/assets/link.png";

const Connection = () => {
  return (
    <section className="bg-gradient-to-b from-[#0d41d5] to-[#0187FF] py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center px-5 lg:flex-row lg:items-center">
          <div className="basis-1/3">
            <Image
              src={Main}
              alt="Main Image"
              className=""
            />
          </div>
          <div className="text-white basis-2/3">
            <h1 className="mb-10 mt-2 w-full text-center text-4xl font-extrabold lg:text-left">
              Solutions for professionals
            </h1>
            <p className="text-base lg:text-left lg:text-2xl">
              Newsems provides anonymity tools not only for ordinary users, but
              also for professionals who need to register their accounts in bulk
              and access blocked resources.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="text-white mx-auto md:flex md:items-center md:justify-evenly lg:gap-10 lg:w-3/4 lg:justify-center">
            <div className="hidden md:flex md:justify-end">
              <Image
                src={Link}
                alt="Link"
              />
            </div>
            <div className="lg:basis-1/2">
              <h1 className="text-center text-xl font-extrabold lg:text-left lg:text-2xl">
                Connect via API
              </h1>
              <p className="my-5 px-2 lg:px-0 lg:text-2xl">
                Receive SMS verification in bulk and automate your work
              </p>
              <button className="flex w-[80%] md:w-3/5 mx-auto lg:mx-0 items-center justify-between rounded-lg border border-white px-2 py-3 lg:border-none group">
                <span className="text-lg font-bold lg:text-xl">Read More...</span>
                <span className="relative right-5 -top-3 lg:right-0">
                  <ChevronRightIcon className="h-6 w-6 absolute group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connection;
