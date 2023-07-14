import CopyToClipboard from "@/Components/Copy";
import UserDashboardLayout from "@/Components/UserDashboardLayout";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const RentDetails = () => {
  const rentid = sessionStorage.getItem("rentid");
  const url = process.env.NEXT_PUBLIC_BASE_URL + `/rent?rent_id=${rentid}`;
  const [rentDetails, setRentDetails] = useState([]);
  useEffect(() => {
    const fetchRentDetails = async () => {
      try {
        const response = await axios.get(url, {
          timeout: 30000,
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
          },
        });
        setRentDetails(response.data.details);
      } catch (error) {
        toast.error(error?.response?.data.msg);
      }
    };
    fetchRentDetails();
  }, [url]);

  return (
    <div className="w-full bg-color-bg_light p-2">
      <div className="mx-auto w-full max-w-5xl">
        <Link
          href="/user/rent"
          className="rounded-full bg-color-primary text-center text-xs text-white active:opacity-75 px-6 py-2"
        >
          Back to rent
        </Link>
        <h2 className="text-bold my-8 text-center text-sm font-bold md:text-xl md:text-left">
          Rent Information
        </h2>
        {rentDetails.map((rent, index) => (
          <div
            key={index}
            className="mb-20 flex w-full flex-col rounded-2xl bg-color-white p-2 text-xs shadow-xl md:flex-row md:text-base md:justify-between md:gap-10"
          >
            <div className="md:w-1/2">
              <div className="p-4 rent-row">
                <span className="font-bold">Rent Id</span>
                <span className="float-right">{rent.rentId}</span>
              </div>
              <div className="p-4 rent-row">
                <span className="font-bold">Country</span>
                <span className="float-right">{rent.country}</span>
              </div>
              <div className="p-4 rent-row">
                <span className="font-bold">Bought</span>
                <span className="float-right">{rent.rented_date}</span>
              </div>
              <div className="p-4 rent-row">
                <span className="font-bold">Price</span>
                <span className="float-right">{rent.amount}$</span>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="p-4 rent-row">
                <span className="font-bold">Number</span>
                <span className="float-right flex items-center justify-center">{rent.rented_number}
                <CopyToClipboard textToCopy={rent.rented_number}>
                <ClipboardDocumentCheckIcon
                  width={20}
                  className="text-color-primary cursor-pointer"
                />
              </CopyToClipboard></span>
              </div>
              <div className="p-4 rent-row">
                <span className="font-bold">Rental Time</span>
                <span className="float-right">{rent.duration}</span>
              </div>
              <div className="p-4 rent-row">
                <span className="font-bold">Expires</span>
                <span className="float-right">{rent.expires}</span>
              </div>
              <div className="p-4 rent-row">
                <span className="font-bold">status</span>
                <span className="float-right">{rent.status}</span>
              </div>
            </div>
          </div>
        ))}
        <div className="flex items-center justify-center space-x-4 md:justify-start">
          <h4 className="text-sm font-bold md:text-xl">Received SMS</h4>
          <button className="rounded-full bg-color-primary text-xs text-white active:opacity-75 px-6 py-2">
            Update SMS
          </button>
        </div>
        <p className="my-8 text-center">Nothing found</p>
      </div>
    </div>
  );
};

export default RentDetails;

RentDetails.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
