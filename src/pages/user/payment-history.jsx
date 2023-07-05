import UserDashboardLayout from "@/Components/UserDashboardLayout";
import { useState, useEffect } from "react";
import axios from "axios";
import TopUp from "@/Components/TopUpHistory";

const TopUpHistory = () => {
  const userid = sessionStorage.getItem("id");
  console.log(userid);
  const url =
    process.env.NEXT_PUBLIC_BASE_URL + `/user/payment?userid=${userid}`;
  const [topUpHistory, setTopUpHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
      setIsLoading(false);
      // console.error("Error occurred:", error.message);
      if (error.response) {
        setError(error.response.data.msg);
        // console.error("Response status:", error.response.status);
        // console.error("Response data:", error.response.data);
      }
    }
  };

  useEffect(() => {
    fetchTopUpHistory();
  }, []);

  const headings = ["Date", "Amount", "Status"];

  return (
    <div className=" h-[100vh] w-full bg-color-bg_light md:px-4">
      <h1 className="mb-4 pt-4 text-center font-bold md:text-left md:text-2xl">
        History of Payment
      </h1>
      <div className="mx-auto w-[90%] max-w-6xl rounded-2xl bg-color-white px-3 py-8 shadow-lg">
        {isLoading ? (
          <p className="p-4">Loading history of payment...</p>
        ) : topUpHistory.length === 0 ? (
          <p className="p-4 text-center">{error}</p>
        ) : (
          <TopUp list={topUpHistory} colNames={headings} />
        )}
      </div>
    </div>
  );
};

export default TopUpHistory;

TopUpHistory.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
