import { $api } from '@/shared/api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IDeveloperById } from '../types/developerDetail';

export const fetchDevelopersById = createAsyncThunk(
  'developers/fetchDevelopresById',
  async ({ id }: { id: number }) => {
    try {
      const response = await $api.get<IDeveloperById>(`/developers/${id}`);

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
