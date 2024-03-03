import { createSlice } from '@reduxjs/toolkit';
import { fetchDevelopersById } from '../services/fetchDevelopersById';
import { DeveloperDetailSchema } from '../types/developerDetailSchema';

const initialState: DeveloperDetailSchema = {
  isLoading: false,
  data: undefined,
  error: undefined,
};

const developerDetailSlice = createSlice({
  name: 'developerDetail',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchDevelopersById.pending, state => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchDevelopersById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = undefined;
      })
      .addCase(fetchDevelopersById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { actions: developerDetailActions } = developerDetailSlice;
export const { reducer: developerDetailReducer } = developerDetailSlice;
