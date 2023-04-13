import Image from "next/image";
import React from "react";
import Mailbox from "@/assets/mailbox.png";
import {
  ClockIcon,
  EnvelopeIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import {
  ComputerDesktopIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/solid";

const PromoInformation = () => {
  return (
    <section className="bg-color-bg_primary-500 pt-4 md:pt-10">
      <div className="mx-auto max-w-7xl px-10">
        <div className="flex flex-col">
          <div className="lg:mb-10 lg:flex lg:items-center lg:gap-10">
            <Image
              src={Mailbox}
              alt="test"
              className="hidden h-[350px] w-[350px] lg:flex"
            />
            <div>
              <h1 className="mb-10 text-center text-2xl font-extrabold md:w-1/2 lg:w-4/5 lg:text-left">
                You can buy a disposable phone number or rent one for up to a
                month
              </h1>
              <div className="flex h-28 items-baseline justify-between border border-l-0 border-r-0 border-t-0 border-blue-300 lg:h-0 lg:border-0">
                <div className="border-r-3 flex h-full w-full border border-b-0 border-l-0 border-t-0 border-blue-300 px-1 md:justify-center lg:flex-col lg:items-center lg:border-0">
                  <p className="text-center text-base font-extrabold md:w-4/6 md:text-xl lg:text-left">
                    One-time number for sms
                    <br />
                  </p>
                  <p className="hidden lg:flex lg:text-start">
                    Receive a one-time SMS to a virtual number from the one
                    website or application chosen when ordering.
                  </p>
                  <InformationCircleIcon className="h-6 w-6 text-blue-500 lg:hidden" />
                </div>
                <div className="border-l-3 flex w-full items-center justify-center space-x-2 lg:h-[104px] lg:flex-col lg:items-center lg:justify-between">
                  <p className="text-center text-base font-extrabold md:text-xl">
                    Rent
                  </p>
                  <p className="hidden lg:flex lg:text-start">
                    Rent a phone number to receive an unlimited number of SMS
                    from any website or app.
                  </p>
                  <InformationCircleIcon className="h-5 w-5 text-blue-500 lg:hidden" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-3 lg:pb-5">
            <div className="mt-4 flex items-center justify-center space-x-1">
              <ClockIcon className="h-6 w-6 text-blue-500" />
              <h1 className="mb-1 text-lg font-bold text-blue-500">
                Rent Duration
              </h1>
            </div>
            <div className="flex h-full items-baseline justify-between border border-l-0 border-r-0 border-t-0 border-blue-300 lg:contents">
              <div className="border-r-3 flex h-full w-full justify-center border border-b-0 border-l-0 border-t-0 border-blue-300 px-1 lg:border-0">
                <p className="text-center text-base font-extrabold md:text-xl">
                  Up to 20 minutes
                </p>
              </div>
              <div className="border-l-3 flex w-full items-center justify-center space-x-2 ">
                <p className="text-center text-base font-extrabold md:text-xl">
                  up to 90 days
                </p>
              </div>
            </div>
          </div>
          <div className="lg:mb-5 lg:grid lg:grid-cols-3 lg:pb-5">
            <div className="mt-4 flex items-center justify-center space-x-1">
              <EnvelopeIcon className="h-6 w-6 text-blue-500" />
              <h1 className="mb-1 text-lg font-bold text-blue-500">
                You can receive SMS
              </h1>
            </div>
            <div className="flex h-full items-baseline justify-between border border-l-0 border-r-0 border-t-0 border-blue-300 lg:contents">
              <div className="border-r-3 flex h-full w-full border border-b-0 border-l-0 border-t-0 border-blue-300 px-1 lg:border-0">
                <p className="pb-3 text-center text-base font-extrabold md:w-4/5 md:text-xl lg:w-full lg:text-left">
                  From the one site/application you selected when ordering
                </p>
              </div>
              <div className="border-l-3 flex w-full items-center justify-center space-x-2 ">
                <p className="text-center text-base font-extrabold md:text-xl">
                  Unlimited
                </p>
              </div>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-3 lg:pb-5">
            <div className="mt-4 flex items-center justify-center space-x-1">
              <GlobeAmericasIcon className="h-6 w-6 text-blue-500" />
              <h1 className="mb-2 text-lg font-bold text-blue-500">
                Number of Countries
              </h1>
            </div>
            <div className="flex h-10 items-baseline justify-between border border-l-0 border-r-0 border-t-0 border-blue-300 lg:contents lg:flex-row">
              <div className="border-r-3 flex h-full w-full justify-center border border-b-0 border-l-0 border-t-0 border-blue-300 px-1 lg:border-0">
                <p className="text-center text-base font-extrabold md:text-xl">
                  200+
                </p>
              </div>
              <div className="border-l-3 flex w-full items-center justify-center space-x-2 ">
                <p className="text-center text-base font-extrabold md:text-xl">
                  16
                </p>
              </div>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-3 lg:pb-5">
            <div className="mt-4 flex items-center justify-center">
              <ComputerDesktopIcon className="h-6 w-6 text-blue-500" />
              <h1 className="mb-1 text-lg font-bold text-blue-500">
                Number of services
              </h1>
            </div>
            <div className="flex  h-full items-baseline justify-between border border-l-0 border-r-0 border-t-0 border-blue-300 lg:contents">
              <div className="border-r-3 flex w-full justify-center border border-b-0 border-l-0 border-t-0 border-blue-300 px-1 lg:border-0">
                <p className="text-center text-base font-extrabold md:text-xl">
                  1000+
                </p>
              </div>
              <div className="border-l-3 flex w-full items-center justify-center space-x-2 ">
                <p className="text-center text-base font-extrabold md:text-xl">
                  All possible services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoInformation;
