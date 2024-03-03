import { RootState } from '@/app/providers/store/store';

export const getGameByDeveloperData = (state: RootState) =>
  state.gameByDeveloper.data;
export const getGameByDeveloperIsLoading = (state: RootState) =>
  state.gameByDeveloper.isLoading;
export const getGameByDeveloperError = (state: RootState) =>
  state.gameByDeveloper.error;
