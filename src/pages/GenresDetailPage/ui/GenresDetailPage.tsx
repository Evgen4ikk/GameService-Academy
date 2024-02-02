import { FC } from 'react';
import { useParams } from 'react-router';

export const GenresDetailPage: FC = () => {
  const params = useParams();

  return <div>{params.slug}</div>;
};
