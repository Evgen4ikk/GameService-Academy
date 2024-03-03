import { RootState } from '@/app/providers/store/store';

export const getGameDetailData = (state: RootState) => state.gameDetail.data;
export const getGameDetailIsLoading = (state: RootState) =>
  state.gameDetail.isLoading;
export const getGameDetailError = (state: RootState) => state.gameDetail.error;
