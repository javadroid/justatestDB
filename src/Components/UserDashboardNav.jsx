import { useEffect, useState } from "react";
import { PowerIcon, UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Logo from "../assets/BlueLogo.png";
import { Icon } from "@iconify/react";
import { CreditCardIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import axios from "axios";

const UserDashboardNav = () => {
  var instance = axios.create({
    validateStatus: function (status) {
      return status >= 200 && status < 405; // default
    },
  });

  useEffect(() => {
    if (!sessionStorage.getItem("id")) {
      return;
    }
    const getBalance = async () => {
      const response = await Promise.all([
        instance.get("http://161.35.218.95:3000/api/balance", {
          params: {
            userid: sessionStorage.getItem("id"),
          },
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
          },
        }),
        instance.get("http://161.35.218.95:3000/api/user", {
          params: {
            userid: sessionStorage.getItem("id"),
          },
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
          },
        }),
      ]);
      setBalance(response[0].data?.data[0]?.balance);
      setUserData(response[1].data?.user);
    };
    getBalance();
  }, []);

  const [balance, setBalance] = useState(0);
  const [userData, setUserData] = useState({});

  return (
    <nav className="top-0 z-50 flex h-16 w-full items-center justify-between bg-color-bg_primary-500 p-4 text-white lg:h-20">
      <div className="flex flex-grow items-center justify-end lg:justify-between">
        <div className="mr-5 hidden lg:flex lg:items-center lg:gap-24 lg:py-8">
          <Image src={Logo} alt="diginums" className="w-[12%] h-auto" />
          <button className="group flex items-center space-x-5 rounded-md border border-color-primary bg-white px-9 py-2 text-black">
            <div>
              <Icon
                icon="ion:paper-plane"
                className="h-8 w-8 text-color-primary transition-all duration-300 ease-in-out group-hover:rotate-[360deg]"
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
          <div className="w-full flex items-center justify-between gap-10 rounded-lg border border-color-accent bg-white px-5 py-1 lg:py-2">
            <div className="w-1/3">
              <p className="hidden text-xs text-black lg:inline-block">
                Balance:
              </p>
              <p className="font-bold text-black">{Number(balance).toFixed(2)}</p>
            </div>
            <button className="group w-2/3 relative flex items-center space-x-2 overflow-hidden rounded-2xl bg-color-accent px-2 py-2 text-black hover:text-white">
              <span className="absolute left-0 top-0 mt-16 h-20 w-full rounded-3xl bg-color-decor_orange transition-all duration-300 ease-in-out group-hover:-mt-4"></span>
              <div>
                <CreditCardIcon className="relative h-6 w-6 text-black group-hover:rotate-45 group-hover:text-color-white" />
              </div>
              {/* <div className=" flex flex-col items-start"> */}
                <p className="relative hidden text-sm font-bold lg:block">
                  Top up
                </p>
              {/* </div> */}
            </button>
          </div>
          <div className="group relative flex items-center justify-between">
            <UserCircleIcon className="h-8 w-8 text-color-primary" />
            <ChevronDownIcon className="h-6 w-6 text-color-primary" />
            <div className="absolute right-1/2 z-50 hidden pt-32 group-hover:block">
              <div className="mt-20 h-32 w-60 cursor-pointer bg-color-white p-4 text-color-black shadow-md">
                <p className="text-sm text-color-table_gray">
                  {userData.email}
                </p>
                <Link
                  href="/user/profile"
                  className="flex items-center justify-start rounded-xl px-4 py-2 hover:bg-color-bg_primary-500"
                >
                  <UserIcon width={16} className="mr-2 text-color-primary" />{" "}
                  Profile
                </Link>
                <Link
                  href="/"
                  className="flex items-center justify-start rounded-xl px-4 py-2 hover:bg-color-bg_primary-500"
                >
                  <PowerIcon width={16} className="mr-2 text-color-primary" />{" "}
                  Log Out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UserDashboardNav;
