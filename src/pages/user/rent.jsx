import UserDashboardLayout from "@/Components/UserDashboardLayout";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-hot-toast";
import RentedNumberHistory from "@/Components/RentedNumberHistory";

const Rent = () => {
  const url = process.env.NEXT_PUBLIC_BASE_URL + "/countries";
  const rentUrl = process.env.NEXT_PUBLIC_BASE_URL + "/rent/numbers";
  const [data, setData] = useState([]);
  let maxNameLength = 11;
  const [country, setCountry] = useState("");
  const [time, setTime] = useState("");
  const [count, setCount] = useState(1);
  const [fee, setFee] = useState(1);
  const [show, setShow] = useState(false);
  const [balance, setBalance] = useState(0);
  const [rentHistory, setRentHistory] = useState([]);

  const getBalance = async () => {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_BASE_URL + "/balance",
        {
          timeout: 30000,
          params: {
            userid: sessionStorage.getItem("id"),
          },
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
          },
        }
      );
      setBalance(response?.data?.data[0]?.balance);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(url, {
        timeout: 30000,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
        },
      });
      setData(response.data.countries);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  const getRentFee = async () => {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_BASE_URL + "/rentfees/country/duration",
        {
          timeout: 30000,
          params: {
            country: country || "nigeria",
            duration: time || "hour",
          },
        }
      );
      setFee(response?.data?.data[0]?.amount);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  const fetchRentHistory = async () => {
    try {
      const response = await axios.get(rentUrl, {
        timeout: 30000,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
        },
        params: {
          userid: sessionStorage.getItem("id"),
        },
      });
      setRentHistory(response.data.numbers);
    } catch (error) {
      toast.error(error?.response?.data.msg);
    }
  };

  const RentNumber = async () => {
    if (balance < rentFee) {
      toast.error("Insufficient balance. Please top up your account.");
      return null;
    }
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_BASE_URL + "/rent/number",
        {
          country: country,
          count: count,
          duration: time,
          amount: rentFee,
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
      fetchData();
      fetchRentHistory();
      toast.success(response?.data?.msg);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };
  useEffect(() => {
    fetchRentHistory();
  }, []);

  useEffect(() => {
    fetchData();
    getRentFee();
    getBalance();
  }, [country, time, url]);

  const rentFee = fee * count;

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-full w-full bg-color-bg_light">
      <div className="dashboard-instruction mx-auto max-w-5xl px-4 pb-8 pt-4">
        <h1 className="mb-4 text-center font-extrabold md:text-left">
          Rent new number
        </h1>
        <div className="dashboard-box rounded-3xl bg-color-white px-2 pb-10 shadow-[0px_4px_15px_rgba(37,39,86,0.15)] lg:px-4">
          <ol className="flex flex-col justify-between space-y-8 md:grid md:grid-cols-2 md:flex-wrap md:gap-5 md:space-y-0 lg:grid-cols-3 lg:space-x-1">
            {/* step 1 */}
            <li className="">
              <div className="mr-4">
                {/* title */}
                <div className="py-6 pl-4">
                  <span className="font-extrabold">1. Select your country</span>
                </div>

                {/* countries */}
                <div className="body">
                  <div className="country mb-4 px-2">
                    <div className="roll h-32 w-full overflow-hidden overflow-y-scroll scrollbar-thin scrollbar-track-[#0187ff1a] scrollbar-thumb-color-decor_blue">
                      <div className="h-32 w-full pr-2">
                        <table className="ml-0 w-full pl-4">
                          <tbody>
                            {data.map((country) => (
                              <tr
                                key={country.id}
                                className="cursor-pointer rounded-2xl bg-color-white hover:bg-color-bg_primary-500  active:bg-color-bg_primary-500"
                                onClick={() =>
                                  setCountry(country?.country_name)
                                }
                              >
                                <td className="flex w-full items-center justify-start py-1">
                                  <span>
                                    <Image
                                      src={`https://flagcdn.com/${country.country_code.toLowerCase()}.svg`}
                                      width={20}
                                      height={20}
                                      alt={country.country_name}
                                      className="ml-4 mr-2 flex w-8 items-center"
                                    />
                                  </span>
                                  <span className="text-xs font-medium md:text-base">
                                    {country.country_name.length > maxNameLength
                                      ? `${country.country_name.substring(
                                          0,
                                          maxNameLength
                                        )}...`
                                      : country.country_name}
                                  </span>
                                </td>
                                <td>
                                  <span className="text-xs text-gray-500">
                                    {country.country_code}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* step 2 */}
            <li className="px-4">
              <div className="flex flex-col">
                {/* Heading */}
                <div>
                  <div className="">
                    <h3 className="my-2 py-3 font-extrabold">
                      2. Set rent duration
                    </h3>
                  </div>
                </div>
                {/* Time */}
                <div className=" flex flex-col justify-between">
                  <div className="mb-2 flex w-full justify-evenly space-x-4">
                    <button
                      className="w-1/2 rounded-lg bg-color-bg_primary-500 py-2 text-sm active:border active:border-color-primary_darken active:text-color-primary md:text-base"
                      onClick={() => setTime("Hour")}
                    >
                      Hour
                    </button>
                    <button
                      className="w-1/2  rounded-lg bg-color-bg_primary-500 py-2 text-sm active:border active:text-color-primary md:text-base"
                      onClick={() => setTime("Day")}
                    >
                      Day
                    </button>
                  </div>
                  <div className="mb-2 flex w-full justify-evenly space-x-4">
                    <button
                      className="w-1/2  rounded-lg bg-color-bg_primary-500 py-2 text-sm active:border active:text-color-primary md:text-base"
                      onClick={() => setTime("Week")}
                    >
                      Week
                    </button>
                    <button
                      className="w-1/2  rounded-lg bg-color-bg_primary-500 py-2 text-sm active:border active:text-color-primary md:text-base"
                      onClick={() => setTime("Monthly")}
                    >
                      Month
                    </button>
                  </div>
                  <div className="mb-4  flex h-10 w-full justify-between rounded-lg bg-color-bg_primary-500 p-1 font-bold active:border active:text-color-primary">
                    <MinusCircleIcon
                      className="text-color-primary"
                      onClick={() =>
                        count <= 1 ? setCount(count) : setCount(count - 1)
                      }
                    />
                    <p className="text-xl">{count}</p>
                    <PlusCircleIcon
                      className="text-color-primary"
                      onClick={() => setCount(count + 1)}
                    />
                  </div>
                </div>
              </div>
            </li>

            {/* step 3 */}
            <li className="px-4 md:col-span-2 lg:col-span-1">
              <div className="flex flex-col items-center py-6 ">
                {/* Heading */}
                <div className="md:self-start lg:self-center">
                  <div className="lg:pl-0">
                    <h3 className="font-extrabold">3. Rent a number</h3>
                  </div>
                </div>
                {/* others */}
                <div className="mt-4 flex w-full flex-col items-center justify-center">
                  <button className="mb-4 w-full rounded-xl bg-color-bg_primary-500 px-4 py-2 text-sm md:w-48 md:text-base lg:w-full">
                    It will cost ${rentFee.toFixed(2)}
                  </button>
                  <button
                    className="md:32 group relative w-full overflow-hidden rounded-xl bg-color-primary px-12 py-2 text-base font-bold text-white md:w-48 md:px-16 md:text-xl lg:w-full"
                    onClick={() => {
                      RentNumber();
                      setShow(true);
                    }}
                  >
                    <span className="absolute left-0 top-0 mt-12 h-20 w-full rounded-3xl bg-color-primary_black transition-all duration-300 ease-in-out group-hover:-mt-4"></span>
                    <span className="relative">Rent</span>
                  </button>
                </div>
              </div>
            </li>
          </ol>
        </div>
        <div className="mt-8">
          <h1 className="mb-4 text-center font-extrabold md:text-left">
            My Numbers and SMS
          </h1>
          <RentedNumberHistory rentHistory={rentHistory} fetchRentHistory={fetchRentHistory} />
        </div>
      </div>
    </div>
  );
};

export default Rent;

Rent.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
