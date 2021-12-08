import axios from "axios";

export const login = async (email, password) => {
  const { data } = await axios.post("https://ress-eight.vercel.app/api", {
    email,
    password,
  });
  return data;
};
