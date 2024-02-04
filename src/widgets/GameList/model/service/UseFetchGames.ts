import { FetchHttpClient } from '@/shared/api/api';
import { useEffect, useState } from 'react';
import { IGames } from '../types/IGames';

export const useFetchGames = (
  url: string
): {
  isLoading: boolean;
  isNextPageLoading: boolean;
  data?: IGames;
  isError: boolean;
  fetchNextPage: () => void;
} => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isNextPageLoading, setIsNextPageLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<IGames>();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchData = async (page: number) => {
    const httpClient = new FetchHttpClient();
    if (page === 1) {
      setIsLoading(true);
    } else {
      setIsNextPageLoading(true);
    }

    try {
      const responseData = await httpClient.get<IGames>(`${url}&page=${page}`);
      if (page === 1) {
        setData(responseData);
      } else {
        setData(prevData => ({
          ...prevData!,
          results: [...prevData!.results, ...responseData.results],
        }));
      }
    } catch (error) {
      setIsError(true);
      console.error('Error fetching data:', error);
    } finally {
      if (page === 1) {
        setIsLoading(false);
      } else {
        setIsNextPageLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [url, currentPage]);

  const fetchNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return { isLoading, isNextPageLoading, data, isError, fetchNextPage };
};
