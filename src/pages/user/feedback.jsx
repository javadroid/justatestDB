import React from "react";
import Link from "next/link";
import fast1 from "@/assets/images/fast1.png";
import fast2 from "@/assets/images/fast2.png";
import fast3 from "@/assets/images/fast3.png";
import Image from "next/image";
import UserDashboardLayout from "@/Components/UserDashboardLayout";

const feedback = () => {
  return (
    <section className="mx-auto max-w-6xl bg-color-bg_light pb-20">
      <div className=" pb-24">
        <div className="mx-0 space-y-4 bg-color-bg_light-100 px-4 sm:space-y-8 sm:pb-12 lg:pt-14">
          <h1 className="pt-2 text-center text-2xl font-extrabold sm:text-4xl">
            Contact Us
          </h1>
        </div>
        <div className="width-full mx-auto  flex max-w-5xl flex-col text-center md:flex-row md:flex-wrap md:justify-center md:pb-8 lg:flex-nowrap">
          <div className="b-0 mb-8 basis-full px-3 md:basis-1/2 lg:basis-1/3">
            <Link
              href=""
              className="block rounded-3xl bg-color-bg_light p-8 drop-shadow-3xl"
            >
              <Image src={fast1} alt="" className="inline" />
              <h2 className="text-xs font-extrabold text-color-primary sm:text-lg">
                How to get a number for one-time sign up?
              </h2>
            </Link>
          </div>
          <div className="mb-8 basis-full px-3 md:basis-1/2 lg:basis-1/3">
            <Link
              href=""
              className="block rounded-3xl bg-color-bg_light p-8 drop-shadow-3xl"
            >
              <Image src={fast2} alt="" className="inline" />
              <h2 className="text-xs font-extrabold text-color-primary sm:text-lg">
                How to get sms to a bought number?
              </h2>
            </Link>
          </div>
          <div className="basis-full px-3 md:basis-1/2 lg:basis-1/3">
            <Link
              href=""
              className="block rounded-3xl bg-color-bg_light p-8 drop-shadow-3xl"
            >
              <Image src={fast3} alt="" className="inline" />
              <h2 className="text-xs font-extrabold text-color-primary sm:text-lg">
                How to get a long-term number?
              </h2>
            </Link>
          </div>
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-5">
          <div className="flex flex-col items-start">
            <p className="font-bold">Chat Support:</p>
            <button className="w-full rounded-md border border-blue-500 py-3">
              Click me
            </button>
          </div>
          <div className="flex flex-col items-start">
            <p className="font-bold">Youtube:</p>
            <button className="w-full rounded-md border border-red-500 py-3">
              Click me
            </button>
          </div>
          <div>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-md border border-black px-2 py-2"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Your email"
              className="w-full rounded-md border border-black px-2 py-2"
            />
          </div>
          <div className="col-span-2">
            <textarea
              type="text"
              placeholder="Your Question"
              className="w-full rounded-md border border-black px-2 py-2"
              rows="5"
            />
          </div>
        </div>
        <div className="mt-5 flex w-full items-center justify-center">
          {/* <div>
              <button className="w-full rounded-md border border-red-500 py-3">
                Click me
              </button>
            </div> */}
          <div className="w-1/3">
            <button className=" w-full rounded-md border border-red-500 py-3">
              Click me
            </button>
          </div>
        </div>
        <h3 className="text-sm font-medium">Company Details</h3>
        <p className="text-xs">
          Liknot Ltd. Registration number 13819411 85 Great Portland Street
          First Floor, London W1W7LT, United Kingdom +443300271844
        </p>
      </div>
    </section>
  );
};

export default feedback;

feedback.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
