import React from 'react';
import Image from 'next/image'
import chatting from '../assets/images/chatting.svg'
import device from '../assets/images/Device.webp'
import device2 from '../assets/images/pic_en.webp'
import Estonia from '../assets/flags/Estonia.svg';
import Cyprus from '../assets/flags/Cyprus.svg';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const Rent = () => {
  return (
    <>
  {/*Hero section*/}
      <section id="hero" className="bg-blue-500 text-2.2rem text-white">
        {/* Flex container */}
          <div className="container flex flex-col mx-auto overflow-hidden items-center py-20 space-y-6 md:justify-start px-6 lg:flex-row lg:justify-between ">
            {/* Left hero */}
            <div className="mb-30 space-y-12 md:px-2 md:w-full">
              <h1 className="text-3xl font-bold text-center md:w-full md:text-5xl md:text-left">
                Receive SMS online
              </h1>
              <p className="w-sm max-w-lg text-left text-xl">
                Register on social networks, marketplaces, exchanges and online services 
                <span className="text-accent"> 
                  without spam
                </span> and <span className="text-yellow-500">
                  disclosure of personal data.
                </span>
              </p>
              <div className="flex flex-col md:justify-start md:flex-row">
                <span className="relative before:absolute before:block before:w-85 before:bg-[url('../assets/before/arrow_intro-1.svg')]">
                </span>
                <a className="p-3 px-6 pt-2 mb-8 text-blue-600 font-bold text-center bg-white rounded-full baseline md:px-16">
                  Rent number
                </a>
                <a className="p-3 px-6 pt-2 mb-8 bg-blue-600 font-bold text-center text-white rounded-full baseline md:px-16 md:ml-4">
                  Receive SMS
                </a>
              </div>
            </div>
            {/* Right Hero */}
              <div className="relative md:px-2">
                <picture>
                <Image src={device} alt="" className="relative" />
                </picture>
              </div>
          </div>
      </section>

      {/* Phone number rental */}
      <section className="bg-blue-300 py-10">
          <div className=" max-w-7xl mx-auto items-center justify-center md:flex md:flex-row-reverse">
            <div className="px-4 md:w-full lg:w-1/2">
              <h2 className="text-xl font-bold text-left text-black mb-4 md:text-3xl md:text-center lg:mb-12 lg:text-left">
                SMS-MAN - phone number rental to receive SMS
              </h2>
              <p className="text-sm text-gray-600 mb-4 text-left md:text-xl">
                With SMS-MAN service you can rent a virtual number to receive sms from 20+ countries for: 24 hours, a week or a month. You can rent a phone number for SMS to receive any number of messages for a selected period of time.
              </p>
              <p className="text-sm text-gray-600 mb-4 text-left md:text-xl">
                This is very handy when you need to register many accounts in online services to one number.
              </p>
              <p className="text-sm text-gray-600 text-left md:text-xl">
                If phone number won&apos;t be suitable (if you hasn&apos;t received any SMS), you can easily cancel it within 20 minutes without losing money.
              </p>
            </div>
            <div className="hidden px-4 w-1/2 lg:block">
              <picture>
                <Image src={device2} alt="" />
              </picture>
            </div>
          </div>
      </section>

    {/* How it works*/}
      <section>
        {/* container to heading and the steps */}
        <div className="max-w-6xl w-4xl px-4 mx-auto mt-8 text-center md:mt-32 md:px-8">
          {/* Heading */}
          <h2 className="text-xl text-blue-500 font-bold text-center">
            Check how it works!
          </h2>
          <p className="text-2xl font-bold text-center md:text-3xl">
            Rent virtual number online in 3 steps right now
          </p>
          {/* Steps Container */}
          <form>
            <ol className="flex flex-col mt-8 space-y-8 md:flex-wrap md:mt-12 md:space-y-0 md:space-x-8 md:flex-row justify-between lg:space-x-1">
                 {/* step 1 */}
              <li className="w-auto h-48 px-4 rounded-3xl shadow-[0px_4px_15px_rgba(37,39,86,0.15)] md:mb-11">
                <div className="mx-4">
                  {/* title */}
                  <div className="flex items-center justify-center p-4">
                    <span className="text-xl font-bold">
                      Select your country
                    </span>
                  </div>
                  {/* countries */}
                  <div className="body">
                    <div className="country mb-4">
                      <div className="overflow-y-auto hover:overflow-y-scroll w-full">
                        <div className="pl-2 h-32 w-full">
                          <table className="pl-4 ml-0 w-full">
                            <tbody>
                              {/* c1 */}
                              <tr className="mb-0">
                                <td className="flex items-center justify-start">
                                  <span><Image src={Estonia} alt="Estonia flag" className="flex items-center mr-2 w-8" /></span>
                                  <span className="text-base">Estonia</span>
                                </td>
                                <td>
                                  <span className="text-base text-gray-500">+372</span>
                                </td>
                              </tr>
                              {/* c1 */}
                              <tr className="mb-0">
                                <td className="flex items-center justify-start">
                                  <span><Image src={Cyprus} alt="Estonia flag" className="flex items-center mr-2 w-8" /></span>
                                  <span className="text-base">Cyprus</span>
                                </td>
                                <td>
                                  <span className="text-base text-gray-500">+372</span>
                                </td>
                              </tr>
                              {/* c1 */}
                              <tr>
                                <td className="flex items-center justify-start">
                                  <span><Image src={Estonia} alt="Estonia flag" className="flex items-center mr-2 w-8" /></span>
                                  <span className="text-base">Estonia</span>
                                </td>
                                <td>
                                  <span className="text-base text-gray-500">+372</span>
                                </td>
                              </tr>
                              {/* c1 */}
                              <tr>
                                <td className="flex items-center justify-start">
                                  <span><Image src={Estonia} alt="Estonia flag" className="flex items-center mr-2 w-8" /></span>
                                  <span className="text-base">Estonia</span>
                                </td>
                                <td>
                                  <span className="text-base text-gray-500">+372</span>
                                </td>
                              </tr>
                              {/* c1 */}
                              <tr>
                                <td className="flex items-center justify-start">
                                  <span><Image src={Estonia} alt="Estonia flag" className="flex items-center mr-2 w-8" /></span>
                                  <span className="text-base">Estonia</span>
                                </td>
                                <td>
                                  <span className="text-base text-gray-500">+372</span>
                                </td>
                              </tr>
                              {/* c1 */}
                              <tr>
                                <td className="flex items-center justify-start">
                                  <span><Image src={Estonia} alt="Estonia flag" className="flex items-center mr-2 w-8" /></span>
                                  <span className="text-base">Estonia</span>
                                </td>
                                <td>
                                  <span className="text-base text-gray-500">+372</span>
                                </td>
                              </tr>
                              {/* c1 */}
                              <tr>
                                <td className="flex items-center justify-start">
                                  <span><Image src={Estonia} alt="Estonia flag" className="flex items-center mr-2 w-8" /></span>
                                  <span className="text-base">Estonia</span>
                                </td>
                                <td>
                                  <span className="text-base text-gray-500">+372</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

                {/* step 2 */}
              <li className="w-auto h-48 px-4 rounded-3xl shadow-[0px_4px_15px_rgba(37,39,86,0.15)] md:mb-11 md:w-1/2 lg:w-1/3">
                <div className="flex flex-col items-center px-6 ">
                    {/* Heading */}
                  <div className="rounded-l-full bg-bgLIght bg-transparent">
                    <div className="flex items-center justify-center">
                      <h3 className="text-xl font-bold px-4 my-2">
                        Set rent duration
                      </h3>
                    </div>
                  </div>
                    {/* Time */}
                    <div className="">
                      <div className=" flex flex-col justify-between items-center">
                        <div className="flex flex-row items-center justify-center space-x-4 mb-2">
                          <button className="bg-bgPrimar  text-blue-400 text-base w-20 py-2 rounded-sm">Hour</button>
                          <button className="bg-bgPrimar  text-blue-400 text-base w-20 py-2 rounded-sm">Day</button>
                        </div>
                        <div className="flex flex-row items-center justify-center space-x-4 mb-2">
                          <button className="bg-bgPrimar  text-blue-400 text-base w-20 py-2 rounded-sm">Week</button>
                          <button className="bg-bgPrimar  text-blue-400 text-base w-20 py-2 rounded-sm">Month</button>
                        </div>
                        <div className="bg-bgPrimar mb-4 text-black-400 font-bold text-xl w-44 py-1 rounded-sm">
                          1
                        </div>
                      </div>
                    </div>
                </div>
              </li>
                {/* step 3 */}
              <li className="w-auto h-48 px-4 rounded-3xl shadow-[0px_4px_15px_rgba(37,39,86,0.15)] md:w-1/2 lg:w-1/3">
                <div className="flex flex-col items-center p-6 ">
                    {/* Heading */}
                  <div className="rounded-l-full bg-bgLIght bg-transparent">
                    <div className="flex items-center justify-center space-x-8">
                      <h3 className="text-xl font-bold">
                        Rent a number
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4">
                      <button className="bg-bgPrimar mb-4 text-xl w-48 py-2 rounded-sm">It&apos;ll cost $0.06</button>
                      <button className="bg-blue-800  text-white font-bold text-xl w-48 py-2 rounded-xl">Rent</button>
                    </div>
                </div> 
              </li>
            </ol>
          </form>
        </div>
      </section>

      {/* sign up */}
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


      {/* You can buy or rent one */}


      {/* About */}
      <section className="bg-color-bg_primary-500">
          <div className="container px-4 py-2">
            <div className="max-w-2xl m-auto py-14 text-justify md:text-xl">
              <p className="my-4">
                &quot;SMS-Man&quot; gives you the opportunity to rent a virtual number to receive SMS. The leased number can be used for registration on almost any platform that requires a mobile number for registration.
              </p>
              <p className="my-4">
                Many online services require you to confirm your phone number via SMS to register. This means that you can&apos;t register an additional account in your favorite messenger or social network without a phone number. But to apply for a new SIM card, you have to come to a cell phone shop, give your passport details and pay a lot of money...... Tremendous.
              </p>
              <p className="my-4">
                If you rent a number on our service, you will be able to receive SMS on the rented number during the entire rental period. This will allow you to register an unlimited number of accounts for WhatsApp, Telegram, Gmail, Facebook, Tinder and any other services that require SMS verification!
              </p>
              <p className="my-4">
                Number rental on the service &quot;SMS-Man&quot; has many advantages, which you can find below: <br />
                - A rented number will help you preserve your anonymity in social networks and messengers. <br />
                 
                - You will finally be able to register as many social network accounts as you want <br />
                - Renting a number will cost you much less than getting a new SIM-card. Prices SMS-man is one of the lowest. <br />
                - You do not need to have special skills to rent a number. You can do it in a couple of minutes.<br />
              </p>
              <p className="my-4">You can rent a number right now!</p>
            </div>
            <div></div>
          </div>
          <div>
            <div className="container py-12">
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
                      <button className="w-full bg-color-primary text-color-white font-bold rounded-3xl py-3 md:text-lg lg:text-xl lg:py-4">Sign up</button>
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


      {/* Advantages */}
      <section>
        <div className="container">
         
        </div>
      </section>


    </>
  )
}

export default Rent;