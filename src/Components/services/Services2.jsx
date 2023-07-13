import Image from "next/image";
import star from "../../assets/images/star.svg";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import axios from "axios";
import Popup from "./popup";
import { toast } from "react-hot-toast";
import useHistoryStore from "@/store/HistoryStore";

const Services2 = ({ searchTerm }) => {
  const setHistoryData = useHistoryStore((state) => state.setHistoryData);
  const instance = axios.create({
    validateStatus: function (status) {
      return status >= 200 && status < 300; // default
    },
  });
  const url = process.env.NEXT_PUBLIC_BASE_URL + "/applications";
  const apiKeyUrl = process.env.NEXT_PUBLIC_BASE_URL + "/user";
  const postUrl = process.env.NEXT_PUBLIC_BASE_URL + "/buy_service";
  const balanceUrl = process.env.NEXT_PUBLIC_BASE_URL + "/balance";
  const [userKey, setUserKey] = useState("");
  const [services, setServices] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [balance, setBalance] = useState(0);
  const maxNameLength = 11;

  const toggleMore = () => {
    setShowMore(!showMore);
  };

  const postServices = async (service) => {
    const clickedCountry = localStorage.getItem("selectedCountry");
    try {
      const response = await instance.post(
        postUrl,
        {
          userApiKey: userKey,
          appId: service.application_id,
          country: clickedCountry,
          price: service.price,
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
      setHistoryData();
      toast.success(response.data.msg);
      document.getElementById("transactions").scrollIntoView();
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(url, {
        timeout: 30000,
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
          },
        });
        setServices(response.data.applications);
      } catch (error) {
        toast.error(error.message);
      }
    };
    const fetchUserApi = async () => {
      try {
        const response = await instance.get(apiKeyUrl, {
        timeout: 30000,
        params: {
            userid: sessionStorage.getItem("id"),
          },
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
          },
        });
        setUserKey(response.data.user.apikey);
      } catch (error) {
       toast.error(error.message);
      }
    };

    const getBalance = async () => {
      try {
        const response = await instance.get(balanceUrl, {
        timeout: 30000,
        params: {
            userid: sessionStorage.getItem("id"),
          },
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
          },
        });
        setBalance(response.data.data[0].balance);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchServices();
    fetchUserApi();
    getBalance();
  }, [
   url,
    apiKeyUrl,
    balanceUrl,
    instance,
    postUrl,
    setHistoryData,
    userKey,
  ]);

  if (services.length === 0) {
    return <div>Please wait...</div>;
  }

  return (
    <div className="px-2">
      <div
        className={`boxes roll flex flex-col space-y-4 overflow-hidden scrollbar-thin scrollbar-thumb-color-bg_primary-500 md:grid md:grid-cols-2 md:flex-wrap md:gap-5 md:space-y-0 md:px-4 ${
          showMore ? "max-h-80 overflow-y-auto" : "h-40"
        }`}
      >
        {services
          .filter((service) => {
            if (searchTerm == "") {
              return service;
            } else if (
              service.app_name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return service;
            } else {
              return null;
            }
          })
          .map((service, index) => (
            <div
              key={index}
              className="mb-1 rounded-lg bg-color-bg_primary-500 p-2"
            >
              <div className="flex flex-col space-y-3 p-2 text-xs font-medium lg:flex-row lg:justify-between lg:space-y-0 lg:text-sm">
                <div className="flex items-center lg:w-3/4">
                  <Image src={star} alt="" className="-mt-1" />
                  <Image
                    src={star}
                    width={20}
                    height={20}
                    alt=""
                    className="mx-1"
                  />
                  <span className="lg:text-base">
                    {service.app_name.length > maxNameLength
                      ? `${service.app_name.substring(0, maxNameLength)}...`
                      : service.app_name}
                  </span>
                  <span className="ml-auto text-[#aec3f9]">
                    {service.application_id}
                  </span>
                  <span className="mx-2 xl:mr-0">{service.price}</span>
                </div>
                <button
                  onClick={() => {
                    if (Number(balance) < Number(service.price)) {
                      toast.error("Low balance, please topup your balance.");
                      return;
                    } else {
                      postServices(service);
                    }
                  }}
                  className="group relative overflow-hidden rounded-xl bg-color-primary py-1 text-color-white active:opacity-60 lg:px-1 xl:px-2"
                >
                  <span className="absolute left-0 top-0 mt-16 h-20 w-full rounded-3xl bg-color-primary_black transition-all duration-300 ease-in-out group-hover:-mt-4"></span>
                  <span className="relative">Buy SMS</span>
                </button>
              </div>
            </div>
          ))}
        {searchTerm !== "" &&
          services.filter((service) => {
            return service.app_name
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
          }).length === 0 && (
            <div className="flex items-center justify-between p-2 text-xs md:text-lg">
              No results found
            </div>
          )}
      </div>
      <div
        className="ml-8 mt-4 flex space-x-2 text-xs text-color-primary md:text-lg"
        onClick={toggleMore}
      >
        {showMore ? (
          <>
            <span>Collapse</span>
            <ChevronUpIcon width={16} />
          </>
        ) : (
          <>
            <span>Available services - {services.length}</span>
            <ChevronDownIcon width={16} />
          </>
        )}
      </div>
      <Popup isVisible={modalVisible} onClose={() => setModalVisible(false)} />
    </div>
  );
};

export default Services2;
