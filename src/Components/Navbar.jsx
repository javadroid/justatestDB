import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" flex h-16 w-full items-center justify-between bg-color-primary_darken p-4 text-white">
      <div className="mx-auto flex max-w-7xl flex-grow items-center justify-between">
        <div>
          <Image
            src={Logo}
            alt="Logo Image"
            className="h-20 w-20 object-contain"
          />
        </div>
        <div className="hidden w-1/3 xl:inline-block">
          <ul className="flex flex-grow items-center justify-between">
            <li>SMS Online</li>
            <li>Rent</li>
            <li>API Connection</li>
            <li>Blog</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="hidden  xl:flex xl:justify-evenly xl:space-x-10">
          <button className="rounded-full border-2 border-white px-12 py-2">
            Sign Up
          </button>
          <button className="rounded-full border-2 border-white px-12 py-2">
            Log In
          </button>
        </div>
        <div className="hidden xl:inline-block">
          <Link href="#">漢字</Link>/<Link href="#">RU</Link>/
          <Link href="#">EN</Link>
        </div>
        <div className="xl:hidden">
          <Bars3Icon className="h-8 w-8 text-white" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
