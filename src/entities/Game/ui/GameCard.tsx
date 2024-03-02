import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IGamesResult } from '../model/types/game';
import cls from './GameCard.module.scss';

interface IGameCard {
  game: IGamesResult;
}

export const GameCard: FC<IGameCard> = ({ game }) => {
  return (
    <Link to={`/game/${game.slug}/${game.id}`}>
      <div className={cls.card}>
        <div className={cls.image}>
          <img src={game.background_image} alt='' />
        </div>
        <div className={cls.container}>
          <div className={cls.title}>{game.name}</div>
          <div className={cls.rating}>
            <StarRating rating={Math.round(game.rating)} />
            <span className={cls.total}>{Math.round(game.rating)}</span>
          </div>
          <div className={cls.metascore}>
            <span>{game.metacritic}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
