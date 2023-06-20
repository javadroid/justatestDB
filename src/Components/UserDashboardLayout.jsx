import Footer from "./Footer";
import LoadingImage from "./LoadingImage";
import Sidebar from "./Sidebar";
import UserDashboardNav from "./UserDashboardNav";
import { useEffect, useState } from "react";

const UserDashboardLayout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingImage />
      ) : (
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
      )}
    </div>
  );
};

export default UserDashboardLayout;
