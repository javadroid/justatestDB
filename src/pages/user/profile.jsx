import UserDashboardLayout from "@/Components/UserDashboardLayout";
import React from "react";

const profile = () => {
  return (
    <section>
      <div className="pl-10 pr-5 pt-10 lg:pl-4 lg:pr-2">
        <h1 className="mb-5 text-center text-2xl font-bold">Profile</h1>
        <div className="h-full  bg-white shadow-lg md:w-[80vw] lg:w-full xl:w-[80vw]">
          <div className="flex  flex-col px-4 lg:flex-row lg:items-baseline lg:gap-72">
            <div className="flex flex-grow flex-col">
              <div className="mb-5 flex justify-between">
                <p>Email:</p>
                <p className="font-bold">tereti7605@fitzola.com</p>
              </div>
              <div className="mb-3 flex justify-between">
                <p>Balance:</p>
                <p className="font-semibold">0$</p>
              </div>
              <button className="mb-3 w-full rounded-md bg-yellow-400 py-2">
                Top Up
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
                  <button className="mb-6 mt-2 rounded-md bg-color-primary px-14 py-2 text-white">
                    Refresh
                  </button>
                </div>
              </div>
              <p className="text-color-primary">Payment History</p>
            </div>
            <div className="mt-8 flex flex-grow flex-col gap-y-3">
              <h2 className="text-center text-2xl font-bold">
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
              <button className="rounded-md bg-color-primary px-2 py-2 text-white ">
                Change
              </button>
            </div>
          </div>
          <div className="px-5 py-10">
            <div className="rounded-md bg-color-bg_primary-500 px-8 py-4">
              <h2 className="mb-5 text-xl font-bold">Referal Program</h2>
              <div className="flex flex-col gap-y-8 lg:flex-row lg:justify-between">
                <div>
                  <p className="w-full">Recommend the service and earn money</p>
                  <p className="text-color-primary">Read more...</p>
                </div>
                <div>
                  <div className="flex items-center gap-x-2">
                    <p>Your Balance:</p>
                    <p>0.00$ History of balance</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p>Your Balance:</p>
                    <p>0.00$ History of balance</p>
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
