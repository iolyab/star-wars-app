import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "https://hp-api.onrender.com/api/",
  timeout: 10000,
  headers: { Accept: "application/json" },
});

function get<T = unknown>(
  path: string,
  options: {
    params?: AxiosRequestConfig["params"];
    timeout?: number;
    headers?: AxiosRequestConfig["headers"];
  } = {}
): Promise<AxiosResponse<T>> {
  const { params = {}, timeout, headers = {} } = options;

  const config: AxiosRequestConfig = {
    params,
    headers: {
      ...instance.defaults.headers.common,
      ...headers,
    },
    timeout,
  };

  return instance.get<T>(path, config);
}

export { get };
export default instance;
