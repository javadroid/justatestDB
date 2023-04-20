import React from 'react';
import Image from 'next/image'
import device from '../assets/hero.png'
import device2 from '../assets/images/pic_en.webp'
import Estonia from '../assets/flags/Estonia.svg';
import Cyprus from '../assets/flags/Cyprus.svg';
import SignUpSecton from '@/Components/SignUpSecton';
import About from '@/Components/About';
import Advantages from '@/Components/Advantages';
import PromoInformation from '@/Components/PromoInformation';
import Connection from '@/Components/Connection';

const Rent = () => {
  return (
    <>
  {/*Hero section*/}
      <section id="hero" className="bg-gradient-to-b from-[rgb(13,65,213)] to-[#0187FF] text-2.2rem text-white">
        {/* Flex container */}
          <div className="max-w-7xl flex flex-col mx-auto overflow-hidden items-center py-20 space-y-6 md:justify-start px-6 lg:mx-auto lg:flex-row lg:justify-between lg:pt-32 ">
            {/* Left hero */}
            <div className="flex-1 mb-30 space-y-12 md:px-2 md:w-full">
              <h1 className="text-3xl font-extrabold text-center md:w-full md:text-5xl md:text-left lg:text-4xl">
                Receive SMS online
              </h1>
              <p className="w-sm max-w-lg text-left text-xl">
                Register on social networks, marketplaces, exchanges and online services  
                <span className="text-color-accent"> without spam
                </span> and <span className="text-color-accent">
                  disclosure of personal data.
                </span>
              </p>
              <div className="flex flex-col md:justify-start md:flex-row">
                <span className="relative before:absolute before:block before:w-85 before:bg-[url('../assets/before/arrow_intro-1.svg')]">
                </span>
                <a className="p-3 px-6 pt-3 mb-8 text-color-primary_black font-bold text-center bg-white rounded-full baseline md:px-16 lg:px-14 xl:px-16">
                  Rent number
                </a>
                <a className="p-3 px-6 pt-3 mb-8 bg-color-primary_black font-bold text-center text-white rounded-full baseline md:px-16 md:ml-4 lg:px-16 xl:px-16">
                  Receive SMS
                </a>
              </div>
            </div>
            {/* Right Hero */}
              <div className="w-full flex-1 md:px-2">
                <picture>
                <Image src={device} alt="" className="" />
                </picture>
              </div>
          </div>
      </section>

      {/* Phone number rental */}
      <section className="bg-color-bg_light py-10">
          <div className=" max-w-7xl mx-auto items-center justify-center md:flex md:flex-row-reverse">
            <div className="px-4 md:w-full lg:w-1/2">
              <h2 className="text-xl font-extrabold text-left text-black mb-4 md:text-3xl md:text-center lg:mb-12 lg:text-left">
                Newsems - phone number rental to receive SMS
              </h2>
              <p className="text-sm mb-4 text-left md:text-2xl">
                With Newsems service you can rent a virtual number to receive sms from 20+ countries for: 24 hours, a week or a month. You can rent a phone number for SMS to receive any number of messages for a selected period of time.
              </p>
              <p className="text-sm mb-4 text-left md:text-2xl">
                This is very handy when you need to register many accounts in online services to one number.
              </p>
              <p className="text-sm text-left md:text-2xl">
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
      <SignUpSecton />

      {/* You can buy or rent one */}
      <PromoInformation />

      {/* About */}
      <About />

      {/* Advantages */}
      <Advantages />

      <Connection />
    </>
  )
}

export default Rent;