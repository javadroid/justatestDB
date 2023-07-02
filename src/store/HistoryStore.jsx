import { create } from "zustand";
import axios from "axios";

const useHistoryStore = create((set) => ({
  historyData: [],
  setHistoryData: () => {
    const instance = axios.create({
      validateStatus: function (status) {
        return status >= 200 && status < 300;
      },
    });

    const url = process.env.NEXT_PUBLIC_BASE_URL + "/bought_apps?userId=719pr";
    const fetchData = async () => {
      try {
        const response = await instance.get(url, {
          params: {
            userid: sessionStorage.getItem("id"),
          },
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
          },
        });
        // setData(response.data.bougth_services);
        set({ historyData: response.data.bougth_services });
      // console.log(response.data.bougth_services);
        // console.log(response.data.bougth_services);
        // setIsLoading(false);
      } catch (error) {
        return error;
      }
    };
    fetchData();
  },
}));

export default useHistoryStore;
