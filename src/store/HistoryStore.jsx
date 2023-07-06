import { create } from "zustand";
import axios from "axios";

const useHistoryStore = create((set) => ({
  historyData: [],
  setHistoryData: () => {
    const userid = sessionStorage.getItem("id");
    const url = process.env.NEXT_PUBLIC_BASE_URL + `/bought_apps?userId=${userid}`;
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
          },
        });
        const data = response.data.bougth_services.map((item) => { 
          let currentTime = Date.now();
          const TWENTY_MINUTES = 20 * 60 * 1000;
          const PURCHASED_DATE = new Date(item.purchased_date).getTime();
          item.cancelBtnActive = new Date(PURCHASED_DATE).getTime() + TWENTY_MINUTES > currentTime;
          return item;
         });
        set({ historyData: data });
      } catch (error) {
        console.log (error);
      }
    };
    fetchData();
  },
}));

export default useHistoryStore;
