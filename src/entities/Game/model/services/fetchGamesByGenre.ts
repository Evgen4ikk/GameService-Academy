import { $api } from '@/shared/api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IGamesByGenre } from '../types/gameByGenre/gameByGenre';

export const fetchGamesByGenre = createAsyncThunk(
  'games/fetchGamesByGenre',
  async ({ genres }: { genres: string }) => {
    try {
      const response = await $api.get<IGamesByGenre>(`/games`, {
        params: { genres },
      });

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
