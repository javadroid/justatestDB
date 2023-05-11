import Link from 'next/link'
import React from 'react'
import { Icon } from '@iconify/react';
import chatting from '../assets/images/chatting.png'
import Image from 'next/image';


export default function About() {
  return (
    <section className="bg-color-bg_light">
      <div className="m-auto px-4 py-2">
        <div className="max-w-2xl mx-auto py-14 text-justify md:text-xl">
          <p className="my-4">
            &quot;Newsems&quot; gives you the opportunity to rent a virtual number to receive SMS. The leased number can be used for registration on almost any platform that requires a mobile number for registration.
          </p>
          <p className="my-4">
            Many online services require you to confirm your phone number via SMS to register. This means that you can&apos;t register an additional account in your favorite messenger or social network without a phone number. But to apply for a new SIM card, you have to come to a cell phone shop, give your passport details and pay a lot of money...... Tremendous.
          </p>
          <p className="my-4">
            If you rent a number on our service, you will be able to receive SMS on the rented number during the entire rental period. This will allow you to register an unlimited number of accounts for WhatsApp, Telegram, Gmail, Facebook, Tinder and any other services that require SMS verification!
          </p>
          <p className="my-4">
            Number rental on the service &quot;Newsems&quot; has many advantages, which you can find below: <br />
            - A rented number will help you preserve your anonymity in social networks and messengers. <br />
              
            - You will finally be able to register as many social network accounts as you want <br />
            - Renting a number will cost you much less than getting a new SIM-card. Prices Newsems is one of the lowest. <br />
            - You do not need to have special skills to rent a number. You can do it in a couple of minutes.<br />
          </p>
          <p className="my-4">You can rent a number right now!</p>
        </div>
      </div>
      <div>
        <div className="container m-auto py-12">
          <div className="flex items-end justify-around lg:space-x-8">
            <Image src={chatting} alt="texting" className="hidden w-1/3 lg:block" />
            <div className="w-full px-10 pb-12 bg-color-white shadow-[0px_4px_15px_rgba(37,39,86,0.15)] md:rounded-3xl md:w-9/12 lg:w-2/4">
              <div className="max-w-xs m-auto">
                <h3 className="font-bold text-h2Size text-center my-4">
                  Sign Up
                </h3>
                <form className="flex flex-col space-y-4 items-center justify-between">
                  <input type="email" placeholder="Enter your email" className="w-full border border-color-primary_black px-4 py-3 rounded-lg focus:outline-dashed focus:border-color-primary_black text-xs text-color-primary_black md:text-lg" />
                  <input type="password" placeholder="Create password" className="w-full border border-color-primary_black px-4  py-3 rounded-lg focus:outline-dashed focus:border-color-primary_black text-xs text-color-primary_black md:text-lg" />
                  <button className="w-full bg-color-primary text-color-white font-bold rounded-3xl py-3 md:text-lg lg:text-xl lg:py-4 relative group overflow-hidden">
                    <span className="absolute left-0 top-0 mt-16 h-20 w-full bg-color-primary_black transition-all duration-300 ease-in-out rounded-3xl group-hover:-mt-4"></span>
                    <span className="relative">Sign up</span>
                  </button>
                </form>
                <p className="text-center my-4 text-color-text_light text-sm md:text-base">
                  Already have an account? <Link href="/signup" className="text-color-primary font-bold hover:underline">Sign in.</Link>
                </p>
              </div>
              <div className="flex flex-col items-center justify-between m-auto space-y-4">
                <p className="text-center text-color-text_light font-bold text-sm md:text-base lg:text-xl">
                  Or log in with your social network
                </p>
                <div className="flex space-x-4 items-center justify-center">
                  <Link href="/"  className="w-1/4 bg-color-black px-4 rounded-md">
                    <Icon icon="octicon:mark-github-16" className="w-full text-5xl text-color-white coltransition duration-500 ease-in-out hover:opacity-75" />
                  </Link>
                  <Link href="/"  className="w-1/4 bg-[#4267b2] px-4 py-2 rounded-md">
                    <Icon icon="teenyicons:facebook-solid" className="w-full text-4xl text-color-white transition duration-500 ease-in-out hover:opacity-75" />
                  </Link>
                  <Link href="/" className="w-1/4 bg-[#03a9f4] px-4 py-2 rounded-md">
                    <Icon icon="bi:twitter" className=" w-full text-4xl text-color-white transition duration-500 ease-in-out hover:opacity-75" />
                  </Link>
                  <Link href="/google" className="w-1/4 bg-[#d93025] px-4 py-2 rounded-md">
                    <Icon icon="cib:google" className="w-full text-4xl text-color-white transition duration-500 ease-in-out hover:opacity-75" />
                  </Link>
                </div>
                <div>
                  <Link href="/telegram">
                    <button className="flex items-center justify-center space-x-4 text-center text-color-white bg-[#54a9eb] px-4 py-2 rounded-lg transition duration-500 ease-in-out hover:opacity-75">
                      <Icon icon="akar-icons:telegram-fill" className="text-3xl" />
                      <span className="md:text-base">Log in with Telegram</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
