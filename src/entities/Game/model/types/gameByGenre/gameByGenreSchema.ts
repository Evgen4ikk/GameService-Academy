import { IGamesByGenre } from './gameByGenre';

export interface GameByGenreSchema {
  isLoading: boolean;
  error?: string;
  data?: IGamesByGenre;
}
