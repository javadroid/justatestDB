import UserDashboardLayout from "@/Components/UserDashboardLayout";
import Image from "next/image";
import React from "react";
import Visa from "@/assets/visa.png";
import PiggyBank from "@/assets/piggy-bank.svg";

const payment = () => {
  return (
    <section>
      <h1 className="ml-3 mt-6 text-xl font-bold">Top up your balance</h1>
      <div className="pl-10 pr-5 pt-10 lg:flex lg:pl-4 lg:pr-2 ">
        <div className="h-full rounded-2xl  bg-white py-5 shadow-lg md:w-[80vw] lg:w-full xl:w-[80vw]">
          <div className="flex flex-col px-4 lg:items-baseline">
            <div className="flex flex-grow flex-col gap-y-6">
              <div>
                <h1 className="text-lg font-bold">
                  1. Choose a payment method
                </h1>
                <div className=" grid grid-cols-2 justify-items-center gap-4 px-10 lg:grid-cols-5">
                  <div className="flex h-20 w-32 flex-col items-center justify-center bg-white shadow-lg">
                    <Image src={Visa} alt="Payment" className="" />
                  </div>
                  <div className="flex h-20 w-32 flex-col items-center justify-center bg-white shadow-lg">
                    <Image src={Visa} alt="Payment" className="" />
                  </div>
                  <div className="flex h-20 w-32 flex-col items-center justify-center bg-white shadow-lg">
                    <Image src={Visa} alt="Payment" className="" />
                  </div>
                  <div className="flex h-20 w-32 flex-col items-center justify-center bg-white shadow-lg">
                    <Image src={Visa} alt="Payment" className="" />
                  </div>
                  <div className="flex h-20 w-32 flex-col items-center justify-center bg-white shadow-lg">
                    <Image src={Visa} alt="Payment" className="" />
                  </div>
                  <div className="flex h-20 w-32 flex-col items-center justify-center bg-white shadow-lg">
                    <Image src={Visa} alt="Payment" className="" />
                  </div>
                  <div className="col-span-2 flex h-20 w-32 flex-col items-center justify-center justify-self-center bg-white shadow-lg lg:justify-self-start">
                    <Image src={Visa} alt="Payment" className="" />
                  </div>
                </div>
              </div>
              <div>
                <h1 className="mb-5 text-lg font-bold">
                  2. Specify top up amount
                </h1>
                <div className=" mb-5 grid grid-cols-2 gap-4 lg:grid-cols-3">
                  <button className="rounded-md bg-color-bg_primary-500 px-16 py-2 shadow-md">
                    $10
                  </button>
                  <button className="rounded-md bg-color-bg_primary-500 px-16 py-2 shadow-md">
                    $50
                  </button>
                  <button className="rounded-md bg-color-bg_primary-500 px-16 py-2 shadow-md">
                    $100
                  </button>
                </div>
                <input
                  placeholder="Other amount"
                  className="mb-5 w-full rounded-md bg-color-bg_primary-500 px-3 py-2 lg:w-96"
                />
              </div>
              <button className="rounded-md bg-color-primary px-2 py-2 text-white lg:w-40">
                pay
              </button>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={PiggyBank}
            alt="piggy bank svg"
            className=" hidden lg:inline-block lg:h-96 lg:w-80"
          />
        </div>
      </div>
    </section>
  );
};

export default payment;

payment.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
