import { FC } from 'react';
import { useParams } from 'react-router';

export const GenresDetailPage: FC = () => {
  const params = useParams();
  console.log(params);
  return <div>{params.id}</div>;
};
