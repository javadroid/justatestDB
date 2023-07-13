import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import rus from "../assets/flags/Russia.svg";
import vib from "../assets/socials/Viber.svg";
import { useState, useEffect } from "react";
import CopyToClipboard from "./Copy";
import useHistoryStore from "@/store/HistoryStore";
import axios from "axios";
import { toast } from "react-hot-toast";
import { set } from "react-hook-form";

const History = () => {
  const historyData = useHistoryStore((state) => state.historyData);
  const setHistoryData = useHistoryStore((state) => state.setHistoryData);
  const histories = [
    {
      title: "Bought",
    },
    {
      title: "Service",
    },
    {
      title: "Country",
    },
    {
      title: "Phone",
    },
    {
      title: "Price",
    },
    {
      title: "Message",
    },
  ];
  const [data, setData] = useState(historyData);
  const [isLoading, setIsLoading] = useState(true);
  // const token = sessionStorage.getItem("authToken");

  const cancelService = async (id) => {
    const url =
      process.env.NEXT_PUBLIC_BASE_URL + `/cancel_bought_app?appId=${id}`;
    try {
      const response = await axios.put(url, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
        },
      });
      setHistoryData();
      toast.success(response.data.msg);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  useEffect(() => {
    setHistoryData();
  }, [setHistoryData]);

  useEffect(() => {
    setData(historyData);
    setIsLoading(false);
  }, [historyData]);

  useEffect(() => {
    if (data.length == 0) {
      return;
    }
    const THIRTY_SECONDS = 30 * 1000;
    const interval = setInterval(() => {
      const newData = data.map((item) => {
        if (item.message !== "Receive SMS") {
          return item;
        }
        let currentTime = Date.now();
        const TWENTY_MINUTES = 20 * 60 * 1000;
        const PURCHASED_DATE = new Date(item.purchased_date).getTime();
        item.cancelBtnActive =
          new Date(PURCHASED_DATE).getTime() + TWENTY_MINUTES > currentTime;
        return item;
      });
      setData(newData);
      // console.log("first iteration");
    }, THIRTY_SECONDS);

    return () => clearInterval(interval);
  }, [data]);

  if (data.length == 0) {
    return (
      <div>
        <h2 className="text-center font-extrabold md:pl-8 md:text-left md:text-xl">
          History
        </h2>
        <div className="relative mx-auto mb-8 flex max-w-3xl items-center justify-center rounded-3xl bg-color-white py-6 shadow-[0px_4px_15px_rgba(37,39,86,0.15)] lg:max-w-4xl">
          No transaction history yet
        </div>
      </div>
    );
  }

  return (
    <div id="transactions">
      <div>
        <h2 className="text-center font-extrabold md:pl-8 md:text-left md:text-xl">
          History
        </h2>
      </div>
      <div className="px-2 pt-8">
        <div className="relative mx-auto mb-8 max-w-3xl rounded-3xl bg-color-white pt-6 shadow-[0px_4px_15px_rgba(37,39,86,0.15)] lg:max-w-4xl">
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
                    <p className="text-center text-xl">Loading...</p>
                  ) : (
                    <div className="roll h-full max-h-[700px] w-full overflow-hidden overflow-y-auto scrollbar-thin scrollbar-track-[#0188ff2a] scrollbar-thumb-color-decor_blue lg:max-h-96">
                      {data
                        .sort(function (a, b) {
                          return b.id - a.id;
                        })
                        .map((data, index) => (
                          <div
                            className="table-row rounded-xl pb-4 shadow shadow-color-border_light md:rounded-none md:shadow-none"
                            key={index}
                          >
                            <div className="td bought md:py-2">
                              <h6 className="font-medium text-color-table_gray">
                                Bought
                              </h6>
                              <p>{data.purchased_date}</p>
                            </div>
                            <div className="td service">
                              <h6 className="font-medium text-color-table_gray">
                                Service
                              </h6>
                              <p className="flex items-center">
                                <Image src={vib} alt="" className="mr-1" />
                                {data.user_id}
                              </p>
                            </div>
                            <div className="td country">
                              <h6 className="font-medium text-color-table_gray">
                                Country
                              </h6>
                              <p className="flex items-center">
                                <Image
                                  src={rus}
                                  alt=""
                                  width={20}
                                  className="mr-2"
                                />
                                {data.country}
                              </p>
                            </div>
                            <div className="td phone">
                              <h6 className="font-medium text-color-table_gray">
                                Phone
                              </h6>
                              <p className="flex items-center">
                                {data.phone_number}
                                <CopyToClipboard textToCopy={data.phone_number}>
                                  <ClipboardDocumentCheckIcon
                                    width={20}
                                    className="ml-3 cursor-pointer text-color-primary"
                                  />
                                </CopyToClipboard>
                              </p>
                            </div>
                            <div className="td price">
                              <h6 className="font-medium text-color-table_gray">
                                Price
                              </h6>
                              <p className="lg:text-center">{data.price}</p>
                            </div>
                            <div className="td message">
                              <h6 className="font-medium text-color-table_gray">
                                Message
                              </h6>
                              {data.message === "Receive SMS" ? (
                                <div className="flex flex-col items-center justify-center gap-5">
                                  <button className="group relative cursor-pointer overflow-hidden rounded-3xl bg-color-primary py-2 text-color-white md:rounded-md">
                                    <span className="absolute left-0 top-0 mt-12 h-20 w-full rounded-3xl bg-color-primary_black transition-all duration-300 ease-in-out group-hover:-mt-4"></span>
                                    <span className="relative">
                                      Receive sms
                                    </span>
                                  </button>
                                  {data.cancelBtnActive ? (
                                    <button
                                      onClick={() =>
                                        cancelService(data.application_id)
                                      }
                                      className="group relative cursor-pointer overflow-hidden rounded-3xl bg-[rgba(255,67,130,.1)] py-2 font-bold text-color-api-red md:rounded-md"
                                    >
                                      <span className="absolute left-0 top-0 mt-12 h-20 w-full rounded-3xl bg-inherit transition-all duration-300 ease-in-out group-hover:-mt-4"></span>
                                      <span className="relative">
                                        Cancel Activation
                                      </span>
                                    </button>
                                  ) : null}
                                </div>
                              ) : data.message !== "" ? (
                                <button className="group relative cursor-pointer overflow-hidden rounded-3xl bg-[rgba(255,67,130,.1)] py-2 text-color-api-red md:rounded-md">
                                  <span className="absolute left-0 top-0 mt-12 h-20 w-full rounded-3xl bg-inherit transition-all duration-300 ease-in-out group-hover:-mt-4"></span>
                                  <span className="relative">
                                    {data.message}
                                  </span>
                                </button>
                              ) : (
                                <button className="group relative cursor-pointer overflow-hidden rounded-3xl bg-[rgba(122,107,248,0.1)] py-2 text-color-api-red md:rounded-md">
                                  <span className="absolute left-0 top-0 mt-12 h-20 w-full rounded-3xl bg-inherit transition-all duration-300 ease-in-out group-hover:-mt-4"></span>
                                  <span className="relative">233</span>
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                    </div>
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

export default History;
