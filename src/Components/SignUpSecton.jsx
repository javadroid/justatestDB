import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react';

export default function SignUpSecton() {
  return (
    <section className="bg-color-primary_black">
          <div className="max-w-full mx-auto py-8 px-4 lg:py-14">
          <div className="max-w-sm m-auto lg:max-w-4xl xl:max-w-6xl">
            <h3 className="font-bold text-2xl text-center my-4 text-color-white md:text-4xl">
              Sign Up
            </h3>
            <form className="flex flex-col space-y-1 items-center justify-between mb-2 lg:flex-row lg:space-x-4 lg:space-y-0">
              <input type="email" placeholder="Enter your email address" className="w-full border border-color-primary_black px-4 py-3 focus:outline-dashed focus:border-color-primary_black text-sm text-color-primary_black placeholder-color-primary bg-color-white md:text-lg lg:w-1/3" />
              <input type="password" placeholder="Create password" className="w-full border border-color-primary_black px-4  py-3 focus:outline-dashed focus:border-color-primary_black text-sm text-color-primary_black placeholder-color-primary bg-color-white md:text-lg lg:w-1/3" />
              <button className="w-full bg-color-primary text-color-white font-bold rounded-xl py-1 shadow-[0_4px_15px_rgba(231,237,250,.25)] md:text-lg md:py-4 lg:text-xl lg:py-4 lg:w-1/3">Sign up</button>
            </form>
          </div>
          <div className="flex flex-col items-center justify-between m-auto space-y-4">
            <p className="text-center text-color-text_light font-bold text-sm md:text-base lg:text-xl">
              Or log in with your social network
            </p>
            <div className="flex space-x-4 items-center justify-center">
              <Link href="/github"  className="w-1/4">
                  <Icon icon="logos:github-octocat" className="w-full text-5xl transition duration-500 ease-in-out hover:opacity-75 md:text-6xl" />
              </Link>
              <Link href="/facebook"  className="w-1/4 text-center">
                  <Icon icon="teenyicons:facebook-solid" className="w-full text-4xl text-[#4267b2] transition duration-500 ease-in-out hover:opacity-75 md:5xl" />
              </Link>
              <Link href="/twitter">
                  <Icon icon="bi:twitter" className=" w-full text-4xl text-[#03a9f4] transition duration-500 ease-in-out hover:opacity-75 md:5xl" />
              </Link>
              <Link href="/google">
                  <Icon icon="cib:google" className="w-full text-4xl text-[#d93025] transition duration-500 ease-in-out hover:opacity-75 md:text-5xl" />
              </Link>
            </div>
            <div>
              <Link href="/telegram">
                <button className="flex items-center justify-center space-x-4 text-center text-color-white bg-[#54a9eb] px-4 py-2 rounded-md transition duration-500 ease-in-out hover:opacity-75">
                  <Icon icon="akar-icons:telegram-fill" className="text-3xl" />
                  <span className="md:text-base">Log in with Telegram</span>
                </button>
              </Link>
            </div>
          </div>
          </div>
      </section>
  )
}
