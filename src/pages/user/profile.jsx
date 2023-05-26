import UserDashboardLayout from "@/Components/UserDashboardLayout";
import { CreditCardIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
// import React from "react";

const profile = () => {
  return (
    <section>
      <div className="bg-color-bg_light pb-8 pt-10 lg:pl-4 lg:pr-2">
        <h1 className="mb-5 text-center text-2xl font-bold">Profile</h1>
        <div className="h-full mx-2 rounded-xl bg-white shadow-lg lg:w-full xl:w-[80vw]">
          <div className="flex flex-col lg:flex-row lg:items-baseline lg:gap-72">
            <div className="flex px-2 flex-grow flex-col">
              <div className="my-5 flex justify-between">
                <p>Email:</p>
                <p className="font-bold">tereti7605@fitzola.com</p>
              </div>
              <div className="mb-3 flex justify-between">
                <p>Balance:</p>
                <p className="font-semibold">0$</p>
              </div>
              <button className="flex items-center justify-center space-x-2 rounded-2xl bg-color-accent px-4 py-2 text-black hover:text-white relative group overflow-hidden">
              <span className="absolute left-0 top-0 mt-16 h-20 w-full bg-color-decor_orange transition-all duration-300 ease-in-out rounded-3xl group-hover:-mt-4"></span>
              <div>
                <CreditCardIcon className="h-6 w-6 text-black relative group-hover:rotate-45 group-hover:text-color-white" />
              </div>
              <div className="flex flex-col items-start relative">
                <p className="hidden text-sm font-bold lg:inline-block">
                  Top up
                </p>
              </div>
              </button>
              <div className="mb-6 flex justify-between">
                <p>Hold</p>
                <p>0</p>
              </div>
              <div>
                <p>API Key</p>
                <div>
                  <p className="text-sm font-semibold">
                    D_druvVi05K3oiJwVNi10cc-ue4ibskZ
                  </p>
                  <button className="mb-6 mt-2 rounded-md bg-color-primary px-14 py-2 text-white group relative overflow-hidden">
                    <span className="absolute left-0 top-0 mt-12 h-20 w-full bg-color-primary_black transition-all duration-300 ease-in-out rounded-3xl group-hover:-mt-4"></span>
                    <span className="relative">Refresh</span>
                  </button>
                </div>
              </div>
              <p className="text-color-primary">Payment History</p>
            </div>
            <div className="mt-8 flex flex-grow flex-col gap-y-3 px-4 md:px-0">
              <h2 className="text-center md:text-2xl font-bold">
                Change Password
              </h2>
              <input
                type="text"
                placeholder="Password"
                className="rounded-md border border-black px-2 py-2"
              />
              <input
                type="text"
                placeholder="Repeat Password"
                className="rounded-md border border-black px-2 py-2"
              />
              <button className="rounded-md bg-color-primary px-2 py-2 text-white relative group overflow-hidden">
                <span className="absolute left-0 top-0 mt-12 h-20 w-full bg-color-primary_black transition-all duration-300 ease-in-out rounded-3xl group-hover:-mt-4"></span>
                <span className="relative">Change</span>
              </button>
            </div>
          </div>
          <div className="px-2 py-10">
            <div className="rounded-md bg-color-bg_primary-500 px-2 py-4">
              <h2 className="mb-5 font-bold text-center md:text-xl">Referal Program</h2>
              <div className="flex flex-col gap-y-8 lg:flex-row lg:justify-between text-xs md:text-base">
                <div>
                  <p className="w-full text-xs font-extrabold md:text-base">Recommend the service and earn money</p>
                  <p className="text-color-primary">Read more...</p>
                </div>
                <div>
                  <div className="flex items-center gap-x-2">
                    <p>Your Balance:</p>
                    <p>0.00$ <Link href="/user/referral-history" className="text-color-primary">History of balance</Link></p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p>Your REF code</p>
                    <p>https//somerandomurl</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default profile;

profile.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
