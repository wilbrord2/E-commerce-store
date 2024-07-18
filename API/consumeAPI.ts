import axios from "axios";
import Cookies from "js-cookie";
const consumeAPI = () => {
  const accessToken = Cookies.get("accessToken");
  return axios.create({
    baseURL: "https://api.mark8.awesomity.rw",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
export default consumeAPI;
