import React from 'react'
import Link from 'next/link';
import { Icon } from '@iconify/react';

const SignUpForm = () => {
  return (
      <div className=" mx-4 px-6 pt-4 pb-12 bg-color-white rounded-2xl shadow-[0px_4px_15px_rgba(37,39,86,0.15)] sm:rounded-3xl  sm:m-auto md:max-w-lg lg:max-w-xl">
          <div className="max-w-xs m-auto">
            <h3 className="font-bold text-h2Size text-center my-4">
              Sign up
            </h3>
            <form className="flex flex-col space-y-4 items-center justify-items-center">
              <input type="email" placeholder="Enter your email" className="w-full border border-color-primary_black px-4 py-3 rounded-lg focus:outline-dashed focus:border-color-primary_black text-xs text-color-primary_black sm:text-lg" />
              <input type="password" placeholder="Create password" className="w-full border border-color-primary_black px-4 py-3 rounded-lg focus:outline-dashed focus:border-color-primary_black text-xs text-color-primary_black sm:text-lg" />
              <input type="password" placeholder="Confirm password" className="w-full border border-color-primary_black px-4 py-3 rounded-lg focus:outline-dashed focus:border-color-primary_black text-xs text-color-primary_black sm:text-lg" />
              <button className="w-full bg-color-primary text-sm text-color-white font-bold rounded-3xl py-3 md:text-lg lg:text-xl lg:py-4">Sign up</button>
            </form>
            <p className="text-center my-2 text-color-text_light text-sm sm:my-4 md:text-base">
              Already have an account? <Link href="/signup" className="text-color-primary font-bold hover:underline">Sign in.</Link>
            </p>
          </div>
          <div className="flex flex-col items-center justify-between m-auto space-y-1 sm:space-y-4">
            <p className="text-center text-color-text_light font-bold text-sm md:text-base lg:text-xl">
              Or log in with your social network
            </p>
            <div className="flex space-x-4 items-center justify-center">
              <Link href="/github"  className="w-1/4">
                  <Icon icon="logos:github-octocat" className="w-full text-5xl transition duration-500 ease-in-out hover:opacity-75 md:text-6xl" />
              </Link>
              <Link href="/facebook"  className="w-1/4 text-center">
                  <Icon icon="teenyicons:facebook-solid" className="w-full text-4xl text-[#4267b2] transition duration-500 ease-in-out hover:opacity-75 md:text-5xl" />
              </Link>
              <Link href="/twitter">
                  <Icon icon="bi:twitter" className=" w-full text-4xl text-[#03a9f4] transition duration-500 ease-in-out hover:opacity-75 md:text-5xl" />
              </Link>
              <Link href="/google">
                  <Icon icon="cib:google" className="w-full text-4xl text-[#d93025] transition duration-500 ease-in-out hover:opacity-75 md:text-5xl" />
              </Link>
            </div>
            <div>
              <Link href="/telegram">
                <button className="flex items-center justify-center space-x-4 text-center text-color-white bg-[#54a9eb] mt-2 px-4 py-2 rounded-lg transition duration-500 ease-in-out hover:opacity-75">
                  <Icon icon="akar-icons:telegram-fill" className="text-3xl" />
                  <span className="md:text-base">Log in with Telegram</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
  )
}

export default SignUpForm;
