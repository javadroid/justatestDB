import React from "react";
import Tablet from "@/assets/list-pic.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="my-8 px-5">
      <div className="flex items-center justify-between gap-12">
        <div className=" hidden lg:block">
          <Image
            src={Tablet}
            alt="Tablet Pic"
            className=""
          />
        </div>
        <div>
          <h2 className="w-3/5 text-2xl font-extrabold">
            Newsems - service for private registration at online resources
          </h2>
          <p className="mt-14 text-lg font-normal lg:w-3/5">
            We give you the opportunity to anonymously use the phone number
            online to receive SMS to register on sites and application.
          </p>
          <p className="mt-4 text-lg font-normal lg:w-1/2">
            At the same time, you can be sure that no one but you will have
            access to it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
