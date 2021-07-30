import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TaskService } from './tasks/shared/task.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [TaskService],
})
export class AppModule {}
