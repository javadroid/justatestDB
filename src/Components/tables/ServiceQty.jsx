import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import serviceimg from "../../assets/socials/Amazon.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const ServiceQty = () => {
  const url = process.env.NEXT_PUBLIC_BASE_URL + "/applications";
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
    return <div>Please wait...</div>;
  }

  return (
    <div className="m-4 mt-10 rounded-t-2xl bg-color-bg_light px-7 py-4 shadow-xl lg:mx-0">
      <div>
        <h1 className="font-extrabold md:text-xl ">1. Select service</h1>
        <div className="mb-4 flex w-full items-center space-x-1 border-b border-blue-300 text-color-primary">
          <MagnifyingGlassIcon className="h-6 w-6" />
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent py-1 text-sm font-medium italic outline-none placeholder:text-color-primary md:text-lg"
          />
        </div>
        <ul className="width-full height-10 pt-2">
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
                <span className="text-color-text_light lg:text-sm">
                  {service.application_id}
                </span>
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
        <p className="mt-4 pt-4 text-lg font-normal text-color-text_light">
          Available Services- 300
        </p>
      </div>
    </div>
  );
};

export default ServiceQty;
