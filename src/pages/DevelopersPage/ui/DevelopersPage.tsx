import { DeveloperCard } from '@/entities/DeveloperCard';
import { FC } from 'react';
import { useFetchDevelopers } from '../model/service/useFetchDevelopers';
import cls from './DevelopersPage.module.scss';

const DEVELOPERS_URL =
  'https://api.rawg.io/api/developers?key=6183de2c4b9c4eafad12e8de768dc4aa';

export const DevelopersPage: FC = () => {
  const {
    isLoading: isDevelopersLoading,
    data: developers,
    isError: isDevelopersError,
  } = useFetchDevelopers(DEVELOPERS_URL);

  return (
    <div>
      {isDevelopersLoading ? (
        <p>Loading developers...</p>
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
