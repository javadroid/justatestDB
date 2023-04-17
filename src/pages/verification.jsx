import React from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const verification = () => {
  return (
    <section className="mx-auto min-h-[48vh] max-w-7xl">
      <div className=" flex flex-col items-center px-5">
        <div>
          <CheckBadgeIcon className="h-80 w-80 text-blue-400" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">
            Your Email has been successfully verified.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default verification;
