import axios from "axios";

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

// Optional: log or handle errors globally
client.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error("[API ERROR]", err?.response || err?.message);
    return Promise.reject(err);
  }
);

export default client;
