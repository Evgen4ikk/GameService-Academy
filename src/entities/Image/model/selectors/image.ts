import { RootState } from '@/app/providers/store/store';

export const getImageData = (state: RootState) => state.image.data;
export const getImageIsLoading = (state: RootState) => state.image.isLoading;
export const getImageError = (state: RootState) => state.image.error;
