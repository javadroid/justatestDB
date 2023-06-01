const ReferralList = ({name, date, deposit, earn}) => {

  return (
    <li className="p-4 flex justify-evenly items-center">
      <p className="text-lg font-medium">{name}</p>
      <p className="text-gray-500">{date}</p>
      <p className="text-gray-500">{deposit}</p>
      <p className="text-gray-500">{earn}</p>
    </li>
  );
};

export default ReferralList;
