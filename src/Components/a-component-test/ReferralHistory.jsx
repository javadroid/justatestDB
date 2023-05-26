import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReferralHistory = () => {
  // const [referralHistory, setReferralHistory] = useState([]);
  useEffect(() => {
    axios.get('http://161.35.218.95:3000/api/referral/history?refCode=123456').then((res) => {
      console.log(res)
    })
  }, [])


  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchReferralHistory = async () => {
  //     try {
  //       const response = await axios.get('http://161.35.218.95:3000/api/referral/history?refCode=123456'); // Replace with your API endpoint
  //       setReferralHistory(response.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchReferralHistory();
  // }, []);

  return (
    <div className="container mx-auto bg-color-bg_light h-[100vh] w-full">
        <h1 className="md:text-2xl pt-4 text-center font-bold mb-4">Referral History</h1>
      <div className="max-w-6xl mx-auto w-[90%] bg-color-white pt-8">
        {/* {isLoading ? (
          <p className="p-4">Loading referral history...</p>
        ) : (
          <ul className="space-y-2">
            {referralHistory.map((referral) => (
              <li key={referral.id} className="p-4 bg-white rounded shadow">
                <p className="text-lg font-medium">{referral.referral}</p>
                <p className="text-gray-500">{referral.signup_date}</p>
                <p className="text-gray-500">{referral.deposit}</p>
                <p className="text-gray-500">{referral.earn}</p>
              </li>
            ))}
          </ul>
        )} */}

      </div>
    </div>
  );
};

export default ReferralHistory;
