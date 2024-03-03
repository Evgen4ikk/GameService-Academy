import { IGames } from '@/entities/Game';
import { useEffect, useState } from 'react';

class FetchHttpClient {
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

export const FetchGamesBySearch = (
  url: string
): { isLoading: boolean; data?: IGames; isError: boolean } => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<IGames>();

  useEffect(() => {
    const httpClient = new FetchHttpClient();
    setIsLoading(true);

    httpClient
      .get<IGames>(url)
      .then(responseData => {
        setData(responseData);
      })
      .catch(error => {
        setIsError(true);
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  return { isLoading, data, isError };
};
