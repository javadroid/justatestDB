import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const RentedNumberHistory = () => {
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

  const url = "http://161.35.218.95:3000/api/rent/numbers";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hidden, setHidden] = useState(false);

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
      console.log(response);
      setData(response.data.numbers);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // histories.map().sor
  console.log(
    data.sort(function (a, b) {
      //console.log(b.id);
      return b.id - a.id;
    }),
    "This is the data"
  );

  const CancelRent = async (number, amount) => {
    try {
      const Cancel = await axios.put(
        "http://161.35.218.95:3000/api/number/cancel",
        {},
        {
          params: {
            userid: sessionStorage.getItem("id"),
            rented_number: number,
            rented_amount: amount,
          },
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
          },
        }
      );
      console.log("Cancel", Cancel);
      toast.success(Cancel.data.msg);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log("Error is", error);
      toast.error(error?.response?.data.msg || "No response from the server.");
    }
  };
  console.log(data.length, "This");
  const id = data.length;
  console.log(id, "id");

  // setTimeout(function () {
  //   setHidden(true);
  //   setTimeout(function () {
  //     console.log("alright");
  //   }, 3300);
  // }, 5000);

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
                    <p>Loading...</p>
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
                                <ClipboardDocumentCheckIcon
                                  width={20}
                                  className="ml-3 text-color-primary"
                                />
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
                              {/* <p className="group relative cursor-pointer overflow-hidden rounded-3xl bg-[rgba(255,67,130,.1)] py-2 text-color-api-red md:rounded-md">
                              <span className="absolute left-0 top-0 mt-12 h-20 w-full rounded-3xl bg-inherit transition-all duration-300 ease-in-out group-hover:-mt-4"></span>
                              <span className="relative">{data.status}</span>
                            </p> */}
                              <div className="flex flex-col gap-y-2">
                                <button className="w-full rounded-md bg-color-primary py-3 font-extrabold text-white">
                                  Read More
                                </button>
                                {data.id == id + 1 && hidden ? (
                                  <button
                                    className="w-full rounded-md bg-rose-500 py-3 font-extrabold text-white"
                                    onClick={() =>
                                      CancelRent(
                                        data.rented_number,
                                        data.amount
                                      )
                                    }
                                  >
                                    Cancel
                                  </button>
                                ) : (
                                  //
                                  <></>
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
