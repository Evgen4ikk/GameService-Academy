import {
  GameCard,
  getGameCurrentPage,
  getGameData,
  getGameError,
  getGameIsLoading,
} from '@/entities/Game';
import { fetchGames } from '@/entities/Game/model/services/fetchGames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useObserver } from '@/shared/lib/hooks/useObserver';
import Loader from '@/shared/ui/Loader/Loader';
import { FC, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import cls from './GameList.module.scss';

export const GameList: FC = () => {
  const dispatch = useAppDispatch();
  const games = useSelector(getGameData);
  const isLoading = useSelector(getGameIsLoading);
  const error = useSelector(getGameError);
  const currentPage = useSelector(getGameCurrentPage);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (games.length === 0) {
      dispatch(fetchGames({ page: currentPage, page_size: 15 }));
    }
  }, [dispatch, games.length]);

  useObserver(observerRef, !isLoading && games.length > 0, isLoading, () => {
    dispatch(fetchGames({ page: currentPage + 1, page_size: 15 }));
  });

  return (
    <>
      {isLoading && currentPage === 1 ? (
        <Loader />
      ) : error ? (
        <p>Error loading games</p>
      ) : (
        <>
          {/* <h1>Top picks</h1> */}
          <div className={cls.select}>
            {/* <CustomSelect
              placeholder='Sort By '
              options={[
                { value: '', label: 'Default' },
                { value: 'lowRating', label: 'Low Rating' },
                { value: 'highRating', label: 'High Rating' },
                { value: 'releaseDate', label: 'Release Date' },
              ]}
              // onChange={handleSortChange}
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
              // onChange={handlePlatformChange}
            /> */}
          </div>
          <div className={cls.grid}>
            {games?.map((game, index) => (
              <div key={index}>
                <GameCard game={game} />
              </div>
            ))}
          </div>
          {!isLoading && <div style={{ height: '50px' }} ref={observerRef} />}
        </>
      )}
    </>
  );
};
