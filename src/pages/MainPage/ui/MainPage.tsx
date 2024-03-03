import { GameList } from '@/widgets/GameList';
import { FC } from 'react';
import cls from './MainPage.module.scss'

export const MainPage: FC = () => {
  return (
    <div className={cls.container}>
      <GameList />
    </div>
  );
};
