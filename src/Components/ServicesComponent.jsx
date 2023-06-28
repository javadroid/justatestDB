import Image from "next/image";
import star from "../assets/images/star.svg";
import Services2 from "./services/Services2";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import axios from "axios";
import Popup from "./services/popup";
import { countryName } from "./CountryServices";

console.log(countryName);
const ServicesComponent = ({ title }) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL + "/applications";
  const [searchTerm, setSearchTerm] = useState("");
  const [services, setServices] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const maxNameLength = 11;
  const toggleMore = () => {
    setShowMore(!showMore);
  };

  const fetchServices = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
        },
      });
      setServices(response.data.applications);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  if (services.length === 0) {
    return <div>Please wait...</div>;
  }

  return (
    <div className="service flex flex-col py-4">
      <div className="flex flex-col items-start px-4 md:flex-row md:items-center md:space-x-8">
        <div className="flex items-center justify-start space-x-2">
          <Image src={star} alt="" className="-mt-1" />
          <h3 className="text-xs font-extrabold sm:text-base">{title}</h3>
        </div>
        <form className="mb-4 mt-2 flex items-center space-x-2 border-b-2 border-[#aec3f9] px-2 pb-1 text-[#aec3f9]">
          <button>
            <MagnifyingGlassIcon className="w-5" />
          </button>
          <input
            type="text"
            placeholder="Search by service"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 text-xs italic text-[#aec3f9] placeholder:text-[#aec3f9] focus:outline-none sm:text-base"
          />
        </form>
      </div>
      <div className="service body">
        <Services2 searchTerm={searchTerm} />
        {/* <div className="px-2">
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
                  service.app_name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
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
                      onClick={() => setModalVisible(true)}
                      className="group relative overflow-hidden rounded-xl bg-color-primary py-1 text-color-white lg:px-1 xl:px-2"
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
                <span>Available services - 2312</span>
                <ChevronDownIcon width={16} />
              </>
            )}
          </div>
          <Popup
            isVisible={modalVisible}
            onClose={() => setModalVisible(false)}
          />
        </div> */}
      </div>
    </div>
  );
};

export default ServicesComponent;
