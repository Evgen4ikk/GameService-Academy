import { GameCard } from '@/entities/GameCard';
import { FC, useState } from 'react';
import { useFetchGames } from '../model/service/UseFetchGames';
import cls from './GameList.module.scss';
const API_KEY = '6183de2c4b9c4eafad12e8de768dc4aa&page';

export const GameList: FC = () => {
  const [limit, setLimit] = useState(15);
  const [page, setPage] = useState(1);

  const URL = `https://api.rawg.io/api/games?key=${API_KEY}=${page}&page_size=${limit}`;
  const {
    isLoading: isGamesLoading,
    data: games,
    isError: isGamesError,
  } = useFetchGames(URL);

  return (
    <div>
      {isGamesLoading ? (
        <p>Loading games...</p>
      ) : isGamesError ? (
        <p>Error loading games</p>
      ) : (
        games && (
          <div className={cls.grid}>
            {games.results.map(game => (
              <div key={game.id}>
                <GameCard game={game} />
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};
