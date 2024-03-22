import axios from "axios";

const Instance = axios.create({
  baseURL: "https://interview-plus.onrender.com/",
});

Instance.interceptors.request.use(
  (confiq) => {
    const token = localStorage.getItem("token");
    if (token) {
      confiq.headers["x-access-token"] = token;
    }
    return confiq;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Instance;
