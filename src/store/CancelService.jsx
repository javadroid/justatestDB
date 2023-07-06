import { create } from "zustand";
import axios from "axios";

const useCancelServiceStore = create((set) => ({
  cancelService: [],
  setCancelData: () => {
    const userid = sessionStorage.getItem("id");
    const url = process.env.NEXT_PUBLIC_BASE_URL + `/bought_apps?userId=${userid}`;

    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
          },
        });
        set({ historyData: response.data.bougth_services });
      } catch (error) {
        console.log (error);
      }
    };
    fetchData();
  },
}));

export default useCancelServiceStore;
