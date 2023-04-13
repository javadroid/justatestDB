import Image from "next/image";
import React from "react";
import Landline from "@/assets/landline.png";
import Hand from "@/assets/hand.png";
import Robot from "@/assets/robot.png";
import Windows from "@/assets/windows.png";

const Advantages = () => {
  return (
    <div className="my-20 px-5">
      <h1 className="text-center text-2xl font-extrabold">
        Online SMS receive service for your convenience
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="grid">
          <Image
            src={Landline}
            alt="LandLine"
            className="h-52 w-48 justify-self-center object-contain"
          />
          <h2 className="mb-5 text-center text-xl font-bold">24/7 Support</h2>
          <p className="w-4/6  justify-self-center text-center text-base font-medium">
            Any questions? Our manager will help to understand!
          </p>
        </div>
        <div className="grid">
          <Image
            src={Robot}
            alt="LandLine"
            className="h-52 w-48 justify-self-center object-contain"
          />
          <h2 className="mb-5 text-center text-xl font-bold">24/7 Support</h2>
          <p className="w-4/6  justify-self-center text-center text-base font-medium">
            Any questions? Our manager will help to understand!
          </p>
        </div>
        <div className="grid">
          <Image
            src={Hand}
            alt="LandLine"
            className="h-52 w-48 justify-self-center object-contain"
          />
          <h2 className="mb-5 text-center text-xl font-bold">24/7 Support</h2>
          <p className="w-4/6  justify-self-center text-center text-base font-medium">
            Any questions? Our manager will help to understand!
          </p>
        </div>
        <div className="grid">
          <Image
            src={Windows}
            alt="LandLine"
            className="h-52 w-48 justify-self-center object-contain"
          />
          <h2 className="mb-5 text-center text-xl font-bold">24/7 Support</h2>
          <p className="w-4/6  justify-self-center text-center text-base font-medium">
            Any questions? Our manager will help to understand!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
