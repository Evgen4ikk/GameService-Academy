import { FetchHttpClient } from '@/shared/api/api';
import { useEffect, useState } from 'react';
import { IGenres } from '../types/IGenres';

export const useFetchGenres = (
  url: string
): { isLoading: boolean; data?: IGenres; isError: boolean } => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<IGenres>();

  useEffect(() => {
    const httpClient = new FetchHttpClient();
    setIsLoading(true);

    httpClient
      .get<IGenres>(url)
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
