import axios from 'axios';

export const $api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  params: { key: import.meta.env.VITE_API_KEY },
});
