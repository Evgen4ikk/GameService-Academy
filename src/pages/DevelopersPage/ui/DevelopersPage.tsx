import {
  DeveloperCard,
  getDeveloperData,
  getDeveloperError,
  getDeveloperIsLoading,
} from '@/entities/Developer';
import Loader from '@/shared/ui/Loader/Loader';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import cls from './DevelopersPage.module.scss';

export const DevelopersPage: FC = () => {
  const developers = useSelector(getDeveloperData);
  const isDevelopersError = useSelector(getDeveloperError);
  const isDevelopersLoading = useSelector(getDeveloperIsLoading);

  return (
    <div>
      {isDevelopersLoading ? (
        <Loader />
      ) : isDevelopersError ? (
        <p>Error loading developers</p>
      ) : (
        developers && (
          <>
            <h1 className={cls.title}>Developers</h1>
            <div className={cls.grid}>
              {developers.results.map(developer => (
                <div key={developer.id}>
                  <DeveloperCard developer={developer} />
                </div>
              ))}
            </div>
          </>
        )
      )}
    </div>
  );
};
