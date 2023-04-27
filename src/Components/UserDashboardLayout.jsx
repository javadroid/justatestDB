import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import UserDashboardNav from "./UserDashboardNav";

const UserDashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-grow flex-col justify-between">
      <div>
        <UserDashboardNav />
      </div>
      <div className="flex">
        <Sidebar />
        <main className="h-full w-full">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default UserDashboardLayout;
