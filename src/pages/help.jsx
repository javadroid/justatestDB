import React from 'react'
import Link from 'next/link'
import fast1 from '../assets/images/fast_1.svg'
import fast2 from '../assets/images/fast_2.svg'
import fast3 from '../assets/images/fast_3.svg'
import Image from 'next/image'
import Accordion from '@/Components/accordion/accordion'
import recharge from '../assets/images/recharge_en.webp'
import payment from '../assets/images/payment_en.webp'
import receive from '../assets/images/receive_en.webp'
import receive2 from '../assets/images/receive_2_en.webp'
import getSMS from '../assets/images/getSms_1_en.webp'
import getSMS2 from '../assets/images/getSms_2_en.webp'
import getSMSNew from '../assets/images/getSmsNew_en.webp'
import getSmsCode from '../assets/images/getSmsCode_en.webp'
import getSmsCode2 from '../assets/images/getSmsCode_2_en.webp'
import howRent from '../assets/images/howRent_en.webp'
import howRent2 from '../assets/images/howRent_2_en.webp'

function Help() {
  return (
    <section className="pb-20">
      <div className="bg-color-bg_primary-500 px-4 pb-10">
        <div className="space-y-4 pb-8 sm:space-y-8 sm:pb-12">
          <h1 className="font-extrabold text-center text-2xl pt-10 sm:text-4xl">Help Section</h1>
          <p className="text-center text-sm sm:text-xl">Here you can find instructions on how to use SMS-Man service and answers to the most common questions</p>
        </div>
        <div className="max-w-6xl flex flex-col justify-center text-center items-center space-y-6 md:space-y-0 md:space-x-8 md:flex-row md:flex-wrap lg:flex-nowrap lg:mx-auto">
          <div className="w-full bg-color-bg_light p-4 rounded-2xl drop-shadow-3xl md:basis-1/2 md:px-8 md:mb-8 md:max-w-1/2">
            <Link href="">
              <Image src={fast1} alt="" className="inline" />
              <h2 className="font-extrabold text-color-primary text-xs sm:text-lg">How to get a number for one-time sign up?</h2>
            </Link>
          </div>
          <div className="w-full bg-color-bg_light p-4 rounded-2xl drop-shadow-3xl md:basis-1/2 md:px-8 md:mb-8">
            <Link href="">
              <Image src={fast2} alt="" className="inline" />
              <h2 className="font-extrabold text-color-primary text-xs sm:text-lg">How to get sms to a bought number?</h2>
            </Link>
          </div>
          <div className="w-full bg-color-bg_light p-4 rounded-2xl drop-shadow-3xl md:basis-1/2 md:px-4 md:mb-8">
            <Link href="">
              <Image src={fast3} alt="" className="inline" />
              <h2 className="font-extrabold text-color-primary text-xs sm:text-lg">How to get a long-term number?</h2>
            </Link>
          </div>
        </div>
        <div className="mt-10 mx-auto max-w-7xl lg:mx-auto">
        <h1 className="mb-7 text-center text-xl font-extrabold">
          Popular Questions
        </h1>
        <Accordion />
        </div>
      </div>
      <div className="pt-10 px-4">
        <div>
          <h2 className="font-extrabold text-lg text-center pb-10 sm:text-2xl">Instructions for using the service</h2>
        </div>
        <div className="flex justify-between items-start max-w-5xl lg:mx-auto">
          <aside className="hidden sticky top-16 flex-1 max-w-[20rem] md:block">
            <ul className="space-y-2">
              <li>
                <Link href="" className="text-sm text-color-primary">Sign Up</Link>
              </li>
              <li>
                <Link href="" className="text-sm text-color-primary">How do I top up my balance?</Link>
              </li>
              <li>
                <Link href="" className="text-sm text-color-primary">Getting a registration number</Link>
              </li>
              <li>
                <Link href="" className="text-sm text-color-primary">How do I get an SMS to a purchased number?</Link>
              </li>
              <li>
                <Link href="" className="text-sm text-color-primary">How to rent a number for a long time?</Link>
              </li>
            </ul>
          </aside>
          <div className="md:flex-1">
          <h3 className="font-extrabold text-center text-xs sm:text-lg">How do I register on the site?</h3>
          <p className="text-[10px] my-2 sm:text-sm">To register for the service - go to the <Link href="" className="text-color-primary underline"><span>registration page</span></Link> and fill in the required fields by entering your valid email address or use a quick registration via social networks.</p>
          <h3 className="font-extrabold text-center text-xs mb-2 sm:text-lg">How do I top up my balance?</h3>
          <ol role="list" className="list-decimal text-[10px] pl-8 space-y-4 sm:text-sm">
            <li>
              <p className="mb-2">In <strong>the top menu</strong> of the site click the button &quot;Replenish&quot;. This will take you to the top-up section</p>
              <picture>
                <Image src={recharge} alt='' className="h-auto" />
              </picture>
            </li>
            <li>
              <p className="mb-2">Select the method of payment and specify the amount of recharge (you can choose one of the presented options or specify at your discretion), then press the &apos;Pay&apos; button.</p>
              <picture>
                <Image src={payment} alt='' className="h-auto" />
              </picture>
            </li>
            <li>
              <p className="mb-2">To pay (enter your card details or other data required by the system) you will be redirected to the page of the payment system. If this does not happen, click continue..</p>
              <p><strong>After the funds are credited, you will be able to see the account balance directly in your personal cabinet.</strong></p>
            </li>
          </ol>

          <h3 className="font-extrabold text-center text-xs my-4 sm:text-lg">How do I get a one-time registration number?</h3>
          <ol className="list-decimal text-[10px] pl-8 space-y-4 sm:text-sm">
            <li>
              <p className="mb-2">On the main page, select the, <Link href="" className="text-color-primary underline"> country and service</Link> where you want to pass the SMS confirmation.</p>
              <picture>
                <Image src={receive} alt='' className="h-auto" />
              </picture>
            </li>
            <li>
              <p className="mb-2">To but virtual nuber, click on the &quot;Buy SMS&quot; button in front of the selected service.</p>
              <picture>
                <Image src={receive2} alt="" />
              </picture>
              <p className="mt-2"><b>The purchased virtual number will be automatically added to your personal SMS-man account.</b></p>
            </li>          
          </ol>

          <h3 className="font-extrabold text-center text-xs my-4 sm:text-lg">How do I get an SMS to a purchased number?</h3>
          <ol className="list-decimal text-[10px] pl-8 space-y-4 sm:text-sm">
            <li>
              <p className="mb-2">Copy the number</p>
              <picture>
                <Image src={getSMS} alt="" />
              </picture>
            </li>
            <li>
              <p className="mb-2">Specify the number when registering with the selected service (Telegram is shown in the example) and click &quot;Continue&quot;.</p>
              <picture>
                <Image src={getSMS2} alt="" />
              </picture>
            </li>
            <li>
              <p className="mb-2">Go back to your personal SMS-Man cabinet and press the <strong>Get SMS</strong>  button. If the number can not be used in this service or you have changed your mind to use it, you can cancel the number by clicking on the button <strong> &quot;Cancel activation&quot;</strong></p>
              <Image src={getSMSNew} alt="" />
              <p className="my-2"><b>When the verification code is received, you can see it in the &quot;SMS&quot; field</b></p>
              <Image src={getSmsCode} alt="" />
            </li>
            <li>
              <p className="mb-2">Enter the confirmation code from your Telegram SMS and click CONTINUE to complete the registration.</p>
              <Image src={getSmsCode2} alt="" />
            </li>
          </ol>

          <h3 className="font-extrabold text-center text-xs my-4 sm:text-lg">How to rent a nubmeer for a very long time?</h3>
          <p className="mb-2 text-[10px] sm:text-sm">1. To rent a number, go to the <Link href="/rent" className="text-color-primary underline">&quot;Rent Number&quot;</Link> tab. <br /></p>
          <picture>
            <Image src={howRent} alt="" />
          </picture>
          <p className="my-4 text-[10px] sm:text-sm">2. Specify the desired country and rental period (the minimum rental period is 1 hour, and the maximum is a month). When all the necessary information is specified, press the &quot;Rent&quot; button. <br /></p>
          <picture>
            <Image src={howRent2} alt="" />
          </picture>
          <p className="my-2 text-[10px] sm:text-sm">3. The rented number will be added to your personal cabinet, where you can view the received SMS or end the rental at any time.<br /></p>
          <p className="mb-2 text-[10px] sm:text-sm"><strong>Attention!</strong> You can cancel a rented number only if no more than 20 minutes have passed since you rented it and you have not received any SMS.</p>
          <p className="mb-2 text-[10px] sm:text-sm">For any questions you may have when reviewing SMS-MAN, there is a <Link href="https://sms-man.com/feedback" className="text-color-primary underline"><span>feedback form</span></Link> open to you. We try to respond promptly to help you with your problem.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Help