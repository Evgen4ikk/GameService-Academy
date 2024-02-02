import { GenreCard } from '@/entities/GenreCard';
import { useFetchGenres } from '@/widgets/Sidebar/model/service/UseFetchGenres';
import { FC } from 'react';
import cls from './GenresPage.module.scss';

const GENRE_URL =
  'https://api.rawg.io/api/genres?key=6183de2c4b9c4eafad12e8de768dc4aa';

export const GenresPage: FC = () => {
  const {
    isLoading: isGenresLoading,
    data: genres,
    isError: isGenresError,
  } = useFetchGenres(GENRE_URL);

  return (
    <div>
      {isGenresLoading ? (
        <p>Loading genres...</p>
      ) : isGenresError ? (
        <p>Error loading dgenres</p>
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
