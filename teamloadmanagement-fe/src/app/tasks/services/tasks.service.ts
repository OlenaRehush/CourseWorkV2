import { Injectable, Injector } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Task } from '../../shared/models/task.model';
import { Observable, AsyncSubject, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService extends ApiService {

  constructor(injector: Injector) {
    super(injector);
  }

  public tasksArray: Array<Task> = new Array<Task>();
  public changeSubject = new ReplaySubject();

  public getTasks(): Observable<Task[]> {
    let tasks = new AsyncSubject<Task[]>();

    this.httpGet(`${this.apiUrl}/tasks`).subscribe(result => {
      this.tasksArray = result;
      tasks.next(this.tasksArray);
      this.changeSubject.next(this.tasksArray);
      tasks.complete();
    });

    return tasks;
  }

  public getTask(id: any): Observable<Task> {
    let task = new AsyncSubject<Task>();

    this.httpGet(`${this.apiUrl}/tasks/${id}`).subscribe(result => {
      task.next(result);
      task.complete();
    });

    return task;
  }

  public createTask(task: Task): Observable<Task> {
    let newTask = new AsyncSubject<Task>();

    this.httpPost(`${this.apiUrl}/tasks/`, task).subscribe(result => {
      this.tasksArray.push(result);
      newTask.next(result);
      newTask.complete();
    });

    return newTask;
  }

  public updateTask(task: Task): Observable<Task>{
    let newTask = new AsyncSubject<Task>();

    this.httpPut(`${this.apiUrl}/tasks/`, task).subscribe(result => {
      this.tasksArray.push(result);
      newTask.next(result);
      newTask.complete();
    });

    return newTask;
  }

  public deleteTask(id: any): Observable<Task> {
    let deletedTask = new AsyncSubject<Task>();

    this.httpDelete(`${this.apiUrl}/tasks/${id}`).subscribe(result => {
      deletedTask.next(result);
      deletedTask.complete();
    });

    return deletedTask;
  }

}
