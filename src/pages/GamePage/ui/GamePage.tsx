import { FC } from 'react';
import { useParams } from 'react-router';

export const GamePage: FC = () => {
  const params = useParams();
  const URL = `https://api.rawg.io/api/games/${params.id}?key=6183de2c4b9c4eafad12e8de768dc4aa`;

  return <div>{params.slug}</div>;
};
