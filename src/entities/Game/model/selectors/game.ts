import { RootState } from '@/app/providers/store/store';

export const getGameData = (state: RootState) => state.game.data;
export const getGameIsLoading = (state: RootState) =>
  state.game.isLoading || false;
export const getGameError = (state: RootState) => state.game.error;
export const getGameCurrentPage = (state: RootState) => state.game.currentPage;
