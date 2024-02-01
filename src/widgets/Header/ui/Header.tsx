import { HeaderSearch } from '@/features/HeaderSearch';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import cls from './Header.module.scss';

export const Header: FC = () => {
  return (
    <header>
      <div className={cls.headerWrapper}>
        <ul className={cls.nav}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/genres'>Genres</Link>
          </li>
          <li>
            <Link to='/developers'>Developers</Link>
          </li>
        </ul>
        <HeaderSearch />
      </div>
    </header>
  );
};
