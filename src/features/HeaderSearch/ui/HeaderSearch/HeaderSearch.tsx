import { useOutside } from '@/shared/lib/hooks/useOutside';
import Loader from '@/shared/ui/Loader/Loader';
import { FC, useEffect, useRef, useState } from 'react';
import { FetchGamesBySearch } from '../../model/FetchGamesBySearch';
import HeaderSearchList from '../HeaderSearchList/HeaderSearchList';
import cls from './HeaderSearch.module.scss';
import { IGamesResult } from '@/entities/Game'

export const HeaderSearch: FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const searchListRef = useRef<HTMLDivElement>(null);

  const { isShow, ref: outsideRef, setIsShow } = useOutside(false);

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      const delayDebounceFn = setTimeout(() => {
        setSearchQuery(searchTerm);
      }, 1500);

      return () => clearTimeout(delayDebounceFn);
    } else {
      setSearchQuery('');
    }
  }, [searchTerm]);

  const URL =
    searchTerm.trim() !== ''
      ? `${import.meta.env.VITE_API_URL}/games?key=${
          import.meta.env.VITE_API_KEY
        }&search=${searchQuery}`
      : '';

  const { isLoading, isError, data: games } = FetchGamesBySearch(URL);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const toggleSearchListVisibility = () => {
    setIsShow(!isShow);
  };

  return (
    <div className={cls.HeaderSearch} ref={outsideRef}>
      <input
        value={searchTerm}
        onChange={handleInputChange}
        type='text'
        placeholder='Введите что-то'
        onClick={toggleSearchListVisibility}
      />
      {isShow && games && games.results && searchTerm.trim() !== '' && (
        <div className={cls.searchList} ref={searchListRef}>
          {isLoading ? (
            <Loader />
          ) : (
            <div className={cls.container}>
              <div className={cls.heading}>
                <h3>Games:</h3>
                <p>{games.results.length}</p>
              </div>
              {games.results.slice(0, 7).map((game: any) => (
                <HeaderSearchList
                  key={game.id}
                  game={game}
                  onClose={toggleSearchListVisibility}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
