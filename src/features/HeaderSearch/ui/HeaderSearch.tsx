import { FC } from 'react';
import cls from './HeaderSearch.module.scss';

export const HeaderSearch: FC = () => {
  return (
    <div className={cls.HeaderSearch}>
      <input type='text' placeholder='Введите что то' />
    </div>
  );
};
