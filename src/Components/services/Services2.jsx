import Image from 'next/image';
import { allServices } from './allServices';
import star from '../../assets/images/star.svg';

const Services2 = () => {
  return (
    <div className="boxes flex flex-col space-y-4 h-36 overflow-hidden overflow-y-scroll md:grid md:grid-cols-2 md:flex-wrap md:space-y-0 md:gap-5 md:px-4">
      {allServices.map((service, index) => (
        <div key={index} className="mb-1 bg-color-bg_primary-500 rounded-lg p-2">
        <div className="flex flex-col space-y-3 text-xs font-medium p-2 lg:space-y-0 lg:flex-row lg:justify-between lg:text-sm">
          <div className="flex items-center lg:w-3/4">
            <Image src={star} alt="" className="-mt-1" />
            <Image src={service.logo} width={20} alt="" className="mx-1" />
            <span className="lg:text-base">{service.name}</span>
            <span className="ml-auto text-[#aec3f9]">{service.quantity}</span>
            <span className="mx-2 xl:mr-0">{service.price}</span>
          </div>
          <button className="text-color-white bg-color-primary rounded-xl py-1 lg:px-1 xl:px-2">Buy SMS</button>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Services2;
