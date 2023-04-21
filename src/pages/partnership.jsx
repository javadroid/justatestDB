import React from "react";
import Graph from "@/assets/graph.png";
import Image from "next/image";

const partnership = () => {
  return (
    <section>
      <div className="bg-color-bg_primary-500 p-20">
        <h1 className="text-center text-4xl font-extrabold">
          Make Money on SIM cards with a reliable service
        </h1>
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="px-5">
          <p className="mb-5 mt-5 text-justify">
            If you have phone numbers (sim cards) which can be used to receive
            SMS – this page is exactly what you need
          </p>
          <p className="mb-10">
            Start earning money on your SIM-cards with Newsems!
          </p>
          <h1 className="mb-10 text-2xl font-extrabold">
            What can we do together?
          </h1>
          <p className="mb-5">
            Newsems is a worldwide platform providing SMS receiving online.
            Nowadays we have 200 000 active users and more than 100 million
            requests to get SMS daily.
          </p>
          <p className="mb-5">
            And it is not a maximum: demands of our clients grow rapidly. That’s
            why we are searching for you!
          </p>
          <h1 className="text-2xl font-extrabold">How to connect Newsems?</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
              <h3 className="mb-5 mt-10">REST API</h3>
              <ul className="">
                <ol className="py-3">
                  You give us API docs and account for direct payments
                </ol>
                <ol>We integrate it in our system</ol>
              </ul>
            </div>
            <div>
              <h3 className="mb-5 mt-10">REST API</h3>
              <ul className="">
                <ol className="py-3">
                  You give us API docs and account for direct payments
                </ol>
                <ol>We integrate it in our system</ol>
              </ul>
            </div>
            <div>
              <h3 className="mb-5 mt-10">REST API</h3>
              <ul className="">
                <ol className="py-3">
                  You give us API docs and account for direct payments
                </ol>
                <ol>We integrate it in our system</ol>
              </ul>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="mb-10 text-center text-xl font-bold">
              Tell us more about your SIM-cards and hardware/software and we
              will get in touch soon!
            </h1>
            <form
              action=""
              className="flex flex-col gap-y-5 lg:mx-auto lg:max-w-3xl"
            >
              <div className="grid grid-cols-2 gap-x-5">
                <input
                  type="text"
                  placeholder="Your name"
                  className="rounded-lg border border-color-primary px-2 py-3 outline-none"
                />
                <input
                  type="text"
                  placeholder="Your country"
                  className="rounded-lg border border-color-primary px-2 py-3 outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Contact Type"
                className="rounded-lg border border-color-primary px-2 py-3 outline-none"
              />
              <textarea
                type="text"
                placeholder="Message"
                className="rounded-lg border border-color-primary px-2 py-3 outline-none"
              />
              <p>Limit: 255 characters</p>
              {/* CAPTCHA BOX */}
              <button className="w-full rounded-md bg-color-primary py-3 font-bold text-white">
                SEND
              </button>
            </form>
          </div>
          <div>
            <h1 className="mb-14 mt-20 text-2xl font-extrabold">
              What can we do together?
            </h1>
            <p className="mb-10">
              We have been working with API-suppliers since the beginning and
              with GSM/GoIP suppliers for 3 months already. Below you can see
              our volumes.
            </p>
            <div className="mb-9 flex flex-col items-center space-y-5 lg:flex-row lg:justify-around lg:space-y-0">
              <p className="rounded-lg bg-color-primary px-2 py-3 text-white">{`>700 000$ total earnings`}</p>
              <p className="rounded-lg bg-color-primary px-2 py-3 text-white">{`>100+ suppliers`}</p>
              <p className="rounded-lg bg-color-primary px-2 py-3 text-white">{`>200 000 SMS daily`}</p>
            </div>
            <p className="mb-5">
              Do you want to get part of that money directly from home without
              shipping SIM-cards to us? You have found the right company.
            </p>
            <p className="mb-3">
              According to current statistics, we can give you some predictions
              about how much you can earn, just take a look at the graph below.
            </p>
            <Image
              src={Graph}
              alt="Graph"
              className="h-50 w-50 object-contain"
            />
            <h1 className="mb-5 mt-10 text-2xl font-bold">
              Can’t start right now? No problem!
            </h1>
            <p>
              We made a special guide for those who are only starting work with
              SIM-cards and hardware, you can check it{" "}
              <a className="text-color-primary underline">here</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default partnership;
