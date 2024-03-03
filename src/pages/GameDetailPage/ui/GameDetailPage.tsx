import {
  fetchGamesById,
  getGameDetailData,
  getGameDetailError,
  getGameDetailIsLoading,
} from '@/entities/Game';
import { fetchImages, getImageData, getImageIsLoading } from '@/entities/Image';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import Loader from '@/shared/ui/Loader/Loader';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Carousel } from '@/widgets/Carousel';
import { ProgressBar } from '@/widgets/ProgressBar';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import cls from './GameDetailPage.module.scss';

export const GameDetailPage: FC = () => {
  const params = useParams();
  const id = Number(params.id);

  const dispatch = useAppDispatch();
  const game = useSelector(getGameDetailData);
  const isGameLoading = useSelector(getGameDetailIsLoading);
  const isGameError = useSelector(getGameDetailError);

  const images = useSelector(getImageData);
  const isImagesLoading = useSelector(getImageIsLoading);

  useEffect(() => {
    dispatch(fetchGamesById({ id }));
    dispatch(fetchImages({ id }));
  }, [dispatch]);

  const capitalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      {isGameLoading && isImagesLoading ? (
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
