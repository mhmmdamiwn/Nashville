import { Observable } from 'rxjs';

// interfaces
import { ResponseMessage, ResponseTask, Tasks } from '.';

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
