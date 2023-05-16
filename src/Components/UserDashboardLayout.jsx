import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import UserDashboardNav from "./UserDashboardNav";

const UserDashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-grow flex-col justify-betweenn w-full">
      <div className="w-full">
        <UserDashboardNav />
      </div>
      <div className="flex w-full">
        <Sidebar />
        <main className="h-full w-full">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default UserDashboardLayout;
