import { $api } from '@/shared/api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IImages } from '../types/image';

export const fetchImages = createAsyncThunk(
  'images/fetchImages',
  async ({ id }: { id: number }) => {
    try {
      const response = await $api.get<IImages>(`/games/${id}/screenshots`);

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
