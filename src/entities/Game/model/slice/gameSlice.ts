import { createSlice } from '@reduxjs/toolkit';
import { fetchGames } from '../services/fetchGames';
import { GameSchema } from '../types/game/gameSchema';

const initialState: GameSchema = {
  isLoading: false,
  data: [],
  error: undefined,
  currentPage: 1,
  page_size: 15,
};

const gameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchGames.pending, state => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;
        state.currentPage++;

        const newData = action.payload.filter(newItem => {
          return !state.data.some(
            existingItem => existingItem.id === newItem.id
          );
        });

        state.data = [...state.data, ...newData];
      })
      .addCase(fetchGames.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { actions: gameActions } = gameSlice;
export const { reducer: gameReducer } = gameSlice;
