import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/assets/phone-image.png";

import Ad from "@/assets/ad.png";
import Cry from "@/assets/cry-emoji.svg";
import Smile from "@/assets/smile-emoji.svg";
import LadyLaptop from "@/assets/lady-laptop.png";
import Form from "@/Components/Form";
import Chill from "@/assets/img.png";
import Services from "@/Components/Services";
import HeroSection from "@/Components/HeroSection";
import Advantages from "@/Components/Advantages";
import FAQ from "@/Components/FAQ";
import Connection from "@/Components/Connection";
import PromoInformation from "@/Components/PromoInformation";
import Table from "@/Components/Table";
import SignUpSecton from "@/Components/SignUpSecton";
import Cookies from "@/Components/Cookies";

export default function Home() {
  return (
    <>
      <Head>
        <title>Newsems</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <section className="relative w-full bg-gradient-to-r from-sky-400 to-blue-500">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div>
                <h1 className="text-4xl font-bold text-white">
                  RECEIVE SMS ONLINE
                </h1>
                <p className=" text-2xl text-white">
                  Register on social networks, <br />
                  marketplaces, exchanges and
                  <br />
                  online services{" "}
                  <span className="text-yellow-500">
                    without spam{" "}
                  </span> and <br />
                  <span className="text-yellow-500">
                    disclosure of personal data
                  </span>
                  .
                </p>
              </div>
              <div className="flex w-full flex-col items-center justify-between space-y-5 pt-24 md:flex-row md:place-items-baseline md:justify-center md:space-x-6 md:pt-11">
                <button className="w-full rounded-full bg-white py-2 text-lg font-bold text-color-primary_darken">
                  Receive SMS
                </button>
                <button className="w-full rounded-full bg-color-primary_black py-2 text-lg font-bold text-white">
                  Rent number
                </button>
              </div>
            </div>
            <div className="sm:flex sm:items-center sm:justify-center">
              <Image
                src={Hero}
                alt="Hero"
                className="h-[500px] w-[570px] object-contain"
                priority={true}
              />
            </div>
          </div>
        </section>
        <section className="bg-color-bg_light-100 py-20">
          <div className="mx-auto max-w-7xl lg:flex lg:flex-col">
            <div className="px-1">
              <h2 className="text-center text-2xl font-extrabold text-color-primary_darken">
                Check How it Works
              </h2>
              <h1 className="text-center text-4xl font-extrabold">
                Choose your country and service receive SMS right now
              </h1>
            </div>
            <Table />
          </div>
          <div className="mt-9 flex flex-col items-center">
            <h1 className="text-center text-3xl font-extrabold">
              Most Popular Services
            </h1>
            <div className="mt-11 flex w-full flex-col">
              <Services />
            </div>
          </div>
        </section>
        <section>
          <div className="mx-auto max-w-7xl px-3">
            <h1 className="mx-auto w-3/4 max-w-7xl text-center text-2xl font-extrabold lg:w-1/2 lg:text-3xl">
              It&apos;s no secret that almost all online services are selling
              your personal data.
            </h1>
            <div className="md:flex md:items-baseline md:justify-center md:space-x-5">
              <div className="lg flex flex-col items-center rounded-3xl bg-color-bg_primary-500 py-5">
                <Image
                  src={Ad}
                  alt="AD image"
                  className="h-80 w-80 object-contain"
                />
                <div className="flex flex-col">
                  <h3 className="w-3/4 self-center text-center text-2xl font-bold">
                    Have you registered on Facebook?
                  </h3>
                  <p className="w-3/4 self-center text-left text-base font-medium">
                    You immediately receive an avalanche of targeted
                    advertising.
                  </p>
                </div>
              </div>
              <div className="mt-4 flex flex-col items-center rounded-3xl bg-color-bg_primary-500 py-5">
                <Image
                  src={Ad}
                  alt="AD image"
                  className="h-80 w-80 object-contain"
                />
                <div className="flex flex-col">
                  <h3 className="w-3/4 self-center text-center text-2xl font-bold">
                    Have you registered on Facebook?
                  </h3>
                  <p className="w-3/4 self-center text-left text-base font-medium">
                    You immediately receive an avalanche of targeted
                    advertising.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto mt-16 max-w-3xl">
              <div className="flex items-center space-x-9">
                <Image
                  src={Cry}
                  alt="AD image"
                  className="h-14 w-14 object-contain"
                />
                <div className="rounded-2xl bg-white px-9 py-5 drop-shadow-xl">
                  <h2 className="text-2xl font-extrabold text-color-primary">
                    Can we not do this?
                  </h2>
                </div>
              </div>
              <div className="flex flex-row-reverse items-center gap-5 pt-5">
                <Image
                  src={Smile}
                  alt="AD image"
                  className="h-14 w-14 object-contain"
                />
                <div className="rounded-2xl bg-white px-9 py-5 drop-shadow-xl">
                  <h2 className="text-2xl font-extrabold text-color-primary">
                    Yes
                  </h2>
                </div>
              </div>
            </div>
            <HeroSection />
          </div>
        </section>
        <SignUpSecton />
        <section className="my-16">
          <div className="mx-auto flex max-w-7xl flex-col items-center px-5">
            <h1 className="self-center text-center text-2xl font-extrabold md:w-2/5">
              Registration on the sites without SMS to your personal number in 3
              steps
            </h1>
            <div className="flex flex-col items-center md:mx-auto md:max-w-5xl md:flex-row md:gap-20">
              <Image
                src={LadyLaptop}
                alt="Lady with Laptop"
                className="h-80 w-80 object-contain"
              />
              <div className="flex flex-col items-center">
                <h1 className="mb-6 w-4/5 self-center text-center text-xl font-bold md:text-left">
                  Get your number in your personal cabinet
                </h1>
                <p className="w-4/5 text-lg">
                  To register with Newsems you only need to enter your email
                  address. No ID information or other contacts.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center md:mx-auto md:max-w-5xl md:flex-row-reverse md:gap-20">
              <Image
                src={LadyLaptop}
                alt="Lady with Laptop"
                className="h-80 w-80 object-contain"
              />
              <div className="flex flex-col items-center">
                <h1 className="mb-6 w-4/5 self-center text-center text-xl font-bold md:text-left">
                  Get your number in your personal cabinet
                </h1>
                <p className="w-4/5 text-lg">
                  To register with Newsems you only need to enter your email
                  address. No ID information or other contacts.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center md:mx-auto md:max-w-5xl md:flex-row md:gap-20">
              <Image
                src={LadyLaptop}
                alt="Lady with Laptop"
                className="h-80 w-80 object-contain"
              />
              <div className="flex flex-col items-center">
                <h1 className="mb-6 w-4/5 self-center text-center text-xl font-bold md:text-left">
                  Get your number in your personal cabinet
                </h1>
                <p className="w-4/5 text-lg">
                  To register with Newsems you only need to enter your email
                  address. No ID information or other contacts.
                </p>
              </div>
            </div>
          </div>
        </section>
        <PromoInformation />
        <section className="my-10">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl px-6 text-justify">
              <p className="mb-4 text-lg font-normal">
                &quot;Newsems&quot; gives you the opportunity to buy a virtual
                number for registration in popular services at the best price on
                the net. Previously, to register an additional account in a
                social network or messenger you had to buy a SIM-card or ask
                your husband/wife to share the phone (which is not always
                possible)..
              </p>
              <p className="mb-4 text-lg font-normal">
                First of all, it costs money to get a new SIM card. Secondly, it
                is a whole event - to come to the office, fill out a form with
                passport data...
              </p>
              <p className="mb-4 text-lg font-normal">
                On this site you can buy a virtual phone number for Telegram,
                Whatsapp, Viber, Instagram, Facebook, and any other popular
                platform from just 0,05$.
              </p>
              <p className="mb-4 text-lg font-normal">
                The service is suitable for users who need both one-time and
                mass SMS verification of accounts in social networks,
                messengers, payment systems, dating sites and any other services
                that require SMS verification.
              </p>
              <p className="mb-4 text-lg font-normal">
                Get a virtual phone number in just a few minutes!
              </p>
              <p className="mb-4 text-lg font-normal">
                The entire process is automated and occurs in a user-friendly
                interface. There is no need to contact managers to connect the
                number. At the same time, support is always ready to help in
                case of anything.
              </p>
              <p className="mb-4 text-lg font-normal">
                So feel free to use it!
              </p>
            </div>
            <div className="flex items-center justify-center lg:gap-40">
              <Image
                src={Chill}
                alt="Chill Pic"
                className="hidden h-[350px] w-[350px] object-contain lg:flex"
              />
              <Form />
            </div>
            <Advantages />
          </div>
        </section>
        <Connection />
        <FAQ />
        <Cookies />
      </main>
    </>
  );
}
