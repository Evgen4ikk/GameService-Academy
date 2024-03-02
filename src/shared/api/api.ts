export class FetchHttpClient {
  async fetch(url: string, options: RequestInit = {}): Promise<Response> {
    const response = await fetch(url, options);
    return response;
  }

  async get<T>(url: string, options: RequestInit = {}): Promise<T> {
    const response = await this.fetch(url, options);
    const data = await response.json();
    return data as T;
  }
}

import axios from 'axios';

export const $api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  params: { key: import.meta.env.VITE_API_KEY },
});
