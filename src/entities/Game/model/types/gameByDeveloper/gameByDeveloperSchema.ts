import { IGamesByDeveloper } from './gameByDeveloper';

export interface GameByDeveloperSchema {
  isLoading: boolean;
  error?: string;
  data?: IGamesByDeveloper;
}
