import { developerDetailReducer } from '@/entities/Developer/model/slice/developerDetailSlice';
import { developerReducer } from '@/entities/Developer/model/slice/developerSlice';
import { gameByDeveloperReducer } from '@/entities/Game/model/slice/gameByDeveloperSlice';
import { gameByGenreReducer } from '@/entities/Game/model/slice/gameByGenreSlice';
import { gameDetailReducer } from '@/entities/Game/model/slice/gameDetailSlice';
import { gameReducer } from '@/entities/Game/model/slice/gameSlice';
import { genreDetailReducer } from '@/entities/Genre/model/slice/genreDetailSlice';
import { genreReducer } from '@/entities/Genre/model/slice/genreSlice';
import { imageReducer } from '@/entities/Image/model/slice/imageSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    //Genres
    genre: genreReducer,
    genreDetail: genreDetailReducer,

    //Developers
    developer: developerReducer,
    developerDetail: developerDetailReducer,

    //Games
    game: gameReducer,
    gameDetail: gameDetailReducer,
    gameByGenre: gameByGenreReducer,
    gameByDeveloper: gameByDeveloperReducer,

    //Images
    image: imageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
