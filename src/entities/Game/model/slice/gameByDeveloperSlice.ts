import { createSlice } from '@reduxjs/toolkit';
import { fetchGamesByDeveloper } from '../services/fetchGamesByDeveloper';
import { GameByDeveloperSchema } from '../types/gameByDeveloper/gameByDeveloperSchema';

const initialState: GameByDeveloperSchema = {
  isLoading: false,
  data: undefined,
  error: undefined,
};

const gameByDeveloperSlice = createSlice({
  name: 'gameByDeveloper',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchGamesByDeveloper.pending, state => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchGamesByDeveloper.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;
        state.data = action.payload;
      })
      .addCase(fetchGamesByDeveloper.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { actions: gameByDeveloperActions } = gameByDeveloperSlice;
export const { reducer: gameByDeveloperReducer } = gameByDeveloperSlice;
