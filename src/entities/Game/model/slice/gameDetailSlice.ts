import { createSlice } from '@reduxjs/toolkit';
import { fetchGamesById } from '../services/fetchGamesById';
import { GameDetailSchema } from '../types/gameDetail/gameDetailSchema';

const initialState: GameDetailSchema = {
  isLoading: false,
  data: undefined,
  error: undefined,
};

const gameDetalSlice = createSlice({
  name: 'gameDetail',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchGamesById.pending, state => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchGamesById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;
        state.data = action.payload;
      })
      .addCase(fetchGamesById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { actions: gameDetailActions } = gameDetalSlice;
export const { reducer: gameDetailReducer } = gameDetalSlice;
