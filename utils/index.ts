import axios from "axios";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL || "http://localhost:3000",
});

export const postData = async (uri: string, body: any) => {
  const res = await client.post(`/api/${uri}`, body);
  const data = res.data;
  return data;
};
