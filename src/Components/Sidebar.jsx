import React from "react";
import {
  EnvelopeIcon,
  DevicePhoneMobileIcon,
  CreditCardIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import {
  UserCircleIcon,
  HandThumbUpIcon,
  InformationCircleIcon,
  Cog6ToothIcon,
  PhoneArrowUpRightIcon,
} from "@heroicons/react/24/solid";

const Sidebar = () => {
  return (
    <aside className="h-screen bg-color-bg_primary-500 ">
      <div className="m-4 flex flex-col space-y-10 lg:m-12 lg:font-medium">
        <div className="flex items-center gap-1">
          <EnvelopeIcon className=" h-6 w-6 text-color-primary" />
          <p className="hidden lg:block">Receive SMS</p>
        </div>
        <div className="flex items-center gap-1">
          <DevicePhoneMobileIcon className="h-6 w-6  text-color-primary " />
          <p className="hidden lg:block"> Rent</p>
        </div>
        <div className="flex items-center gap-1">
          <UserCircleIcon className="h-6 w-6 text-color-primary" />
          <p className="hidden lg:block"> Profile</p>
        </div>
        <div className="flex items-center gap-1">
          <CreditCardIcon className="h-6 w-6 text-color-primary" />
          <p className="hidden lg:block">Top up balance</p>
        </div>
        <div className="flex items-center gap-1">
          <HandThumbUpIcon className="h-6 w-6 text-color-primary" />
          <p className="hidden lg:block">Earn money sms</p>
        </div>
        <div className="flex items-center gap-1">
          <InformationCircleIcon className="h-6 w-6 text-color-primary" />
          <p className="hidden lg:block"> Instructions</p>
        </div>
        <div className="flex items-center gap-1">
          <Cog6ToothIcon className="h-6 w-6 text-color-primary" />
          <p className="hidden lg:block">API connection</p>
        </div>
        <div className="flex items-center gap-1">
          <PhoneArrowUpRightIcon className="h-6 w-6 text-color-primary" />
          <p className="hidden lg:block"> Feedback</p>
        </div>
        <div className="flex flex-col  space-y-6">
          <div className="flex items-center gap-1">
            <InformationCircleIcon className="h-6 w-6 text-color-primary" />
            <p className="hidden lg:block"> Help</p>
          </div>
          <div className="flex items-center gap-1">
            <ArrowLeftOnRectangleIcon className="h-6 w-6 text-color-primary" />
            <p className="hidden lg:block"> Log out</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
