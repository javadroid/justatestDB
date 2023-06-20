import ApiConnection from "@/Components/ApiConnection";
import CompatibleApi from "@/Components/CompatibleApi";
import RentApi from "@/Components/RentApi";
import { useState } from "react";

const Api = () => {

  const [cases, setCases] = useState("api-connection");
  const links = [
    { route: "compatible-api", name: "Compatible API" },
    { route: "api-connection", name: "API 2.0" },
    { route: "rent-api", name: "Rent API" },
  ];


  return (
    <main className="w-full pt-20 ">
      <main className="w-full bg-color-bg_primary-500">
        <main className="flex w-full flex-col">
          <section className="pb-24">
            <div className="mx-auto w-full max-w-7xl">
              <div className="space-y-8 pt-10 text-center md:pt-20 ">
                <h1 className="text-2xl font-extrabold md:text-4xl">
                  For developers
                </h1>
                <p className="mx-auto max-w-2xl md:text-xl">
                  This is the section with API documentation for connecting your
                  service to SMS-Man and automatic number purchasing.
                </p>
                <div className="mx-auto flex w-full flex-col items-center justify-between space-y-4 text-center md:max-w-2xl md:flex-row md:space-x-4 md:space-y-0  lg:max-w-4xl">
                  {links.map((link, index) => (
                    <button
                      key={index}
                      onClick={() => setCases(link.route)}
                      className={
                        cases === link.route
                          ? `${"flex w-2/3 items-center justify-center rounded-xl bg-color-primary_black px-10 py-6 text-center font-bold text-color-white transition md:w-1/3"}`
                          : `${"flex w-2/3 items-center justify-center rounded-xl bg-color-white px-10 py-6 text-center text-[1rem] font-bold text-color-primary_black hover:bg-color-primary_black hover:text-white md:w-1/3"}`
                      }
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
          {cases === "compatible-api" && <CompatibleApi />}
          {cases === "api-connection" && <ApiConnection />}
          {cases === "rent-api" && <RentApi />}
        </main>
      </main>
    </main>
  );
};

export default Api;
