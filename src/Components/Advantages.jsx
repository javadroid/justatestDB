import Image from "next/image";
import React from "react";
import Landline from "@/assets/landline.png";
import Hand from "@/assets/hand.png";
import Robot from "@/assets/robot.png";
import Windows from "@/assets/windows.png";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const Advantages = () => {
  return (
    <div className="py-20 px-5 bg-color-bg_light">
      <h1 className="text-center text-2xl font-extrabold">
        Online SMS receive service for your convenience
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center">
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
          <Link href={"/contact"} className="flex items-center justify-center font-extrabold space-x-5">
            Ask a Question <span>
              <ChevronRightIcon width={20} className="" />
            </span>
          </Link>
        </div>
        <div className="grid">
          <Image
            src={Robot}
            alt="LandLine"
            className="h-52 w-48 justify-self-center object-contain"
          />
          <h2 className="mb-5 text-center text-xl font-bold">Telegram bot</h2>
          <p className="w-4/6  justify-self-center text-center text-base font-medium"> Receive SMS through the service directly in Telegram!
          </p>
        </div>
        <div className="grid">
          <Image
            src={Hand}
            alt="LandLine"
            className="h-52 w-48 justify-self-center object-contain"
          />
          <h2 className="mb-5 text-center text-xl font-bold">Group Chat</h2>
          <p className="w-4/6  justify-self-center text-center text-base font-medium">
            We&apos;ve created a special Telegrem group chat for users
          </p>
        </div>
        <div className="grid">
          <Image
            src={Windows}
            alt="LandLine"
            className="h-52 w-48 justify-self-center object-contain"
          />
          <h2 className="mb-5 text-center text-xl font-bold">Get SMS on desktop!</h2>
          <p className="w-4/6  justify-self-center text-center text-base font-medium">
            We made a special solution for those who want to use PC version of Newsems!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
