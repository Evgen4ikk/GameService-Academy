import { RootState } from '@/app/providers/store/store';

export const getGameByGenreData = (state: RootState) => state.gameByGenre.data;
export const getGameByGenreIsLoading = (state: RootState) =>
  state.gameByGenre.isLoading;
export const getGameByGenreError = (state: RootState) =>
  state.gameByGenre.error;
