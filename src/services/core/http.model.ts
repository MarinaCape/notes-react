import { AxiosRequestHeaders, ResponseType } from 'axios';
import { Endpoints } from './http.endpoints';

export interface HttpData {
  url: Endpoints;
  params?: Record<string, string | number | boolean | Date | string[]>;
  body?: unknown;
  responseType?: ResponseType;
  headers?: AxiosRequestHeaders | undefined;
  baseURL?: string;
  method: 'get' | 'post' | 'put' | 'delete';
}
export type HttpDataGet = Omit<HttpData, 'body'>;
export type HttpDataPost = HttpData;
export type HttpDataPut = HttpData;
export type HttpDataDelete = Omit<HttpData, 'body'>;

export type HttpRequestArgs =
  | (HttpDataGet & { method: 'get' })
  | (HttpDataPost & { method: 'post' })
  | (HttpDataPut & { method: 'put' })
  | (HttpDataDelete & { method: 'delete' });
