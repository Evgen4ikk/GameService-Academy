import { IGame } from './gameDetail';

export interface GameDetailSchema {
  isLoading: boolean;
  error?: string;
  data?: IGame;
}
