import React from "react";
import { Bars3Icon, PowerIcon, UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import { Icon } from "@iconify/react";
import { CreditCardIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const UserDashboardNav = () => {
  return (
    <nav className="top-0 z-50 flex h-16 w-full items-center justify-between bg-color-bg_primary-500 p-4 text-white lg:h-20">
      <div className="flex flex-grow items-center justify-end lg:justify-between">
        <div className="hidden lg:flex lg:items-center lg:gap-11">
          <Image src={Logo} alt="Logo Image" className="w-48  object-contain" />
          <button className="flex items-center space-x-5 rounded-md border border-color-primary bg-white px-9 py-2 text-black group">
            <div>
              <Icon
                icon="ion:paper-plane"
                className="h-8 w-8 text-color-primary group-hover:rotate-[360deg] transition-all duration-300 ease-in-out"
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
          <div className="flex items-center space-x-12 rounded-lg border border-color-accent bg-white px-5 py-1 lg:py-2">
            <div>
              <p className="hidden text-xs text-black lg:inline-block">
                Balance:
              </p>
              <p className="font-bold text-black">0$</p>
            </div>
            <button className="flex items-center space-x-2 rounded-2xl bg-color-accent px-4 py-2 text-black hover:text-white relative group overflow-hidden">
              <span className="absolute left-0 top-0 mt-16 h-20 w-full bg-color-decor_orange transition-all duration-300 ease-in-out rounded-3xl group-hover:-mt-4"></span>
              <div>
                <CreditCardIcon className="h-6 w-6 text-black relative group-hover:rotate-45 group-hover:text-color-white" />
              </div>
              <div className="flex flex-col items-start relative">
                <p className="hidden text-sm font-bold lg:inline-block">
                  Top up
                </p>
              </div>
            </button>
          </div>
          <div className="flex items-center justify-between group relative">
            <UserCircleIcon className="h-8 w-8 text-color-primary" />
            <ChevronDownIcon className="h-6 w-6 text-color-primary" />
            <div className="absolute cursor-pointer top-1 right-1/2 bg-color-white text-color-black w-60 h-32 p-4 hidden group-hover:block">
              <p className="text-color-table_gray text-sm">aim4greatness@gmail.com</p>
              <Link href="/user/profile" className="flex items-center justify-start hover:bg-color-bg_primary-500 rounded-xl px-4 py-2"><UserIcon width={16} className="text-color-primary mr-2" /> Profile</Link>
              <Link href="/" className="flex items-center justify-start hover:bg-color-bg_primary-500 rounded-xl px-4 py-2"><PowerIcon width={16} className="text-color-primary mr-2" /> Log Out</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UserDashboardNav;
