import { create } from "zustand";
import axios from "axios";
import { toast } from "react-hot-toast";

const useCancelServiceStore = create((set) => ({
  cancelService: [],
  setCancelData: () => {
    const userid = sessionStorage.getItem("id");
    const url = process.env.NEXT_PUBLIC_BASE_URL + `/bought_apps?userId=${userid}`;

    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
        timeout: 30000,
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
          },
        });
        set({ historyData: response.data.bougth_services });
      } catch (error) {
        toast.error(error?.response?.data.msg || "No response from the server.");
      }
    };
    fetchData();
  },
}));

export default useCancelServiceStore;
