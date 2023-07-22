import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-hot-toast";

const url = process.env.NEXT_PUBLIC_BASE_URL + "/countries";

const Country = () => {
  const [data, setData] = useState([]);
  let maxNameLength = 11;
  const fetchData = async () => {
    try {
      const response = await axios.get(url, {
        timeout: 30000,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
        },
      });
      setData(response.data.countries);
    } catch (error) {
    toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <table className="ml-0 w-full pl-4">
      <tbody>
        {data.map((country) => (
          <tr
            key={country.id}
            className="cursor-pointer rounded-2xl bg-color-white hover:bg-color-bg_primary-500  active:bg-color-bg_primary-500"
            onClick={() => console.log(country?.country_name)}
          >
            <td className="flex w-full items-center justify-start py-1">
              <span>
                <Image
                  src={`https://flagcdn.com/${country.country_code.toLowerCase()}.svg`}
                  width={20}
                  height={20}
                  alt={country.country_id}
                  className="ml-4 mr-2 flex w-8 items-center"
                />
              </span>
              <span className="text-xs font-medium md:text-base">
                {country.country_name.length > maxNameLength
                  ? `${country.country_name.substring(0, maxNameLength)}...`
                  : country.country_name}
              </span>
            </td>
            <td>
              <span className="text-xs text-gray-500">
                {country.country_code}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Country;
