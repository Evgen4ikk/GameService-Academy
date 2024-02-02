import { FC } from 'react';
import cls from './StarRating.module.scss';

export const StarRating: FC<{ rating: number }> = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <span key={i} className={cls.starFilled}>
            &#9733;
          </span>
        );
      } else {
        stars.push(
          <span key={i} className={cls.starEmpty}>
            &#9734;
          </span>
        );
      }
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
};
