import {
  fetchDevelopersById,
  getDeveloperDetailData,
  getDeveloperDetailError,
  getDeveloperDetailIsLoading,
} from '@/entities/Developer';
import {
  GameCard,
  fetchGamesByDeveloper,
  getGameByDeveloperData,
  getGameByDeveloperError,
  getGameByDeveloperIsLoading,
} from '@/entities/Game';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import Loader from '@/shared/ui/Loader/Loader';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import cls from './DevelopersDetailsPage.module.scss';

export const DevelopersDetailsPage: FC = () => {
  const params = useParams();
  const id = Number(params.id);
  const developers = String(params.slug);

  const dispatch = useAppDispatch();

  const developer = useSelector(getDeveloperDetailData);
  const isDeveloperLoading = useSelector(getDeveloperDetailIsLoading);
  const isDeveloperError = useSelector(getDeveloperDetailError);

  const games = useSelector(getGameByDeveloperData);
  const isGamesLoading = useSelector(getGameByDeveloperIsLoading);
  const isGamesError = useSelector(getGameByDeveloperError);

  useEffect(() => {
    dispatch(fetchDevelopersById({ id }));
    dispatch(fetchGamesByDeveloper({ developers }));
  }, [dispatch]);

  return (
    <>
      {isDeveloperLoading && isGamesLoading ? (
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
            {isGamesError ? (
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
