import { createSlice } from '@reduxjs/toolkit';
import { fetchGenresById } from '../services/fetchGenresById';
import { GenreDetailSchema } from '../types/genreDetailSchema';

const initialState: GenreDetailSchema = {
  isLoading: false,
  data: undefined,
  error: undefined,
};

const genreDetailSlice = createSlice({
  name: 'genresDetail',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchGenresById.pending, state => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchGenresById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = undefined;
      })
      .addCase(fetchGenresById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { actions: genreDetailActions } = genreDetailSlice;
export const { reducer: genreDetailReducer } = genreDetailSlice;
