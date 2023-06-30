import UserDashboardLayout from "@/Components/UserDashboardLayout";
import Image from "next/image";
import React, { useState } from "react";
import Visa from "@/assets/visa.png";
import PiggyBank from "@/assets/piggy-bank.svg";
import { useRouter } from "next/router";
import axios from "axios";
import Coinbase from "@/assets/coinbase.png";
import Usdt from "@/assets/usdt.png";
import { toast } from "react-hot-toast";

const payment = () => {
  const [amount, setAmount] = useState(10);
  const [active, setActive] = useState(false);
  const router = useRouter();

  const [method, setMethod] = useState("stripe");

  const handleCheckOut = async () => {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_BASE_URL + "/api/stripe/checkout",
        {
          amount: amount,
        },
        {
          params: {
            userId: sessionStorage.getItem("id"),
          },
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
          },
        }
      );
      router.push(response?.data?.url);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCoinbaseCheckOut = async () => {
    console.log("coinbase");
    toast.success("coinbase");
    // try {
    //   const response = await axios.post(
    //     process.env.NEXT_PUBLIC_BASE_URL + "/api/stripe/checkout",
    //     {
    //       amount: amount,
    //     },
    //     {
    //       params: {
    //         userId: sessionStorage.getItem("id"),
    //       },
    //       headers: {
    //         Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
    //       },
    //     }
    //   );
    //   router.push(response?.data?.url);
    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <section>
      <h1 className="ml-3 mt-6 text-xl font-bold">Top up your balance</h1>
      <div className="w-full max-w-4xl px-4 pt-10 lg:flex xl:mx-auto">
        <div className="mb-16 h-full rounded-2xl bg-white py-5 shadow-lg lg:w-full xl:w-[80vw] ">
          <div className="flex flex-col px-4 lg:items-baseline">
            <div className="flex flex-grow flex-col gap-y-6">
              <div>
                <h1 className="text-lg font-bold">
                  1. Choose a payment method
                </h1>
                <div className="mt-4 grid grid-cols-1 justify-items-center gap-4 px-10 md:grid-cols-2 lg:grid-cols-3">
                  <div
                    className={`flex h-20 w-32 flex-col items-center justify-center bg-white shadow-lg ${
                      method === "stripe"
                        ? "rounded-md border-4 border-blue-500"
                        : "border-0"
                    }`}
                    onClick={() => {
                      setMethod("stripe");
                    }}
                  >
                    <Image src={Visa} alt="Payment" className="" />
                  </div>
                  <div
                    className={`flex h-20 w-32 flex-col items-center justify-center bg-white shadow-lg ${
                      method === "coinbase"
                        ? "rounded-md border-4 border-blue-500"
                        : "border-0"
                    }`}
                    onClick={() => {
                      setMethod("coinbase");
                    }}
                  >
                    <Image src={Coinbase} alt="Payment" className="" />
                  </div>
                  <div
                    className={`flex h-20 w-32 flex-col items-center justify-center bg-white shadow-lg ${
                      method === "usdt"
                        ? "rounded-md border-4 border-blue-500"
                        : "border-0"
                    }`}
                    onClick={() => {
                      setMethod("usdt");
                    }}
                  >
                    <Image src={Usdt} alt="Payment" className="" />
                  </div>
                  {/* <div className="flex h-20 w-32 flex-col items-center justify-center bg-white shadow-lg">
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
                  </div> */}
                </div>
              </div>
              <div>
                <h1 className="mb-5 text-lg font-bold">
                  2. Specify top up amount
                </h1>
                <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div
                    onClick={() => setAmount(10)}
                    className="rounded-md bg-color-bg_primary-500 px-16 py-2 shadow-md"
                  >
                    $10
                  </div>
                  <div
                    onClick={() => setAmount(50)}
                    className="rounded-md bg-color-bg_primary-500 px-16 py-2 shadow-md"
                  >
                    $50
                  </div>
                  <div
                    className="rounded-md bg-color-bg_primary-500 px-16 py-2 shadow-md"
                    onClick={() => setAmount(100)}
                  >
                    $100
                  </div>
                </div>
                <input
                  placeholder="Other amount"
                  className="mb-5 w-full rounded-md bg-color-bg_primary-500 px-3 py-2 lg:w-96"
                />
              </div>
              <button
                className="group relative overflow-hidden rounded-md bg-color-primary px-2 py-2 text-white lg:w-40"
                onClick={() => {
                  if (method === "stripe") {
                    handleCheckOut();
                  }
                  if (method === "coinbase") {
                    handleCoinbaseCheckOut();
                  } else {
                    console.log("nothing");
                  }
                }}
              >
                <span className="absolute left-0 top-0 mt-12 h-20 w-full rounded-3xl bg-color-primary_black transition-all duration-300 ease-in-out group-hover:-mt-4"></span>
                <span className="relative">Pay</span>
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
