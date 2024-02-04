import { GameCard } from '@/entities/GameCard';
import { useObserver } from '@/shared/lib/hooks/useObserver';
import Loader from '@/shared/ui/Loader/Loader';
import { FC, useCallback, useRef, useState } from 'react';
import { useFetchGames } from '../model/service/UseFetchGames';
import cls from './GameList.module.scss';

const API_KEY = '6183de2c4b9c4eafad12e8de768dc4aa&page';

export const GameList: FC = () => {
  const [limit, setLimit] = useState(15);
  const [page, setPage] = useState(1);
  const lastGameElementRef = useRef<HTMLDivElement>(null);

  const URL = `https://api.rawg.io/api/games?key=${API_KEY}&page_size=${limit}&page=${page}`;

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

  return (
    <>
      {(isLoading && page === 1) || (isNextPageLoading && page !== 1) ? (
        <Loader />
      ) : isError ? (
        <p>Error loading games</p>
      ) : (
        games && (
          <div className={cls.grid}>
            {games.results.map((game, index) => (
              <div
                key={game.id}
                ref={
                  index === games.results.length - 1
                    ? lastGameElementRef
                    : undefined
                }
              >
                <GameCard game={game} />
              </div>
            ))}
          </div>
        )
      )}
    </>
  );
};
