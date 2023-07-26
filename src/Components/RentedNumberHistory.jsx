import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Link from "next/link";
import CopyToClipboard from "./Copy";

const RentedNumberHistory = ({ rentHistory, fetchRentHistory }) => {
  const histories = [

    {
      title: "Country",
    },
    {
      title: "Date",
    },
    {
      title: "Rent Time",
    },
    {
      title: "Number",
    },
    {
      title: "Status",
    },
  ];

  const url = process.env.NEXT_PUBLIC_BASE_URL + "/rent/numbers";
  const [data, setData] = useState(rentHistory);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    setData(rentHistory);
  }, [url, rentHistory]);

  const CancelRent = async (number, amount, rentedId) => {
    console.log(number, amount, rentedId)
    try {
      let userId = sessionStorage.getItem("id");
      const Cancel = await axios.put(
        process.env.NEXT_PUBLIC_BASE_URL +
        `/number/cancel?userid=${userId}`,
        {
          rented_number:number,
          rented_amount:amount,
          rentedId:rentedId
        },
        {
          timeout: 30000,
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
          },
        }
      );
      fetchRentHistory();
      toast.success(Cancel.data.msg);
    } catch (error) {
      toast.error(error?.response?.data.msg);
    }
  };

  const CancelBtn = (rentedDate) => {
    let currentTime = Date.now();
    const TWENTY_MINUTES = 20 * 60 * 1000;
    const PURCHASED_DATE = new Date(rentedDate).getTime();
    if (PURCHASED_DATE + TWENTY_MINUTES >= currentTime) {
      return true;
    } else return false;
  };

  const handleClick = (rentId) => {
    sessionStorage.setItem("rentid", rentId);
  };

  return (
    <div>
      <div>
        <h2 className="text-center font-extrabold md:pl-8 md:text-left md:text-xl">
          History
        </h2>
      </div>
      <div className="px-2 pt-8">
        <div className="relative mx-auto mb-8 h-[500px] max-w-3xl overflow-y-scroll rounded-3xl bg-color-white pt-6 shadow-[0px_4px_15px_rgba(37,39,86,0.15)] lg:max-w-4xl">
          <div className="px-2">
            <div className="wrapper pb-10">
              <div className="table overflow-hidden text-sm md:text-base lg:px-4">
                <div className="header-row">
                  {histories.map((history, index) => (
                    <div key={index} className="th text-color-table_gray">
                      <p>{history.title}</p>
                    </div>
                  ))}
                </div>
                <div className="table-body lg:text-xs">
                  {isLoading ? (
                    <p className="py-8 text-center">Loading...</p>
                  ) : (
                    <>
                      {data
                        .sort(function (a, b) {
                          return b.id - a.id;
                        })
                        .map((data, index) => (
                          <div
                            className="table-row rounded-xl pb-4 shadow-[0_0_12px_-10px] md:rounded-none md:shadow-none"
                            key={index}
                          >
                            <div className="td bought md:py-2">
                              <h6 className="font-medium text-color-table_gray">
                                Bought
                              </h6>
                              <p>{data.country}</p>
                            </div>
                            <div className="td service">
                              <h6 className="font-medium text-color-table_gray">
                                Service
                              </h6>
                              <p className="flex items-center">
                                {data.rented_date}
                              </p>
                            </div>
                            <div className="td country">
                              <h6 className="font-medium text-color-table_gray">
                                Country
                              </h6>
                              <p className="flex items-center">
                                {data.duration}
                              </p>
                            </div>
                            <div className="td phone">
                              <h6 className="font-medium text-color-table_gray">
                                Phone
                              </h6>
                              <p className="flex items-center">
                                {data.rented_number}
                                <CopyToClipboard
                                  textToCopy={data.rented_number}
                                >
                                  <ClipboardDocumentCheckIcon
                                    width={20}
                                    className="cursor-pointer text-color-primary"
                                  />
                                </CopyToClipboard>
                              </p>
                            </div>
                            <div className="td price">
                              <h6 className="font-medium text-color-table_gray">
                                Price
                              </h6>
                              <p>{data.status}</p>
                            </div>
                            <div className="td message">
                              <h6 className="font-medium text-color-table_gray">
                                Message
                              </h6>
                              <div className="flex flex-col gap-y-2">
                                <Link
                                  href={"/user/arent/" + data.rentId}
                                  className="w-full rounded-md bg-color-primary py-3 text-center font-extrabold text-white"
                                  onClick={() => {
                                    handleClick(data.rentId);
                                  }}
                                >
                                  Read More
                                </Link>
                                {CancelBtn(data.rented_date) &&
                                  data.status !== "Cancelled" && (
                                    <button
                                      className="w-full rounded-md bg-rose-500 py-3 font-extrabold text-white"
                                      onClick={() => {
                                        CancelRent(
                                          data.rented_number,
                                          data.amount, data.rentId
                                        );
                                      }}
                                    >
                                      Cancel
                                    </button>
                                  )}
                              </div>
                            </div>
                          </div>
                        ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentedNumberHistory;
