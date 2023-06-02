import { ArrowsUpDownIcon  } from "@heroicons/react/24/outline";
import { useState } from "react";
import CountryPrice from "./tables/CountryPrice";
import ServiceQty from "./tables/ServiceQty";
import CountryQty from "./tables/CountryQty";
import ServicePrice from "./tables/ServicePrice";

const Table = () => {
  const [ switched, setSwitched ] = useState(false);

  const switchComponent = () => {
    setSwitched(!switched);
  }
  return (
    <div className="lg:flex lg:h-[631px] lg:justify-center lg:self-center lg:drop-shadow-xl xl:w-[1110px]">
    <div className="hidden lg:block">
      <button className="absolute left-1/3 top-20 w-10 z-50 cursor-pointer rounded-xl bg-color-primary p-2 text-color-white hover:bg-color-primary_black rotate-90"
      onClick={switchComponent}>
        <ArrowsUpDownIcon />
      </button>
    </div>
    {switched ?
      <>
        <CountryQty />
        <ServicePrice />
      </> :
      <>
      <ServiceQty />
      <CountryPrice />
      </>
    }
    </div>
  );
};

export default Table;
