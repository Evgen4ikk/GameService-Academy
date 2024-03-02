import { GameCard } from '@/entities/Game';
import { sortGames } from '@/shared/lib/SortGame/SortGame';
import { useObserver } from '@/shared/lib/hooks/useObserver';
import Loader from '@/shared/ui/Loader/Loader';
import CustomSelect from '@/shared/ui/Select/Select';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { useFetchGames } from '../model/service/UseFetchGames';
import { IGamesResult } from '../model/types/IGames';
import cls from './GameList.module.scss';

export const GameList: FC = () => {
  const [limit, setLimit] = useState(15);
  const [page, setPage] = useState(1);
  const [sortOption, setSortOption] = useState<string>('');
  const [platformOption, setPlatformOption] = useState<string>('');
  const lastGameElementRef = useRef<HTMLDivElement>(null);
  const [sortedGames, setSortedGames] = useState<IGamesResult[]>([]);
  const [originalGames, setOriginalGames] = useState<IGamesResult[]>([]);

  const URL = `${import.meta.env.VITE_API_URL}/games?key=${
    import.meta.env.VITE_API_KEY
  }&page_size=${limit}&page=${page}`;

  const {
    isLoading,
    isNextPageLoading,
    data: games,
    isError,
    fetchNextPage,
  } = useFetchGames(URL);

  const loadNextPage = useCallback(() => {
    if (!isNextPageLoading) {
      fetchNextPage();
    }
  }, [isNextPageLoading, fetchNextPage]);

  useObserver(
    lastGameElementRef,
    !isLoading && !isError,
    isLoading || isNextPageLoading,
    loadNextPage
  );

  useEffect(() => {
    if (games) {
      setOriginalGames(games.results);
      setSortedGames(sortGames(games.results, sortOption, platformOption));
    }
  }, [games, sortOption, platformOption]);

  const handleSortChange = (value: string) => {
    if (value === '') {
      setSortedGames(originalGames);
    }
    setSortOption(value);
  };

  const handlePlatformChange = (value: string) => {
    setPlatformOption(value);
  };

  return (
    <>
      {(isLoading && page === 1) || (isNextPageLoading && page !== 1) ? (
        <Loader />
      ) : isError ? (
        <p>Error loading games</p>
      ) : (
        <>
          {/* <h1>Top picks</h1> */}
          <div className={cls.select}>
            <CustomSelect
              placeholder='Sort By '
              options={[
                { value: '', label: 'Default' },
                { value: 'lowRating', label: 'Low Rating' },
                { value: 'highRating', label: 'High Rating' },
                { value: 'releaseDate', label: 'Release Date' },
              ]}
              onChange={handleSortChange}
            />
            <CustomSelect
              placeholder='Select Platform'
              options={[
                { value: '', label: 'Default' },
                { value: 'pc', label: 'PC' },
                { value: 'playstation4', label: 'PlayStation 4' },
                { value: 'playstation5', label: 'PlayStation 5' },
                { value: 'xbox-one', label: 'Xbox One' },
                { value: 'xbox-series-s-x', label: 'Xbox Series S/X' },
                { value: 'ios', label: 'iOS' },
                { value: 'android', label: 'Android' },
                { value: 'mac', label: 'Apple Macintosh' },
                { value: 'linux', label: 'Linux' },
                { value: 'nintendo', label: 'Nintendo' },
                { value: 'web', label: 'Web' },
              ]}
              onChange={handlePlatformChange}
            />
          </div>
          <div className={cls.grid}>
            {sortedGames.map((game, index) => (
              <div
                key={game.id}
                ref={
                  index === sortedGames.length - 1
                    ? lastGameElementRef
                    : undefined
                }
              >
                <GameCard game={game} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};
