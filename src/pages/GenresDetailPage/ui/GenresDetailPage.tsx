import {
  GameCard,
  fetchGamesByGenre,
  getGameByGenreData,
  getGameByGenreError,
  getGameByGenreIsLoading,
} from '@/entities/Game';
import {
  fetchGenresById,
  getGenreDetailData,
  getGenreDetailError,
  getGenreDetailIsLoading,
} from '@/entities/Genre';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import Loader from '@/shared/ui/Loader/Loader';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import cls from './GenresDetailPage.module.scss';

export const GenresDetailPage: FC = () => {
  const params = useParams();
  const id = Number(params.id);
  const genres = String(params.slug);

  const dispatch = useAppDispatch();

  const genre = useSelector(getGenreDetailData);
  const isGenreLoading = useSelector(getGenreDetailIsLoading);
  const isGenreError = useSelector(getGenreDetailError);

  const games = useSelector(getGameByGenreData);
  const isGamesLoading = useSelector(getGameByGenreIsLoading);
  const isGamesError = useSelector(getGameByGenreError);

  useEffect(() => {
    dispatch(fetchGenresById({ id }));
    dispatch(fetchGamesByGenre({ genres }));
  }, [dispatch]);

  return (
    <>
      {isGenreLoading ? (
        <Loader />
      ) : isGenreError ? (
        <p>Error loading games</p>
      ) : (
        genre && (
          <div className={cls.container}>
            <div className={cls.genre}>
              <div className={cls.genre_title_adp}>{genre.name}</div>
              <div className={cls.images}>
                <img width={300} src={genre.image_background} alt='' />
              </div>
              <div className={cls.information}>
                <div className={cls.name}>{genre.name}</div>
                <div className={cls.info}>
                  <span className={cls.title}>Total games: </span>
                  <span className={cls.item}>{genre.games_count}</span>
                </div>
                {genre.description && (
                  <div className={cls.info}>
                    <span className={cls.title}>Description: </span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: genre.description,
                      }}
                      className={cls.item}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className={cls.heading}>Developed by {genre.name}</div>
            <div className={cls.game_container}>
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
          </div>
        )
      )}
    </>
  );
};
