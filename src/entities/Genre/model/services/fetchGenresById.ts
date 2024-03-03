import { $api } from '@/shared/api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IGenreById } from '../types/genreDetail';

export const fetchGenresById = createAsyncThunk(
  'genres/fetchGenresById',
  async ({ id }: { id: number }) => {
    try {
      const response = await $api.get<IGenreById>(`/genres/${id}`);

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
