import React, { useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import UserDashboardNav from "./UserDashboardNav";
import { useRouter } from "next/router";

const UserDashboardLayout = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    if (!sessionStorage.getItem("id")) {
      router.replace("/");
    }
  }, []);

  return (
    <div className="flex w-full flex-grow flex-col justify-between">
      <div className="w-full">
        <UserDashboardNav />
      </div>
      <div className="flex w-full ">
        <Sidebar />
        <main className="h-full w-full">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default UserDashboardLayout;
