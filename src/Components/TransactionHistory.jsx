import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import rus from "../assets/flags/Russia.svg";
import vib from "../assets/socials/Viber.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import CopyToClipboard from "./Copy";

const History = () => {
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

  const url = "http://161.35.218.95:3000/api/rent/numbers";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
        },
        params: {
          userid: sessionStorage.getItem("id"),
        },
      });
      setData(response.data.numbers);
      setIsLoading(false);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
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
                    <p>Loading...</p>
                  ) : (
                    <>
                      {data.map((data, index) => (
                        <div
                          className="table-row rounded-xl pb-4 shadow-[0_0_12px_-10px] md:rounded-none md:shadow-none"
                          key={index}
                        >
                          <div className="td bought md:py-2">
                            <h6 className="font-medium text-color-table_gray">
                              Bought
                            </h6>
                            <p>{data.rented_date}</p>
                          </div>
                          <div className="td service">
                            <h6 className="font-medium text-color-table_gray">
                              Service
                            </h6>
                            <p className="flex items-center">
                              <Image src={vib} alt="" className="mr-1" />
                              {data.userid}
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
                              {data.rented_number}
                              <CopyToClipboard textToCopy={data.rented_number}>
                                <ClipboardDocumentCheckIcon
                                  width={20}
                                  className="ml-3 text-color-primary cursor-pointer"
                                />
                              </CopyToClipboard>
                            </p>
                          </div>
                          <div className="td price">
                            <h6 className="font-medium text-color-table_gray">
                              Price
                            </h6>
                            <p>{data.amount}</p>
                          </div>
                          <div className="td message">
                            <h6 className="font-medium text-color-table_gray">
                              Message
                            </h6>
                            <p className="group relative cursor-pointer overflow-hidden rounded-3xl bg-[rgba(255,67,130,.1)] py-2 text-color-api-red md:rounded-md">
                              <span className="absolute left-0 top-0 mt-12 h-20 w-full rounded-3xl bg-inherit transition-all duration-300 ease-in-out group-hover:-mt-4"></span>
                              <span className="relative">{data.status}</span>
                            </p>
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

export default History;
