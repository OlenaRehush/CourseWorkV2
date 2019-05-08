import { Injector, Injectable, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../../users/services/users.service';
import { TasksService } from '../../tasks/services/tasks.service';
import { AsyncSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService implements OnInit, OnDestroy {

    private users;
    private tasks;
    private skills;

    getUsers(): Observable<any> {
        let usersSubject = new AsyncSubject();
        if (!this.users) {
            this.usersService.getUsers().subscribe(result => {
                this.users = result;
                usersSubject.next(this.users);
            });
        } else {
            usersSubject.next(this.users);
        }

        return usersSubject;
    }

    getTasks(): Observable<any> {
        let tasksSubject = new AsyncSubject();
        if (!this.tasks) {
            this.tasksService.getTasks().subscribe(result => {
                this.tasks = result;
                tasksSubject.next(this.tasks);
            });
        } else {
            tasksSubject.next(this.tasks);
        }

        return tasksSubject;
    }

    // get Users():Observable<any> {
    //     let usersSubject = new AsyncSubject();
    //     if (!this.users) {
    //         this.usersService.getUsers().subscribe(result => {
    //             this.users = result;
    //             usersSubject.next(this.users);
    //         });
    //     } else {
    //         usersSubject.next(this.users);
    //     }

    //     return usersSubject;
    // }

    // set Users(value) {
    //     if (value) {
    //         this.users = value;
    //     }
    // }

    // get Tasks() {
    //     let tasksSubject = new AsyncSubject();
    //     if (!this.tasks) {
    //         this.tasksService.getTasks().subscribe(result => {
    //             this.tasks = result;
    //             tasksSubject.next(this.tasks);
    //         });
    //     } else {
    //         tasksSubject.next(this.tasks);
    //     }

    //     return tasksSubject;
    // }

    // set Tasks(value) {
    //     if (value) {
    //         this.tasks = value;
    //     }
    // }

    constructor(public usersService: UsersService,
        public tasksService: TasksService) {
    }

    ngOnInit() {
        this.usersService.changeSubject.subscribe(value => {
            this.users = value;
        });
        this.tasksService.changeSubject.subscribe(value => {
            this.tasks = value;
        })
    }

    ngOnDestroy() {
        this.usersService.changeSubject.unsubscribe();
        this.tasksService.changeSubject.unsubscribe();
    }
}
