import { Observable } from 'rxjs';
import { ResponseMessage } from './ResponseMessage.interface';
import { ResponseTask } from './TaskResponse.interface';
import { Tasks } from './Tasks.interface';

export interface taskService {
  GetTaskById(data: { id: string }): Observable<ResponseTask>;
  PaginateTasks(data: { page: number; size: number }): Observable<Tasks>;
  DeleteTask(data: { id: string }): Observable<ResponseMessage>;
  UpdateTask(data: {
    id: string;
    parentId: string;
    title: string;
    description: string;
  }): Observable<ResponseTask>;
  CreateTask(data: {
    parentId: string;
    title: string;
    description: string;
  }): Observable<ResponseTask>;
}
