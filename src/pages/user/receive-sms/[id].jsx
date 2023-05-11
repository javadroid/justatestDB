import React from "react";
import UserDashboardLayout from "@/Components/UserDashboardLayout";
import { ArrowsUpDownIcon } from "@heroicons/react/24/solid";
import History from "@/Components/History";
import CountryServices from "@/Components/CountryServices";
import ServicesComponent from "@/Components/ServicesComponent";
import { useRouter } from "next/router";
import Historyy from "@/Components/Historyy";

const ReceiveSms = () => {
  const router = useRouter();
  return (
    <div className="w-full bg-color-bg_light h-auto">
      <div className="w-full px-2 pb-20 pt-8">
        <div>
          <h2 className="text-center font-extrabold sm:text-lg md:pl-6 md:text-left md:text-xl">
            New SMS
          </h2>
        </div>
        <div className="px-2 py-4">
          <div className="relative mx-auto mb-8 max-w-3xl rounded-3xl bg-color-white pt-6 shadow-[0px_4px_15px_rgba(37,39,86,0.15)]  md:px-6 lg:max-w-4xl">
            <div>
              <button className="absolute right-9 w-10 cursor-pointer rounded-xl bg-color-primary p-2 text-color-white">
                <ArrowsUpDownIcon />
              </button>
            </div>
            <div>
              <div className="flex flex-col justify-between">
                <CountryServices />
                <ServicesComponent />
              </div>
            </div>
          </div>
        </div>
        <History />
        {/* <Historyy /> */}
      </div>
    </div>
  );
};

export default ReceiveSms;

ReceiveSms.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
