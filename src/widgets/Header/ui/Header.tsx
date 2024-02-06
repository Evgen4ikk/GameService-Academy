import { HeaderSearch } from '@/features/HeaderSearch';
import { useOutside } from '@/shared/lib/hooks/useOutside';
import { FC } from 'react';
import { IoMdClose } from 'react-icons/io';
import { MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import cls from './Header.module.scss';

export const Header: FC = () => {
  const { isShow, ref, setIsShow } = useOutside(false);
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
        <div ref={ref} className={cls.nav_btn}>
          {isShow ? (
            <IoMdClose onClick={() => setIsShow(false)} size={28} />
          ) : (
            <MdMenu onClick={() => setIsShow(true)} size={28} />
          )}

          {isShow && (
            <div className={cls.nav_menu}>
              <ul className={cls.nav_item}>
                <li onClick={() => setIsShow(false)}>
                  <Link to='/'>Home</Link>
                </li>
                <li onClick={() => setIsShow(false)}>
                  <Link to='/genres'>Genres</Link>
                </li>
                <li onClick={() => setIsShow(false)}>
                  <Link to='/developers'>Developers</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
