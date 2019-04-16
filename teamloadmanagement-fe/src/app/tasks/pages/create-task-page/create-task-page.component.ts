import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatSnackBar  } from '@angular/material';

const TaskCreatedString = "Task Created";
const TaskCreatedAction = "OK";

@Component({
  selector: 'app-create-task-page',
  templateUrl: './create-task-page.component.html',
  styleUrls: ['./create-task-page.component.scss']
})
export class CreateTaskPageComponent implements OnInit {

  constructor(public tasksService: TasksService,
    public router: Router,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit({ value, valid }) {
    if (valid) {
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
