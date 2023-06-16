import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import serviceimg from "../../assets/socials/Amazon.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const ServicePrice = () => {
  const url = "http://161.35.218.95:3000/api/applications";
  const [services, setServices] = useState([]);
  const maxNameLength = 11;
  const [searchTerm, setSearchTerm] = useState("");
  const fetchServices = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
        },
      });
      setServices(response.data.applications);
    } catch (error) {
      return (<div>
        {error}
      </div>);
    }
  };

  useEffect(() => {
    fetchServices();
  });

  if (services.length === 0) {
    return <div>Please wait...</div>
  };

  return (
    <div className="m-4 mt-10 bg-white px-2 py-2 drop-shadow-xl md:px-7 lg:mx-0 lg:w-full">
      <div className=" ">
        <div className="lg:flex lg:items-center lg:justify-between lg:gap-10">
          <h1 className="font-extrabold md:text-xl lg:w-full">
            2. Select a service
          </h1>
          <div className="mb-4 flex w-full items-center space-x-1 border-b border-blue-300 text-color-primary lg:w-3/4">
            <MagnifyingGlassIcon className="h-6 w-6" />
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent py-1 text-sm font-medium italic outline-none placeholder:text-color-primary md:text-lg"
            />
          </div>
        </div>
        <ul
          className={`roll width-full height-10 max-h-96 overflow-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-color-bg_primary-500`}
        >
          {/* {services.slice(0, showMore ? services.length : 10).map((service) => (something))} */}
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
              <li
                key={index}
                className="flex items-center justify-between p-2 text-xs md:text-lg"
              >
                <div className="flex items-center space-x-2">
                  <Image className="h-6 w-6" src={serviceimg} alt="service" />
                  <span className="lg:text-base">
                    {service.app_name.length > maxNameLength
                      ? `${service.app_name.substring(0, maxNameLength)}...`
                      : service.app_name}
                  </span>
                </div>
                <span className="lg:text-sm">{service.price}</span>
              </li>
            ))}
          {searchTerm !== "" &&
            services.filter((service) => {
              return service.app_name
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            }).length === 0 && (
              <li className="flex items-center justify-center p-2 text-xs md:text-lg">
                <div>No results found</div>
              </li>
            )}
        </ul>
        <div className="flex w-full items-baseline justify-between">
          <p className="mb-4 mt-8 pt-4 text-color-text_light md:text-lg lg:mb-0">
            Available services- 2312
          </p>
          <Link
            href={"/user/receive-sms"}
            className="group relative overflow-hidden rounded-xl bg-color-primary px-11 py-2 text-center text-sm font-medium text-white md:text-base"
          >
            <span className="absolute left-0 top-0 mt-16 h-20 w-full rounded-3xl bg-color-primary_black transition-all duration-300 ease-in-out group-hover:-mt-4"></span>
            <button className="relative">Receive SMS</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicePrice;
