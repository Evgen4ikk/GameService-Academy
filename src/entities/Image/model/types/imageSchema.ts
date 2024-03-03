import { IImages } from './image';

export interface ImageSchema {
  isLoading: boolean;
  error?: string;
  data?: IImages;
}
