import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import blank from "../assets/random-shapes/blank.png";
import scribble from "../assets/random-shapes/scribble1.png";
import hashtag from "../assets/random-shapes/hashtag2.png";
import downArrow from "../assets/arrows/down-arrow.png";
import Image from "next/image";

export default function SignUpSecton() {
  return (
    <section className="relative over-flow-hidden bg-gradient-to-b from-[#0D41D5] to-[#0187FF]">
      <Image src={blank} width={70} alt="blank" className="hidden lg:flex absolute left-7 bottom-10" />
      <Image src={scribble} width={60} alt="scribble" className="hidden lg:flex absolute top-10 left-14" />
      <Image src={hashtag} width={60} alt="hashtag" className="hidden lg:flex absolute bottom-20 right-32" />
      <Image src={downArrow} width={50} alt="blank" className="hidden lg:flex absolute top-16 right-1/4" />
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
            <button className="w-full rounded-xl bg-color-primary py-3 font-bold text-color-white shadow-[0_4px_15px_rgba(231,237,250,.25)] md:py-4 md:text-lg lg:w-1/3 lg:text-xl relative group overflow-hidden">
              <span className="absolute left-0 top-0 mt-16 h-24 w-full bg-color-primary_black transition-all duration-300 ease-in-out rounded-3xl group-hover:-mt-4"></span>
              <span className="relative">Sign up</span>
            </button>
          </form>
        </div>
        <div className="m-auto flex flex-col items-center justify-between space-y-4">
          <p className="text-center text-sm font-bold text-color-white opacity-50 md:text-base lg:text-xl">
            Or log in with your social network
          </p>
          <div className="flex items-center justify-center space-x-4 md:space-x-6">
            <Link href="/"  className="w-1/4 bg-color-black px-4 rounded-md">
                <Icon icon="octicon:mark-github-16" className="w-full text-5xl text-color-white transition duration-500 ease-in-out hover:opacity-75" />
            </Link>
            <Link href="/"  className="w-1/4 bg-[#4267b2] px-4 py-2 rounded-md">
                <Icon icon="teenyicons:facebook-solid" className="w-full text-4xl text-color-white transition duration-500 ease-in-out hover:opacity-75" />
            </Link>
            <Link href="/" className="w-1/4 bg-[#03a9f4] px-4 py-2 rounded-md">
                <Icon icon="bi:twitter" className=" w-full text-4xl text-color-white transition duration-500 ease-in-out hover:opacity-75" />
            </Link>
            <Link href="/" className="w-1/4 bg-[#d93025] px-4 py-2 rounded-md">
                <Icon icon="cib:google" className="w-full text-4xl text-color-white transition duration-500 ease-in-out hover:opacity-75" />
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
