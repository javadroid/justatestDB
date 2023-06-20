import Tablet from "@/assets/list-pic.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="py-8 md:px-5">
      <div className="flex items-center justify-between gap-12">
        <div className=" hidden lg:block">
          <Image
            src={Tablet}
            alt="Tablet Pic"
            className=""
          />
        </div>
        <div className="md:w-1/2">
          <h2 className=" text-justify md:text-2xl font-extrabold">
            Newsems - service for private registration at online resources
          </h2>
          <p className="mt-6 md:mt-14 text-justify md:text-lg font-normal">
            We give you the opportunity to anonymously use the phone number
            online to receive SMS to register on sites and application.
          </p>
          <p className="mt-4 text-justify md:text-lg font-normal">
            At the same time, you can be sure that no one but you will have
            access to it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
