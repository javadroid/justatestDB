import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import { Icon } from "@iconify/react";
import { CreditCardIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

const UserDashboardNav = () => {
  return (
    <nav className="top-0 z-50 flex h-16 w-full items-center justify-between bg-color-bg_primary-500 p-4 text-white lg:h-20">
      <div className="flex flex-grow items-center justify-end lg:justify-between">
        <div className="hidden lg:flex lg:items-center lg:gap-11">
          <Image src={Logo} alt="Logo Image" className="w-48  object-contain" />
          <button className="flex items-center space-x-5 rounded-md border-2 border-color-primary bg-white px-9 py-2 text-black">
            <div>
              <Icon
                icon="ion:paper-plane"
                className="h-8 w-8 text-color-primary"
              />
            </div>
            <div className="flex flex-col items-start">
              <p className="text-sm">Connect Telegram bot</p>
              <p className="text-sm opacity-40">
                Activate SMS without ever leaving your browser
              </p>
            </div>
          </button>
        </div>
        <div className=" flex items-center justify-evenly gap-x-9">
          <div className="flex items-center space-x-12 rounded-md bg-white px-5 py-1 lg:py-2">
            <div>
              <p className="hidden text-xs text-black lg:inline-block">
                Balance:
              </p>
              <p className="font-bold text-black">0$</p>
            </div>
            <button className="flex items-center space-x-2 rounded-md bg-yellow-400 px-4 py-2 text-black">
              <div>
                <CreditCardIcon className="h-6 w-6 text-black" />
              </div>
              <div className="flex flex-col items-start">
                <p className="hidden text-sm font-bold lg:inline-block">
                  Top up
                </p>
              </div>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <UserCircleIcon className="h-8 w-8 text-color-primary" />
            <ChevronDownIcon className="h-6 w-6 text-color-primary" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UserDashboardNav;
