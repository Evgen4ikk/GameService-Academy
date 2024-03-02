import { IDevelopers } from './developer';

export interface DeveloperSchema {
  isLoading: boolean;
  error?: string;
  data?: IDevelopers;
}
