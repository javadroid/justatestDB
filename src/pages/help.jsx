import React from 'react'
import Link from 'next/link'
import fast1 from '../assets/images/fast_1.svg'
import fast2 from '../assets/images/fast_2.svg'
import fast3 from '../assets/images/fast_3.svg'
import Image from 'next/image'
import Accordion from '@/Components/accordion/accordion'

function Help() {
  return (
    <section>
      <div className="bg-color-bg_primary-500 px-4 pb-10">
        <div className="space-y-4 pb-8">
          <h1 className="font-extrabold text-center text-2xl pt-10">Help Section</h1>
          <p className="text-center text-sm">Here you can find instructions on how to use SMS-Man service and answers to the most common questions</p>
        </div>
        <div className="flex flex-col justify-between text-center items-center space-y-6 md:space-y-0">
          <div className="w-full bg-color-bg_light p-4 rounded-2xl drop-shadow-3xl">
            <Link href="">
              <Image src={fast1} alt="" className="inline" />
              <h2 className="font-extrabold text-color-primary text-xs">How to get a number for one-time sign up?</h2>
            </Link>
          </div>
          <div className="w-full bg-color-bg_light p-4 rounded-2xl drop-shadow-3xl">
            <Link href="">
              <Image src={fast2} alt="" className="inline" />
              <h2 className="font-extrabold text-color-primary text-xs">How to get sms to a bought number?</h2>
            </Link>
          </div>
          <div className="max-w-full w-full bg-color-bg_light p-4 rounded-2xl drop-shadow-3xl">
            <Link href="">
              <Image src={fast3} alt="" className="inline" />
              <h2 className="font-extrabold text-color-primary text-xs">How to get a long-term number?</h2>
            </Link>
          </div>
        </div>
        <div className="mt-10 mx-auto max-w-7xl">
        <h1 className="mb-7 text-center text-xl font-extrabold">
          Popular Questions
        </h1>
        <Accordion />
        </div>
      </div>
      <div className="pt-10 px-4">
        <div>
          <h2 className="font-extrabold text-lg text-center pb-10">Instructions for using the service</h2>
        </div>
        <div className="">
          <h3 className="font-extrabold text-center">How do I register on the site?</h3>
          <p>To register for the service - go to the <Link href=""><span>registration page</span></Link> and fill in the required fields by entering your valid email address or use a quick registration via social networks.</p>
          <h3 className="font-extrabold text-center">How do I top up my balance?</h3>
          <ol>
            <li>
              <p>In <strong>the top menu</strong> of the site click the button &quot;Replenish&quot;. This will take you to the top-up section</p>
              <picture></picture>
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Help