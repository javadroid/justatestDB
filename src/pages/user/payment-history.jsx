import UserDashboardLayout from "@/Components/UserDashboardLayout";
import { useState, useEffect } from 'react';
import axios from 'axios';
import TopUp from "@/Components/TopUpHistory";

 
const TopUpHistory = () => {
const url = 'http://161.35.218.95:3000/api/user/payment?userid=719pr'
  const [topUpHistory, setTopUpHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTopUpHistory = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
        },
      });
      console.log(response.data.user_topups.result)
      setTopUpHistory(response.data.user_topups.result);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTopUpHistory();
  }, []);


   return (
    <div className=" bg-color-bg_light h-[100vh] w-full md:px-4">
    <h1 className="md:text-2xl pt-4 text-center font-bold mb-4 md:text-left">History of Balance</h1>
      <div className="max-w-6xl mx-auto w-[90%] bg-color-white py-8 rounded-2xl shadow-lg">
        {isLoading ? (
          <p className="p-4">Loading history of balance...</p>
        ) : (
          <div className="space-y-2 list-decimal">
            {topUpHistory.map((topup,index) => (
            <TopUp key={index}
            date={topup.date}
            amount={topup.amount}
            status={topup.status} />
            ))}        
          </div>
          )}
      </div>
    </div>
   )
 }
 
 export default TopUpHistory

 TopUpHistory.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
 