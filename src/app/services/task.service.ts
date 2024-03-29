import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]>{
    const tasks = of (TASKS);
    return tasks;
  }
}
