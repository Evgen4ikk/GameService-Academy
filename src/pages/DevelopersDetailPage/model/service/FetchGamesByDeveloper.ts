import { FetchHttpClient } from '@/shared/api/api';
import { useEffect, useState } from 'react';
import { IGamesByDeveloper } from '../types/IGamesByDeveloper';

export const FetchGamesByDeveloper = (
  url: string
): { isLoading: boolean; data?: IGamesByDeveloper; isError: boolean } => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<IGamesByDeveloper>();

  useEffect(() => {
    const httpClient = new FetchHttpClient();
    setIsLoading(true);

    httpClient
      .get<IGamesByDeveloper>(url)
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
