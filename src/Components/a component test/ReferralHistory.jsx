import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReferralHistory = () => {
  const [referralHistory, setReferralHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReferralHistory = async () => {
      try {
        const response = await axios.get('http://161.35.218.95:3000/api/referral/history?refCode=4622opr'); // Replace with your API endpoint
        setReferralHistory(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchReferralHistory();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Referral History</h1>

      {isLoading ? (
        <p>Loading referral history...</p>
      ) : (
        <ul className="space-y-2">
          {referralHistory.map((referral) => (
            <li key={referral.id} className="p-4 bg-white rounded shadow">
              <p className="text-lg font-medium">{referral.name}</p>
              <p className="text-gray-500">{referral.email}</p>
              <p className="text-gray-500">{referral.date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReferralHistory;
