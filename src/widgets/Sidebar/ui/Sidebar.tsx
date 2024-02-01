import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useFetchData } from '../model/service/FetchData';
import { IResponseResult } from '../model/types/IGenres';
import cls from './Sidebar.module.scss';

const GENRE_URL =
  'https://api.rawg.io/api/genres?key=6183de2c4b9c4eafad12e8de768dc4aa';
const DEVELOPERS_URL =
  'https://api.rawg.io/api/developers?key=6183de2c4b9c4eafad12e8de768dc4aa';

export const Sidebar = () => {
  const {
    isLoading: isGenresLoading,
    data: genres,
    isError: isGenresError,
  } = useFetchData(GENRE_URL);
  const {
    isLoading: isDevelopersLoading,
    data: developers,
    isError: isDevelopersError,
  } = useFetchData(DEVELOPERS_URL);

  const [displayedGenres, setDisplayedGenres] = useState<number>(5);
  const [displayedDevelopers, setDisplayedDevelopers] = useState<number>(5);

  const handleShowAllGenres = () => {
    setDisplayedGenres(10);
  };

  const handleShowManyGenres = () => {
    setDisplayedGenres(5);
  };

  const handleShowAllDevelopers = () => {
    setDisplayedDevelopers(10);
  };

  const handleShowManyDevelopers = () => {
    setDisplayedDevelopers(5);
  };

  return (
    <div className={cls.filterMenu}>
      <div>
        {isGenresLoading ? (
          <p>Loading genres...</p>
        ) : isGenresError ? (
          <p>Error loading genres</p>
        ) : (
          genres && (
            <>
              <Link to={'/genres'}>
                <h1>Genres</h1>
              </Link>
              {genres.results
                .slice(0, displayedGenres)
                .map((genre: IResponseResult) => (
                  <div key={genre.id}>
                    <Link to={`/genres/${genre.slug}`}>
                      <div className={cls.item}>
                        <img
                          className={cls.img}
                          src={genre.image_background}
                          width={20}
                          height={20}
                          alt='genre image'
                        />
                        <span className={cls.name}>{genre.name}</span>
                      </div>
                    </Link>
                  </div>
                ))}
              {displayedGenres === 5 ? (
                <button className={cls.btn} onClick={handleShowAllGenres}>
                  <IoIosArrowDown size={22} />
                  <span>Show All</span>
                </button>
              ) : (
                <button className={cls.btn} onClick={handleShowManyGenres}>
                  <IoIosArrowUp size={22} />
                  <span>Hide</span>
                </button>
              )}
            </>
          )
        )}
      </div>
      <div>
        {isDevelopersLoading ? (
          <p>Loading developers...</p>
        ) : isDevelopersError ? (
          <p>Error loading developers</p>
        ) : (
          developers && (
            <>
              <Link to={'/developers'}>
                <h1>Developers</h1>
              </Link>
              {developers.results
                .slice(0, displayedDevelopers)
                .map((developer: IResponseResult) => (
                  <div key={developer.id}>
                    <Link to={`/developers/${developer.slug}`}>
                      <div className={cls.item}>
                        <img
                          className={cls.img}
                          src={developer.image_background}
                          width={20}
                          height={20}
                          alt='developer image'
                        />
                        <span className={cls.name}>{developer.name}</span>
                      </div>
                    </Link>
                  </div>
                ))}
              {displayedDevelopers === 5 ? (
                <button className={cls.btn} onClick={handleShowAllDevelopers}>
                  <IoIosArrowDown size={22} />
                  <span>Show All</span>
                </button>
              ) : (
                <button className={cls.btn} onClick={handleShowManyDevelopers}>
                  <IoIosArrowUp size={22} />
                  <span>Hide</span>
                </button>
              )}
            </>
          )
        )}
      </div>
    </div>
  );
};
