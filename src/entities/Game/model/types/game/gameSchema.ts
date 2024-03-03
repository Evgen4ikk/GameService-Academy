import { IGamesResult } from './game';

export interface GameSchema {
  isLoading: boolean;
  error?: string;
  data: IGamesResult[];
  currentPage: number;
  page_size: number;
}
