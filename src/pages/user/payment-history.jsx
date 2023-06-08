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
      setTopUpHistory(response.data.user_topups.result);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTopUpHistory();
  }, []);

    const headings = ["Date", "Amount", "Status"]

  return (
    <div className=" bg-color-bg_light h-[100vh] w-full md:px-4">
    <h1 className="md:text-2xl pt-4 text-center font-bold mb-4 md:text-left">History of Payment</h1>
      <div className="max-w-6xl mx-auto w-[90%] bg-color-white px-3 py-8 rounded-2xl shadow-lg">
        {isLoading ? (
          <p className="p-4">Loading history of payment...</p>
        ) : (
            <TopUp list={topUpHistory}
            colNames={headings} />
          )}
      </div>
    </div>
   )
 }
 
 export default TopUpHistory

 TopUpHistory.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
 