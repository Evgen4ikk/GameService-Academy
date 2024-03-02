import { createSlice } from '@reduxjs/toolkit';
import { fetchDevelopers } from '../services/fetchDevelopers';
import { DeveloperSchema } from '../types/developerSchema';

const initialState: DeveloperSchema = {
  isLoading: false,
  data: undefined,
  error: undefined,
};

const developerSlice = createSlice({
  name: 'developer',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchDevelopers.pending, state => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchDevelopers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = undefined;
      })
      .addCase(fetchDevelopers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { actions: developerActions } = developerSlice;
export const { reducer: developerReducer } = developerSlice;
