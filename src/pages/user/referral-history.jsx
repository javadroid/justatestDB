import UserDashboardLayout from "@/Components/UserDashboardLayout";
import { useState, useEffect } from "react";
import axios from "axios";
import ReferralList from "@/Components/ReferralList";

const ReferralHistory = () => {
  const url =
    process.env.NEXT_PUBLIC_BASE_URL + "/referral/history?refCode=123456";
  const [referralHistory, setReferralHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchReferralHistory = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
        },
      });
      setReferralHistory(response.data.referrals.result);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchReferralHistory();
  }, []);

  const colNames = ["Date", "Name", "Deposit", "Earn"];

  return (
    <div className=" h-[100vh] w-full bg-color-bg_light md:px-4">
      <h1 className="mb-4 pt-4 text-center font-bold md:text-left md:text-2xl">
        Referral History
      </h1>
      <div className="mx-auto w-[90%] max-w-6xl rounded-2xl bg-color-white px-3 py-8 shadow-lg">
        {isLoading ? (
          <p className="p-4">Loading referral history...</p>
        ) : (
          <ReferralList list={referralHistory} colNames={colNames} />
        )}
      </div>
    </div>
  );
};

export default ReferralHistory;

ReferralHistory.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
