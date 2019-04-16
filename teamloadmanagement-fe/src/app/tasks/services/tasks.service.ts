import { Injectable, Injector } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Task } from '../../shared/models/task.model';
import { Observable, AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService extends ApiService {

  constructor(injector: Injector) {
    super(injector);
  }

  public tasksArray: Array<Task> = new Array<Task>();

  public getTasks(): Observable<Task[]> {
    let tasks = new AsyncSubject<Task[]>();

    // this.httpGet(`${this.apiUrl}/tasks`).subscribe(result => {
    //   this.tasksArray = result;
    //   tasks.next(this.tasksArray);
    //   tasks.complete();
    // });

    //temp
    let array = [
      { id: "2331", title: "task1", description: "12313231323", progress: "done", estimate: 12, user: "Aaaaaa", remaining: 2 },
      { id: "2331", title: "task1", description: "12313231323", progress: "done", estimate: 12, user: "Aaaaaa", remaining: 2  },
      { id: "2331", title: "task1", description: "12313231323", progress: "done", estimate: 12, user: "Aaaaaa", remaining: 2  },
      { id: "2331", title: "task1", description: "12313231323", progress: "done", estimate: 12, user: "Aaaaaa", remaining: 2  },
      { id: "2331", title: "task1", description: "12313231323", progress: "done", estimate: 12, user: "Aaaaaa", remaining: 2  },
      { id: "2331", title: "task1", description: "12313231323", progress: "done", estimate: 12, user: "Aaaaaa", remaining: 2  },
      { id: "2331", title: "task1", description: "12313231323", progress: "done", estimate: 12, user: "Aaaaaa", remaining: 2  },
      { id: "2331", title: "task1", description: "12313231323", progress: "done", estimate: 12, user: "Aaaaaa", remaining: 2  }
    ];
    this.tasksArray = array;
    tasks.next(this.tasksArray);
    tasks.complete();
    //temp

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

    // this.httpPost(`${this.apiUrl}/tasks/`, task).subscribe(result => {
    //   this.tasksArray.push(result);
    //   newTask.next(result);
    //   newTask.complete();
    // });

    //temp
    let t = new Task();
    t.id = 123;
    t.title = task.title;
    t.progress = "todo";
    t.estimate = task.estimate;
    t.description = task.description;
    this.tasksArray.push(t);
    newTask.next(t);
    newTask.complete();
    //temp

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
