import Image from "next/image";
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
    <section className="bg-color-bg_primary-500 pt-4 md:pt-10 lg:pb-20">
      <div className="mx-auto max-w-7xl lg:px-10">
        <div className="flex flex-col">
          <div className="lg:mb-10 lg:flex lg:items-center">
            <Image
              src={Mailbox}
              alt="test"
              className="hidden h-[350px] w-[350px] lg:flex"
            />
            <div>
              <h1 className="mb-10 mx-auto text-center font-extrabold md:w-3/4 lg:w-4/5 md:text-2xl lg:text-left">
                You can buy a disposable phone number or rent one for up to a
                month
              </h1>
              <div className="flex h-28 items-baseline justify-between border-b border-blue-300 lg:h-0 lg:border-0">
                <div className="flex px-2 border-blue-300 border-r w-full justify-center lg:px-0 lg:border-0 lg:flex-col lg:space-y-3 lg:justify-between">
                  <p className=" text-center text-base font-extrabold  md:text-xl lg:text-left">
                    One-time number for sms
                    <br />
                  </p>
                  <p className="hidden lg:flex lg:text-start">
                    Receive a one-time SMS to a virtual number from the one
                    website or application chosen when ordering.
                  </p>
                  <InformationCircleIcon className="h-6 w-6 text-blue-500 lg:hidden" />
                </div>
                <div className="flex w-full justify-center  lg:flex-col lg:space-y-3 lg:justify-between">
                  <p className="text-base font-extrabold md:text-xl">
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

          <div className="lg:grid lg:grid-cols-3 px lg:pb-5">
            <div className="flex text-sm items-center justify-center space-x-1">
              <ClockIcon className="h-6 w-6 text-blue-500" />
              <h1 className="md:text-lg font-bold text-blue-500">
                Rent Duration
              </h1>
            </div>
            <div className="flex h-full justify-between border border-l-0 border-r-0 border-t-0 border-blue-300 lg:contents">
              <div className="border-r-3 flex h-full w-full border border-b-0 border-l-0 border-t-0 border-blue-300 px-1 lg:border-0">
                <p className="text-center pl-2 text-xs font-extrabold md:text-xl lg:pl-0">
                  Up to 20 minutes
                </p>
              </div>
              <div className="border-l-3 flex w-full items-center space-x-2 ">
                <p className="text-center pl-4 text-xs font-extrabold md:text-xl lg:pl-0">
                  up to 90 days
                </p>
              </div>
            </div>
          </div>
          <div className="lg:mb-5 lg:grid lg:grid-cols-3 lg:pb-5">
            <div className="mt-4 text-sm flex items-center justify-center space-x-1">
              <EnvelopeIcon className="h-6 w-6 text-blue-500" />
              <h1 className="mb-1 md:text-lg font-bold text-blue-500 lg:mb-0">
                You can receive SMS
              </h1>
            </div>
            <div className="flex h-full items-baseline justify-between border border-l-0 border-r-0 border-t-0 border-blue-300 lg:contents">
              <div className="border-r-3 flex h-full w-full border border-b-0 border-l-0 border-t-0 border-blue-300 px-1 lg:border-0">
                <p className="pb-3 text-center text-xs font-extrabold md:w-4/5 md:text-xl lg:w-full lg:text-left lg:pb-0">
                  From the one site/application you selected when ordering
                </p>
              </div>
              <div className="border-l-3 flex w-full items-center space-x-2 ">
                <p className="text-center text-xs pl-4 font-extrabold md:text-xl lg:pl-0">
                  Unlimited
                </p>
              </div>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-3 lg:pb-5">
            <div className="mt-4 flex items-center text-sm justify-center space-x-1 lg:mt-0">
              <GlobeAmericasIcon className="h-6 w-6 text-blue-500" />
              <h1 className="mb-2 md:text-lg font-bold text-blue-500 lg:mb-0">
                Number of Countries
              </h1>
            </div>
            <div className="flex h-10 items-baseline justify-between border border-l-0 border-r-0 border-t-0 border-blue-300 lg:contents lg:flex-row">
              <div className="border-r-3 flex h-full w-full border border-b-0 border-l-0 border-t-0 border-blue-300 px-1 lg:border-0">
                <p className="text-center text-xs pl-20 lg:pl-0 font-extrabold md:text-xl">
                  200+
                </p>
              </div>
              <div className="border-l-3 flex w-full items-center space-x-2 ">
                <p className="text-center text-xs pl-4 font-extrabold md:text-xl lg:pl-0">
                  16
                </p>
              </div>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-3 lg:pb-5">
            <div className="mt-4 flex items-center justify-center text-sm lg:mt-0">
              <ComputerDesktopIcon className="h-6 w-6 text-blue-500" />
              <h1 className="md:text-lg font-bold text-blue-500">
                Number of services
              </h1>
            </div>
            <div className="flex h-full items-baseline border border-l-0 border-r-0 border-t-0 border-blue-300 lg:contents">
              <div className="border-r-3 flex w-full border border-b-0 border-l-0 border-t-0 border-blue-300 px-1 lg:border-0">
                <p className="text-center text-xs pl-20 font-extrabold md:text-xl lg:pl-0">
                  1000+
                </p>
              </div>
              <div className="border-l-3 flex w-full items-center space-x-2 ">
                <p className="text-center text-xs pl-4 font-extrabold md:text-xl lg:pl-0">
                  All possible services
                </p>
              </div>
            </div>
          </div>
          <div className="flex my-4 justify-around items-center text-[0.5rem] md:text-base lg:grid lg:grid-cols-3 lg:pb-5 width-full text-color-white font-extrabold text-center">
            <div className="hidden lg:block relative">
              <span className="absolute bg-[url('../assets/images/arrow.svg')] bg-no-repeat bg-contain top-1/2 left-1/2 bg-[50%] -translate-y-1/2 -translate-x-1/2 w-48 h-48"></span>
            </div>
            <div className="text-left">
              <button className="bg-color-primary px-4 py-2 md:py-4 rounded-full w-full lg:w-2/3 relative group overflow-hidden">
                <span className="absolute left-0 top-0 mt-20 h-20 w-full bg-color-primary_black transition-all duration-300 ease-in-out rounded-3xl group-hover:-mt-4"></span>
                <span className="relative">Buy a one-time number</span>
              </button>
            </div>
            <div className="text-left">
              <button className="bg-color-primary_black px-4 py-2 md:py-4 rounded-full w-full lg:w-2/3 relative group overflow-hidden">
                <span className="absolute left-0 top-0 mt-20 h-20 w-full bg-color-primary transition-all duration-300 ease-in-out rounded-3xl group-hover:-mt-4"></span>
                <span className="relative">Rent Number</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoInformation;
