import { RootState } from '@/app/providers/store/store';

export const getGenreDetailData = (state: RootState) => state.genreDetail.data;
export const getGenreDetailIsLoading = (state: RootState) =>
  state.genreDetail.isLoading;
export const getGenreDetailError = (state: RootState) =>
  state.genreDetail.error;
