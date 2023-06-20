import UserDashboardLayout from "@/Components/UserDashboardLayout";
import { useState, useEffect } from 'react';
import axios from 'axios';
import ReferralList from "@/Components/ReferralList";

  const ReferralHistory = () => {
  const url = 'http://161.35.218.95:3000/api/referral/history?refCode=123456'
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
      return <div>{error}</div>
    }
  };

  useEffect(() => {
    fetchReferralHistory();
  }, []);

  const colNames = [ "Date", "Name", "Deposit", "Earn"];

   return (
    <div className=" bg-color-bg_light h-[100vh] w-full md:px-4">
    <h1 className="md:text-2xl pt-4 text-center font-bold mb-4 md:text-left">Referral History</h1>
      <div className="max-w-6xl mx-auto w-[90%] bg-color-white px-3 py-8 rounded-2xl shadow-lg">
        {isLoading ? (
          <p className="p-4">Loading referral history...</p>
         ) : (
            <ReferralList list={referralHistory} colNames={colNames} />
          )}
      </div>
    </div>
   )
 }
 
 export default ReferralHistory

 ReferralHistory.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
 