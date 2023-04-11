import React from 'react';
import Image from 'next/image'
import device from '../assets/images/Device.webp'
import device2 from '../assets/images/pic_en.webp'
import Viber from '../assets/socials/viber.svg';
import Amazon from '../assets/socials/Amazon.svg';
import Paypal from '../assets/socials/Paypal.svg';
import Facebook from '../assets/socials/Facebook.svg';
import Twitter from '../assets/socials/Twitter.svg';
import Tinder from '../assets/socials/Tinder.svg';
import Whatsapp from '../assets/socials/Whatsapp.svg';
import Telegram from '../assets/socials/Telegram.svg';
import eBay from '../assets/socials/eBay.svg';
import YouTube from '../assets/socials/YouTube.svg';
import Gmail from '../assets/socials/Gmail.svg';
import LinkedIn from '../assets/socials/LinkedIn.svg';
import Vkontakte from '../assets/socials/Vkontakte.svg';
import Odnoklassniki from '../assets/socials/Odnoklassniki.svg';
import Estonia from '../assets/flags/Estonia.svg';
import Cyprus from '../assets/flags/Cyprus.svg';

const Rent = () => {
  return (
    <>
  {/*Hero section*/}
      <section id="hero" className="bg-gradient-to-b from-blue-500 to cyan-500 text-2.2rem text-white">
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
                <div className="relative w-full h-auto top-6 z-99 overflow-hidden">
                  <Image src={Viber} alt="Get SMS from Viber" className="absolute left-0 right-94% top-87.92% bottom-0" />
                  <Image src={Amazon} alt="Get SMS from Amazon" className="absolute left-1.2% right-90.41% top-55.56% bottom-27.54%" />
                  <Image src={Paypal} alt="Get SMS from Paypal" className="absolute left-89.21% right-3.12% top-17.39% bottom-67.15%" />
                  <Image src={Facebook} alt="Get SMS from Facebook" className="absolute left-38.13% right-53.48% top-43.48% bottom-39.61%" />
                  <Image src={Twitter} alt="Get SMS from Twitter" className="absolute left-63.31% right-28.3% top-35.27% bottom-47.83%" />
                  <Image src={Tinder} alt="Get SMS from Tinder" className="absolute left-29.02% right-61.87% top-0 bottom-81.64%" />
                  <Image src={Whatsapp} alt="Get SMS from Whatsapp" className="absolute left-27.82% right-66.43% top-28.99% bottom-59.42%" />
                  <Image src={Telegram} alt="Get SMS from Telegram"  className="absolute left-5.76% right-84.65% top-12.08% bottom-68.6%" />
                  <Image src={eBay} alt="Get SMS from eBay" className="absolute left-48.2% right-42.69% top-8.7% bottom-72.95%" />
                  <Image src={YouTube} alt="Get SMS from YouTube" className="absolute left-69.78% right-19.42% top-1.45% bottom-76.81%" />
                  <Image src={Gmail} alt="Get SMS from Gmail" className="absolute left-16.31% right-75.3% top-43% bottom-40.1%" />
                  <Image src={LinkedIn} alt="Get SMS from LinkedIn" className="absolute left-89.45% right-4.8% top-85.51% bottom-2.9%" />
                  <Image src={Vkontakte} alt="Get SMS from Vkontakte" className="absolute left-93.29% right-0 top-57.49% bottom-28.99%" />
                  <Image src={Odnoklassniki} alt="Get SMS from Odnoklassniki" className="absolute left-81.29% right-11.99% top-44.44% bottom-42.03%" />
                  <div>
                    <span className="big">500+</span> 1000+
                  </div>
                </div>
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
              <li className="w-auto h-40 px-4 rounded-3xl shadow-[0px_4px_15px_rgba(37,39,86,0.15)] md:mb-11">
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
                        <div className="overflow-y-auto hover:overflow-y-scroll pl-2 h-32 w-full">
                          <table className="pl-4 ml-0 w-full h-32">
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
                {/* <div className="flex flex-col items-center mx-6 p-6 rounded-3xl shadow-[0px_4px_15px_rgba(37,39,86,0.15)] md:mb-11 md:w-auto lg:mb-0 "> */}
                    {/* Heading */}
                  {/* <div className="rounded-l-full bg-transparent">
                    <div className="flex items-center justify-center space-x-8 md:space-x-8"> */}
                      {/* <div
                      className="px-4 pt-2 pb-4 -mt-6 -ml-16 text-2xl text-white bg-bgPrimar w-16 font-bold rounded-tl-3xl rounded-br-3xl md:text-3xl md:h-16 md:-mt-8 md:-ml-20"
                      >
                        1
                      </div> */}
                      {/* <h3 className="text-xl font-bold">
                        Select your country
                      </h3>
                    </div>
                  </div> */}
                  {/* Countries container */}
                  {/* <div className="flex flex-col pt-4 overflow-y-auto hover:overflow-y-scroll h-32"> */}
                    {/* country 1 */}
                    {/* <div className="flex flex-row items-center justify-between py-1">
                      <Image src={Estonia} alt="Estonia flag" className="w-10" />
                      <p className="text-xl pl-2">Estonia</p>
                      <span className="text-base text-gray-500 ml-20">+372</span>
                    </div> */}
                  {/* </div> */}
                {/* </div> */}
              </li>

                {/* step 2 */}
              <li>
                <div className="flex flex-col items-center p-6 rounded-3xl shadow-slate-200 shadow-lg md:mb-11 md:w-auto lg:w-1/3">
                    {/* Heading */}
                  <div className="rounded-l-full bg-bgLIght bg-transparent">
                    <div className="flex items-center justify-center space-x-8">
                      <div className="px-4 pt-2 pb-4 text-white text-3xl bg-bgPrimar w-16 h-16 -mt-8 -ml-20 font-bold -skew-y-12 rounded-tl-3xl rounded-br-3xl"
                      >
                        2
                      </div>
                      <h3 className="text-xl font-bold">
                        Set rent duration
                      </h3>
                    </div>
                  </div>
                    {/* Time */}
                    <div className="flex flex-row items-center justify-center space-x-4 p-4">
                      <button className="bg-bgPrimar  text-blue-400 font-bold text-xl w-32 py-2 rounded-sm">Hour</button>
                      <button className="bg-bgPrimar  text-blue-400 font-bold text-xl w-32 py-2 rounded-sm">Day</button>
                    </div>
                    <div className="flex flex-row items-center justify-center space-x-4 pb-4">
                      <button className="bg-bgPrimar  text-blue-400 font-bold text-xl w-32 py-2 rounded-sm">Week</button>
                      <button className="bg-bgPrimar  text-blue-400 font-bold text-xl w-32 py-2 rounded-sm">Month</button>
                    </div>
                    <div className="bg-bgPrimar  text-black-400 font-bold text-xl w-48 py-2 rounded-sm">
                      1
                    </div>
                </div>
              </li>
              <li>
                {/* step 3 */}
                <div className="flex flex-col items-center p-6 rounded-3xl shadow-slate-200 shadow-lg md:w-full lg:w-1/3">
                    {/* Heading */}
                  <div className="rounded-l-full bg-bgLIght bg-transparent">
                    <div className="flex items-center justify-center space-x-8">
                      <div
                      className="px-4 pt-2 pb-4 text-white text-3xl bg-bgPrimar w-16 h-16 -mt-8 -ml-20 font-bold -skew-y-12 rounded-tl-3xl rounded-br-3xl"
                      >
                        3
                      </div>
                      <h3 className="text-xl font-bold">
                        Rent a number
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 lg:space-x-4">
                      <button className="bg-bgPrimar mb-6 text-xl w-48 py-2 rounded-sm">It&apos;ll cost $0.06</button>
                      <button className="bg-blue-800  text-white font-bold text-xl w-48 py-2 rounded-xl">Rent</button>
                    </div>
                </div> 
              </li>
            </ol>
          </form>
        </div>
      </section>
    </>
  )
}

export default Rent;