import { Injectable } from "@nestjs/common";
import { Task } from "./task";

@Injectable()
export class TaskService {
    tasks:Task[] = [
        {id: 1, description: 'tarefa 1', completed: false},
        {id: 2, description: 'tarefa 2', completed: false},
        {id: 3, description: 'tarefa 3', completed: true},{id: 4, description: 'tarefa 4', completed: false},{id: 5, description: 'tarefa 5', completed: false},{id: 6, description: 'tarefa 6', completed: false},{id: 7, description: 'tarefa 7', completed: false}
    ];

    getAll(){
        return this.tasks;
    }

    getById(id:number){
        const idfr = this.tasks.find(el => el.id == id);
        return idfr;
    }

    create(task: Task){
        let lastId: number = 0;
        if(this.tasks.length > 0){
            lastId = this.tasks.length
        }
        task.id = lastId;
        this.tasks.push(task);

        return task;
    }
    update(task: Task): Task{
        const taskArray = this.getById(task.id);
        if(taskArray){
            taskArray.description = task.description;
            taskArray.completed = task.completed;
        }
        return task;
    }

    delete = (id: number): boolean =>{
        let result: boolean;
        const arr = this.tasks.findIndex(el => el.id == id);
        if(arr){
            this.tasks.splice(arr,1);
            result = true;
        }else{
            result = false
        }
        return result;
    }
}