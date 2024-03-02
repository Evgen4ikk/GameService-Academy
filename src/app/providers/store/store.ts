import { developerReducer } from '@/entities/Developer/model/slice/developerSlice';
import { gameReducer } from '@/entities/Game/model/slice/gameSlice';
import { genreReducer } from '@/entities/Genre/model/slice/genreSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    genre: genreReducer,
    developer: developerReducer,
    game: gameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
