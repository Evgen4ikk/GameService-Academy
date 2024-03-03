import { CircularProgress } from '@mui/material';
import { FC } from 'react';
import cls from './Loader.module.scss';

const Loader: FC = () => {
  return (
    <div className={cls.Loader}>
      <CircularProgress color='inherit' size={66} />
    </div>
  );
};

export default Loader;
