import Image from "next/image";
import React from "react";
import Landline from "@/assets/247-support.png";
import Hand from "@/assets/group-chat.png";
import Robot from "@/assets/telegram-bot.png";
import Windows from "@/assets/desktop-sms.png";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const Advantages = () => {
  return (
    <div className="py-20 px-5 bg-color-bg_light">
      <h1 className="text-center text-2xl font-extrabold mb-10">
        Online SMS receive service for your convenience
      </h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center">
        <div className="grid space-y-4">
          <Image
            src={Landline}
            width={100}
            alt="LandLine"
            className=""
          />
          <h2 className="mb-5 text-center text-xl font-bold lg:text-left">24/7 Support</h2>
          <p className="w-4/6 justify-self-center text-center text-sm font-medium mb-1 lg:w-full lg:text-left">
            Any questions? Our manager will help to understand!
          </p>
          <Link href={"/contact"} className="flex justify-between items-center text-color-primary font-extrabold space-x-5 w-4/5">
            Ask a Question <span>
              <ChevronRightIcon width={20} />
            </span>
          </Link>
        </div>
        <div className="grid space-y-4">
          <Image
            src={Robot}
            width={100}
            alt="LandLine"
            // className="justify-self-center object-contain"
          />
          <h2 className="mb-5 text-center text-xl font-bold lg:text-left">Telegram bot</h2>
          <p className="w-4/6 justify-self-center text-center text-sm font-medium mb-1 lg:w-full lg:text-left"> Receive SMS through the service directly in Telegram!
          </p>
          <Link href={"/contact"} className="flex justify-between items-center text-color-primary_darken font-extrabold space-x-5 w-4/5">
            Connect <span>
              <ChevronRightIcon width={20} />
            </span>
          </Link>
        </div>
        <div className="grid space-y-4">
          <Image
            src={Hand}
            width={100}
            alt="LandLine"
            // className="h-52 w-48 justify-self-center object-contain"
          />
          <h2 className="mb-5 text-center text-xl font-bold lg:text-left">Group Chat</h2>
          <p className="w-4/6 justify-self-center text-center text-sm font-medium mb-1 lg:w-full lg:text-left">
            We&apos;ve created a special Telegrem group chat for users
          </p>
          <Link href={"/contact"} className="flex justify-between items-center text-color-primary font-extrabold space-x-5 w-4/5">
            Join <span>
              <ChevronRightIcon width={20} />
            </span>
          </Link>
        </div>
        <div className="grid space-y-4">
          <Image
            src={Windows}
            width={100}
            alt="LandLine"
            // className="h-52 w-48 justify-self-center object-contain"
          />
          <h2 className="mb-5 text-center text-xl font-bold lg:text-left">Get SMS on desktop!</h2>
          <p className="w-4/6 justify-self-center text-center text-sm font-medium mb-1 lg:w-full lg:text-left">
            We made a special solution for those who want to use PC version of Newsems!
          </p>
          <Link href={"/contact"} className="flex justify-between items-center text-color-primary_darken font-extrabold space-x-5 w-4/5">
            Download <span>
              <ChevronRightIcon width={20} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
