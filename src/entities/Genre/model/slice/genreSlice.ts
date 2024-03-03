import { createSlice } from '@reduxjs/toolkit';
import { fetchGenres } from '../services/fetchGenres';
import { GenreSchema } from '../types/genreSchema';

const initialState: GenreSchema = {
  isLoading: false,
  data: undefined,
  error: undefined,
};

const genreSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchGenres.pending, state => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = undefined;
      })
      .addCase(fetchGenres.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { actions: genreActions } = genreSlice;
export const { reducer: genreReducer } = genreSlice;
