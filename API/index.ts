import axios from "axios";

const consumeAPI = () => {
  const accessToken= JSON.parse(localStorage.getItem("user_access_token") as string);
  return axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
export default consumeAPI; 