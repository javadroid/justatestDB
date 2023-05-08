import Link from 'next/link'
import React from 'react'

export default function Ref() {
  return (
    <section>
      <div className="m-auto md:px-4 xl:px-8">
        <div className="max-w-6xl mt-24 mb-8 mx-auto px-4 xl:px-8">
          <h2 className="font-bold text-sm text-center mb-4 sm:text-xl md:text-left">Get money for attracted users!</h2>
          <p className="text-xs font-bold mb-2 sm:text-lg md:mb-6">Detailed conditions of the affiliate program:</p>
          <ol className="list-decimal text-xs space-y-2 mb-4 ml-10 sm:text-lg md:ml-12 md:text-justify">
            <li>Referral program is created exclusively for stimulation of distribution of information about Newsems.com resource.</li>
            <li>Each registered user of Newsems.com can take part in Referral program</li>
            <li>The number of invited users by one user is unlimited</li>
            <li>The inviting user is called a referrer and the invitee is called a referral</li>
            <li>Referrer, who invited the new active referral, gets 3% of referral&apos;s expenses</li>
            <li>The maximum amount of referral payments from one referral is unlimited.</li>
            <li>Referral funds are withdrawn within 24 hours from the moment of application. The minimum amount for withdrawal is 10$. Transfer to user Newsems.com account is instant and without commission </li>
            <li>Administration of Newsems has the right to deny withdrawal of funds in case of fraudulent use of the invited users or other abuses of the referral program</li>
          </ol>
          <p className="text-xs mb-2 sm:text-lg md:text-justify md:mb-4">If you have an application that works with our API, you can get affiliate payments from users you attracted.</p>
          <p className="text-xs sm:text-lg md:text-justify">To do this <Link href={"/contact"} className="underline text-color-primary">write us.</Link></p>
        </div>
      </div>
    </section>
  )
}
