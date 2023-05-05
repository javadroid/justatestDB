import Image from "next/image";
import React from "react";
import Link from "@/assets/link.png";
import Company from "@/assets/linkbuilder.png";

export default function Privacy() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="mb-24 mt-16 flex flex-col items-center">
          <h1 className="mb-10 text-center text-3xl font-extrabold">
            Partners
          </h1>
          <p className="w-4/5 text-center text-xl">
            Proven services for our customers that we recommend
          </p>
        </div>
        <div>
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-x-20">
            <Image
              src={Company}
              alt="Chain"
              className="h-50 mb-9 w-72 object-contain"
            />
            <div>
              <h1 className="mb-5 text-2xl font-extrabold">
                Linkbuilder is a website promotion service{" "}
              </h1>
              <p>
                The service allows you to purchase links for SEO promotion,
                analyze donor sites and check the positions of your web
                resources in search engines.
              </p>
              <div className="mt-5 flex items-center gap-x-5 bg-color-bg_primary-500 p-5">
                {/* CHAIN IMAGE */}
                <Image
                  src={Link}
                  alt="Chain"
                  className="hidden h-20 w-20 object-contain md:inline"
                />
                <p className="">
                  <a className=" text-color-primary underline">
                    Register using the link
                  </a>{" "}
                  and get 3$ for the first promotion using the SMSMAN promo code
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-14 flex flex-col lg:flex-row lg:items-start lg:gap-x-20">
            <Image
              src={Company}
              alt="Chain"
              className="h-50 mb-9 w-72 object-contain"
            />
            <div>
              <h1 className="mb-5 text-2xl font-extrabold">
                Linkbuilder is a website promotion service{" "}
              </h1>
              <p>
                The service allows you to purchase links for SEO promotion,
                analyze donor sites and check the positions of your web
                resources in search engines.
              </p>
              <div className="mt-5 flex items-center gap-x-5 bg-color-bg_primary-500 p-5">
                {/* CHAIN IMAGE */}
                <Image
                  src={Link}
                  alt="Chain"
                  className="hidden h-20 w-20 object-contain md:inline"
                />
                <p className="">
                  <a className=" text-color-primary underline">
                    Register using the link
                  </a>{" "}
                  and get 3$ for the first promotion using the SMSMAN promo code
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
