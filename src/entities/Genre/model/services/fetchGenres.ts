import { $api } from '@/shared/api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IGenres } from '../types/genre';

export const fetchGenres = createAsyncThunk('genres/fetchGenres', async () => {
  try {
    const response = await $api.get<IGenres>('/genres');

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});
