import { RootState } from '@/app/providers/store/store';

export const getDeveloperData = (state: RootState) => state.developer.data;
export const getDeveloperIsLoading = (state: RootState) =>
  state.developer.isLoading || false;
export const getDeveloperError = (state: RootState) => state.developer.error;
