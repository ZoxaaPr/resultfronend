import axios from "axios";

export const login = async (email, password) => {
  const { data } = await axios.post("https://res-zeta-one.vercel.app/api", {
    email,
    password,
  });
  return data;
};
