import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "https://api.dev.pastorsline.com/api",
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    config.headers.Authorization = `Bearer ${process.env.REACT_APP_API_KEY}`;
    return config;
  },
  (error: AxiosError) => {
    console.log("Error calling==>", JSON.stringify(error));
  }
);

export default instance;
