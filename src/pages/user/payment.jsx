import UserDashboardLayout from "@/Components/UserDashboardLayout";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Visa from "@/assets/visa.png";
import PiggyBank from "@/assets/piggy-bank.svg";
import { useRouter } from "next/router";
import axios from "axios";
import Coinbase from "@/assets/coinbase.png";
import Usdt from "@/assets/usdt.png";
import { toast } from "react-hot-toast";
// import { CheckCircleIcon } from "@heroicons/24/outline";
import { set } from "react-hook-form";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const usePaymentState = () => {
  const [amount, setAmount] = useState(10);
  const [active, setActive] = useState(false);
  const [method, setMethod] = useState("stripe");

  return { amount, setAmount, active, setActive, method, setMethod };
};

const usePaymentHandlers = () => {
  const router = useRouter();

  const handleCheckOut = async (amount) => {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_BASE_URL + "/api/stripe/checkout",
        {
          amount: amount,
        },
        {
          timeout: 30000,
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
      toast.error(error?.response?.data.msg || "No response from the server.");
    }
  };

  const handleCoinbaseCheckOut = async () => {
    // console.log("coinbase");
    toast.success("coinbase");
  };

  return { handleCheckOut, handleCoinbaseCheckOut };
};

const Payment = () => {
  const { amount, setAmount, active, setActive, method, setMethod } =
    usePaymentState();
  const { handleCheckOut, handleCoinbaseCheckOut } = usePaymentHandlers();
  const router = useRouter();
  const url = process.env.NEXT_PUBLIC_BASE_URL + "/coupon";
  const [couponDetails, setCouponDetails] = useState();
  const [payable, setPayable] = useState(0);

  const validateCoupon = (couponName) => {
    setTimeout(async () => {
      try {
        const response = await axios.get(url, {
          params: {
            coupon_name: couponName,
          },
        });
        setCouponDetails(response.data.coupons.result);
        // toast.success(response.data.coupons.result.status);
        // console.log(response.data);
      } catch (error) {
        setCouponDetails(error.response.data);
        // toast.error(error.response.data.msg);
        // console.log(error.response.data.msg);
      }
    }, 700);
  };

  const useCoupon = async () => {

    if(couponDetails?.coupon_value){
      const posted={
        coupon_name: couponDetails.coupon_name,
        user_id: sessionStorage.getItem("id"),
        new_balance: couponDetails.coupon_value
      }
      console.log(posted)
      try {
        const response = await axios.post(url, posted);
       
        toast.success(response.data.msg);
        setTimeout(()=>{
 window.location.reload()
        },1000)
       
      } catch (error) {
        console.log(error);
      }
    }else{
      toast.error(couponDetails?.msg||'Enter a valid coupon');
    }
   
  };

  function Coupon(name) {
    if (name == "") {
      setBtnActive(true);
    } else setBtnActive(false);
    if (name !== "bella") {
      return "no coupon found";
    }
    return {
      coupon_name: "bella",
      coupon_value: 23,
      expiration_date: " 24/8/23",
      status: notUsed,
    };
    // return {coupon_name: "bella", coupon_value: 23, expiration_date:" 24/8/23" , status: notUsed};
  }

  useEffect(() => {
    if (couponDetails?.coupon_value) {

      setPayable(Number(couponDetails?.coupon_value));

    } else {
      setPayable(0);
    }
  }, [couponDetails?.coupon_value, amount]);

  const [btnActive, setBtnActive] = useState(true);
  function InputChange() {
    setBtnActive(!btnActive);
  }

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
                    className={`flex h-20 w-32 flex-col items-center justify-center bg-white shadow-lg ${method === "stripe"
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
                    className={`flex h-20 w-32 flex-col items-center justify-center bg-white shadow-lg ${method === "coinbase"
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
                    className={`flex h-20 w-32 flex-col items-center justify-center bg-white shadow-lg ${method === "usdt"
                      ? "rounded-md border-4 border-blue-500"
                      : "border-0"
                      }`}
                    onClick={() => {
                      setMethod("usdt");
                    }}
                  >
                    <Image src={Usdt} alt="Payment" className="" />


                  </div>
                  <div
                    className={`flex h-20 w-32 flex-col items-center justify-center bg-white shadow-lg ${method === "coupon"
                      ? "rounded-md border-4 border-blue-500"
                      : "border-0"
                      }`}
                    onClick={() => {
                      setMethod("coupon");
                    }}
                  >
                    {/* <Image src={Usdt} alt="Payment" className="" /> */}
                    <p>Use Coupon</p>


                  </div>
                </div>
              </div>
              {method !== 'coupon' &&
                <div>
                  <h1 className="mb-5 text-lg font-bold">
                    2. Specify top up amount
                  </h1>
                  <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <div
                      onClick={() => setAmount(10)}
                      className={`rounded-md bg-color-bg_primary-500 px-16 py-2 shadow-md ${amount === 10
                        ? "rounded-md border-4 border-blue-500"
                        : "border-0"
                        }`}
                    >
                      $10
                    </div>
                    <div
                      onClick={() => setAmount(50)}
                      className={`rounded-md bg-color-bg_primary-500 px-16 py-2 shadow-md ${amount === 50
                        ? "rounded-md border-4 border-blue-500"
                        : "border-0"
                        }`}
                    >
                      $50
                    </div>
                    <div
                      className={`rounded-md bg-color-bg_primary-500 px-16 py-2 shadow-md ${amount === 100 ? "border-4 border-blue-500" : "border-0"
                        }`}
                      onClick={() => setAmount(100)}
                    >
                      $100
                    </div>
                  </div>
                  <input
                    placeholder="Other amount"
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                    className="mb-5 w-full rounded-md bg-color-bg_primary-500 px-3 py-2 lg:w-96"
                  />
                </div>}

              {method === 'coupon' &&
                <div>
                  <h3 className="mb-5 text-lg font-bold">
                    2. Add coupon code here
                  </h3>
                  <input
                    placeholder="Enter coupon code"
                    onChange={(e) => {
                      validateCoupon(e.target.value);
                    }}
                    className="mb-5 w-full rounded-md bg-color-bg_primary-500 px-3 py-2 lg:w-96"
                  />
                  {couponDetails && (
                    <p className="flex items-center text-sm text-color-primary_darken">
                      {couponDetails.status}
                      {/* <CheckCircleIcon class="h-4 w-4 text-green-600" /> */}
                    </p>
                  )}
                  {couponDetails && <p>{couponDetails.msg}</p>}
                </div>}

              <button
                className="group relative overflow-hidden rounded-md bg-color-primary px-2 py-2 text-white lg:w-40"
                onClick={() => {
                  if (method === "stripe") {
                    handleCheckOut(amount);
                  } else if (method === "coinbase") {
                    handleCoinbaseCheckOut();
                  } else if (method === "coupon") {
                    useCoupon();
                  } else {
                    console.log("nothing");
                  }
                }}
              >
                <span className="absolute left-0 top-0 mt-12 h-20 w-full rounded-3xl bg-color-primary_black transition-all duration-300 ease-in-out group-hover:-mt-4"></span>
                <span className="relative">Pay ${payable}</span>
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

export default Payment;

Payment.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
