import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import serviceimg from "../../assets/socials/Amazon.svg"
import { useEffect, useState } from 'react'
import axios from 'axios'

const ServiceQty = () => {
  const url = "http://161.35.218.95:3000/api/applications"
  const [services, setServices] = useState([]);
  const maxNameLength = 11;
  const fetchServices = async () => { 
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
        },
      });
      setServices(response.data.applications);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchServices();
  })

  return (
      <div className="m-4 mt-10 rounded-t-2xl shadow-xl bg-color-bg_light px-7 py-4 lg:mx-0">
        <div>
          <h1 className="md:text-xl font-extrabold ">1. Select service</h1>
          <div className="flex w-full items-center space-x-1 border-b border-blue-300 text-color-primary">
            <MagnifyingGlassIcon className="h-6 w-6" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent py-1 text-sm md:text-lg font-medium italic mb-4 placeholder:text-color-primary outline-none"
            />
          </div>
          <ul className="pt-2 width-full height-10">
            {services.map((service, index) => (
              <li key={index} className="p-2 flex justify-between text-xs items-center md:text-lg">
              <div className="flex items-center space-x-2">
                <Image className="h-6 w-6" src={serviceimg} alt="service" />
                <span className="lg:text-base">{service.app_name.length > maxNameLength ? `${service.app_name.substring(0, maxNameLength)}...` : service.app_name}</span>
              </div>
              <span className="text-color-text_light lg:text-sm">{service.application_id}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 pt-4 text-lg font-normal text-color-text_light">
            Available Services- 300
          </p>
        </div>
      </div>
  )
}

export default ServiceQty
