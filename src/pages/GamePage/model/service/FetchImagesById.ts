import { FetchHttpClient } from '@/shared/api/api';
import { useEffect, useState } from 'react';
import { IImages } from '../types/IImages';

export const FetchImagesById = (
  url: string
): { isLoading: boolean; data?: IImages; isError: boolean } => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<IImages>();

  useEffect(() => {
    const httpClient = new FetchHttpClient();
    setIsLoading(true);

    httpClient
      .get<IImages>(url)
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
