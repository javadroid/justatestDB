import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" sticky top-0 z-50 flex h-16 w-full items-center justify-between bg-color-primary_darken p-4 text-white">
      <div className="relative mx-auto flex max-w-7xl flex-grow items-center justify-between">
        <div>
          <Image
            src={Logo}
            alt="Logo Image"
            className="h-20 w-20 object-contain"
          />
        </div>
        <div className="hidden w-1/3 xl:inline-block">
          <ul className="flex flex-grow items-center justify-between">
            <Link href={"/"}>SMS Online</Link>
            <Link href={"/rent"}>
              <li>Rent</li>
            </Link>
            <Link href={"/"}>
              <li>API Connection</li>
            </Link>
            <Link href={"/blog"}>
              <li>Blog</li>
            </Link>
            <Link href={"/help"}>
              <li>Help</li>
            </Link>
          </ul>
        </div>
        <div className="hidden  xl:flex xl:justify-evenly xl:space-x-10">
          <button
            onClick={() => router.push("/signup")}
            className="rounded-full border-2 border-white px-12 py-2"
          >
            Sign Up
          </button>
          <button
            onClick={() => router.push("/login")}
            className="rounded-full border-2 border-white px-12 py-2"
          >
            Log In
          </button>
        </div>
        <div className="hidden xl:inline-block">
          <Link href="#">漢字</Link>/<Link href="#">RU</Link>/
          <Link href="#">EN</Link>
        </div>
        <div className="xl:hidden">
          <Bars3Icon
            className="h-8 w-8 text-white"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      {isOpen && (
        <div className="absolute bottom-0 left-0 right-0 top-0 z-50 flex h-screen w-screen flex-col items-center justify-center gap-y-5 overflow-x-hidden bg-color-primary_darken">
          <div className="flex flex-row-reverse items-baseline">
            <div className="lg:hidden">
              <XMarkIcon
                className="h-8 w-8 text-white"
                onClick={() => {
                  setIsOpen(false);
                }}
              />
            </div>
            <ul className="flex flex-grow flex-col items-center justify-between text-2xl">
              <Link onClick={() => setIsOpen(false)} href={"/"}>
                SMS Online
              </Link>
              <Link href={"/rent"} onClick={() => setIsOpen(false)}>
                <li>Rent</li>
              </Link>
              <Link onClick={() => setIsOpen(false)} href={"/"}>
                <li>API Connection</li>
              </Link>
              <Link onClick={() => setIsOpen(false)} href={"/blog"}>
                <li>Blog</li>
              </Link>
              <Link onClick={() => setIsOpen(false)} href={"/help"}>
                <li>Help</li>
              </Link>
            </ul>
          </div>
          <div className="flex space-x-10">
            <button
              onClick={() => {
                router.push("/signup");
                setIsOpen(false);
              }}
              className="rounded-full border-2 border-white px-12 py-2"
            >
              Sign Up
            </button>
            <button
              onClick={() => {
                router.push("/login");
                setIsOpen(false);
              }}
              className="rounded-full border-2 border-white px-12 py-2"
            >
              Log In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
