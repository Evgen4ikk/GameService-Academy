import { RootState } from '@/app/providers/store/store';

export const getDeveloperDetailData = (state: RootState) =>
  state.developerDetail.data;
export const getDeveloperDetailIsLoading = (state: RootState) =>
  state.developerDetail.isLoading;
export const getDeveloperDetailError = (state: RootState) =>
  state.developerDetail.error;
