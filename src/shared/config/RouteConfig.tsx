import { DevelopersDetailsPage } from '@/pages/DevelopersDetailPage';
import { DevelopersPage } from '@/pages/DevelopersPage';
import { GamePage } from '@/pages/GamePage/inedx';
import { GenresDetailPage } from '@/pages/GenresDetailPage';
import { GenresPage } from '@/pages/GenresPage';
import { MainPage } from '@/pages/MainPage';

export enum AppRoutes {
  MAIN = 'main',
  DEVELOPERS = 'developers',
  DEVELOPERS_DETAILS = 'developers_details',
  GENRES = 'genres',
  GENRES_DETAILS = 'genres_details',
  GAME = 'game',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.DEVELOPERS]: '/developers',
  [AppRoutes.DEVELOPERS_DETAILS]: '/developers/', // /+slug
  [AppRoutes.GENRES]: '/genres',
  [AppRoutes.GENRES_DETAILS]: '/genres/', // /+slug
  [AppRoutes.GAME]: '/game/', // /+slug
};

export const routeConfig: Record<AppRoutes, any> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.DEVELOPERS]: {
    path: RoutePath.developers,
    element: <DevelopersPage />,
  },
  [AppRoutes.DEVELOPERS_DETAILS]: {
    path: `${RoutePath.developers_details}:slug/:id`,
    element: <DevelopersDetailsPage />,
  },
  [AppRoutes.GENRES]: {
    path: RoutePath.genres,
    element: <GenresPage />,
  },
  [AppRoutes.GENRES_DETAILS]: {
    path: `${RoutePath.genres_details}:slug/:id`,
    element: <GenresDetailPage />,
  },
  [AppRoutes.GAME]: {
    path: `${RoutePath.game}:slug/:id`,
    element: <GamePage />,
  },
};
