import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { TaskService } from './tasks/shared/task.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [TaskService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getAll()).toBe(TaskService.tasks);
    });
  });
});
