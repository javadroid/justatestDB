import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import Main from "@/assets/main.png";
import Link from "@/assets/link.png";

const Connection = () => {
  return (
    <section className="bg-gradient-to-r from-sky-400 to-blue-500 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center px-5 lg:flex-row lg:items-start">
          <div>
            <Image
              src={Main}
              alt="Main Image"
              className="h-80 w-80 object-contain lg:w-96"
            />
          </div>
          <div className="text-white md:flex md:flex-col">
            <h1 className="mb-10 mt-2 w-full text-center text-4xl font-extrabold">
              Solutions for professionals
            </h1>
            <p className="self-center text-base md:w-1/2">
              SMS-MAN provides anonymity tools not only for ordinary users, but
              also for professionals who need to register their accounts in bulk
              and access blocked resources.
            </p>
            <div className="my-20 md:flex md:items-center md:justify-evenly lg:justify-center lg:gap-10">
              <div className="hidden md:flex">
                <Image
                  src={Link}
                  alt="Link"
                  className="h-24 w-24 object-contain"
                />
              </div>
              <div>
                <h1 className="text-center text-xl font-bold">
                  Connect via API
                </h1>
                <p className="my-5 w-3/5">
                  Receive SMS verification in bulk and automate your work
                </p>
                <button className="flex w-full items-center justify-between rounded-lg border border-white px-2 py-3">
                  <span className="text-lg font-bold">Read More...</span>{" "}
                  <ChevronRightIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connection;
