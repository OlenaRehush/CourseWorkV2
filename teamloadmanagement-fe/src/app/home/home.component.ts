import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks/services/tasks.service';
import { UsersService } from '../users/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tasks;
  users;

  constructor(public tasksService: TasksService,
    public usersService: UsersService) { }

  ngOnInit() {
    this.tasksService.getTasks().subscribe(result => {
      this.tasks = result;
    });
    this.usersService.getUsers().subscribe(result=>{
      this.users = result;
    })
  }
}
