import { IGenreById } from './genreDetail';

export interface GenreDetailSchema {
  isLoading: boolean;
  error?: string;
  data?: IGenreById;
}
