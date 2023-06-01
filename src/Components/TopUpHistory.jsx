const TopUp = ({ date, amount, status }) => {
  const headings = [
    {
      title: "Bought",
    },
    {
      title: "Service"
    },
    {
      title: "Country"
    },
    {
      title: "Phone"
    },
    {
      title: "Price"
    },
    {
      title: "Message"
    }
  ];

  return (
    <>
      <div className="p-4 flex justify-evenly items-center">
        <p className="text-gray-500">{date}</p>
        <p className="text-gray-500">{amount}</p>
        <p className="text-gray-500">{status}</p>
      </div>
    </>
  );
};

export default TopUp;
