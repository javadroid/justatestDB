import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function SignUpSecton() {
  return (
    <section className="bg-gradient-to-r from-sky-400 to-blue-500">
      <div className="mx-auto max-w-full px-4 py-8 lg:py-14">
        <div className="m-auto max-w-sm lg:max-w-4xl xl:max-w-6xl">
          <h3 className="my-4 text-center text-2xl font-bold text-color-white md:text-4xl">
            Sign Up
          </h3>
          <form className="mb-2 flex flex-col items-center justify-between space-y-5 lg:flex-row lg:space-x-4 lg:space-y-0">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border border-color-primary_black bg-color-white px-4 py-3 text-sm text-color-primary_black placeholder-color-primary focus:border-color-primary_black focus:outline-none md:text-lg lg:w-1/3"
            />
            <input
              type="password"
              placeholder="Create password"
              className="w-full border border-color-primary_black bg-color-white  px-4 py-3 text-sm text-color-primary_black placeholder-color-primary focus:border-color-primary_black focus:outline-none md:text-lg lg:w-1/3"
            />
            <button className="w-full rounded-xl bg-color-primary py-3 font-bold text-color-white shadow-[0_4px_15px_rgba(231,237,250,.25)] md:py-4 md:text-lg lg:w-1/3 lg:text-xl">
              Sign up
            </button>
          </form>
        </div>
        <div className="m-auto flex flex-col items-center justify-between space-y-4">
          <p className="text-center text-sm font-bold text-color-text_light md:text-base lg:text-xl">
            Or log in with your social network
          </p>
          <div className="flex items-center justify-center space-x-10">
            <Link href="/github" className="w-1/4">
              <Icon
                icon="logos:github-octocat"
                className="w-full text-5xl transition duration-500 ease-in-out hover:opacity-75 md:text-6xl"
              />
            </Link>
            <Link href="/facebook" className="w-1/4 text-center">
              <Icon
                icon="simple-icons:facebook"
                className="md:5xl w-full text-4xl text-[#4267b2] transition duration-500 ease-in-out hover:opacity-75"
              />
            </Link>
            <Link href="/twitter">
              <Icon
                icon="bi:twitter"
                className=" md:5xl w-full text-4xl text-[#03a9f4] transition duration-500 ease-in-out hover:opacity-75"
              />
            </Link>
            <Link href="/google">
              <Icon
                icon="cib:google"
                className="w-full text-4xl text-[#d93025] transition duration-500 ease-in-out hover:opacity-75 md:text-5xl"
              />
            </Link>
          </div>
          <div>
            <Link href="/telegram">
              <button className="flex items-center justify-center space-x-4 rounded-md bg-[#54a9eb] px-4 py-2 text-center text-color-white transition duration-500 ease-in-out hover:opacity-75">
                <Icon icon="akar-icons:telegram-fill" className="text-3xl" />
                <span className="md:text-base">Log in with Telegram</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
