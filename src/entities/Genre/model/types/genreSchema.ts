import { IGenres } from './genre';

export interface GenreSchema {
  isLoading: boolean;
  error?: string;
  data?: IGenres;
}
