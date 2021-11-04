import Axios from "axios";
const API = "http://localhost:3000/user"; //localhost for web and 10.0.2.2 for emulator
export const getUser = async () => {
  const res = await fetch(API); //const res = await Axios.get("/user");

  console.log("fetch", res)

  return await res.json();
};
