import Loader from '@/shared/ui/Loader/Loader';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Carousel } from '@/widgets/Carousel';
import { ProgressBar } from '@/widgets/ProgressBar';
import { FC } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { FetchGameById } from '../model/service/FetchGameById';
import { FetchImagesById } from '../model/service/FetchImagesById';
import cls from './GamePage.module.scss';

export const GamePage: FC = () => {
  const params = useParams();
  const GAME_URL = `${import.meta.env.VITE_API_URL}/games/${params.id}?key=${
    import.meta.env.VITE_API_KEY
  }`;

  const IMG_URL = `${import.meta.env.VITE_API_URL}/games/${
    params.id
  }/screenshots?key=${import.meta.env.VITE_API_KEY}`;

  const {
    isLoading: isGameLoading,
    data: game,
    isError: isGameError,
  } = FetchGameById(GAME_URL);

  const {
    isLoading: isImagesLoading,
    data: images,
    isError: isImagesError,
  } = FetchImagesById(IMG_URL);

  const capitalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      {isGameLoading ? (
        <Loader />
      ) : isGameError ? (
        <p>Error loading games</p>
      ) : (
        game && (
          <div className={cls.container}>
            <div className={cls.game}>
              <div className={cls.game_title_adp}>{game.name}</div>
              {images && (
                <div className={cls.images}>
                  <Carousel images={images} />
                </div>
              )}
              <div className={cls.information}>
                <div className={cls.game_title}>{game.name}</div>
                <div className={cls.rating}>
                  <StarRating rating={Math.round(game.rating)} />
                  <span className={cls.total}>({Math.round(game.rating)})</span>
                </div>
                <div className={cls.info}>
                  <span className={cls.title}>Release: </span>
                  <span className={cls.item}>{game.released}</span>
                </div>
                <div className={cls.info}>
                  <span className={cls.title}>Average playtime: </span>
                  <span className={cls.item}>{game.playtime} h</span>
                </div>
                {game.genres && (
                  <>
                    <div className={cls.info}>
                      <span className={cls.title}>Genres: </span>
                      <span className={cls.item}>
                        {game.genres.map(genre => (
                          <Link
                            key={genre.id}
                            className={cls.genre_name}
                            to={`/genre/${genre.slug}/${genre.id}`}
                          >
                            <span>{genre.name}</span>
                          </Link>
                        ))}
                      </span>
                    </div>
                  </>
                )}
                <div className={cls.info}>
                  <span className={cls.title}>Platforms: </span>
                  <span className={cls.item}>
                    {game.parent_platforms.map(platforms => (
                      <span
                        className={cls.platform_name}
                        key={platforms.platform.id}
                      >
                        {platforms.platform.name}
                      </span>
                    ))}
                  </span>
                </div>
                <div className={cls.info}>
                  <span className={cls.title}>Developers: </span>
                  <span className={cls.item}>
                    {game.developers.map(developer => (
                      <span className={cls.developer_name} key={developer.id}>
                        <Link
                          to={`/developers/${developer.slug}/${developer.id}`}
                        >
                          {developer.name}
                        </Link>
                      </span>
                    ))}
                  </span>
                </div>
                {game.website && (
                  <div className={cls.info}>
                    <span className={cls.title}>Website: </span>
                    <a href={game.website} className={cls.item}>
                      {game.website}
                    </a>
                  </div>
                )}
                <div className={cls.ratings}>
                  <div className={cls.progressBar}>
                    <ProgressBar ratings={game.ratings} />
                  </div>
                  {game.ratings.map(rating => (
                    <span key={rating.id} className={cls.stat_title}>
                      {capitalizeFirstLetter(rating.title)}:{' '}
                      <span className={cls.count}>{rating.count}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className={cls.about_game}>
              <h3>About Game</h3>
              <div className={cls.description}>{game.description_raw}</div>
            </div>
          </div>
        )
      )}
    </>
  );
};
