import {
  GenreCard,
  getGenreData,
  getGenreError,
  getGenreIsLoading,
} from '@/entities/Genre';
import Loader from '@/shared/ui/Loader/Loader';

import { FC } from 'react';
import { useSelector } from 'react-redux';
import cls from './GenresPage.module.scss';

export const GenresPage: FC = () => {
  const genres = useSelector(getGenreData);
  const isGenresError = useSelector(getGenreError);
  const isGenresLoading = useSelector(getGenreIsLoading);

  return (
    <div className={cls.container}>
      {isGenresLoading ? (
        <Loader />
      ) : isGenresError ? (
        <p>{isGenresError}</p>
      ) : (
        genres && (
          <>
            <h1 className={cls.title}>Genres</h1>
            <div className={cls.grid}>
              {genres.results.map(genre => (
                <div key={genre.id}>
                  <GenreCard genre={genre} />
                </div>
              ))}
            </div>
          </>
        )
      )}
    </div>
  );
};
