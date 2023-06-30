import CopyToClipboard from "@/Components/Copy";
import UserDashboardLayout from "@/Components/UserDashboardLayout";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const earn = () => {
  return (
    <section>
      <div className="px-2 pt-10">
        <h1 className="mb-3 text-2xl font-bold">Referral Program</h1>
        <div className="mx-auto mb-16 h-full max-w-3xl rounded-xl bg-white px-2 py-8 shadow-lg md:w-[80vw] md:px-6 xl:w-[80vw]">
          <h2 className="mb-4 text-center text-sm font-bold sm:text-xl md:text-left">
            Get money for attracted users!
          </h2>
          <p className="mb-3">Your referral link</p>
          <p className="mb-3 flex items-center italic text-red-500">
            <span>https://sms-man.com/?ref=J1sM-q3NGej6</span>
            <CopyToClipboard textToCopy="https://sms-man.com/?ref=J1sM-q3NGej6">
              <ClipboardDocumentCheckIcon
                width={20}
                className="ml-2 cursor-pointer text-color-primary"
              />
            </CopyToClipboard>
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
              The inviting user is called a referrer and the invitee is called a
              referral
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
              Referral funds are withdrawn within 24 hours from the moment of
              application. The minimum amount for withdrawal is 10$. Transfer to
              user Newsems.com account is instant and without commission{" "}
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
    </section>
  );
};

export default earn;

earn.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
