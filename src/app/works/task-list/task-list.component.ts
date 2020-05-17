import { Component, OnInit } from '@angular/core';
import {Todo} from './Todo';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  todoTasks: Todo[] = [];
  isTaskEditing = false;
  editingTaskIndex: number;
  editedTaskName: string;
  newTaskName: string;
  constructor() { }

  ngOnInit(): void {
    this.todoTasks = [{
      id: 1,
      task: 'React',
      completed: false
    },
      {
        id: 2,
        task: 'Bootstrap',
        completed: true
      },
      {
        id: 3,
        task: 'Angular',
        completed: false
      }];
  }
  taskStatusChange(index: number){
    this.todoTasks[index].completed = !this.todoTasks[index].completed;
  }
  addTask(){
    this.todoTasks.push(new Todo(this.todoTasks.length, this.newTaskName, false));
    this.newTaskName = '';
  }
  editTask(index: number){
    this.isTaskEditing = true;
    this.editedTaskName = this.todoTasks[index].task;
    this.editingTaskIndex = index;
  }
  deleteTask(index: number): void{
    this.todoTasks.splice(index, 1);
  }
  saveEditedTask(){
     this.todoTasks[this.editingTaskIndex].task = this.editedTaskName;
     this.isTaskEditing = false;
  }
}
