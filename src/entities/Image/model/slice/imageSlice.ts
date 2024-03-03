import { createSlice } from '@reduxjs/toolkit';
import { fetchImages } from '../services/fetchImages';
import { ImageSchema } from '../types/imageSchema';

const initialState: ImageSchema = {
  isLoading: false,
  data: undefined,
  error: undefined,
};

const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchImages.pending, state => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = undefined;
      })
      .addCase(fetchImages.rejected, state => {
        state.isLoading = false;
        state.error = 'При загрузке сериншотов произошла ошибка';
      });
  },
});

export const { actions: imageActions } = imageSlice;
export const { reducer: imageReducer } = imageSlice;
