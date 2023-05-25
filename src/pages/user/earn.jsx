import UserDashboardLayout from "@/Components/UserDashboardLayout";
import ReferralHistory from "@/Components/a component test/ReferralHistory";
import Link from "next/link";
import React from "react";

const earn = () => {
  return (
    <section>
      <div className="pl-10 pr-5 pt-10 lg:pl-4 lg:pr-2">
        <h1 className="mb-3  text-2xl font-bold">Referral Program</h1>
        <div className="h-full rounded-lg bg-white py-2 shadow-lg md:w-[80vw] lg:w-full xl:w-[80vw]">
          <div className="m-auto">
            <div className="mx-auto my-8 max-w-6xl px-4 xl:px-8">
              <h2 className="mb-4 text-center text-sm font-bold sm:text-xl md:text-left">
                Get money for attracted users!
              </h2>
              <p className="mb-3">Your referral link</p>
              <p className="mb-3 italic text-red-500">
                https://sms-man.com/?ref=J1sM-q3NGej6
              </p>
              <p className="mb-2 text-xs font-bold sm:text-lg md:mb-6">
                Detailed conditions of the affiliate program:
              </p>
              <ol className="mb-4 ml-10 list-decimal space-y-2 text-xs sm:text-lg md:ml-12 md:text-justify">
                <li>
                  Referral program is created exclusively for stimulation of
                  distribution of information about Newsems.com resource.
                </li>
                <li>
                  Each registered user of Newsems.com can take part in Referral
                  program
                </li>
                <li>The number of invited users by one user is unlimited</li>
                <li>
                  The inviting user is called a referrer and the invitee is
                  called a referral
                </li>
                <li>
                  Referrer, who invited the new active referral, gets 3% of
                  referral&apos;s expenses
                </li>
                <li>
                  The maximum amount of referral payments from one referral is
                  unlimited.
                </li>
                <li>
                  Referral funds are withdrawn within 24 hours from the moment
                  of application. The minimum amount for withdrawal is 10$.
                  Transfer to user Newsems.com account is instant and without
                  commission{" "}
                </li>
                <li>
                  Administration of Newsems has the right to deny withdrawal of
                  funds in case of fraudulent use of the invited users or other
                  abuses of the referral program
                </li>
              </ol>
              <p className="mb-2 text-xs sm:text-lg md:mb-4 md:text-justify">
                If you have an application that works with our API, you can get
                affiliate payments from users you attracted.
              </p>
              <p className="text-xs sm:text-lg md:text-justify">
                To do this{" "}
                <Link href="/" className="text-color-primary underline">
                  write us.
                </Link>
              </p>
            </div>
          </div>
        </div>
        <ReferralHistory />
      </div>
    </section>
  );
};

export default earn;

earn.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
