import { GameList } from '@/widgets/GameList';
import { Sidebar } from '@/widgets/Sidebar';
import { FC } from 'react';
import cls from './MainPage.module.scss';

const MainPage: FC = () => {
  return (
    <div className={cls.container}>
      <Sidebar />
      <GameList />
    </div>
  );
};

export default MainPage;
