import { RootState } from '@/app/providers/store/store';

export const getGenreData = (state: RootState) => state.genre.data;
export const getGenreIsLoading = (state: RootState) => state.genre.isLoading;
export const getGenreError = (state: RootState) => state.genre.error;
