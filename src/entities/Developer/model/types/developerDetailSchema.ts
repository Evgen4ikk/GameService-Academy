import { IDeveloperById } from './developerDetail';

export interface DeveloperDetailSchema {
  isLoading: boolean;
  error?: string;
  data?: IDeveloperById;
}
