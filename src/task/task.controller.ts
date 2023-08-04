import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UpdateTaskDto } from './dto/update-task.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get(':id')
  getTaskById(@Param('id') id: string) {
    return this.taskService.getTaskById(id);
  }

  @Get()
  paginateTasks(@Query('page') page: number, @Query('size') size: number) {
    return this.taskService.paginateTasks(page, size);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTask(@Body() body: CreateTaskDto) {
    return this.taskService.createTask(body);
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  updateTask(@Param('id') id: string, @Body() body: UpdateTaskDto) {
    return this.taskService.updateTask(id, body);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(id);
  }
}
