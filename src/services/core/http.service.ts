import { AxiosResponse } from 'axios';
import httpInstance from './http.config';
import * as HttpModel from './http.model';

const replaceUrlParams = (url: string, params?: Record<string, unknown>) => {
  if (!!params) {
    Object.keys(params).forEach((key) => {
      if (url.includes(key)) {
        url = url.replace(`:${key}`, String(params[key]));
      }
    });
  }
  return url;
};

const request = async <T>(requestData: HttpModel.HttpData): Promise<T> => {
  const { method, url, params = {}, body = {}, responseType = 'json', headers = {}, baseURL = import.meta.env.VITE_APP_API_URL } = requestData;

  const response: AxiosResponse<T> = await httpInstance.request({
    url: replaceUrlParams(url, params),
    data: body,
    method,
    responseType,
    headers,
    baseURL,
  });

  return response?.data;
};

export const httpRequest = <T>(httpData: HttpModel.HttpRequestArgs): Promise<T> => {
  const requestData: HttpModel.HttpData = {
    ...httpData,
  };

  return request<T>(requestData);
};
