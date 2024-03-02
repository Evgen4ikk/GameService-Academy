import { FC } from 'react';
import { Link } from 'react-router-dom';
import cls from './HeaderSearchList.module.scss';
import { IGamesResult } from '@/entities/Game'

interface IHeaderSearchList {
  game: IGamesResult;
  onClose: () => void;
}

const HeaderSearchList: FC<IHeaderSearchList> = ({ game, onClose }) => {
  return (
    <div className={cls.list}>
      <Link to={`/game/${game.slug}/${game.id}`}>
        <img
          onClick={() => onClose()}
          className={cls.image}
          width={80}
          height={60}
          src={game.background_image}
          alt=''
        />
      </Link>
      <Link to={`/game/${game.slug}/${game.id}`}>
        <p onClick={() => onClose()}> {game.name}</p>
      </Link>
    </div>
  );
};

export default HeaderSearchList;
