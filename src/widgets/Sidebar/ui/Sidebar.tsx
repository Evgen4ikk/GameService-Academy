import { getDeveloperData, getDeveloperError } from '@/entities/Developer';
import { fetchDevelopers } from '@/entities/Developer/model/services/fetchDevelopers';
import { getGenreData, getGenreError } from '@/entities/Genre';
import { fetchGenres } from '@/entities/Genre/model/services/fetchGenres';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useEffect, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cls from './Sidebar.module.scss';

export const Sidebar = () => {
  const dispatch = useAppDispatch();
  const genres = useSelector(getGenreData);
  const isGenresError = useSelector(getGenreError);

  const developers = useSelector(getDeveloperData);
  const isDevelopersError = useSelector(getDeveloperError);

  useEffect(() => {
    dispatch(fetchGenres());
    dispatch(fetchDevelopers());
  }, [dispatch]);

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
        {isGenresError ? (
          <p>Error loading genres</p>
        ) : (
          genres && (
            <>
              <Link to={'/genres'}>
                <h1>Genres</h1>
              </Link>
              {genres.results.slice(0, displayedGenres).map(genre => (
                <div key={genre.id}>
                  <Link to={`/genre/${genre.slug}/${genre.id}`}>
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
      <>
        {isDevelopersError ? (
          <p>Error loading developers</p>
        ) : (
          developers && (
            <>
              <Link to={'/developers'}>
                <h1>Developers</h1>
              </Link>
              {developers.results
                .slice(0, displayedDevelopers)
                .map(developer => (
                  <div key={developer.id}>
                    <Link to={`/developers/${developer.slug}/${developer.id}`}>
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
      </>
    </div>
  );
};
