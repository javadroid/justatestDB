import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "../assets/phone-image.png";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="w-full bg-gradient-to-r from-sky-400 to-blue-500">
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
              />
            </div>
          </div>
        </section>
        <section className="bg-color-bg_light-100 py-20">
          <div className="mx-auto max-w-7xl lg:flex lg:flex-col">
            <div>
              <h2 className="text-center text-2xl font-extrabold text-color-primary_darken">
                Check how it Works
              </h2>
              <h1 className="text-center text-4xl font-extrabold">
                Choose your country and
                <br />
                service receive SMS right
                <br />
                now
              </h1>
            </div>
            <div className="lg:flex lg:h-[631px] lg:w-[1110px] lg:justify-center lg:self-center lg:drop-shadow-xl">
              <div className="m-4 mt-10 rounded-t-2xl bg-color-bg_light px-7 py-4 lg:mx-0">
                <div>
                  <h1 className="text-xl font-extrabold ">1. Select Country</h1>
                  <div className="flex w-full items-center space-x-1 border border-x-0 border-t-0 border-blue-300">
                    <MagnifyingGlassIcon className="h-6 w-6" />
                    <input
                      type="text"
                      placeholder="Search"
                      className="bg-transparent py-1 text-lg font-medium italic text-black outline-none"
                    />
                  </div>
                  <ul className="pt-2">
                    <li className="p-2">📸 Fake Country</li>
                    <li className="p-2">📸 Fake Country</li>
                    <li className="p-2">📸 Fake Country</li>
                    <li className="p-2">📸 Fake Country</li>
                    <li className="p-2">📸 Fake Country</li>
                    <li className="p-2">📸 Fake Country</li>
                    <li className="p-2">📸 Fake Country</li>
                    <li className="p-2">📸 Fake Country</li>
                    <li className="p-2">📸 Fake Country</li>
                    <li className="p-2">📸 Fake Country</li>
                  </ul>
                  <p className="pt-4 text-lg font-normal text-color-text_light">
                    Available Countries- 128
                  </p>
                </div>
              </div>
              <div className="m-4 mt-10 bg-white px-7 py-2 drop-shadow-xl lg:mx-0 lg:w-full">
                <div className=" ">
                  <div className="lg:flex lg:items-center lg:justify-between lg:gap-10">
                    <h1 className="text-xl font-extrabold lg:w-full">
                      2. Select a service
                    </h1>
                    <div className="flex w-full items-center space-x-1 border border-x-0 border-t-0 border-blue-300 lg:w-3/4">
                      <MagnifyingGlassIcon className="h-6 w-6" />
                      <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent py-1 text-lg font-medium italic text-black outline-none"
                      />
                    </div>
                  </div>
                  <ul className="pt-2">
                    <li className="p-2">📸 Fake Country</li>
                    <li className="p-2">📸 Fake Country</li>
                    <li className="p-2">📸 Fake Country</li>
                    <li className="p-2">📸 Fake Country</li>
                    <li className="p-2">📸 Fake Country</li>
                    <li className="p-2">📸 Fake Country</li>
                    <li className="p-2">📸 Fake Country</li>
                    <li className="p-2">📸 Fake Country</li>
                    <li className="p-2">📸 Fake Country</li>
                    <li className="p-2">📸 Fake Country</li>
                  </ul>
                  <div className="flex items-baseline space-x-10">
                    <p className="pt-4 text-lg font-normal text-color-text_light">
                      Available services- 2312
                    </p>
                    <button className="rounded-lg bg-color-primary px-11 py-2 font-medium text-white">
                      Receive SMS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1>Most Popular Services</h1>
            <div></div>
          </div>
        </section>
      </main>
    </>
  );
}
