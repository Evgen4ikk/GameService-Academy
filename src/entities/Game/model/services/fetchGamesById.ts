import { $api } from '@/shared/api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IGame } from '../types/gameDetail/gameDetail';

export const fetchGamesById = createAsyncThunk(
  'games/fetchGamesById',
  async ({ id }: { id: number }) => {
    try {
      const response = await $api.get<IGame>(`/games/${id}`);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);
