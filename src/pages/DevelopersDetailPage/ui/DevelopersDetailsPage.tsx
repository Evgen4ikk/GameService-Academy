import { GameCard } from '@/entities/GameCard';
import Loader from '@/shared/ui/Loader/Loader';
import { FC } from 'react';
import { useParams } from 'react-router';
import { FetchDeveloperById } from '../model/service/FetchDeveloperById';
import { FetchGamesByDeveloper } from '../model/service/FetchGamesByDeveloper';
import cls from './DevelopersDetailsPage.module.scss';

export const DevelopersDetailsPage: FC = () => {
  const params = useParams();

  const DEVELOPER_URL = `https://api.rawg.io/api/developers/${params.id}?key=6183de2c4b9c4eafad12e8de768dc4aa`;

  const {
    isLoading: isDeveloperLoading,
    data: developer,
    isError: isDeveloperError,
  } = FetchDeveloperById(DEVELOPER_URL);

  const GAMES_URL = `https://api.rawg.io/api/games?developers=${developer?.slug}&key=6183de2c4b9c4eafad12e8de768dc4aa`;

  const {
    isLoading: isGamesLoading,
    data: games,
    isError: isGamesError,
  } = FetchGamesByDeveloper(GAMES_URL);

  return (
    <>
      {isDeveloperLoading ? (
        <Loader />
      ) : isDeveloperError ? (
        <p>Error loading games</p>
      ) : (
        developer && (
          <div className={cls.container}>
            <div className={cls.developer}>
              <div className={cls.developer_title_adp}>{developer.name}</div>
              <div className={cls.images}>
                <img width={300} src={developer.image_background} alt='' />
              </div>
              <div className={cls.information}>
                <div className={cls.name}>{developer.name}</div>
                <div className={cls.info}>
                  <span className={cls.title}>Total games: </span>
                  <span className={cls.item}>{developer.games_count}</span>
                </div>
                {developer.description && (
                  <div className={cls.info}>
                    <span className={cls.title}>Description: </span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: developer.description,
                      }}
                      className={cls.item}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className={cls.heading}>Developed by {developer.name}</div>
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
        )
      )}
    </>
  );
};
