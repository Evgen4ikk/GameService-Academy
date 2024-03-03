import { $api } from '@/shared/api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IGamesByGenre } from '../types/gameByGenre/gameByGenre';

export const fetchGamesByDeveloper = createAsyncThunk(
  'games/fetchGamesByDeveloper',
  async ({ developers }: { developers: string }) => {
    try {
      const response = await $api.get<IGamesByGenre>(`/games`, {
        params: { developers },
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
