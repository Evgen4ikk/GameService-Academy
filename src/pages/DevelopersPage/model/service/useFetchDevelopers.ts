import { FetchHttpClient } from '@/shared/api/api';
import { useEffect, useState } from 'react';
import { IDevelopers } from '../types/IDevelopers';

export const useFetchDevelopers = (
  url: string
): { isLoading: boolean; data?: IDevelopers; isError: boolean } => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<IDevelopers>();

  useEffect(() => {
    const httpClient = new FetchHttpClient();
    setIsLoading(true);

    httpClient
      .get<IDevelopers>(url)
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
