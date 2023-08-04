import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { configService } from '../config/config.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'GRPC_CLIENT',
        transport: Transport.GRPC,
        options: {
          url: configService.getPort() || 'localhost:5000', // Gallatin port
          package: 'task',
          protoPath: join(__dirname, './proto/task.proto'),
        },
      },
    ]),
  ],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
