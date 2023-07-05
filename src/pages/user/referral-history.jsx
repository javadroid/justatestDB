import UserDashboardLayout from "@/Components/UserDashboardLayout";
import { useState, useEffect } from "react";
import axios from "axios";
import ReferralList from "@/Components/ReferralList";

const ReferralHistory = () => {
  const userRefCode = sessionStorage.getItem("refCode");
  const url =
    process.env.NEXT_PUBLIC_BASE_URL +
    `/referral/history?refCode=${userRefCode}`;
  const [referralHistory, setReferralHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
      // console.error("Error occurred:", error.message);
      if (error.response) {
        setIsLoading(false);
        setError(error.response.data.msg);
        // console.error("Response status:", error.response.status);
        // console.error("Response data:", error.response.data);
      }
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
        ) : referralHistory.length === 0 ? (
          <p className="p-4 text-center">{error}</p>
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
