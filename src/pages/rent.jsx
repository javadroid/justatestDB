import React, { useEffect, useState } from "react";
import Image from "next/image";
import device from "../assets/images/hero.png";
import device2 from "../assets/images/pic_en.webp";
import SignUpSecton from "@/Components/SignUpSecton";
import About from "@/Components/About";
import Advantages from "@/Components/Advantages";
import PromoInformation from "@/Components/PromoInformation";
import Connection from "@/Components/Connection";
import { countries } from "../Components/countries/countriesData";
//import Country from "@/Components/countries/country";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import rightArrow from "../assets/arrows/arrow-right.png";
import curvedArrow from "../assets/arrows/curved-arrow.png";
import axios from "axios";

const Rent = () => {
  const [country, setCountry] = useState("");
  const [time, setTime] = useState("");
  const [count, setCount] = useState(1);
  const [fee, setFee] = useState(1);

  useEffect(() => {
    const getRentFee = async () => {
      const response = await axios.get(
        "http://161.35.218.95:3000/api/rentfees/country/duration",
        {
          params: {
            country: country || "nigeria",
            duration: time || "hour",
          },
        }
      );
      console.log(response?.data?.data[0]?.amount);
      setFee(response?.data?.data[0]?.amount);
    };
    getRentFee();
  }, [country, time]);

  console.log("This is the rent country", country);
  console.log("This is the rent time", time);

  const rentFee = fee * count;

  return (
    <>
      {/*Hero section*/}
      <section
        id="hero"
        className="text-2.2rem bg-gradient-to-b from-[#0d41d5] to-[#0187FF] text-color-white"
      >
        {/* Flex container */}
        <div className="container mx-auto flex max-w-7xl flex-col items-center space-y-6 px-6 py-20 md:justify-start lg:flex-row lg:justify-between lg:pt-32 ">
          {/* Left hero */}
          <div className="mb-30 relative flex-1 space-y-12 md:w-full md:px-2">
            <Image
              src={rightArrow}
              width={50}
              alt="right arrow"
              className="absolute -left-12 bottom-10 hidden lg:flex"
            />
            <h1 className="text-center text-3xl font-extrabold md:w-full md:text-left md:text-5xl lg:text-4xl">
              Receive SMS online
            </h1>
            <p className="w-sm max-w-lg text-left text-xl">
              Register on social networks, marketplaces, exchanges and online
              services
              <span className="text-color-accent"> without spam</span> and
              <span className="text-color-accent">
                {" "}
                disclosure of personal data.
              </span>
            </p>
            <div className="flex flex-col md:flex-row md:justify-start">
              {/* <span className="before:w-80 before:h-80 relative before:absolute before:block before:bg-red"></span> */}
              <Link
                href={"/user/rent"}
                className="baseline group relative mb-8 overflow-hidden rounded-full bg-white p-3 px-6 pt-3 text-center font-bold text-color-primary_black hover:text-white md:px-12 lg:px-14 xl:px-16"
              >
                <span className="absolute left-0 top-0 mt-12 h-20 w-full rounded-3xl bg-color-primary_black transition-all duration-300 ease-in-out group-hover:-mt-4"></span>
                <button className="relative">Rent number</button>
              </Link>
              <Link
                href={"/user/receive-sms"}
                className="baseline group relative mb-8 overflow-hidden rounded-full bg-color-primary_black p-3 px-6 pt-3 text-center font-bold text-white hover:text-color-primary_black md:ml-4 md:px-16 lg:px-12 xl:px-16"
              >
                <span className="absolute left-0 top-0 mt-12 h-20 w-full rounded-3xl bg-color-bg_light transition-all duration-300 ease-in-out group-hover:-mt-4"></span>
                <button className="relative">Receive SMS</button>
              </Link>
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
        <div className="relative mx-auto max-w-7xl items-center justify-center md:flex md:flex-row-reverse">
          <Image
            width={200}
            src={curvedArrow}
            alt="curved-arrow"
            className="absolute -bottom-36 left-20 sm:left-28 md:left-[40%] lg:right-[40%]"
          />
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
      <section className="bg-color-bg_light-100 py-16 md:pt-24">
        {/* container to heading and the steps */}
        <div className="w-4xl mx-auto max-w-6xl px-4 text-center md:px-8 md:pb-32">
          {/* Heading */}
          <h2 className="mb-4 text-center text-xl font-extrabold text-blue-500">
            Check how it works!
          </h2>
          <p className="text-center text-xl font-extrabold md:mx-auto md:w-2/5 md:text-3xl">
            Rent virtual number online in 3 steps right now
          </p>
          {/* Steps Container */}
          <ol className="mt-8 flex flex-col justify-between space-y-8 md:mt-12 md:grid md:grid-cols-2 md:flex-wrap md:gap-5  md:space-y-0 lg:grid-cols-3 lg:gap-16">
            {/* step 1 */}
            <li className="relative rounded-3xl bg-color-white px-4 shadow-[0px_4px_15px_rgba(37,39,86,0.15)] before:absolute before:-left-3 before:grid before:h-14 before:w-14 before:place-items-center before:rounded-br-3xl before:rounded-tl-3xl before:bg-color-bg_primary-500 before:text-2xl before:font-bold before:text-color-primary before:content-['1']">
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
                    <div className="roll h-32 w-full overflow-hidden overflow-y-scroll scrollbar-thin scrollbar-track-[#0187ff1a] scrollbar-thumb-color-decor_blue">
                      <div className="h-32 w-full px-2">
                        <table className="ml-0 w-full pl-4">
                          <tbody>
                            {countries.map((country, index) => (
                              <tr
                                key={index}
                                className="cursor-pointer rounded-2xl bg-color-white hover:bg-color-bg_primary-500  active:bg-color-bg_primary-500"
                                onClick={() => setCountry(country.name)}
                              >
                                <td className="flex w-full items-center justify-start py-1">
                                  <span>
                                    <Image
                                      src={country.flag}
                                      alt=""
                                      className="ml-4 mr-2 flex w-8 items-center"
                                    />
                                  </span>
                                  <span className="text-xs font-medium md:text-base">
                                    {country.name}
                                  </span>
                                </td>
                                <td>
                                  <span className="text-xs text-gray-500">
                                    {country.value}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* step 2 */}
            <div className="relative rounded-3xl bg-color-white px-4 shadow-[0px_4px_15px_rgba(37,39,86,0.15)] before:absolute before:-left-3 before:grid before:h-14 before:w-14 before:place-items-center before:rounded-br-3xl before:rounded-tl-3xl before:bg-color-bg_primary-500 before:text-2xl before:font-bold before:text-color-primary before:content-['2']">
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
                  <div className="mt-4 flex flex-col items-center justify-between">
                    <div className="mb-2 flex flex-row items-center justify-center space-x-4">
                      <button
                        className="w-32 rounded-lg bg-color-bg_primary-500 py-2 text-sm active:border active:text-color-primary md:text-base"
                        onClick={() => setTime("Hour")}
                      >
                        Hour
                      </button>
                      <button
                        className="w-32  rounded-lg bg-color-bg_primary-500 py-2 text-sm active:border active:text-color-primary md:text-base"
                        onClick={() => console.log("Day")}
                      >
                        Day
                      </button>
                    </div>
                    <div className="mb-2 flex flex-row items-center justify-center space-x-4">
                      <button
                        className="w-32 rounded-lg bg-color-bg_primary-500 py-2 text-sm active:border active:text-color-primary md:text-base"
                        onClick={() => setTime("Week")}
                      >
                        Week
                      </button>
                      <button
                        className="w-32 rounded-lg bg-color-bg_primary-500 py-2 text-sm active:border active:text-color-primary md:text-base"
                        onClick={() => console.log("Month")}
                      >
                        Month
                      </button>
                    </div>
                    <div className="mb-4  flex h-10 w-[270px] max-w-[270px] justify-between rounded-lg bg-color-bg_primary-500 py-1 font-bold active:border active:text-color-primary">
                      <PlusCircleIcon
                        className="text-color-primary"
                        onClick={() => setCount(count + 1)}
                      />
                      <p className="text-xl">{count}</p>
                      <MinusCircleIcon
                        className="text-color-primary"
                        onClick={() => setCount(count - 1)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* step 3 */}
            <li className="relative rounded-3xl bg-color-white px-4 shadow-[0px_4px_15px_rgba(37,39,86,0.15)] before:absolute before:-left-3 before:grid before:h-14 before:w-14 before:place-items-center before:rounded-br-3xl before:rounded-tl-3xl before:bg-color-bg_primary-500 before:text-2xl before:font-bold before:text-color-primary before:content-['3'] md:col-span-2 lg:col-span-1">
              <div className="flex flex-col items-center p-6 ">
                {/* Heading */}
                <div className="md:self-start lg:self-center">
                  <div className="md:ml-8 lg:pl-0">
                    <h3 className="text-base font-bold md:text-xl">
                      Rent a number
                    </h3>
                  </div>
                </div>
                {/* others */}
                <div className="flex flex-col items-center justify-center p-4">
                  <button className="bg-bgPrimar mb-4 w-48 rounded-sm py-2 text-base md:text-xl">
                    It&apos;ll cost ${rentFee.toFixed(2)}
                  </button>
                  <Link
                    href={"/user/rent"}
                    className="group  relative w-48 overflow-hidden rounded-xl bg-color-primary py-2 text-center text-base font-bold text-white md:text-xl"
                  >
                    <span className="absolute left-0 top-0 mt-12 h-20 w-full rounded-3xl bg-color-primary_black transition-all duration-300 ease-in-out group-hover:-mt-4"></span>
                    <button className="relative">Rent</button>
                  </Link>
                </div>
              </div>
            </li>
          </ol>
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
