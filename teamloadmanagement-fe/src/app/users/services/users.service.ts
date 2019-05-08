import { Injectable, Injector } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { Observable, AsyncSubject, BehaviorSubject, ReplaySubject } from 'rxjs';
import { ApiService } from '../../shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends ApiService {

  constructor(injector: Injector) {
    super(injector);
  }

  public usersArray: Array<User> = new Array<User>();
  public changeSubject = new ReplaySubject();


  public getUsers(): Observable<User[]> {
    let users = new AsyncSubject<User[]>();

    this.httpGet(`${this.apiUrl}/users`).subscribe(result => {
      this.usersArray = result;
      users.next(this.usersArray);
      this.changeSubject.next(this.usersArray);
      users.complete();
    });

    return users;
  }

  public getUser(id: any): Observable<User> {
    let user = new AsyncSubject<User>();

    this.httpGet(`${this.apiUrl}/users/${id}`).subscribe(result => {
      user.next(result);
      user.complete();
    });

    return user;
  }

  // public createTask(task: User): Observable<User> {
  //   let newTask = new AsyncSubject<User>();

  //   this.httpPost(`${this.apiUrl}/tasks/`, task).subscribe(result => {
  //     this.tasksArray.push(result);
  //     newTask.next(result);
  //     newTask.complete();
  //   });

  //   return newTask;
  // }

  // public deleteTask(id: any): Observable<Task> {
  //   let deletedTask = new AsyncSubject<Task>();

  //   this.httpDelete(`${this.apiUrl}/tasks/${id}`).subscribe(result => {
  //     deletedTask.next(result);
  //     deletedTask.complete();
  //   });

  //   return deletedTask;
  // }
}
