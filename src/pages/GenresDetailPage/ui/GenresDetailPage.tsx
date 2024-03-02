import { GameCard } from '@/entities/Game';
import Loader from '@/shared/ui/Loader/Loader';
import { FC } from 'react';
import { useParams } from 'react-router';
import { FetchGamesByGenre } from '../model/FetchGamesByGenre';
import { FetchGenreById } from '../model/FetchGenreById';
import cls from './GenresDetailPage.module.scss';

export const GenresDetailPage: FC = () => {
  const params = useParams();

  const GENRE_URL = `${import.meta.env.VITE_API_URL}/genres/${params.id}?key=${
    import.meta.env.VITE_API_KEY
  }`;

  const GAMES_URL = `${import.meta.env.VITE_API_URL}/games?genres=${
    params.slug
  }&key=${import.meta.env.VITE_API_KEY}`;

  const {
    isLoading: isGenreLoading,
    data: genre,
    isError: isGenreError,
  } = FetchGenreById(GENRE_URL);

  const {
    isLoading: isGamesLoading,
    data: games,
    isError: isGamesError,
  } = FetchGamesByGenre(GAMES_URL);

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
