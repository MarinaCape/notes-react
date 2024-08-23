import axios, { AxiosResponse } from 'axios';

export const baseUrl = (): string => import.meta.env.VITE_APP_API_URL;
export const getBaseHeaders = (): Record<string, string> => ({ 'Content-type': 'application/json' });
export const getTimeout = (): number => 60000;
export const successHandler = (response: AxiosResponse): AxiosResponse => response;

const httpInstance = axios.create({
  baseURL: baseUrl(),
  headers: { ...getBaseHeaders() },
  timeout: getTimeout(),
});

httpInstance.interceptors.response.use(successHandler);

export default httpInstance;
