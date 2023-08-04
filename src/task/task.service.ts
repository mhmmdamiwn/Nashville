import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ClientGrpc } from '@nestjs/microservices';
import { taskService } from './interfaces/TaskService.interface';
import { map } from 'rxjs';

@Injectable()
export class TaskService implements OnModuleInit {
  private taskService: taskService;
  constructor(@Inject('GRPC_CLIENT') private client: ClientGrpc) {}

  onModuleInit() {
    this.taskService = this.client.getService<taskService>('TasksServiceProto');
  }
  async getTaskById(id: string) {
    try {
      const response = this.taskService.GetTaskById({ id });
      response.pipe(
        map((res) => {
          if (res.error === true) {
            throw new Error(res.errorMessage);
          }
          return res;
        }),
      );
      return response;
    } catch (err) {
      console.log('getTaskByIdErr --->', err);
    }
  }

  async paginateTasks(page: number, size: number) {
    try {
      const response = this.taskService.PaginateTasks({
        page: page ? page : 0,
        size: size ? size : 10,
      });
      response.pipe(
        map((res) => {
          if (res.error === true) {
            throw new Error(res.errorMessage);
          }
          return res;
        }),
      );
      return response;
    } catch (err) {
      console.log('paginateTaskErr --->');
    }
  }

  async updateTask(id: string, body: UpdateTaskDto) {
    try {
      const response = this.taskService.UpdateTask({
        id,
        ...body,
      });
      response.pipe(
        map((res) => {
          if (res.error === true) {
            throw new Error(res.errorMessage);
          }
          return res;
        }),
      );
      return response;
    } catch (err) {
      console.log('updateTaskErr --->');
    }
  }

  async deleteTask(id: string) {
    try {
      const response = this.taskService.DeleteTask({ id });
      response.pipe(
        map((res) => {
          if (res.error === true) {
            throw new Error(res.errorMessage);
          }
          return res;
        }),
      );
      return response;
    } catch (err) {
      console.log('deleteTaskErr --->');
    }
  }

  async createTask(body: CreateTaskDto) {
    try {
      const response = this.taskService.CreateTask({ ...body });
      response.pipe(
        map((res) => {
          if (res.error === true) {
            throw new Error(res.errorMessage);
          }
          return res;
        }),
      );
      return response;
    } catch (err) {
      console.log('createTaskErr---->');
    }
  }
}
