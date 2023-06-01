import UserDashboardLayout from "@/Components/UserDashboardLayout";
import { ArrowsUpDownIcon } from "@heroicons/react/24/solid";
import History from "@/Components/TransactionHistory";
import CountryServices from "@/Components/CountryServices";
import ServicesComponent from "@/Components/ServicesComponent";
import { useRouter } from "next/router";
import { useState } from "react";
// import Historiess from "@/Components/a-component-test/Table2";

const ReceiveSms = () => {
  const [ switched, setSwitched ] = useState(false);

  const switchComponent = () => {
    setSwitched(!switched);
  }
  const router = useRouter();
  return (
    <div className="w-full bg-color-bg_light h-auto">
      <div className="max-w-5xl pb-20 pt-8">
          <h2 className="text-center font-extrabold sm:text-lg md:pl-6 md:text-left md:text-xl">
            New SMS
          </h2>
        <div className="py-4 mx-3">
          <div className="relative mx-auto mb-8 max-w-3xl rounded-3xl bg-color-white pt-6 shadow-[0px_4px_15px_rgba(37,39,86,0.15)] md:px-6 lg:max-w-4xl">
            <div>
              <button className="absolute right-9 w-10 cursor-pointer rounded-xl bg-color-primary p-2 text-color-white hover:bg-color-primary_black"
              onClick={switchComponent}>
                <ArrowsUpDownIcon />
              </button>
            </div>
            <div>
              <div className="flex flex-col justify-between">
                {switched ?
                <>
                <ServicesComponent title="1. Select a service" />
                 <CountryServices title="2. Select country" />
                </> :
                <>
                <CountryServices title="1. Select country" />
                <ServicesComponent title="2. Select a service" />
                </>
                 
                 }
              </div>
            </div>
          </div>
        </div>
        <History />
        {/* <Historiess /> */}
        {/* <Historyy /> */}
      </div>
    </div>
  );
};

export default ReceiveSms;

ReceiveSms.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
