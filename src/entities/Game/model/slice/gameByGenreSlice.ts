import { createSlice } from '@reduxjs/toolkit';
import { fetchGamesByGenre } from '../services/fetchGamesByGenre';
import { GameByGenreSchema } from '../types/gameByGenre/gameByGenreSchema';

const initialState: GameByGenreSchema = {
  isLoading: false,
  data: undefined,
  error: undefined,
};

const gameByGenreSlice = createSlice({
  name: 'gameByGenre',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchGamesByGenre.pending, state => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchGamesByGenre.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;
        state.data = action.payload;
      })
      .addCase(fetchGamesByGenre.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { actions: gameByGenreActions } = gameByGenreSlice;
export const { reducer: gameByGenreReducer } = gameByGenreSlice;
