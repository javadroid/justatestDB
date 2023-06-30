import Link from 'next/link';
import UserDashboardLayout from "@/Components/UserDashboardLayout";
import step1 from '../../assets/images/step_1.jpg'
import step2 from '../../assets/images/step_2.webp'
import step3 from '../../assets/images/step_3.webp'
import step4 from '../../assets/images/step_4.webp'
import step5 from '../../assets/images/step_5.webp'
import step6 from '../../assets/images/step_6.webp'
import Image from 'next/image';

const Instructions = () => {
  return (
    <div className="bg-color-bg_light w-full">
      <div className="dashboard-instruction max-w-2xl m-auto p-4">
        <div className="dashboard-box shadow-[0px 4px 15px rgba(37,39,86,0.15)] bg-color-white rounded-3xl px-4 pt-8 pb-10 lg:px-8">
          <div className="dashboard-inner text-[11px] sm:text-sm">
            <h2 className="font-bold text-center mb-4 md:text-left md:text-lg">Sign up in Facebook via SMS-MAN</h2>
            <ol className=" space-y-4">
              <li className="space-y-2">
                <h3 className="font-extrabold text-center mb-2 md:text-left md:text-lg">Step 1. Buy a number.</h3>
                <p>For this, you use a one-time <Link href="" className="text-color-primary underline">SMS receive</Link> or <Link href="" className="text-color-primary underline">rent a number.</Link></p>
                <p>
                  <picture>
                    <Image src={step1} width={540} height={255} alt="" />
                  </picture>
                </p>
              </li>
              <li className="space-y-2">
                <h3 className="font-extrabold text-center mb-2 md:text-left md:text-lg">Step 2: Copy the obtained number.</h3>
                <p>Copy the number by clicking on the icon next to it or by selecting the digits and pressing Ctrl+C.</p>
                <p>
                  <picture>
                    <Image src={step2} width={540} height={41} alt="" />
                  </picture>
                </p>
              </li>
              <li className="space-y-2">
                <h3 className="font-extrabold text-center mb-2 md:text-left md:text-lg">Step 3. Fill in the sign up form in Facebook.</h3>
                <p>Go to facebook.com. Click on &quot;Create New Account&quot;.</p>
                <p>
                  <picture>
                    <Image src={step3} width={540} height={328} alt="" />
                  </picture>
                </p>
              </li>
              <li className="space-y-2">
                <h3 className="font-extrabold text-center mb-2 md:text-left md:text-lg">Step 4. Enter the number when signing up.</h3>
                <p>Specify the First and Surname, the day of birth and Gender. Paste copied number into Facebook form, click &quot;Sign up&quot;.</p>
                <p>
                  <picture>
                    <Image src={step4} width={540} height={465} alt="" />
                  </picture>
                </p>
              </li>
              <li className="space-y-2">
                <h3 className="font-extrabold text-center mb-2 md:text-left md:text-lg">Step 5. Receive an SMS in your personal cabinet.</h3>
                <p>After you filled in the number of registration, go to SMS-MAN, click &quot;Receive SMS&quot; and copy the code.</p>
                <p>
                  <picture>
                    <Image src={step5} width={540} height={250} alt="" />
                  </picture>
                </p>
                <p>
                  <picture>
                  </picture>
                </p>
              </li>
              <li className="space-y-2">
                <h3 className="font-extrabold text-center mb-2 md:text-left md:text-lg">Step 6. Insert the received code
                 of Facebook.</h3>
                <p>After you filled in the number of registration, go to SMS-MAN, click &quot;Receive SMS&quot; and copy the code.</p>
                <p  className="pb-4">
                  <picture>
                    <Image src={step6} width={540} height={326} alt="" />
                  </picture>
                </p>
              </li>
              <strong>That&apos;s all! We are registered in Facebook =)</strong>
              <div className="space-y-2 flex flex-col text-center md:flex-row md:space-y-0 md:space-x-3 md:justify-evenly">
                <Link href="https://sms-man.com" className="rounded-3xl bg-color-primary py-2 text-color-white md:basis-1/3">Got it </Link>
                <Link href="https://sms-man.com/feedback" className="bg-color-white text-color-primary border border-color-primary py-2 rounded-3xl md:basis-1/3">
                <span>Not clear?</span></Link>
                <div>We redirect you to support</div>
              </div>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Instructions;

Instructions.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
