import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TaskService } from './tasks/shared/task.service';
import {Task} from "./tasks/shared/task"
@Controller()
export class AppController {
  constructor(private taskService: TaskService) {

  }
  @Get()
  async getAll(): Promise<Task[]>{
    return await this.taskService.getAll();
  }
  @Get(":id")
  async getById(@Param("id") id:number): Promise<Task>{
    return this.taskService.getById(id);
  }

  @Post()
  async create(@Body() task: Task): Promise<Task>{
    return this.taskService.create(task);
  }

  @Put(":id")
  async update(@Param("id") id: number, @Body() task: Task):Promise<Task>{
    task.id = id
    return this.taskService.update(task);
  }

  @Delete(":id")
  async delete(@Param("id") id: number): Promise<boolean>{
    return await this.taskService.delete(id)
  }
}
