import { FetchHttpClient } from '@/shared/api/api';
import { useEffect, useState } from 'react';
import { IGenreById } from '../types/IGenreById';

export const FetchGenreById = (
  url: string
): { isLoading: boolean; data?: IGenreById; isError: boolean } => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<IGenreById>();

  useEffect(() => {
    const httpClient = new FetchHttpClient();
    setIsLoading(true);

    httpClient
      .get<IGenreById>(url)
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
