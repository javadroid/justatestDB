import Image from "next/image";
import React from "react";
import Logo from "../assets/Logo.png";
import FooterIcon from "../assets/footer.png";
import FaceBook from "../assets/socials/Facebook.svg";
import Gmail from "../assets/socials/Gmail.svg";
import Whatsapp from "../assets/socials/Whatsapp.svg";
import Youtube from "../assets/socials/Youtube.svg";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className="p-4">
        <div className="flex justify-center pb-16">
          <Image
            src={Logo}
            alt="Logo Image"
            className="h-20 w-36 bg-blue-400 object-contain "
          />
        </div>
        <div>
          <ul className="flex flex-wrap justify-center gap-4">
            <Link href={"/"}>
              <li>Receive SMS Online</li>
            </Link>
            <Link href={"/rent"}>
              <li>Rent</li>
            </Link>
            <Link href={"/"}>
              <li>API Connection</li>
            </Link>
            <Link href={"/ref"}>
              <li>Referal Program</li>
            </Link>
            <Link href={"/partnership"}>
              <li>Partnership</li>
            </Link>
            <Link href={"/partners"}>
              <li>Partners</li>
            </Link>
            <Link href={"/blog"}>
              <li>Blog</li>
            </Link>
            <Link href={"/help"}>
              <li>Help</li>
            </Link>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-5 p-5">
          <div>
            <Image
              src={FaceBook}
              alt="Footer Icon"
              className="h-10 w-10 object-contain"
            />
          </div>
          <div>
            <Image
              src={Gmail}
              alt="Footer Icon"
              className="h-10 w-10 object-contain"
            />
          </div>
          <div>
            <Image
              src={Whatsapp}
              alt="Footer Icon"
              className="h-10 w-10 object-contain"
            />
          </div>
          <div>
            <Image
              src={Youtube}
              alt="Footer Icon"
              className="h-10 w-10 object-contain"
            />
          </div>
          <div>
            <Image
              src={FooterIcon}
              alt="Footer Icon"
              className="h-10 w-10 object-contain"
            />
          </div>
        </div>
      </div>
      <div className="bg-color-bg_light p-6 text-center md:p-4">
        <ul className="flex flex-col items-center space-y-3 text-slate-500/50 md:flex-row md:justify-around md:space-x-1">
          <Link href={"/privacy"}>
            <li>Privacy Policy</li>
          </Link>
          <Link href={"/terms"}>
            <li>Terms of Use</li>
          </Link>
          <Link href={"/payment-policy"}>
            <li>Payment & Refund</li>
          </Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
