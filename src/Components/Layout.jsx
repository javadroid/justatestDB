import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-grow flex-col justify-between w-full">
      <Navbar />
      <main className="h-full w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
