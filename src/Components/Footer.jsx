import Image from "next/image";
import React from "react";
import Logo from "../assets/BlueLogo.png";
import FooterIcon from "../assets/footer.png";
import FaceBook from "../assets/socials/Facebook.svg";
import Gmail from "../assets/socials/Gmail.svg";
import Whatsapp from "../assets/socials/Whatsapp.svg";
import Youtube from "../assets/socials/Youtube.svg";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-color-bg_light-100">
      <div className="p-4">
        <div className="flex justify-center pb-16">
          <Image
            src={Logo}
            alt="Logo Image"
            className="h-20 w-36 object-contain "
          />
        </div>
        <div className="max-w-6xl mx-auto px-2">
          <ul className="flex flex-wrap justify-center md:justify-between gap-4 font-bold text-color-primary text-xs md:text-base">
            <Link href={"/"} className="hover:underline">
              <li>Receive SMS Online</li>
            </Link>
            <Link href={"/rent"} className="hover:underline">
              <li>Rent</li>
            </Link>
            <Link href={"/"} className="hover:underline">
              <li>API Connection</li>
            </Link>
            <Link href={"/ref"} className="hover:underline">
              <li>Referal Program</li>
            </Link>
            <Link href={"/partnership"} className="hover:underline">
              <li>Partnership</li>
            </Link>
            <Link href={"/partners"} className="hover:underline">
              <li>Partners</li>
            </Link>
            <Link href={"/blog"} className="hover:underline">
              <li>Blog</li>
            </Link>
            <Link href={"/help"} className="hover:underline">
              <li>Help</li>
            </Link>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-5 p-5">
          <Link href="" target="_blank">
            <Image
              src={FaceBook}
              alt="Footer Icon"
              className="h-10 w-10 object-contain"
            />
          </Link>
          <Link href="" target="_blank">
            <Image
              src={Gmail}
              alt="Footer Icon"
              className="h-10 w-10 object-contain"
            />
          </Link>
          <Link href="" target="_blank">
            <Image
              src={Whatsapp}
              alt="Footer Icon"
              className="h-10 w-10 object-contain"
            />
          </Link>
          <Link href="" target="_blank">
            <Image
              src={Youtube}
              alt="Footer Icon"
              className="h-10 w-10 object-contain"
            />
          </Link>
          <Link href="" target="_blank">
            <Image
              src={FooterIcon}
              alt="Footer Icon"
              className="h-10 w-10 object-contain"
            />
          </Link>
        </div>
      </div>
      <div className="bg-color-bg_light p-6 text-center md:p-4">
        <ul className="flex flex-col items-center w-full text-xs text-slate-500/50 md:text-base md:flex-row md:justify-center md:space-y-0 md:space-x-4 lg:h-16">
          <Link href={"/privacy"} className="hover:underline">
            <li>Privacy Policy</li>
          </Link>
          <Link href={"/terms"} className="md:border-x border-slate-500/50 md:px-4 hover:underline">
            <li>Terms of Use</li>
          </Link>
          <Link href={"/payment-policy"} className="hover:underline">
            <li>Payment & Refund</li>
          </Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
