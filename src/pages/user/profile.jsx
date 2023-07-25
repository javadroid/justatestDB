import UserDashboardLayout from "@/Components/UserDashboardLayout";
import { CreditCardIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import ClipboardJS from "clipboard";
import CopyToClipboard from "@/Components/Copy";

const Profile = () => {
  var instance = axios.create({
    validateStatus: function (status) {
      return status >= 200 && status < 300;
    },
  });

  useEffect(() => {
    console.log(sessionStorage.length)
    const getBalance = async () => {
      const response = await Promise.all([
        instance.get(process.env.NEXT_PUBLIC_BASE_URL + "/balance", {
          timeout: 30000,
          params: {
            userid: sessionStorage.getItem("id"),
          },
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
          },
        }),
        instance.get(process.env.NEXT_PUBLIC_BASE_URL + "/user", {
          timeout: 30000,
          params: {
            userid: sessionStorage.getItem("id"),
          },
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
          },
        }),
      ]);
      setBalance(Number(response[0].data?.data[0]?.balance).toFixed(2));
      setUserData(response[1].data?.user);
    };
    getBalance();
  }, [instance]);

  const [balance, setBalance] = useState(0);
  const [userData, setUserData] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const password = await instance.put(
        process.env.NEXT_PUBLIC_BASE_URL + "/change/password",
        {
          newPassword: data.newPassword,
          repeat_newPassword: data.repeat_newPassword,
        },
        {
          params: {
            userid: sessionStorage.getItem("id"),
          },
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
          },
        }
      );
      toast.success(password.data.msg);
    } catch (error) {
      toast.error(error?.response?.data.msg || "No response from the server.");
    }
  };

  const handleApiKeyChange = async () => {
    try {
      const apiChange = await instance.put(
        process.env.NEXT_PUBLIC_BASE_URL + "/user/changeapikey",
        {},
        {
          params: {
            userid: sessionStorage.getItem("id"),
          },
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
          },
        }
      );
      toast.success(apiChange.data.msg);
      window.location.reload();
    } catch (error) {
      toast.error(error?.response?.data.msg || "No response from the server.");
    }
  };

  return (
    <section>
      <div className="bg-color-bg_light pb-8 pt-10 lg:pl-4 lg:pr-2">
        <h1 className="mb-5 text-center text-2xl font-bold">Profile</h1>
        <div className="mx-2 px-2 h-full rounded-xl bg-white shadow-lg w-full lg:max-w-3xl lg:mx-auto xl:max-w-5xl">
          <div className="flex flex-col lg:flex-row lg:items-baseline lg:gap-72">
            <div className="flex flex-grow flex-col px-2">
              <div className="my-5 flex justify-between">
                <p>Email:</p>
                <p className="font-bold">{userData.email}</p>
              </div>
              <div className="mb-3 flex justify-between">
                <p>Balance:</p>
                <p className="font-semibold">${balance}</p>
              </div>
              <button className="group relative flex items-center justify-center space-x-2 overflow-hidden rounded-2xl bg-color-accent px-4 py-2 text-black hover:text-white">
                <span className="absolute left-0 top-0 mt-16 h-20 w-full rounded-3xl bg-color-decor_orange transition-all duration-300 ease-in-out group-hover:-mt-4"></span>
                <div>
                  <CreditCardIcon className="relative h-6 w-6 text-black group-hover:rotate-45 group-hover:text-color-white" />
                </div>
                <div className="relative flex flex-col items-start">
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
                  <p className="text-sm font-semibold">{userData.apikey}</p>
                  <button
                    className="group relative mb-6 mt-2 overflow-hidden rounded-md bg-color-primary px-14 py-2 text-white"
                    onClick={handleApiKeyChange}
                  >
                    <span className="absolute left-0 top-0 mt-12 h-20 w-full rounded-3xl bg-color-primary_black transition-all duration-300 ease-in-out group-hover:-mt-4"></span>
                    <span className="relative">Refresh</span>
                  </button>
                </div>
              </div>
              <Link href="/user/payment-history" className="text-color-primary">
                Payment History
              </Link>
            </div>
            <div className="mt-8 flex flex-grow flex-col gap-y-3 px-4 md:px-0">
              <h2 className="text-center font-bold md:text-2xl">
                Change Password
              </h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-y-5"
              >
                <input
                  {...register("newPassword", { required: true })}
                  type="text"
                  placeholder="Password"
                  className="rounded-md border border-black px-2 py-2"
                />
                <input
                  {...register("repeat_newPassword", { required: true })}
                  type="text"
                  placeholder="Repeat Password"
                  className="rounded-md border border-black px-2 py-2"
                />
                <button className="group relative overflow-hidden rounded-md bg-color-primary px-2 py-2 text-white">
                  <span className="absolute left-0 top-0 mt-12 h-20 w-full rounded-3xl bg-color-primary_black transition-all duration-300 ease-in-out group-hover:-mt-4"></span>
                  <span className="relative">Change</span>
                </button>
              </form>
            </div>
          </div>
          <div className="px-2 py-10">
            <div className="rounded-md bg-color-bg_primary-500 px-2 py-4">
              <h2 className="mb-5 text-center font-bold md:text-xl">
                Referal Program
              </h2>
              <div className="flex flex-col gap-y-8 text-xs md:text-base  ">
                <div>
                  <p className="w-full text-xs font-extrabold md:text-base">
                    Recommend the service and earn money
                  </p> 
                  <p className="text-color-primary">Read more...</p>
                </div>
                <div>
                  <div className="flex items-center gap-x-2">
                    <p>Your referral balance:</p>
                    <p>
                      {'0.00'}${" "}
                      <Link
                        href="/user/referral-history"
                        className="text-color-primary"
                      >
                        History of balance
                      </Link>
                    </p>
                  </div>
                  <div className=" ">
                    <p>Your REF code: {userData.ref_code}</p>
                    <br />
                    <p> {`${window.location.host}/signup/${userData.ref_code}`}</p>
                    
                    <CopyToClipboard textToCopy={`${window.location.host}/signup/${userData.ref_code}`}>
                   
                <button className="btn btn-primary" >Copy referrer link</button>
              </CopyToClipboard>
                    {/* */}
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

export default Profile;

Profile.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
