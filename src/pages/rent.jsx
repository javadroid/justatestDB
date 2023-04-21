import React from "react";
import Image from "next/image";
import device from "../assets/hero.png";
import device2 from "../assets/images/pic_en.webp";
import SignUpSecton from "@/Components/SignUpSecton";
import About from "@/Components/About";
import Advantages from "@/Components/Advantages";
import PromoInformation from "@/Components/PromoInformation";
import Connection from "@/Components/Connection";
import Country from "@/Components/countries/country";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

const Rent = () => {
  return (
    <>
      {/*Hero section*/}
      <section
        id="hero"
        className="text-2.2rem bg-gradient-to-b from-[rgb(13,65,213)] to-[#0187FF] text-white"
      >
        {/* Flex container */}
        <div className="container mx-auto flex max-w-7xl flex-col items-center space-y-6 overflow-hidden px-6 py-20 md:justify-start  lg:flex-row lg:justify-between lg:pt-32 ">
          {/* Left hero */}
          <div className="mb-30 flex-1 space-y-12 md:w-full md:px-2">
            <h1 className="text-center text-3xl font-extrabold md:w-full md:text-left md:text-5xl lg:text-4xl">
              Receive SMS online
            </h1>
            <p className="w-sm max-w-lg text-left text-xl">
              Register on social networks, marketplaces, exchanges and online
              services
              <span className="text-color-accent"> without spam</span> and 
              <span className="text-color-accent">
                disclosure of personal data.
              </span>
            </p>
            <div className="flex flex-col md:flex-row md:justify-start">
              <span className="before:w-85 relative before:absolute before:block before:bg-[url('../assets/before/arrow_intro-1.svg')]"></span>
              <a className="baseline mb-8 rounded-full bg-white p-3 px-6 pt-3 text-center font-bold text-color-primary_black md:px-12 lg:px-14 xl:px-16">
                Rent number
              </a>
              <a className="baseline mb-8 rounded-full bg-color-primary_black p-3 px-6 pt-3 text-center font-bold text-white md:ml-4 md:px-16 lg:px-12 xl:px-16">
                Receive SMS
              </a>
            </div>
          </div>
          {/* Right Hero */}
          <div className="w-full flex-1 md:px-2">
            <picture>
              <Image src={device} alt="" className="" />
            </picture>
          </div>
        </div>
      </section>

      {/* Phone number rental */}
      <section className="bg-color-bg_light py-10">
        <div className=" mx-auto max-w-7xl items-center justify-center md:flex md:flex-row-reverse">
          <div className="px-4 md:w-full lg:w-1/2">
            <h2 className="mb-4 text-left text-xl font-extrabold text-black md:text-center md:text-3xl lg:mb-12 lg:text-left">
              Newsems - phone number rental to receive SMS
            </h2>
            <p className="mb-4 text-left text-sm md:text-2xl">
              With Newsems service you can rent a virtual number to receive sms
              from 20+ countries for: 24 hours, a week or a month. You can rent
              a phone number for SMS to receive any number of messages for a
              selected period of time.
            </p>
            <p className="mb-4 text-left text-sm md:text-2xl">
              This is very handy when you need to register many accounts in
              online services to one number.
            </p>
            <p className="text-left text-sm md:text-2xl">
              If phone number won&apos;t be suitable (if you hasn&apos;t
              received any SMS), you can easily cancel it within 20 minutes
              without losing money.
            </p>
          </div>
          <div className="hidden w-1/2 px-4 lg:block">
            <picture>
              <Image src={device2} alt="" />
            </picture>
          </div>
        </div>
      </section>

      {/* How it works*/}
      <section>
        {/* container to heading and the steps */}
        <div className="w-4xl mx-auto mb-10 mt-8 max-w-6xl px-4 text-center md:mt-32 md:px-8">
          {/* Heading */}
          <h2 className="text-center text-xl font-bold text-blue-500">
            Check how it works!
          </h2>
          <p className="text-center text-xl font-bold md:text-3xl">
            Rent virtual number online in 3 steps right now
          </p>
          {/* Steps Container */}
          <form>
            <ol className="mt-8 flex flex-col justify-between space-y-8 md:mt-12 md:grid md:grid-cols-2 md:flex-wrap md:gap-5 md:space-x-8 md:space-y-0 lg:flex lg:flex-row lg:space-x-1">
              {/* step 1 */}
              <li className="relative before:absolute before:-left-3 before:grid before:h-14 before:w-14 before:place-items-center before:rounded-tl-3xl before:rounded-br-3xl before:bg-color-bg_primary-500 before:text-2xl before:font-bold before:text-color-primary before:content-['1']  h-48 w-auto rounded-3xl px-4 shadow-[0px_4px_15px_rgba(37,39,86,0.15)] md:mb-11">
                <div className="mx-4">
                  {/* title */}
                  <div className="flex items-center justify-center p-4">
                    <span className="text-base font-bold md:text-xl">
                      Select your country
                    </span>
                  </div>
                  {/* countries */}
                  <div className="body">
                    <div className="country mb-4">
                      <div className="roll scrollbar-thin scrollbar-thumb-color-decor_blue scrollbar-track-[#0187ff1a] h-32 w-full overflow-hidden overflow-y-scroll">
                        <div className="h-32 w-full px-2">
                          <Country />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* step 2 */}
              <li className="relative before:absolute before:-left-3 before:grid before:h-14 before:w-14 before:place-items-center before:rounded-tl-3xl before:rounded-br-3xl before:bg-color-bg_primary-500 before:text-2xl before:font-bold before:text-color-primary before:content-['2'] h-48 w-auto rounded-3xl px-4 shadow-[0px_4px_15px_rgba(37,39,86,0.15)] md:mb-11">
                <div className="flex flex-col items-center px-6 ">
                  {/* Heading */}
                  <div>
                    <div className="flex items-center justify-center">
                      <h3 className="my-2 px-4 text-base font-bold md:text-xl">
                        Set rent duration
                      </h3>
                    </div>
                  </div>
                  {/* Time */}
                  <div>
                    <div className=" flex flex-col items-center justify-between">
                      <div className="mb-2 flex flex-row items-center justify-center space-x-4">
                        <button className="bg-color-bg_primary-500 w-32 rounded-lg py-2 text-sm active:text-color-primary active:border md:text-base">
                          Hour
                        </button>
                        <button className="bg-color-bg_primary-500  w-32 rounded-lg py-2 text-sm active:text-color-primary active:border md:text-base">
                          Day
                        </button>
                      </div>
                      <div className="mb-2 flex flex-row items-center justify-center space-x-4">
                        <button className="bg-color-bg_primary-500  w-32 rounded-lg py-2 text-sm active:text-color-primary active:border md:text-base">
                          Week
                        </button>
                        <button className="bg-color-bg_primary-500  w-32 rounded-lg py-2 text-sm active:text-color-primary active:border md:text-base">
                          Month
                        </button>
                      </div>
                      <div className="bg-color-bg_primary-500  rounded-lg active:text-color-primary active:border mb-4 max-w-[270px] h-10 w-[270px] py-1 flex justify-between font-bold">
                        <PlusCircleIcon className="text-color-primary" />
                        <p className="text-xl">1</p>
                        <MinusCircleIcon className="text-color-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* step 3 */}
              <li className="relative before:absolute before:-left-3 before:grid before:h-14 before:w-14 before:place-items-center before:rounded-tl-3xl before:rounded-br-3xl before:bg-color-bg_primary-500 before:text-2xl before:font-bold before:text-color-primary before:content-['3'] h-48 w-auto rounded-3xl px-4 shadow-[0px_4px_15px_rgba(37,39,86,0.15)] md:col-span-2 ">
                <div className="flex flex-col items-center p-6 ">
                  {/* Heading */}
                  <div className="md:self-start lg:self-center">
                    <div className="md:ml-8 lg:pl-0">
                      <h3 className="text-base font-bold md:text-xl">Rent a number</h3>
                    </div>
                  </div>
                  {/* others */}
                  <div className="flex flex-col items-center justify-center p-4">
                    <button className="bg-bgPrimar mb-4 w-48 rounded-sm py-2 text-base md:text-xl">
                      It&apos;ll cost $0.06
                    </button>
                    <button className="w-48  rounded-xl bg-blue-800 py-2 text-base font-bold text-white md:text-xl">
                      Rent
                    </button>
                  </div>
                </div>
              </li>
            </ol>
          </form>
        </div>
      </section>

      {/* sign up */}
      <SignUpSecton />

      {/* You can buy or rent one */}
      <PromoInformation />

      {/* About */}
      <About />

      {/* Advantages */}
      <Advantages />

      <Connection />
    </>
  );
};

export default Rent;
