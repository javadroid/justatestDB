import Head from "next/head";
import Image from "next/image";
import Hero from "@/assets/receive-sms.png";
import Ad from "@/assets/facebookReg.png";
import Ad2 from "@/assets/craiglistAds.png";
import Cry from "@/assets/cry-emoji.svg";
import Smile from "@/assets/smile-emoji.svg";
import LadyLaptop from "@/assets/step1.png";
import LadyLaptop2 from "@/assets/step2.png";
import LadyLaptop3 from "@/assets/step3.png";
import Services from "@/Components/Services";
import HeroSection from "@/Components/HeroSection";
import Advantages from "@/Components/Advantages";
import FAQ from "@/Components/FAQ";
import Connection from "@/Components/Connection";
import PromoInformation from "@/Components/PromoInformation";
import Table from "@/Components/Table";
import SignUpSecton from "@/Components/SignUpSecton";
import Cookies from "@/Components/Cookies";
import About from "@/Components/About";
import Link from "next/link";
import rightArrow from "@/assets/arrows/arrow-right.png";
import curvedArrow from "@/assets/arrows/curved-arrow.png"
import scribble from "@/assets/random-shapes/scribble.png";
import zigzag from "@/assets/random-shapes/zigzag.png";
import arrow from "@/assets/arrows/arrow.png";
import next from "@/assets/arrows/next.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Newsems</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <section className="w-full bg-gradient-to-b from-[#0d41d5] to-[#0187FF]">
          <div className="relative mx-auto mt-14 flex max-w-6xl flex-col px-4 pt-16 lg:flex-row lg:items-center lg:justify-between">
              <Image width={200} src={curvedArrow} alt="curved-arrow" className="absolute -bottom-24  right-[40%]" />
            <div className="basis-1/2 relative">
              <Image src={rightArrow} width={60} alt="right arrow" className="hidden absolute -left-20 top-50 bottom-0 lg:flex" />
              <div>
                <h1 className="text-center mb-4 text-color-white text-xl font-extrabold md:w-full md:text-left md:text-5xl lg:text-4xl">
                  Receive SMS online
                </h1>
                <p className="text-sm md:text-2xl text-white">
                  Register on social networks, <br className="hidden" />
                  marketplaces, exchanges and
                  <br className="hidden" />
                  online services{" "}
                  <span className="text-yellow-500">
                    without spam{" "}
                  </span> and <br className="hidden" />
                  <span className="text-yellow-500">
                    disclosure of personal data.
                  </span>
                </p>
              </div>
              <div className="flex w-full flex-col items-center justify-between space-y-5 pt-11 md:flex-row md:place-items-baseline md:justify-center md:space-y-0 md:space-x-6">
                
                <Link href={"/login"}  className="w-full rounded-full bg-white py-2 text-center text-sm md:text-lg font-bold text-color-primary_black group relative overflow-hidden hover:text-white">
                  <span className="absolute left-0 top-0 mt-12 h-20 w-full bg-color-primary_black transition-all duration-300 ease-in-out rounded-3xl group-hover:-mt-4"></span>
                  <button className="relative">Receive SMS</button>
                </Link>
                <Link href={"/login"} className="w-full rounded-full bg-color-primary_black py-2 text-center text-sm md:text-lg font-bold text-white group relative overflow-hidden hover:text-color-primary_black">
                  <span className="absolute left-0 top-0 mt-12 h-20 w-full bg-color-bg_light transition-all duration-300 ease-in-out rounded-3xl group-hover:-mt-4"></span>
                  <button className="relative">
                  Rent number
                  </button>
                </Link>
              </div>
            </div>
            <div className="sm:flex sm:items-center sm:justify-center">
              <Image
                src={Hero}
                width={500}
                height={500}
                alt="Hero"
                priority={true}
              />
            </div>
          </div>
        </section>
        <section className="bg-color-bg_light-100 py-20">
          <div className="mx-auto max-w-7xl lg:flex lg:flex-col">
            <div className="px-1">
              <h2 className="text-center md:text-xl font-extrabold text-color-primary">
                Check How it Works!
              </h2>
              <h1 className="text-center mt-4 md:text-2xl font-extrabold max-w-lg mx-auto">
                Choose your country and service receive SMS right now
              </h1>
            </div>
            <Table />
          </div>
          <div className="mt-9 flex flex-col items-center">
            <h1 className="text-center md:text-3xl font-extrabold">
              Most popular services today
            </h1>
            <div className="mt-11 flex w-full flex-col">
              <Services />
            </div>
          </div>
        </section>
        <section className="bg-color-bg_light pt-10">
          <div className="mx-auto max-w-7xl px-3">
            <h1 className="mx-auto mb-8 md:w-3/4 max-w-7xl text-center md:text-2xl font-extrabold lg:w-1/2 lg:text-3xl">
              It&apos;s no secret that almost all online services are selling your personal data.
            </h1>
            <div className="md:flex md:justify-center md:space-x-5">
              <div className="flex flex-col items-center rounded-3xl bg-color-bg_primary-500 py-5">
                <Image
                  src={Ad}
                  alt="AD image"
                  className="h-80 w-80"
                />
                <div className="flex flex-col">
                  <h3 className="w-3/4 self-center text-center mx-auto md:w-full md:text-2xl font-bold">
                    Have you registered on Facebook?
                  </h3>
                  <p className="md:w-3/4 pt-4 px-4 text-xs self-center text-left md:text-lg font-medium lg:px-0">
                    You immediately receive an avalanche of targeted
                    advertising.
                  </p>
                </div>
              </div>
              <div className="mt-4 flex flex-col items-center rounded-3xl bg-color-bg_primary-500 py-5 md:mt-0">
                <Image
                  src={Ad2}
                  alt="AD image"
                  className="h-80 w-80"
                />
                <div className="flex flex-col">
                  <h3 className="w-3/4 self-center text-center md:text-2xl font-bold md:text-left">
                    Post an ad on Craigslist?
                  </h3>
                  <p className="md:w-3/4 pt-4 px-4 text-xs self-center text-left md:text-lg font-medium lg:px-0">
                    Expect a lot of spam calls with offers to arange a loan!
                  </p>
                </div>
              </div>
            </div>
            <div className="relative mx-auto mt-16 max-w-3xl">
              <Image src={scribble} width={100} alt="scribble" className="hidden lg:flex absolute -left-40" />
              <Image src={zigzag} width={100} alt="zigzag" className="hidden lg:flex absolute -right-[10%] -top-10"/>
              <div className="flex items-center space-x-9">
                <Image
                  src={Cry}
                  alt="AD image"
                  className="h-14 w-14 object-contain"
                />
                <div className="rounded-2xl bg-white px-9 py-5 drop-shadow-xl">
                  <h2 className="text-2xl font-extrabold text-color-primary">
                    Can we not do this?
                  </h2>
                </div>
              </div>
              <div className="flex flex-row-reverse items-center gap-5 pt-5">
                <Image
                  src={Smile}
                  alt="AD image"
                  className="h-14 w-14 object-contain"
                />
                <div className="rounded-2xl bg-white px-9 py-5 drop-shadow-xl">
                  <h2 className="text-2xl font-extrabold text-color-primary">
                    Yes
                  </h2>
                </div>
              </div>
            </div>
            <HeroSection />
          </div>
        </section>
        <SignUpSecton />
        <section className="bg-color-bg_light py-16">
          <div className="relative mx-auto flex max-w-7xl flex-col items-center px-5">
            <Image src={arrow} width={100} alt="arrow" className="hidden lg:flex absolute top-1/3" />
            <Image src={next} width={100} alt="arrow" className="hidden lg:flex absolute bottom-1/4" />
            <h1 className="self-center text-center md:text-2xl font-extrabold md:w-2/5">
              Registration on the sites without SMS to your personal number in 3
              steps
            </h1>
            <div className="flex flex-col items-center md:mx-auto md:max-w-5xl md:flex-row md:gap-20">
              <Image
                src={LadyLaptop}
                alt="Lady with Laptop"
                className="h-80 w-80 object-contain"
              />
              <div className="flex flex-col items-center">
                <h1 className="mb-6 md:w-4/5 self-center text-center md:text-xl font-bold md:text-left">
                  Get your number in your personal cabinet
                </h1>
                <p className="md:w-4/5 md:text-lg">
                  To register with Newsems you only need to enter your email
                  address. No ID information or other contacts.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center md:mx-auto md:max-w-5xl md:flex-row-reverse md:gap-20">
              <Image
                src={LadyLaptop2}
                alt="Lady with Laptop"
                className="h-80 w-80 object-contain"
              />
              <div className="flex flex-col items-center">
                <h1 className="mb-6 md:w-4/5 self-center text-center md:text-xl font-bold md:text-left">
                  Enter your phone number when signing up online
                </h1>
                <p className="md:w-4/5 md:text-lg">
                  We support 1500+ of the most popular social networks, messengers, marketplaces and web sites.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center md:mx-auto md:max-w-5xl md:flex-row md:gap-20">
              <Image
                src={LadyLaptop3}
                alt="Lady with Laptop"
                className="h-80 w-80 object-contain"
              />
              <div className="flex flex-col items-center">
                <h1 className="mb-6 md:w-4/5 self-center text-center md:text-xl font-bold md:text-left">
                  You receive an SMS in your personal profile
                </h1>
                <p className="md:w-4/5 md:text-lg">
                  You enter the verification code you received on the site. From $0.05 per activation. The number of numbers and activations is unlimited.
                </p>
              </div>
            </div>
          </div>
        </section>
        <PromoInformation />
        <About />
        <Advantages />
        <Connection />
        <FAQ />
        <Cookies />
      </main>
    </>
  );
}
