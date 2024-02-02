import { IGenresResult } from '@/widgets/Sidebar/model/types/IGenres';
import { FC } from 'react';
import { CiUser } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import cls from './GenreCard.module.scss';

interface IGenreCard {
  genre: IGenresResult;
}

export const GenreCard: FC<IGenreCard> = ({ genre }) => {
  return (
    <div
      className={cls.card}
      style={{
        backgroundImage: `linear-gradient(rgba(32, 32, 32, 0.5), rgb(32, 32, 32) 80%),url(${genre.image_background})`,
      }}
    >
      <div className={cls.container}>
        <Link to={`/genre/${genre.slug}/${genre.id}`} className={cls.title}>
          {genre.name}
        </Link>
        <div className={cls.games_count}>
          <span>Popular items</span>
          <span>{genre.games_count}</span>
        </div>
        <div className={cls.line} />
        <ul className={cls.game_list}>
          {genre.games.slice(0, 3).map(game => (
            <li className={cls.game_item}>
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
