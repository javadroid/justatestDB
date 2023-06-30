import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import LoadingImage from "./LoadingImage";

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1);
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingImage />
      ) : (
        <div className="flex w-full flex-grow flex-col justify-between">
          <Navbar />
          <main className="h-full w-full">{children}</main>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Layout;
