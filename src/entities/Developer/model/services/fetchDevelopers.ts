import { $api } from '@/shared/api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IDevelopers } from '../types/developer';

export const fetchDevelopers = createAsyncThunk(
  'developers/fetchDevelopres',
  async () => {
    try {
      const response = await $api.get<IDevelopers>('/developers');

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
