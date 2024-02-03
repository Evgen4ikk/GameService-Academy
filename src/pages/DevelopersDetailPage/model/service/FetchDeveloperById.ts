import { FetchHttpClient } from '@/shared/api/api';
import { useEffect, useState } from 'react';
import { IDeveloperById } from '../types/IDeveloperById';

export const FetchDeveloperById = (
  url: string
): { isLoading: boolean; data?: IDeveloperById; isError: boolean } => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<IDeveloperById>();

  useEffect(() => {
    const httpClient = new FetchHttpClient();
    setIsLoading(true);

    httpClient
      .get<IDeveloperById>(url)
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
