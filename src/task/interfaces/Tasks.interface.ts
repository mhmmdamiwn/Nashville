import { Task } from './Task.interface';

export interface Tasks {
  tasks?: Array<Task>;
  error?: boolean;
  errorMessage?: string;
}
