import axios from "axios";
import { useEffect, useState } from "react";

const Popup = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  const url = process.env.NEXT_PUBLIC_BASE_URL + "/user";
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(url, {
        params: {
          userid: sessionStorage.getItem("id"),
        },
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
        },
      });
      setData(response.data.user.apikey);
    } catch (error) {
      console.log(error)
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  if (data.length === 0) {
    return <div>Please wait...</div>;
  }
  return (
    <div className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="flex w-full max-w-xl flex-col  justify-center items-center bg-white p-2">
        <button
          onClick={() => onClose()}
          className="place-self-end rounded-full bg-color-primary px-4 py-2"
        >
          X
        </button>
        <div className="rounded bg-white p-2">
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, eveniet nihil. Ipsa autem quibusdam nisi, rerum libero perspiciatis mollitia nostrum dolor, est et, voluptatibus eos debitis exercitationem animi delectus itaque.
          </p>
        <p className="text-sm md:text-base font-bold my-4">API key: <span className="text-color-api-red">{data}</span></p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/lTPWLdU9uvI"
            title="YouTube video player"
            border="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Popup;
