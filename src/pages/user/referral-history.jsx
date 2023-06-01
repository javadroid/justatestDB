import UserDashboardLayout from "@/Components/UserDashboardLayout";
import ReferralList from "@/Components/ReferralHistory"
import { useState, useEffect } from 'react';
import axios from 'axios';

 
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
      console.log(error);
    }
  };

  useEffect(() => {
    fetchReferralHistory();
  }, []);


   return (
    <div className=" bg-color-bg_light h-[100vh] w-full md:px-4">
    <h1 className="md:text-2xl pt-4 text-center font-bold mb-4 md:text-left">Referral History</h1>
      <div className="max-w-6xl mx-auto w-[90%] bg-color-white py-8 rounded-2xl shadow-lg">
        {isLoading ? (
          <p className="p-4">Loading referral history...</p>
        ) : (
          <ol className="space-y-2 list-decimal">
            {referralHistory.map((referral,index) => (
            <ReferralList key={index}
            name={referral.referral}
            date={referral.signup_date}
            deposit={referral.deposit}
            earn={referral.earn} />
            ))}        
          </ol>
          )}
      </div>
    </div>
   )
 }
 
 export default ReferralHistory

 ReferralHistory.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
 