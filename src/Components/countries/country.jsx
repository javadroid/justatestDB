import { useEffect, useState} from "react";
import Image from "next/image";
import UK from '../../assets/flags/UK.svg'
import axios from "axios";

const url = "http://161.35.218.95:3000/api/countries";
// const url2 = "http://161.35.218.95:3000/api/referral/history?refCode=123456"

const Country = () => {
const [data, setData] = useState([]);
let maxNameLength = 11;
  const fetchData = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
        },
      });
      setData(response.data.countries);
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    fetchData();
  }, [])

  if (data.length === 0) {
    return <div>Loading...</div>
  };

  return (
    <table className="ml-0 w-full pl-4">
      <tbody>
        {data.map((country) => (
          <tr
            key={country.id}
            className="cursor-pointer rounded-2xl bg-color-white hover:bg-color-bg_primary-500  active:bg-color-bg_primary-500"
          >
            <td className="flex w-full items-center justify-start py-1">
              <span>
                <Image
                  src={UK}
                  alt=""
                  className="ml-4 mr-2 flex w-8 items-center"
                />
              </span>
              <span className="text-xs font-medium md:text-base">
                {country.country_name.length > maxNameLength ? `${country.country_name.substring(0, maxNameLength)}...` : country.country_name}
              </span>
            </td>
            <td>
              <span className="text-xs text-gray-500">{country.country_code}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Country;
