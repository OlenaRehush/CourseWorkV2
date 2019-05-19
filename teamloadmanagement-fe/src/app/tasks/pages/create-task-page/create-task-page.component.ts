import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { UsersService } from '../../../users/services/users.service';

const TaskCreatedString = "Task Created";
const TaskCreatedAction = "OK";

@Component({
  selector: 'app-create-task-page',
  templateUrl: './create-task-page.component.html',
  styleUrls: ['./create-task-page.component.scss']
})
export class CreateTaskPageComponent implements OnInit {

  users;
  selectedUserId;

  constructor(public tasksService: TasksService,
    public router: Router,
    public snackBar: MatSnackBar,
    public usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(result=>{
      this.users = result;
    });
  }

  onSubmit({ value, valid }) {
    if (valid) {
      value.userId = this.selectedUserId;

      this.tasksService.createTask(value).subscribe(task => {
        this.snackBar.open(TaskCreatedString, TaskCreatedAction, {
          duration: 2000,
        });
        this.router.navigate(['/tasks']);
      },
        error => {

        });
    }
  }

}
