import { $api } from '@/shared/api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IGames } from '../types/game';

export const fetchGames = createAsyncThunk(
  'games/fetchGames',
  async ({ page, page_size }: { page: number; page_size: number }) => {
    try {
      const response = await $api.get<IGames>('/games', {
        params: { page, page_size },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data.results;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);
