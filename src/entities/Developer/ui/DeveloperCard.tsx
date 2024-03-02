import { FC } from 'react';
import { CiUser } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { IDevelopersResult } from '../model/types/developer';
import cls from './DeveloperCard.module.scss';

interface IDeveloperCard {
  developer: IDevelopersResult;
}

export const DeveloperCard: FC<IDeveloperCard> = ({ developer }) => {
  return (
    <div
      className={cls.card}
      style={{
        backgroundImage: `linear-gradient(rgba(32, 32, 32, 0.5), rgb(32, 32, 32) 80%),url(${developer.image_background})`,
      }}
    >
      <div className={cls.container}>
        <Link
          to={`/developers/${developer.slug}/${developer.id}`}
          className={cls.title}
        >
          {developer.name}
        </Link>
        <div className={cls.games_count}>
          <span>Popular items</span>
          <span>{developer.games_count}</span>
        </div>
        <div className={cls.line} />
        <ul className={cls.game_list}>
          {developer.games.slice(0, 3).map(game => (
            <li key={game.id} className={cls.game_item}>
              <Link to={`/game/${game.slug}/${game.id}`}>{game.name}</Link>
              <div className={cls.added}>
                <span>{game.added}</span>
                <CiUser size={16} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
